import { Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { AddStudentComponent } from './page/add-student/add-student.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: PageComponent,
  },
  {
    path: 'add-student',
    component: AddStudentComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
