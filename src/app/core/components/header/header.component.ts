import { Component } from '@angular/core';
import { NgIf } from '@angular/common'; 
import { Router } from '@angular/router';
import { TranslationService, Lang } from '../../../services/translation/translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;

  constructor(
    public translate: TranslationService,
    private router: Router
  ) {}

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('noScroll', this.menuOpen);
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.classList.remove('noScroll');
  }

  setLang(lang: Lang): void {
    this.translate.setLang(lang);
  }

  get currentLang(): Lang {
    return this.translate.getLang();
  }

  scrollToTop(): void {
    if (!this.isHomeRoute()) {
      this.router.navigateByUrl('/').then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(sectionId: string): void {
    const doScroll = () => {
      this.scrollElementIntoHeaderView(sectionId, 20);
    };

    this.closeMenu();

    if (!this.isHomeRoute()) {
      this.router.navigateByUrl('/').then(() => {
        requestAnimationFrame(doScroll);
      });
      return;
    }

    doScroll();
  }

  private isHomeRoute(): boolean {
    return this.router.url.split('?')[0].split('#')[0] === '/';
  }

  private scrollElementIntoHeaderView(elementId: string, retries = 0): void {
    const element = document.getElementById(elementId);
    if (!element) {
      if (retries > 0) {
        requestAnimationFrame(() => {
          this.scrollElementIntoHeaderView(elementId, retries - 1);
        });
      }

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
