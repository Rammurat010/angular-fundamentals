import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';

import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [authGuard, roleGuard],
    data: {
      role: 'admin',
    },
  },

  {
    path: 'user',
    component: UserDashboardComponent,
    canActivate: [authGuard, roleGuard],
    data: {
      role: 'user',
    },
  },

  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
  },

  {
    path: '**',
    redirectTo: '',
  },
];
