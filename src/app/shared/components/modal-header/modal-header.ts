import { Component, inject, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-modal-header',
  imports: [NzIconModule, TranslateModule],
  templateUrl: './modal-header.html',
  styleUrl: './modal-header.scss',
})
export class ModalHeader {
  @Input() icon: any;
  @Input() title: any;
  @Input() description: any;

  GlobalService = inject(GlobalService);

  close() {
    this.GlobalService.setModal(false);
  }
}
