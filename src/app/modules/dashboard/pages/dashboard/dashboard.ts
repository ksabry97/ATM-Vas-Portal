import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PieChart } from '../../../../shared/components/pie-chart/pie-chart';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, PieChart, TranslateModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  items = [
    {
      label: 'dashboard.tenants',
      count: 30,
      icon: '',
      color: 'yellow',
    },
    {
      label: 'dashboard.fees',
      count: 30,
      icon: '',
    },
    {
      label: 'dashboard.atms',
      count: 30,
      icon: '',
    },

    {
      label: 'dashboard.system_users',
      count: 30,
      icon: '',
    },
  ];
}
