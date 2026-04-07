import { Injectable, signal } from '@angular/core';

const STORAGE_KEY = 'pokehelper-theme';

export type ThemePreference = 'light' | 'dark' | 'auto';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly preference = signal<ThemePreference>('auto');
  readonly isDark = signal<boolean>(false);

  private mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  constructor() {
    const saved = (localStorage.getItem(STORAGE_KEY) ?? 'auto') as ThemePreference;
    this.setPreference(saved);

    // React to OS-level changes when in auto mode
    this.mediaQuery.addEventListener('change', () => {
      if (this.preference() === 'auto') {
        this.applyTheme(this.mediaQuery.matches);
      }
    });
  }

  setPreference(pref: ThemePreference): void {
    this.preference.set(pref);
    localStorage.setItem(STORAGE_KEY, pref);
    const dark = pref === 'dark' || (pref === 'auto' && this.mediaQuery.matches);
    this.applyTheme(dark);
  }

  private applyTheme(dark: boolean): void {
    this.isDark.set(dark);
    const theme = dark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-bs-theme', theme);
  }
}
