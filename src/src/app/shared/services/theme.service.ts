import { Injectable, computed, effect, signal } from '@angular/core';

const STORAGE_KEY = 'pokehelper-theme';

export type ThemePreference = 'light' | 'dark' | 'auto';

@Injectable({ providedIn: 'root' })
export class ThemeService
{
  private readonly mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  private readonly systemDark = signal(this.mediaQuery.matches);

  readonly preference = signal<ThemePreference>('auto');

  /** True when the active theme is dark — derived reactively from preference + OS setting. */
  readonly isDark = computed(() =>
    this.preference() === 'dark' ||
    (this.preference() === 'auto' && this.systemDark())
  );

  constructor()
  {
    this.preference.set((localStorage.getItem(STORAGE_KEY) ?? 'auto') as ThemePreference);

    // Keep systemDark in sync with OS-level changes.
    this.mediaQuery.addEventListener('change', (e) =>
    {
      this.systemDark.set(e.matches);
    });

    // Apply the active theme to the document whenever isDark changes.
    effect(() =>
    {
      const theme = this.isDark() ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', theme);
      document.documentElement.setAttribute('data-bs-theme', theme);
    });
  }

  setPreference(pref: ThemePreference): void
  {
    this.preference.set(pref);
    localStorage.setItem(STORAGE_KEY, pref);
  }
}
