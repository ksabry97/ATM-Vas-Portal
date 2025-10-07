import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'app-qr-sidebar',
  imports: [CommonModule, RouterModule, NzIconModule, TranslateModule],
  templateUrl: './qr-sidebar.html',
  styleUrl: './qr-sidebar.scss',
})
export class QrSidebar {
  router = inject(Router);
  routes = [
    {
      label: 'sidebar.dashboard',
      route: 'dashboard',
      icon: 'dashboard',
      sideRoutes: [],
      isOpened: false,
    },
    {
      label: 'sidebar.tenants',
      route: 'tenants',
      icon: 'dashboard',
      sideRoutes: [],
      isOpened: false,
    },

    {
      label: 'sidebar.fees_profile',
      route: 'fees',
      icon: 'credit-card',
      sideRoutes: [],
      isOpened: false,
    },
    {
      label: 'sidebar.audit_logs',
      route: 'audit-logs',
      icon: 'credit-card',
      sideRoutes: [],
      isOpened: false,
    },
    {
      label: 'sidebar.users_management',
      route: 'roles',
      icon: 'user',
      isOpened: false,
      sideRoutes: [
        {
          label: 'sidebar.roles',
          route: 'roles',
        },
        {
          label: 'sidebar.user_list',
          route: 'users',
        },
      ],
    },
  ];

  route(item: any) {
    item.sideRoutes.length
      ? (item.isOpened = !item.isOpened)
      : this.router.navigateByUrl(item.route);
  }
}
