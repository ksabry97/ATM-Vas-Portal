import { Component, inject } from '@angular/core';
import {
  TableColumn,
  TableAction,
  QrTable,
} from '../../../../shared/components/qr-table/qr-table';
import { GlobalService } from '../../../../shared/services/global.service';
import { EntityHeader } from '../../../../shared/components/entity-header/entity-header';
import { QrModal } from '../../../../shared/components/qr-modal/qr-modal';
import { CreateUser } from '../../components/create-user/create-user';

@Component({
  selector: 'app-user-list',
  imports: [EntityHeader, QrTable, QrModal],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {
  globalServ = inject(GlobalService);
  createUser = CreateUser;
  columns: TableColumn[] = [
    { field: 'id', header: 'User Details', sortable: false },
    { field: 'name', header: 'Department ', sortable: false },
    {
      field: 'status',
      header: 'Role',
      sortable: false,
    },
    { field: 'id', header: 'Enable', sortable: false },
    {
      field: 'status',
      header: 'Status',
      sortable: false,
    },
    {
      field: 'status',
      header: 'Last Login',
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
