import { Routes } from '@angular/router';
import { DayCardComponent } from './day-card/day-card.component';
import { EditDayComponent } from './edit-day/edit-day.component';
import { NewDayComponent } from './new-day/new-day.component';
import { LoginComponent } from './pages/login/login.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { RegisterComponent } from './pages/register/register.component';



export const routes: Routes = [

    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'home',
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
        path: 'login',
        component: LoginComponent,
        title: 'login'
    },
    {
        path: 'my-account',
        component: EditAccountComponent,
        title: 'my account'
    },
    {
        path: 'register',
        component: RegisterComponent,
        title: 'register'
    }

];
