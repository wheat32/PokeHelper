import { Injectable } from '@angular/core';

/**
 * Pokémon IDs that have a sprite in the firered-leafgreen set.
 * FRLG only shipped sprites for Gen 1 (1–151) plus a handful of extras.
 */
const FRLG_SPRITE_IDS = new Set<number | string>([
  // Gen 1 (complete)
  ...Array.from({ length: 151 }, (_, i) => i + 1),
  // Extras present in the FRLG directory
  216, 386, '386-attack', '386-defense', '386-normal',
]);

@Injectable({ providedIn: 'root' })
export class PokemonService {
  /**
   * Returns the Bulbapedia URL for a Pokémon by name.
   */
  getBulbapediaPokemonUrl(name: string): string {
    const encoded = name.replace(/ /g, '_');
    return `https://bulbapedia.bulbagarden.net/wiki/${encoded}_(Pokémon)`;
  }

  /**
   * Returns the Bulbapedia URL for a location by name.
   */
  getBulbapediaLocationUrl(location: string): string {
    const encoded = location.replace(/ /g, '_');
    return `https://bulbapedia.bulbagarden.net/wiki/${encoded}`;
  }

  /**
   * Returns the primary sprite URL for a Pokémon, preferring firered-leafgreen
   * and falling back to ruby-sapphire when the FRLG sprite doesn't exist.
   */
  getSpriteUrl(id: number | string): string {
    const inFrlg = FRLG_SPRITE_IDS.has(id);
    const set = inFrlg ? 'firered-leafgreen' : 'ruby-sapphire';
    return `images/sprites/gen3/${set}/${id}.png`;
  }

  /**
   * Returns the ruby-sapphire fallback sprite URL, used in onerror chains.
   */
  getFallbackSpriteUrl(id: number | string): string {
    return `images/sprites/gen3/ruby-sapphire/${id}.png`;
  }

  /**
   * Formats the Pokédex number as a zero-padded string, e.g. '#023'.
   * For string IDs (like '386-attack'), returns as-is.
   */
  formatPokedexNumber(id: number | string): string {
    if (typeof id === 'string') return id;
    return `#${String(id).padStart(3, '0')}`;
  }

  /**
   * Standard sprite-error handler shared across all Pokémon sprite `<img>` elements.
   * First attempt uses the ruby-sapphire fallback; second attempt uses the pokeball icon.
   */
  handleSpriteError(event: Event, id: number | string): void {
    const img = event.target as HTMLImageElement;
    if (!img.dataset['fallback']) {
      img.dataset['fallback'] = '1';
      img.src = this.getFallbackSpriteUrl(id);
    } else {
      img.src = 'pokeball_icon.png';
    }
  }
}
