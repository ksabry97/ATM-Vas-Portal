import { Component, inject } from '@angular/core';
import {
  TableColumn,
  TableAction,
  QrTable,
} from '../../../../shared/components/qr-table/qr-table';
import { GlobalService } from '../../../../shared/services/global.service';
import { EntityHeader } from '../../../../shared/components/entity-header/entity-header';
import { QrModal } from '../../../../shared/components/qr-modal/qr-modal';
import { CommonModule } from '@angular/common';
import { EntityCard } from '../../../../shared/components/entity-card/entity-card';

@Component({
  selector: 'app-services-setup',
  imports: [EntityHeader, QrTable, QrModal, EntityCard, CommonModule],
  templateUrl: './services-setup.html',
  styleUrl: './services-setup.scss',
})
export class ServicesSetup {
  globalServ = inject(GlobalService);
  items = [
    {
      label: 'Total Services',
      count: 6,
    },
    {
      label: 'Active Services',
      count: 3,
    },
  ];
  columns: TableColumn[] = [
    { field: 'name', header: 'Service Name', sortable: false },
    { field: 'id', header: 'Daily Txns Value', sortable: false },
    {
      field: 'status',
      header: 'Status',
      sortable: false,
    },
    { field: 'id', header: 'Daily Txns Amount', sortable: false },
    { field: 'id', header: 'Creation Date', sortable: false },
    { field: 'id', header: 'Error Rate', sortable: false },
  ];

  actions: TableAction[] = [
    {
      label: 'View Details',
      icon: 'eye',
      severity: 'info',
    },
  ];

  banks = [
    {
      id: 280122,
      name: 'WE Bank',
      status: true,
      scheme: 'Visa',
      terminals: 145,
      country: 'Egypt',
    },
    {
      id: 280121,
      name: 'VodaBank',
      status: true,
      scheme: 'Mastercard',
      terminals: 89,
      country: 'Egypt',
    },
    {
      id: 280120,
      name: 'ADCB',
      status: true,
      scheme: 'Visa',
      terminals: 234,
      country: 'UAE',
    },
    {
      id: 280119,
      name: 'LightBoxV3Bank',
      status: false,
      scheme: 'Union Pay',
      terminals: 12,
      country: 'UAE',
    },
  ];
  openModel() {
    this.globalServ.setModal(true);
  }
}
