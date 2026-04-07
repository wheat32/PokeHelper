import { GameData, GamePairData, TradeEvolution } from '../shared/models/pokemon.model';
import { fireredData } from './firered.data';
import { leafgreenData } from './leafgreen.data';

/**
 * Builds the shared (de-duplicated) trade evolutions for a pair.
 * Trades that exist in both versions are merged; version-specific notes are kept.
 */
function buildSharedTrades(a: GameData, b: GameData): TradeEvolution[] {
  const seen = new Map<string, TradeEvolution>();
  for (const t of [...a.tradeEvolutions, ...b.tradeEvolutions]) {
    const key = `${t.fromId}-${t.toId}`;
    if (!seen.has(key)) seen.set(key, t);
  }
  return Array.from(seen.values());
}

/** FireRed & LeafGreen game pair. */
export const fireredLeafgreenPair: GamePairData = {
  pairId: 'firered-leafgreen',
  displayName: 'FireRed & LeafGreen',
  generation: 3,
  icon: 'fire',
  icons: ['fire', 'leaf'],
  iconColors: ['#cc0000', '#2e7d32'],
  themeClass: 'game-pair-gen3',
  versions: [fireredData, leafgreenData],
  sharedTradeEvolutions: buildSharedTrades(fireredData, leafgreenData),
};

/**
 * Central registry of all game pairs.
 * To add a new pair: create data files, build a GamePairData entry, and add it here.
 */
export const ALL_GAME_PAIRS: GamePairData[] = [fireredLeafgreenPair];

/** Legacy flat list kept for any code that still needs individual GameData. */
export const ALL_GAMES: GameData[] = [fireredData, leafgreenData];

export function getGamePairById(pairId: string): GamePairData | undefined {
  return ALL_GAME_PAIRS.find((p) => p.pairId === pairId);
}

export function getGameById(gameId: string): GameData | undefined {
  return ALL_GAMES.find((g) => g.gameId === gameId);
}
