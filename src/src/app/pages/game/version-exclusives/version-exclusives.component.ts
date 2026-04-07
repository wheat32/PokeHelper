import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { PokemonCardComponent } from '../../../shared/components/pokemon-card/pokemon-card.component';
import { GamePageBase } from '../../../shared/base/game-page.base';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { EmptyStateComponent } from '../../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-version-exclusives',
  imports: [PokemonCardComponent, PageHeaderComponent, EmptyStateComponent],
  templateUrl: './version-exclusives.component.html',
  styleUrl: './version-exclusives.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VersionExclusivesComponent extends GamePageBase {
  readonly versionA = computed(() => this.gamePair()?.versions[0]);
  readonly versionB = computed(() => this.gamePair()?.versions[1]);
}
