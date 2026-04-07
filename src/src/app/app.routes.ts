import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GameShellComponent } from './pages/game/game-shell/game-shell.component';
import { VersionExclusivesComponent } from './pages/game/version-exclusives/version-exclusives.component';
import { TradeEvolutionsComponent } from './pages/game/trade-evolutions/trade-evolutions.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: ':pairId',
    component: GameShellComponent,
    children: [
      { path: '', redirectTo: 'version-exclusives', pathMatch: 'full' },
      { path: 'version-exclusives', component: VersionExclusivesComponent },
      { path: 'trade-evolutions', component: TradeEvolutionsComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];
