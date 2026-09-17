import { Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersComponent } from './pages/users/users.component';
import { CartsComponent } from './pages/carts/carts.component';
import { PostsComponent } from './pages/posts/posts.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  {
    path: 'products',
    component: ProductsComponent,
  },

  {
    path: 'users',
    component: UsersComponent,
  },

  {
    path: 'carts',
    component: CartsComponent,
  },

  {
    path: 'posts',
    component: PostsComponent,
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
