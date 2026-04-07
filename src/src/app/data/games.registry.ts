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
  unobtainables: [
    {
      id: 151,
      name: 'Mew',
      reason: 'Event-only — no in-game method exists.',
      notes: 'Mew was only distributed via official Nintendo events and cannot be encountered through normal gameplay. There is currently no known way to transfer one into FireRed/LeafGreen on Switch.',
    },
    {
      id: 251,
      name: 'Celebi',
      reason: 'Not obtainable in FireRed or LeafGreen.',
      notes: 'Celebi was distributed through outside events and bonus-disc methods tied to other titles (e.g. Pokémon Colosseum bonus disc). It cannot be obtained within FireRed/LeafGreen itself.',
    },
    {
      id: 385,
      name: 'Jirachi',
      reason: 'Not obtainable in FireRed or LeafGreen.',
      notes: 'Jirachi was distributed via bonus-disc methods (e.g. the Pokémon Channel or Colosseum bonus disc in western regions). It cannot be obtained within FireRed/LeafGreen itself.',
    },
  ],
  starterGroups: [
    {
      groupName: 'Kanto Starters',
      starters: [
        {
          id: 1,
          name: 'Bulbasaur',
          method: 'Choose at the start',
          notes: 'One of the three starters offered by Professor Oak. To obtain the others, trade via local wireless from a second playthrough on another Switch — visit the Pokémon Wireless Club on the second floor of any Pokémon Center.',
        },
        {
          id: 4,
          name: 'Charmander',
          method: 'Choose at the start',
          notes: 'One of the three starters offered by Professor Oak. To obtain the others, trade via local wireless from a second playthrough on another Switch.',
        },
        {
          id: 7,
          name: 'Squirtle',
          method: 'Choose at the start',
          notes: 'One of the three starters offered by Professor Oak. To obtain the others, trade via local wireless from a second playthrough on another Switch.',
        },
      ],
    },
  ],
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
