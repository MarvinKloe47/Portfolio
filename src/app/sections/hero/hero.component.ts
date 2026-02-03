import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { TranslationService } from '../../services/translation/translation.service';
TranslationService

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ContactComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  constructor(public translate: TranslationService) {}


  scrollToContact() {
  const element = document.getElementById("contact");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

scrollToAbout() {
  const element = document.getElementById("about");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

}
