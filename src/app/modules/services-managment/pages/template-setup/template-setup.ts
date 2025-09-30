import { Component, inject } from '@angular/core';
import {
  TableColumn,
  TableAction,
  QrTable,
} from '../../../../shared/components/qr-table/qr-table';
import { GlobalService } from '../../../../shared/services/global.service';
import { EntityHeader } from '../../../../shared/components/entity-header/entity-header';
import { QrModal } from '../../../../shared/components/qr-modal/qr-modal';
import { EntityCard } from '../../../../shared/components/entity-card/entity-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-setup',
  imports: [EntityHeader, QrTable, QrModal, EntityCard, CommonModule],
  templateUrl: './template-setup.html',
  styleUrl: './template-setup.scss',
})
export class TemplateSetup {
  globalServ = inject(GlobalService);
  items = [
    {
      label: 'Total Template',
      count: 4,
    },
    {
      label: 'Enable Template',
      count: 3,
    },
    {
      label: 'Unable Template',
      count: 1,
    },
  ];
  columns: TableColumn[] = [
    { field: 'id', header: 'Create Date', sortable: false },
    { field: 'name', header: 'Template Name', sortable: false },
    {
      field: 'status',
      header: 'Enable',
      sortable: false,
    },
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
