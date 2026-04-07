export interface PokemonExclusive {
  /** National Pokédex ID (e.g. 23). For form variants use a string like '386-attack'. */
  id: number | string;
  name: string;
  /** In-game locations where this Pokémon can be found. */
  locations: string[];
  /** Name of the Pokémon this one evolves from, if any. */
  evolvesFrom?: string;
  /** How the evolution happens (e.g. "Level 22", "Leaf Stone"). */
  evolutionMethod?: string;
  /** Notes (e.g. "Only one available"). */
  notes?: string;
}

export interface UnobtainablePokemon {
  id: number | string;
  name: string;
  /** Why this Pokémon cannot be obtained in-game. */
  reason: string;
  /** Any historical context or workaround (e.g. HOME transfer note). */
  notes?: string;
}

export interface StarterOption {
  id: number;
  name: string;
  /** How to obtain this starter (e.g. 'Choose at the start', 'Trade', 'Breed'). */
  method: string;
  notes?: string;
}

export interface StarterGroup {
  /** Label for this group of starters, e.g. 'Kanto Starters'. */
  groupName: string;
  starters: StarterOption[];
}

export interface TradeEvolution {
  /** National Pokédex ID of the pre-evolution. */
  fromId: number | string;
  fromName: string;
  /** National Pokédex ID of the result. */
  toId: number | string;
  toName: string;
  /** Item required to hold during trade, if any. */
  tradeItem?: string;
  /** Additional notes. */
  notes?: string;
}

export interface GameData {
  /** URL-friendly slug used in routing, e.g. 'firered-leafgreen'. */
  gameId: string;
  /** Human-readable title shown in the UI. */
  displayName: string;
  /** Short subtitle. */
  subtitle: string;
  /** CSS class applied for game-specific theming, e.g. 'game-firered'. */
  themeClass: string;
  /** CSS colour for the version accent (e.g. '#cc0000'). */
  color?: string;
  /** Bootstrap Icons icon name for the game card. */
  icon: string;
  /** Generation number. */
  generation: number;
  /** Version exclusives for this specific version within the game pair. */
  exclusives: PokemonExclusive[];
  /** Trade evolutions available in this game. */
  tradeEvolutions: TradeEvolution[];
}

/** A pair of version-exclusive games (e.g. FireRed & LeafGreen). */
export interface GamePairData {
  /** URL-friendly slug, e.g. 'firered-leafgreen'. */
  pairId: string;
  /** Human-readable title, e.g. 'FireRed & LeafGreen'. */
  displayName: string;
  /** Generation number. */
  generation: number;
  /** Single Bootstrap Icons icon name (fallback / used in navbar text). */
  icon: string;
  /**
   * Two Bootstrap Icons icon names for the split pair icon.
   * First is top-left half, second is bottom-right half.
   */
  icons?: [string, string];
  /** CSS colours for each half of the split icon, e.g. ['#cc0000', '#2e7d32']. */
  iconColors?: [string, string];
  /** CSS theme class, e.g. 'game-pair-gen3'. */
  themeClass: string;
  /** A brief description shown on the home page card. */
  description?: string;
  /** Path to a regional map image served from the assets root (e.g. 'images/maps/gen3/worldmap.png'). */
  mapImage?: string;
  /** The two versions in the pair. */
  versions: [GameData, GameData];
  /** Trade evolutions shared between both versions (de-duplicated). */
  sharedTradeEvolutions: TradeEvolution[];
  /** Pokémon that cannot be obtained in-game (event-only, etc.) */
  unobtainables?: UnobtainablePokemon[];
  /** Grouped starter acquisition guide. */
  starterGroups?: StarterGroup[];
}
