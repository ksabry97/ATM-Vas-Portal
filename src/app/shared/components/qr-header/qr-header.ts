import { Component } from '@angular/core';
import { LanguageSwitcher } from '../language-switcher/language-switcher';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-qr-header',
  imports: [LanguageSwitcher],
  providers: [TranslateService],
  templateUrl: './qr-header.html',
  styleUrl: './qr-header.scss',
})
export class QrHeader {}
