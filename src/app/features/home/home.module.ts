import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePage } from './pages/home/home.page';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '@materialModule';
import { NavigationToolbarModule } from '@sharedmodules/navigation-toolbar/navigation-toolbar.module';

@NgModule({
  declarations: [HomePage],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    NavigationToolbarModule
  ]
})
export class HomeModule { }
