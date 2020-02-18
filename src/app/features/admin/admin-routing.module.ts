import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPage } from './pages/admin/admin.page';
import { UsersPage } from './pages/users/users.page';
import { PermissionsPage } from './pages/permissions/permissions.page';
import { AdminOptionsPage } from './pages/admin-options/admin-options.page';


const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    data: { title: 'Administration', path: '/admin' },
    children: [
      {
        path: '',
        component: AdminOptionsPage,
      },
      {
        path: 'users',
        component: UsersPage,
        data: { subtitle: 'Users' }
      },
      {
        path: 'permissions',
        component: PermissionsPage,
        data: { subtitle: 'Permissions' }
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
