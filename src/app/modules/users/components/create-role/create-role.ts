import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalHeader } from '../../../../shared/components/modal-header/modal-header';
import { ModalFooter } from '../../../../shared/components/modal-footer/modal-footer';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { QrInput } from '../../../../shared/components/qr-input/qr-input';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
@Component({
  selector: 'app-create-role',
  imports: [
    CommonModule,
    ModalHeader,
    ModalFooter,
    ReactiveFormsModule,
    QrInput,
    NzSwitchModule,
  ],
  templateUrl: './create-role.html',
  styleUrl: './create-role.scss',
})
export class CreateRole {
  permissions = ['add', 'edit', 'delete', 'export'];
  services = ['bills payments', 'cashout'];
  roleGroup!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.roleGroup = this.fb.group({
      roleName: ['', Validators.required],
      isActive: [false],
    });
  }
}
