import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalHeader } from '../../../../shared/components/modal-header/modal-header';
import { ModalFooter } from '../../../../shared/components/modal-footer/modal-footer';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { QrInput } from '../../../../shared/components/qr-input/qr-input';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { QrInputNumber } from '../../../../shared/components/qr-input-number/qr-input-number';
import { QrSelect } from '../../../../shared/components/qr-select/qr-select';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-create-service',
  imports: [
    CommonModule,
    ModalHeader,
    ModalFooter,
    ReactiveFormsModule,
    QrInput,
    NzSwitchModule,
    QrInputNumber,
    QrSelect,
    NzIconModule,
  ],
  templateUrl: './create-service.html',
  styleUrl: './create-service.scss',
})
export class CreateService {
  serviceForm!: FormGroup;
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
    this.serviceForm = this.fb.group({
      serviceName: ['', Validators.required],
      isActive: [false],
      serviceValueId: ['', Validators.required],
      serviceTemplateId: ['', Validators.required],
      feesProfileId: ['', Validators.required],
      subServices: this.fb.array([]),
    });
  }

  createTemplateField(): FormGroup {
    return this.fb.group({
      serviceName: ['', Validators.required],
      active: [false],
    });
  }

  get subServices(): FormArray<FormGroup> {
    return this.serviceForm.get('subServices') as FormArray<FormGroup>;
  }

  addTemplateField() {
    this.subServices.push(this.createTemplateField());
  }

  removeTemplate(index: number) {
    this.subServices.removeAt(index);
  }

  submit() {
    console.log(this.serviceForm.value);
  }
}
