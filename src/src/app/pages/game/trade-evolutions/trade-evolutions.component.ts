import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getGamePairById } from '../../../data/games.registry';
import { GamePairData, TradeEvolution } from '../../../shared/models/pokemon.model';
import { TradeEvolutionCardComponent } from '../../../shared/components/trade-evolution-card/trade-evolution-card.component';

@Component({
  selector: 'app-trade-evolutions',
  imports: [TradeEvolutionCardComponent],
  templateUrl: './trade-evolutions.component.html',
  styleUrl: './trade-evolutions.component.css',
})
export class TradeEvolutionsComponent implements OnInit {
  gamePair: GamePairData | undefined;
  tradeEvolutions: TradeEvolution[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const pairId = this.route.parent?.snapshot.paramMap.get('pairId');
    this.gamePair = pairId ? getGamePairById(pairId) : undefined;
    this.tradeEvolutions = this.gamePair?.sharedTradeEvolutions ?? [];
  }

  get accentGradient(): string | undefined {
    const colors = this.gamePair?.iconColors;
    if (!colors) return undefined;
    return `linear-gradient(to right, ${colors[0]} 0%, ${colors[0]} 40%, ${colors[1]} 60%, ${colors[1]} 100%)`;
  }
}
