import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '@materialModule';

import { AdminPage } from './pages/admin/admin.page';
import { UsersPage } from './pages/users/users.page';
import { PermissionsPage } from './pages/permissions/permissions.page';
import { FormComponent } from './components/form/form.component';
import { TreeComponent } from './components/tree/tree.component';
import { AdminOptionsPage } from './pages/admin-options/admin-options.page';
import { NavigationToolbarModule } from '@sharedmodules/navigation-toolbar/navigation-toolbar.module';

const COMPONENTS = [
  FormComponent,
  TreeComponent,
];

const PAGES = [
  AdminPage,
  UsersPage,
  PermissionsPage,
  AdminOptionsPage
];

@NgModule({
  declarations: [...COMPONENTS, ...PAGES],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    NavigationToolbarModule
  ]
})
export class AdminModule { }
