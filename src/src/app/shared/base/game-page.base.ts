import { Directive, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { EMPTY } from 'rxjs';
import { getGamePairById } from '../../data/games.registry';
import { GamePairData } from '../models/pokemon.model';

/**
 * Abstract base for all child game-page components.
 *
 * Exposes `gamePair` and `accentGradient` as reactive signals derived from the
 * parent route's `:pairId` param — no lifecycle hooks required in subclasses.
 */
@Directive()
export abstract class GamePageBase {
  private readonly route = inject(ActivatedRoute);

  private readonly parentParamMap = toSignal(
    this.route.parent?.paramMap ?? EMPTY,
  );

  /** The loaded game pair, or undefined if the pairId is unknown. */
  readonly gamePair = computed<GamePairData | undefined>(() => {
    const pairId = this.parentParamMap()?.get('pairId') ?? null;
    return pairId ? getGamePairById(pairId) : undefined;
  });

  /** CSS gradient string derived from the game pair's icon colors, or undefined. */
  readonly accentGradient = computed(() => {
    const colors = this.gamePair()?.iconColors;
    if (!colors) return undefined;
    return `linear-gradient(to right, ${colors[0]} 0%, ${colors[0]} 40%, ${colors[1]} 60%, ${colors[1]} 100%)`;
  });
}
