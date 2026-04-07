import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: ':pairId',
    loadComponent: () => import('./pages/game/game-shell/game-shell.component').then(m => m.GameShellComponent),
    children: [
      { path: '', loadComponent: () => import('./pages/game/game-landing/game-landing.component').then(m => m.GameLandingComponent), pathMatch: 'full' },
      { path: 'version-exclusives', loadComponent: () => import('./pages/game/version-exclusives/version-exclusives.component').then(m => m.VersionExclusivesComponent) },
      { path: 'trade-evolutions', loadComponent: () => import('./pages/game/trade-evolutions/trade-evolutions.component').then(m => m.TradeEvolutionsComponent) },
      { path: 'starters', loadComponent: () => import('./pages/game/starters/starters.component').then(m => m.StartersComponent) },
      { path: 'unobtainables', loadComponent: () => import('./pages/game/unobtainables/unobtainables.component').then(m => m.UnobtainablesComponent) },
      { path: 'obedience', loadComponent: () => import('./pages/game/obedience/obedience.component').then(m => m.ObedienceComponent) },
    ],
  },
  { path: '**', redirectTo: '' },
];
