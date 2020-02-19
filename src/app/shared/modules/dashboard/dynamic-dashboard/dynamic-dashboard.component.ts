import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit, OnDestroy,
  ChangeDetectorRef,
  ComponentFactoryResolver,
  QueryList,
  ViewChildren,
  Input
} from '@angular/core';
import { DataService } from '@services/data.service';
import { DashboardService } from '@services/dashboard.service';
import { Subject } from 'rxjs';
import { Track } from '@sharedmodels/track.model';
import { tap, takeUntil } from 'rxjs/operators';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DashboardOutletDirective } from '@shareddirectives/dashboard-outlet.directive';
import { Item } from '@sharedmodels/item.model';
import { DashboarComponentContainer } from '../configs/dashboard-component.container';

@Component({
  selector: 'app-dynamic-dashboard',
  templateUrl: './dynamic-dashboard.component.html',
  styleUrls: ['./dynamic-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicDashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren(DashboardOutletDirective) dashboardOutlet: QueryList<DashboardOutletDirective>;

  @Input() dashboardComponents;

  private ngUnsubscribe = new Subject();
  tracks: Array<Track> = [];

  constructor(
    private ds: DataService,
    private cd: ChangeDetectorRef,
    private cfr: ComponentFactoryResolver,
    private dashboardService: DashboardService

  ) { }

  ngOnInit(): void {
    this.dashboardService.tracks$
      .pipe(
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

  drop = (event: CdkDragDrop<string[]>) => {
    moveItemInArray(this.tracks, event.previousIndex, event.currentIndex);
    // const state = this.tracks;
  }

  loadContent = (template: DashboardOutletDirective, item: Item) => {
    if (!item.component) {
      return;
    }

    const viewContainerRef = template.viewContainerRef;
    viewContainerRef.clear();
    const componentFactory = this.cfr.resolveComponentFactory(this.dashboardComponents[item.component]);
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
