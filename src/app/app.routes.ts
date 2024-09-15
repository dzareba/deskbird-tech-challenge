import { Routes } from '@angular/router';
import { LoginComponent } from './components/views/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default redirect to login
];
