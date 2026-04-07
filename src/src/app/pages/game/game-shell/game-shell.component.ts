import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { getGamePairById } from '../../../data/games.registry';
import { GamePairData } from '../../../shared/models/pokemon.model';
import { SplitIconComponent } from '../../../shared/components/split-icon/split-icon.component';

@Component({
  selector: 'app-game-shell',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, SplitIconComponent],
  templateUrl: './game-shell.component.html',
  styleUrl: './game-shell.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameShellComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly paramMap = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });

  readonly gamePair = computed<GamePairData | undefined>(() => {
    const pairId = this.paramMap().get('pairId');
    return pairId ? getGamePairById(pairId) : undefined;
  });

  constructor() {
    // Navigate home if the pairId doesn't match any known game.
    effect(() => {
      if (!this.gamePair()) {
        this.router.navigate(['/']);
      }
    });
  }
}
