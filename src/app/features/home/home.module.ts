import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '@materialModule';
import { NavigationToolbarModule } from '@sharedmodules/navigation-toolbar/navigation-toolbar.module';
import { DashboardModule } from '@sharedmodules/dashboard/dashboard.module';

import { HomePage } from './pages/home/home.page';

import { View1Component } from './components/view1/view1.component';
import { View2Component } from './components/view2/view2.component';
import { View3Component } from './components/view3/view3.component';


const MODULES = [
  CommonModule,
  HomeRoutingModule,
  MaterialModule,
  NavigationToolbarModule,
  DashboardModule
];

const PAGES = [
  HomePage
];

const COMPONENTS = [
  View1Component,
  View2Component,
  View3Component
];


@NgModule({
  declarations: [...PAGES, ...COMPONENTS],
  imports: [...MODULES]
})
export class HomeModule { }
