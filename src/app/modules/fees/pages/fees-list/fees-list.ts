import { Component, inject } from '@angular/core';
import { EntityHeader } from '../../../../shared/components/entity-header/entity-header';
import {
  QrTable,
  TableAction,
  TableColumn,
} from '../../../../shared/components/qr-table/qr-table';
import { GlobalService } from '../../../../shared/services/global.service';
import { QrModal } from '../../../../shared/components/qr-modal/qr-modal';
import { AddFee } from '../add-fee/add-fee';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-fees-list',
  imports: [EntityHeader, QrTable, QrModal, TranslateModule],
  templateUrl: './fees-list.html',
  styleUrl: './fees-list.scss',
})
export class FeesList {
  addFee = AddFee;
  globalServ = inject(GlobalService);
  columns: TableColumn[] = [
    { field: 'id', header: 'Create Date', sortable: false },
    { field: 'name', header: 'Fees Name', sortable: false },
    {
      field: 'status',
      header: 'Type',
      sortable: false,
    },
    { field: 'scheme', header: 'Value', sortable: false },
    {
      field: 'terminals',
      header: 'Status',
      sortable: false,
      template: 'boolean',
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
