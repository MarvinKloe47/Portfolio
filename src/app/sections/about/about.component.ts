import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { TranslationService } from '../../services/translation/translation.service';
TranslationService

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(public translate: TranslationService) {}


  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}