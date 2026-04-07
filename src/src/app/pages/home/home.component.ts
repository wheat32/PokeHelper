import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ALL_GAME_PAIRS } from '../../data/games.registry';
import { GamePairData } from '../../shared/models/pokemon.model';
import { SplitIconComponent } from '../../shared/components/split-icon/split-icon.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SplitIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly gamePairs: GamePairData[] = ALL_GAME_PAIRS;
}
