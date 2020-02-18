import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChildren,
  QueryList,
  AfterViewInit,
  ChangeDetectorRef,
  ComponentFactoryResolver
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@services/data.service';
import { Track } from '@sharedmodels/track.model';
import { DashboardOutletDirective } from '@shareddirectives/dashboard-outlet.directive';

import { DashboarComponentContainer } from '../../dashboard-component.container';

import { Item } from '@sharedmodels/item.model';
import { DashboardComponents } from '@sharedenums/dashboard.enum';
import { dashboardComponents } from '@features/home/dashboard-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
// tslint:disable-next-line: component-class-suffix
export class HomePage implements OnInit, AfterViewInit {
  @ViewChildren(DashboardOutletDirective) dashboardOutlet: QueryList<DashboardOutletDirective>;

  tracks: Array<Track> = [
    {
      title: 'CARD 1',
      items: [{ component: DashboardComponents.VIEW1, id: 'view-1' }]
    },
    {
      title: 'CARD 2',
      items: [{ component: DashboardComponents.VIEW2, id: 'view-2' }]
    },
    {
      title: 'CARD 3',
      items: [{ component: DashboardComponents.VIEW3, id: 'view-3' }]
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private ds: DataService,
    private cd: ChangeDetectorRef,
    private cfr: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(data => this.ds.setTitle(data));
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
      console.log('[loadContents] ERROR');
      return;
    }

    this.dashboardOutlet.forEach(template => {
      console.log('[loadContents] dashboardOutlet', template);
      this.cd.detectChanges();
      this.loadContent(template, template.item);
    });
    this.cd.detectChanges();
  }

  ngAfterViewInit() {
    this.loadContents();
  }


}
