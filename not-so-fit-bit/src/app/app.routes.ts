import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { DayCardComponent } from './day-card/day-card.component';
import { EditDayComponent } from './edit-day/edit-day.component';
import { NewDayComponent } from './new-day/new-day.component';
import { EditAccountComponent } from './edit-account/edit-account.component';

export const appRoutes: Routes = [

  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'login'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'register'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'day-home',
    component: DayCardComponent,
    title: 'home'
  },
  {
    path: 'edit/:id',
    component: EditDayComponent,
    title: 'edit'
  },
  {
    path: 'add',
    component: NewDayComponent,
    title: 'add'
  },
  {
    path: 'my-account',
    component: EditAccountComponent,
    title: 'my account'
  }

];
