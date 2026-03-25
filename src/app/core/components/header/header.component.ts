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
    if (this.router.url !== '/') {
      this.router.navigateByUrl('/').then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
