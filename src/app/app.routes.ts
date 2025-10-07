import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './modules/authentication/pages/login/login';
import { AuthGuard } from './shared/services/auth-guard.service';
import { ForgetPassword } from './modules/authentication/pages/forget-password/forget-password';
import { Dashboard } from './modules/dashboard/pages/dashboard/dashboard';
import { UserList } from './modules/users/pages/user-list/user-list';
import { FeesList } from './modules/fees/pages/fees-list/fees-list';
import { TenantList } from './modules/tenants/pages/tenant-list/tenant-list';
import { AuditLogsList } from './modules/auditLogs/pages/audit-logs-list/audit-logs-list';
import { RolesList } from './modules/users/pages/roles-list/roles-list';

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
        path: 'roles',
        component: RolesList,
      },
      {
        path: 'fees',
        component: FeesList,
      },
      {
        path: 'tenants',
        component: TenantList,
      },
      {
        path: 'audit-logs',
        component: AuditLogsList,
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
