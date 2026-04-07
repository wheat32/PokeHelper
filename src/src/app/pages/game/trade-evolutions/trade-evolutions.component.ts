import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { TradeEvolutionCardComponent } from '../../../shared/components/trade-evolution-card/trade-evolution-card.component';
import { GamePageBase } from '../../../shared/base/game-page.base';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';
import { EmptyStateComponent } from '../../../shared/components/empty-state/empty-state.component';

@Component({
  selector: 'app-trade-evolutions',
  imports: [TradeEvolutionCardComponent, PageHeaderComponent, EmptyStateComponent],
  templateUrl: './trade-evolutions.component.html',
  styleUrl: './trade-evolutions.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TradeEvolutionsComponent extends GamePageBase
{
  readonly tradeEvolutions = computed(() => this.gamePair()?.sharedTradeEvolutions ?? []);
}
