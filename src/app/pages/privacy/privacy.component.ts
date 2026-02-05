import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TranslationService } from '../../services/translation/translation.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {
  constructor(public translate: TranslationService, private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
