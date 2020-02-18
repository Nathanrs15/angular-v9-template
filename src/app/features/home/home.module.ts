import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '@materialModule';
import { NavigationToolbarModule } from '@sharedmodules/navigation-toolbar/navigation-toolbar.module';

import { HomePage } from './pages/home/home.page';

import { View1Component } from './components/view1/view1.component';
import { View2Component } from './components/view2/view2.component';
import { View3Component } from './components/view3/view3.component';

import { DashboardOutletDirective } from '@shareddirectives/dashboard-outlet.directive';

const MODULES = [
  CommonModule,
  HomeRoutingModule,
  MaterialModule,
  NavigationToolbarModule
];

const PAGES = [
  HomePage
];

const COMPONENTS = [
  View1Component,
  View2Component,
  View3Component
];

const DIRECTIVES = [DashboardOutletDirective]

@NgModule({
  declarations: [...PAGES, ...COMPONENTS, ...DIRECTIVES],
  imports: [...MODULES]
})
export class HomeModule { }
