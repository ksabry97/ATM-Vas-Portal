import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './modules/authentication/pages/login/login';
import { AuthGuard } from './shared/services/auth-guard.service';
import { ForgetPassword } from './modules/authentication/pages/forget-password/forget-password';
import { Dashboard } from './modules/dashboard/pages/dashboard/dashboard';
import { UserList } from './modules/users/pages/user-list/user-list';
import { FeesList } from './modules/fees/pages/fees-list/fees-list';
import { TemplateSetup } from './modules/services-managment/pages/template-setup/template-setup';
import { ServicesSetup } from './modules/services-managment/pages/services-setup/services-setup';
import { ValueSetup } from './modules/services-managment/pages/value-setup/value-setup';
import { DepartmentsList } from './modules/users/pages/departments-list/departments-list';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: Dashboard,
      },

      {
        path: 'users',
        component: UserList,
      },

      {
        path: 'fees',
        component: FeesList,
      },
      {
        path: 'template-setup',
        component: TemplateSetup,
      },
      {
        path: 'services-setup',
        component: ServicesSetup,
      },
      {
        path: 'value-setup',
        component: ValueSetup,
      },
      {
        path: 'departments',
        component: DepartmentsList,
      },
    ],
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'forget-password',
    component: ForgetPassword,
  },
];
