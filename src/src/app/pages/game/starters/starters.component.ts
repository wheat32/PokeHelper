import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { NgStyle } from '@angular/common';
import { PokemonService } from '../../../shared/services/pokemon.service';
import { GamePageBase } from '../../../shared/base/game-page.base';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { EmptyStateComponent } from '../../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-starters',
  imports: [NgStyle, PageHeaderComponent, EmptyStateComponent],
  templateUrl: './starters.component.html',
  styleUrl: './starters.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StartersComponent extends GamePageBase {
  protected readonly pokemonService = inject(PokemonService);

  readonly starterGroups = computed(() => this.gamePair()?.starterGroups ?? []);
}
