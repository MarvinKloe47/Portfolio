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
    this.scrollElementIntoHeaderView('contact');
  }

  scrollToAbout() {
    this.scrollElementIntoHeaderView('about');
  }

  private scrollElementIntoHeaderView(elementId: string): void {
    const element = document.getElementById(elementId);
    if (!element) {
      return;
    }

    const header = document.querySelector('.header') as HTMLElement | null;
    const headerHeight = header?.offsetHeight ?? 0;
    const targetTop = element.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: 'smooth'
    });
  }

}
