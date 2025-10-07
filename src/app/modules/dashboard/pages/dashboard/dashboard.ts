import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PieChart } from '../../../../shared/components/pie-chart/pie-chart';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, PieChart],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  items = [
    {
      label: 'Tenants',
      count: 30,
      icon: '',
      color: 'yellow',
    },
    {
      label: 'Fees',
      count: 30,
      icon: '',
    },
    {
      label: 'ATMs',
      count: 30,
      icon: '',
    },

    {
      label: 'System Users',
      count: 30,
      icon: '',
    },
  ];
}
