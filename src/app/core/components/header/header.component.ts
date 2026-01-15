import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    document.body.classList.toggle('noScroll', this.menuOpen);
  }

  closeMenu(): void {
    this.menuOpen = false;
    document.body.classList.remove('noScroll');
  }
}
