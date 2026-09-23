import { Component, inject, OnInit } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header implements OnInit {
  private translate = inject(TranslateService);

  currentLanguage = 'de';
  isMenuOpen = false;

  navItems = [
    { label: 'nav.whyMe', link: '#why-me' },
    { label: 'nav.skills', link: '#skills' },
    { label: 'nav.projects', link: '#projects' },
    { label: 'nav.contact', link: '#contact' },
  ];

  ngOnInit() {
    const savedLanguage = localStorage.getItem('language');
    this.switchLanguage(savedLanguage === 'en' ? 'en' : 'de');
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
