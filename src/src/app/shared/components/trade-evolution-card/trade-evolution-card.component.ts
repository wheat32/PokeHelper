import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { TradeEvolution } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-trade-evolution-card',
  imports: [NgStyle],
  templateUrl: './trade-evolution-card.component.html',
  styleUrl: './trade-evolution-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TradeEvolutionCardComponent
{
  readonly evolution = input.required<TradeEvolution>();
  /**
   * Optional CSS gradient for the top border.
   * When set, replaces the solid game-accent-border color.
   */
  readonly accentGradient = input<string>();

  protected readonly pokemonService = inject(PokemonService);

  readonly fromSpriteUrl = computed(() => this.pokemonService.getSpriteUrl(this.evolution().fromId));
  readonly toSpriteUrl = computed(() => this.pokemonService.getSpriteUrl(this.evolution().toId));
  readonly fromBulbapediaUrl = computed(() => this.pokemonService.getBulbapediaPokemonUrl(this.evolution().fromName));
  readonly toBulbapediaUrl = computed(() => this.pokemonService.getBulbapediaPokemonUrl(this.evolution().toName));
  readonly fromPokedexNumber = computed(() => this.pokemonService.formatPokedexNumber(this.evolution().fromId));
  readonly toPokedexNumber = computed(() => this.pokemonService.formatPokedexNumber(this.evolution().toId));
}
