import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getGamePairById } from '../../../data/games.registry';
import { GameData, GamePairData } from '../../../shared/models/pokemon.model';
import { PokemonCardComponent } from '../../../shared/components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-version-exclusives',
  imports: [PokemonCardComponent],
  templateUrl: './version-exclusives.component.html',
  styleUrl: './version-exclusives.component.css',
})
export class VersionExclusivesComponent implements OnInit {
  gamePair: GamePairData | undefined;
  versionA: GameData | undefined;
  versionB: GameData | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const pairId = this.route.parent?.snapshot.paramMap.get('pairId');
    this.gamePair = pairId ? getGamePairById(pairId) : undefined;
    this.versionA = this.gamePair?.versions[0];
    this.versionB = this.gamePair?.versions[1];
  }
}
