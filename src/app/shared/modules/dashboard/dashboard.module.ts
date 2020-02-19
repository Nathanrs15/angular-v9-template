import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicDashboardComponent } from './dynamic-dashboard/dynamic-dashboard.component';
import { DashboardOutletDirective } from '@shareddirectives/dashboard-outlet.directive';
import { MaterialModule } from '@materialModule';


const DIRECTIVES = [DashboardOutletDirective];

const COMPONENTS = [DynamicDashboardComponent];

const MODULES = [
  CommonModule,
  MaterialModule
];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [...MODULES],
  exports: [...COMPONENTS]
})
export class DashboardModule { }
