import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { getGamePairById } from '../../../data/games.registry';
import { GamePairData, UnobtainablePokemon } from '../../../shared/models/pokemon.model';
import { PokemonService } from '../../../shared/services/pokemon.service';

@Component({
  selector: 'app-unobtainables',
  imports: [NgStyle],
  templateUrl: './unobtainables.component.html',
  styleUrl: './unobtainables.component.css',
})
export class UnobtainablesComponent implements OnInit {
  gamePair: GamePairData | undefined;
  unobtainables: UnobtainablePokemon[] = [];

  constructor(private route: ActivatedRoute, public pokemonService: PokemonService) {}

  ngOnInit(): void {
    const pairId = this.route.parent?.snapshot.paramMap.get('pairId');
    this.gamePair = pairId ? getGamePairById(pairId) : undefined;
    this.unobtainables = this.gamePair?.unobtainables ?? [];
  }

  get accentGradient(): string | undefined {
    const colors = this.gamePair?.iconColors;
    if (!colors) return undefined;
    return `linear-gradient(to right, ${colors[0]} 0%, ${colors[0]} 40%, ${colors[1]} 60%, ${colors[1]} 100%)`;
  }

  getSpriteUrl(id: number | string): string {
    return this.pokemonService.getSpriteUrl(id);
  }

  getPokedexNumber(id: number | string): string {
    return this.pokemonService.formatPokedexNumber(id);
  }

  getBulbapediaUrl(name: string): string {
    return this.pokemonService.getBulbapediaPokemonUrl(name);
  }

  onSpriteError(event: Event, id: number | string): void {
    const img = event.target as HTMLImageElement;
    if (!img.dataset['fallback']) {
      img.dataset['fallback'] = '1';
      img.src = this.pokemonService.getFallbackSpriteUrl(id);
    } else {
      img.src = 'pokeball_icon.png';
    }
  }
}

