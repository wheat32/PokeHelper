import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ALL_GAME_PAIRS } from '../../../data/games.registry';
import { GamePairData } from '../../models/pokemon.model';
import { ThemeService, ThemePreference } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  readonly gamePairs: GamePairData[] = ALL_GAME_PAIRS;

  constructor(public themeService: ThemeService) {}

  setTheme(pref: ThemePreference): void {
    this.themeService.setPreference(pref);
  }
}
