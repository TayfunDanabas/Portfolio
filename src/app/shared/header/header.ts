import { ViewportScroller } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  imports: [RouterLink, TranslatePipe],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header implements OnInit {
  private translate = inject(TranslateService);
  private viewportScroller = inject(ViewportScroller);

  currentLanguage = 'de';
  isMenuOpen = false;
  activeSection = '';

  navItems = [
    { label: 'nav.whyMe', fragment: 'why-me' },
    { label: 'nav.skills', fragment: 'skills' },
    { label: 'nav.projects', fragment: 'projects' },
    { label: 'nav.contact', fragment: 'contact' },
  ];

  ngOnInit() {
    this.viewportScroller.setOffset(() => [0, this.getHeaderHeight()]);
    const savedLanguage = localStorage.getItem('language');
    this.switchLanguage(savedLanguage === 'en' ? 'en' : 'de');
  }

  getHeaderHeight() {
    return document.querySelector('.header')?.clientHeight ?? 0;
  }

  switchLanguage(language: string) {
    this.currentLanguage = language;
    this.translate.use(language);
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }

  onScroll() {
    this.activeSection = '';
    for (const item of this.navItems) {
      const section = document.getElementById(item.fragment);
      if (section && section.getBoundingClientRect().top < window.innerHeight / 2) {
        this.activeSection = item.fragment;
      }
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
