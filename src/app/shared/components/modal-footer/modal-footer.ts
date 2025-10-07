import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-modal-footer',
  imports: [NzIconModule, CommonModule, TranslateModule],
  templateUrl: './modal-footer.html',
  styleUrl: './modal-footer.scss',
})
export class ModalFooter {
  @Input() submitText!: string;
  @Input() subText: string = '';
  @Input() disabled = false;
  @Output() isSubmitted = new EventEmitter();
  @Output() subSubmitted = new EventEmitter();

  submit() {
    this.isSubmitted.emit();
  }
  submitSub() {
    this.subSubmitted.emit();
  }
}
