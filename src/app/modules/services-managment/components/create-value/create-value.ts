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
import { QrInputNumber } from '../../../../shared/components/qr-input-number/qr-input-number';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-create-value',
  imports: [
    CommonModule,
    ModalHeader,
    ModalFooter,
    ReactiveFormsModule,
    QrInput,
    NzSwitchModule,
    QrInputNumber,
    NzIconModule,
  ],
  templateUrl: './create-value.html',
  styleUrl: './create-value.scss',
})
export class CreateValue {
  valueForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.valueForm = this.fb.group({
      serviceValueName: ['', Validators.required],
      isActive: [false],
      serviceValueType: [1],
      flatValue: [0],
      maxValue: [],
      minValue: [],
    });
  }
}
