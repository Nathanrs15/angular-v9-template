import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChildren,
  QueryList,
  AfterViewInit,
  ChangeDetectorRef,
  ComponentFactoryResolver,
  OnDestroy
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@services/data.service';
import { Track } from '@sharedmodels/track.model';
import { DashboardOutletDirective } from '@shareddirectives/dashboard-outlet.directive';

import { DashboarComponentContainer } from '../../dashboard-component.container';

import { Item } from '@sharedmodels/item.model';
import { DashboardComponents } from '@sharedenums/dashboard.enum';
import { dashboardComponents } from '@features/home/dashboard-components';
import { DashboardService } from '@services/dashboard.service';
import { tap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// tslint:disable-next-line: component-class-suffix
export class HomePage implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren(DashboardOutletDirective) dashboardOutlet: QueryList<DashboardOutletDirective>;

  private ngUnsubscribe = new Subject();
  tracks: Array<Track> = [];



  constructor(
    private route: ActivatedRoute,
    private ds: DataService,
    private cd: ChangeDetectorRef,
    private cfr: ComponentFactoryResolver,
    private dashboardService: DashboardService

  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.ds.setTitle(data));

    this.dashboardService.tracks$
      .pipe(
        tap(tracks => console.log('tracks', tracks)),
        tap(tracks => (this.tracks = tracks)),
        takeUntil(this.ngUnsubscribe),
      )
      .subscribe(() => {
        this.cd.detectChanges();
        this.loadContents();
      });
  }

  ngAfterViewInit() {
    this.loadContents();
  }


  loadContent = (template: DashboardOutletDirective, item: Item) => {
    if (!item.component) {
      return;
    }

    console.log('[loadContent] item.component', item.component);

    const viewContainerRef = template.viewContainerRef;
    viewContainerRef.clear();
    const componentFactory = this.cfr.resolveComponentFactory(dashboardComponents[item.component]);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const instance = componentRef.instance as DashboarComponentContainer;
    instance.item = item;
  }

  loadContents = () => {
    if (!this.dashboardOutlet || !this.dashboardOutlet.length) {
      return;
    }

    this.dashboardOutlet.forEach(template => {
      this.cd.detectChanges();
      this.loadContent(template, template.item);
    });
    this.cd.detectChanges();
  }


  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
