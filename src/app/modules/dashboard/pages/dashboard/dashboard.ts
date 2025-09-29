import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  items = [
    {
      label: 'Requests Need Action',
      count: 30,
      icon: '',
      color: 'yellow',
    },
    {
      label: 'Approved Requests',
      count: 30,
      icon: '',
    },
    {
      label: 'Rejected Requests',
      count: 30,
      icon: '',
    },
    {
      label: 'Total Services',
      count: 30,
      icon: '',
    },
    {
      label: 'Templates',
      count: 30,
      icon: '',
      color: 'yellow',
    },
    {
      label: 'Fee Profiles',
      count: 30,
      icon: '',
    },
    {
      label: 'System Users',
      count: 30,
      icon: '',
    },
    {
      label: 'Departments',
      count: 30,
      icon: '',
    },
  ];
}
