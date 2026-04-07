import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { getGamePairById } from '../../../data/games.registry';
import { GamePairData } from '../../../shared/models/pokemon.model';

interface GuideSection {
  icon: string;
  label: string;
  description: string;
  route: string;
}

@Component({
  selector: 'app-game-landing',
  imports: [RouterLink],
  templateUrl: './game-landing.component.html',
  styleUrl: './game-landing.component.css',
})
export class GameLandingComponent implements OnInit {
  gamePair: GamePairData | undefined;

  sections: GuideSection[] = [
    {
      icon: 'star-fill',
      label: 'Version Exclusives',
      description: 'Which Pokémon are exclusive to FireRed vs. LeafGreen, and where to find them in the wild.',
      route: 'version-exclusives',
    },
    {
      icon: 'arrow-left-right',
      label: 'Trade Evolutions',
      description: 'Pokémon that only evolve by trading, and the held items required for each evolution.',
      route: 'trade-evolutions',
    },
    {
      icon: 'egg-fill',
      label: 'Starters',
      description: 'How to obtain all three Kanto starter Pokémon on the Nintendo Switch version.',
      route: 'starters',
    },
    {
      icon: 'slash-circle',
      label: 'Unobtainables',
      description: 'Event-only Pokémon with no in-game method to obtain them on the Switch version.',
      route: 'unobtainables',
    },
    {
      icon: 'shield-check',
      label: 'Obedience',
      description: 'Badge thresholds controlling at what levels traded Pokémon will disobey you.',
      route: 'obedience',
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const pairId = this.route.parent?.snapshot.paramMap.get('pairId');
    this.gamePair = pairId ? getGamePairById(pairId) : undefined;
  }
}

