import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-qr-sidebar',
  imports: [CommonModule, RouterModule, NzIconModule],
  templateUrl: './qr-sidebar.html',
  styleUrl: './qr-sidebar.scss',
})
export class QrSidebar {
  router = inject(Router);
  routes = [
    {
      label: 'Dashboard',
      route: 'dashboard',
      icon: 'dashboard',
      sideRoutes: [],
      isOpened: false,
    },
    {
      label: 'Services Managment',
      route: 'tenants',
      icon: 'setting',
      isOpened: false,
      sideRoutes: [
        {
          label: 'Value Setup',
          route: 'dashboard',
        },
        {
          label: 'Template Setup',
          route: 'dashboard',
        },
        {
          label: 'Services',
          route: 'dashboard',
        },
      ],
    },
    {
      label: 'Fees Profile',
      route: 'fees',
      icon: 'credit-card',
      sideRoutes: [],
      isOpened: false,
    },
    {
      label: 'Users Managment',
      route: 'roles',
      icon: 'user',
      isOpened: false,
      sideRoutes: [
        {
          label: 'Departments',
          route: 'dashboard',
        },
        {
          label: 'Roles',
          route: 'dashboard',
        },
        {
          label: 'User List',
          route: 'dashboard',
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
