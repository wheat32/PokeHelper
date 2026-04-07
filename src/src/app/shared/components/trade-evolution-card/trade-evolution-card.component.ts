import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { TradeEvolution } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-trade-evolution-card',
  imports: [NgStyle],
  templateUrl: './trade-evolution-card.component.html',
  styleUrl: './trade-evolution-card.component.css',
})
export class TradeEvolutionCardComponent {
  @Input({ required: true }) evolution!: TradeEvolution;
  /**
   * Optional CSS gradient for the top border, e.g.
   * 'linear-gradient(to right, #cc0000, #2e7d32)'.
   * When set, replaces the solid game-accent-border color.
   */
  @Input() accentGradient?: string;

  constructor(public pokemonService: PokemonService) {}

  get fromSpriteUrl(): string {
    return this.pokemonService.getSpriteUrl(this.evolution.fromId);
  }

  get toSpriteUrl(): string {
    return this.pokemonService.getSpriteUrl(this.evolution.toId);
  }

  get fromBulbapediaUrl(): string {
    return this.pokemonService.getBulbapediaPokemonUrl(this.evolution.fromName);
  }

  get toBulbapediaUrl(): string {
    return this.pokemonService.getBulbapediaPokemonUrl(this.evolution.toName);
  }

  get fromPokedexNumber(): string {
    return this.pokemonService.formatPokedexNumber(this.evolution.fromId);
  }

  get toPokedexNumber(): string {
    return this.pokemonService.formatPokedexNumber(this.evolution.toId);
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
