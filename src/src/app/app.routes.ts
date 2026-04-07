import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GameShellComponent } from './pages/game/game-shell/game-shell.component';
import { GameLandingComponent } from './pages/game/game-landing/game-landing.component';
import { VersionExclusivesComponent } from './pages/game/version-exclusives/version-exclusives.component';
import { TradeEvolutionsComponent } from './pages/game/trade-evolutions/trade-evolutions.component';
import { StartersComponent } from './pages/game/starters/starters.component';
import { UnobtainablesComponent } from './pages/game/unobtainables/unobtainables.component';
import { ObedienceComponent } from './pages/game/obedience/obedience.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: ':pairId',
    component: GameShellComponent,
    children: [
      { path: '', component: GameLandingComponent, pathMatch: 'full' },
      { path: 'version-exclusives', component: VersionExclusivesComponent },
      { path: 'trade-evolutions', component: TradeEvolutionsComponent },
      { path: 'starters', component: StartersComponent },
      { path: 'unobtainables', component: UnobtainablesComponent },
      { path: 'obedience', component: ObedienceComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];
