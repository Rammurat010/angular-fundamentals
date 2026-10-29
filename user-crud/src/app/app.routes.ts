import { Routes } from '@angular/router';

import { UserListComponent } from './components/user-list/user-list.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },

  {
    path: 'users',
    component: UserListComponent,
  },

  {
    path: 'users/add',
    component: UserAddComponent,
  },

  {
    path: 'users/edit/:id',
    component: UserEditComponent,
  },
];
