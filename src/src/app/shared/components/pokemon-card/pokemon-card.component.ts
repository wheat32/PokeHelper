import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { PokemonExclusive } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  imports: [NgStyle],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonCardComponent {
  readonly pokemon = input.required<PokemonExclusive>();
  /** Optional accent color for the top border (e.g. '#cc0000'). Overrides the CSS var. */
  readonly accentColor = input<string>();

  protected readonly pokemonService = inject(PokemonService);

  readonly spriteUrl = computed(() => this.pokemonService.getSpriteUrl(this.pokemon().id));
  readonly bulbapediaUrl = computed(() => this.pokemonService.getBulbapediaPokemonUrl(this.pokemon().name));
  readonly pokedexNumber = computed(() => this.pokemonService.formatPokedexNumber(this.pokemon().id));

  getLocationUrl(location: string): string {
    return this.pokemonService.getBulbapediaLocationUrl(location);
  }
}
