import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { FormComponent } from './page/form/form.component';
import { ReactiveFormComponent } from './page/reactive-form/reactive-form.component';
import { ProductsDataComponent } from './page/products-data/products-data.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product',
    component: ProductsComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'reactive',
    component: ReactiveFormComponent,
  },

  {
    path: 'productsData',
    component: ProductsDataComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
