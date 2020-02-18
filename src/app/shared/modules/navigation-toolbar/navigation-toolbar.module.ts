import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@materialModule';
import { RouterModule } from '@angular/router';
import { NavigationToolbarComponent } from './navigation-toolbar.component';

@NgModule({
  declarations: [NavigationToolbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [RouterModule, NavigationToolbarComponent],
})
export class NavigationToolbarModule { }
