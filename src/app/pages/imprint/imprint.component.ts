import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TranslationService } from '../../services/translation/translation.service';
TranslationService;

@Component({
  selector: 'app-imprint',
  standalone: true,
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent {
  constructor(public translate: TranslationService, private location: Location) {}

  

  goBack(): void {
    this.location.back();
  }
}
