import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { PokemonExclusive } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  imports: [NgStyle],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css',
})
export class PokemonCardComponent {
  @Input({ required: true }) pokemon!: PokemonExclusive;
  /** Optional accent color for the top border (e.g. '#cc0000'). Overrides the CSS var. */
  @Input() accentColor?: string;

  constructor(public pokemonService: PokemonService) {}

  get spriteUrl(): string {
    return this.pokemonService.getSpriteUrl(this.pokemon.id);
  }

  get fallbackSpriteUrl(): string {
    return this.pokemonService.getFallbackSpriteUrl(this.pokemon.id);
  }

  get bulbapediaUrl(): string {
    return this.pokemonService.getBulbapediaPokemonUrl(this.pokemon.name);
  }

  get pokedexNumber(): string {
    return this.pokemonService.formatPokedexNumber(this.pokemon.id);
  }

  getLocationUrl(location: string): string {
    return this.pokemonService.getBulbapediaLocationUrl(location);
  }

  onSpriteError(event: Event): void {
    const img = event.target as HTMLImageElement;
    // First try ruby-sapphire fallback, then pokeball
    if (!img.dataset['fallback']) {
      img.dataset['fallback'] = '1';
      img.src = this.fallbackSpriteUrl;
    } else {
      img.src = 'pokeball_icon.png';
    }
  }
}
