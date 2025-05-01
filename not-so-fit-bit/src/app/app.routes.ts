import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DayCardComponent } from './day-card/day-card.component';
import { EditDayComponent } from './edit-day/edit-day.component';
import { NewDayComponent } from './new-day/new-day.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { RegisterComponent } from './pages/register/register.component';
import { AboutComponent } from './pages/about/about.component';
import { SupportComponent } from './pages/support/support.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About'
  },
  {
    path: 'support',
    component: SupportComponent,
    title: 'Support'
  },
  {
    path: 'day-home',
    component: DayCardComponent,
    title: 'Day Home'
  },
  {
    path: 'edit/:id',
    component: EditDayComponent,
    title: 'Edit Day'
  },
  {
    path: 'add',
    component: NewDayComponent,
    title: 'Add Day'
  },
  {
    path: 'my-account',
    component: EditAccountComponent,
    title: 'My Account'
  }
];
