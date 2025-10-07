import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-entity-header',
  imports: [CommonModule, NzIconModule, TranslateModule],
  templateUrl: './entity-header.html',
  styleUrl: './entity-header.scss',
})
export class EntityHeader {
  @Input() title = '';
  @Input() description = '';
  @Input() showButton = true;
  @Output() isCreateClicked = new EventEmitter();
}
