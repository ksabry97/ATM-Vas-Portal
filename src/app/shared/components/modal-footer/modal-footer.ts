import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-modal-footer',
  imports: [NzIconModule],
  templateUrl: './modal-footer.html',
  styleUrl: './modal-footer.scss',
})
export class ModalFooter {
  @Input() submitText!: string;
  @Output() isSubmitted = new EventEmitter();

  submit() {
    this.isSubmitted.emit();
  }
}
