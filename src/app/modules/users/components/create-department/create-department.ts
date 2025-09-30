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
import { QrSelect } from '../../../../shared/components/qr-select/qr-select';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-create-department',
  imports: [
    CommonModule,
    ModalHeader,
    ModalFooter,
    ReactiveFormsModule,
    QrInput,
    NzSwitchModule,
    QrSelect,
    NzIconModule,
  ],
  templateUrl: './create-department.html',
  styleUrl: './create-department.scss',
})
export class CreateDepartment {
  deparmtentForm!: FormGroup;
  types = [
    {
      text: 'string',
      value: '1',
    },
    {
      text: 'integer',
      value: '2',
    },
    {
      text: 'date',
      value: '3',
    },
  ];
  constructor(private fb: FormBuilder) {
    this.deparmtentForm = this.fb.group({
      departmentName: ['', Validators.required],
      isActive: [false],
      managerId: ['', Validators.required],
      regionId: ['', Validators.required],
      description: [''],
    });
  }

  submit() {
    console.log(this.deparmtentForm.value);
  }
}
