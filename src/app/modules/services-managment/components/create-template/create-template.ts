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
  selector: 'app-create-template',
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
  templateUrl: './create-template.html',
  styleUrl: './create-template.scss',
})
export class CreateTemplate {
  templateGroup!: FormGroup;
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
    this.templateGroup = this.fb.group({
      serviceTemplateName: ['', Validators.required],
      isActive: [false],
      showServiceValue: [false],
      showFeesValue: [false],
      showItemCountValue: [false],
      serviceTemplateFields: this.fb.array([]),
    });
  }

  createTemplateField(): FormGroup {
    return this.fb.group({
      fieldName: ['', Validators.required],
      subType: [null, Validators.required],
      maxLength: [null],
      active: [false],
    });
  }

  get serviceTemplateFields(): FormArray<FormGroup> {
    return this.templateGroup.get(
      'serviceTemplateFields'
    ) as FormArray<FormGroup>;
  }

  addTemplateField() {
    this.serviceTemplateFields.push(this.createTemplateField());
  }

  removeTemplate(index: number) {
    this.serviceTemplateFields.removeAt(index);
  }

  submit() {
    console.log(this.templateGroup.value, 'a3333333333333');
  }
}
