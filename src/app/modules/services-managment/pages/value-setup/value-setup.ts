import { Component, inject } from '@angular/core';
import {
  TableColumn,
  TableAction,
  QrTable,
} from '../../../../shared/components/qr-table/qr-table';
import { GlobalService } from '../../../../shared/services/global.service';
import { EntityHeader } from '../../../../shared/components/entity-header/entity-header';
import { QrModal } from '../../../../shared/components/qr-modal/qr-modal';
import { CreateValue } from '../../components/create-value/create-value';

@Component({
  selector: 'app-value-setup',
  imports: [EntityHeader, QrTable, QrModal],
  templateUrl: './value-setup.html',
  styleUrl: './value-setup.scss',
})
export class ValueSetup {
  globalServ = inject(GlobalService);
  createVal = CreateValue;
  columns: TableColumn[] = [
    { field: 'id', header: 'Create Date', sortable: false },
    { field: 'name', header: 'Service Value Name', sortable: false },
    { field: 'id', header: 'Enable', sortable: false },
    {
      field: 'status',
      header: 'Status',
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
