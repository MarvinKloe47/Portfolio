import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../../services/translation/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(public translate: TranslationService) {}
}
