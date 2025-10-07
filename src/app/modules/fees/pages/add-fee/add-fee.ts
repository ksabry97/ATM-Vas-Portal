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
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-add-fee',
  imports: [
    CommonModule,
    ModalHeader,
    ModalFooter,
    ReactiveFormsModule,
    QrInput,
    NzSwitchModule,
    QrInputNumber,
    TranslateModule,
  ],
  templateUrl: './add-fee.html',
  styleUrl: './add-fee.scss',
})
export class AddFee {
  feeGroup!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.feeGroup = this.fb.group({
      feesProfileName: ['', Validators.required],
      isActive: [false],
      isVatEnabled: [true],
      feesProfileType: [1],
      fixedAmount: [0],
      percentage: [0],
    });
  }
}
