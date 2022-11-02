import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  isDarkTheme = false

  initializeTheme() {
    if (localStorage.getItem('dark-theme')) {
      this.isDarkTheme = true
      this.document.body.classList.add('dark-theme')
    } else {
      this.isDarkTheme = false
      this.document.body.classList.add('light-theme')
    }
  }

  switchTheme() {
    if (localStorage.getItem('dark-theme')) {
      this.document.body.classList.replace('dark-theme', 'light-theme')
      this.isDarkTheme = false
      localStorage.removeItem('dark-theme')
    } else {
      this.document.body.classList.replace('light-theme', 'dark-theme')
      this.isDarkTheme = true
      localStorage.setItem('dark-theme', ' ')
    }
  }
}
