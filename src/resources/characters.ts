// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PagePromise, SkipLimitPage, type SkipLimitPageParams } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Characters extends APIResource {
  /**
   * Add a new character to the Ted Lasso universe.
   *
   * @example
   * ```ts
   * const character = await client.characters.create({
   *   background:
   *     'Legendary midfielder for Chelsea and AFC Richmond, now assistant coach. Known for his gruff exterior hiding a heart of gold.',
   *   emotional_stats: {
   *     curiosity: 40,
   *     empathy: 85,
   *     optimism: 45,
   *     resilience: 95,
   *     vulnerability: 60,
   *   },
   *   name: 'Roy Kent',
   *   personality_traits: [
   *     'intense',
   *     'loyal',
   *     'secretly caring',
   *     'profane',
   *   ],
   *   role: 'coach',
   * });
   * ```
   */
  create(body: CharacterCreateParams, options?: RequestOptions): APIPromise<Character> {
    return this._client.post('/characters', { body, ...options });
  }

  /**
   * Retrieve detailed information about a specific character.
   *
   * @example
   * ```ts
   * const character = await client.characters.retrieve(
   *   'character_id',
   * );
   * ```
   */
  retrieve(characterID: string, options?: RequestOptions): APIPromise<Character> {
    return this._client.get(path`/characters/${characterID}`, options);
  }

  /**
   * Update specific fields of an existing character.
   *
   * @example
   * ```ts
   * const character = await client.characters.update(
   *   'character_id',
   * );
   * ```
   */
  update(characterID: string, body: CharacterUpdateParams, options?: RequestOptions): APIPromise<Character> {
    return this._client.patch(path`/characters/${characterID}`, { body, ...options });
  }

  /**
   * Get a paginated list of Ted Lasso characters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const character of client.characters.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CharacterListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CharactersSkipLimitPage, Character> {
    return this._client.getAPIList('/characters', SkipLimitPage<Character>, { query, ...options });
  }

  /**
   * Remove a character from the database.
   *
   * @example
   * ```ts
   * await client.characters.delete('character_id');
   * ```
   */
  delete(characterID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/characters/${characterID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get all signature quotes from a specific character.
   *
   * @example
   * ```ts
   * const response = await client.characters.getQuotes(
   *   'character_id',
   * );
   * ```
   */
  getQuotes(characterID: string, options?: RequestOptions): APIPromise<CharacterGetQuotesResponse> {
    return this._client.get(path`/characters/${characterID}/quotes`, options);
  }
}

export type CharactersSkipLimitPage = SkipLimitPage<Character>;

/**
 * Full character model with ID.
 */
export interface Character {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Character background and history
   */
  background: string;

  /**
   * Emotional intelligence stats
   */
  emotional_stats: EmotionalStats;

  /**
   * Character's full name
   */
  name: string;

  /**
   * Key personality traits
   */
  personality_traits: Array<string>;

  /**
   * Character's role
   */
  role: CharacterRole;

  /**
   * Character's date of birth
   */
  date_of_birth?: string | null;

  /**
   * Character's email address
   */
  email?: string | null;

  /**
   * Character development across seasons
   */
  growth_arcs?: Array<GrowthArc>;

  /**
   * Height in meters
   */
  height_meters?: number | null;

  /**
   * URL to character's profile image
   */
  profile_image_url?: string | null;

  /**
   * Annual salary in GBP
   */
  salary_gbp?: string | null;

  /**
   * Memorable quotes from this character
   */
  signature_quotes?: Array<string>;

  /**
   * ID of the team they belong to
   */
  team_id?: string | null;
}

/**
 * Roles characters can have.
 */
export type CharacterRole =
  | 'coach'
  | 'player'
  | 'owner'
  | 'manager'
  | 'staff'
  | 'journalist'
  | 'family'
  | 'friend'
  | 'fan'
  | 'other';

/**
 * Emotional intelligence statistics for a character.
 */
export interface EmotionalStats {
  /**
   * Level of curiosity over judgment (0-100)
   */
  curiosity: number;

  /**
   * Capacity for empathy (0-100)
   */
  empathy: number;

  /**
   * Level of optimism (0-100)
   */
  optimism: number;

  /**
   * Bounce-back ability (0-100)
   */
  resilience: number;

  /**
   * Willingness to be vulnerable (0-100)
   */
  vulnerability: number;
}

/**
 * Character development arc.
 */
export interface GrowthArc {
  /**
   * Key breakthrough moment
   */
  breakthrough: string;

  /**
   * Main challenge faced
   */
  challenge: string;

  /**
   * Where the character ends up
   */
  ending_point: string;

  /**
   * Season number
   */
  season: number;

  /**
   * Where the character starts emotionally
   */
  starting_point: string;
}

export type CharacterGetQuotesResponse = Array<string>;

export interface CharacterCreateParams {
  /**
   * Character background and history
   */
  background: string;

  /**
   * Emotional intelligence stats
   */
  emotional_stats: EmotionalStats;

  /**
   * Character's full name
   */
  name: string;

  /**
   * Key personality traits
   */
  personality_traits: Array<string>;

  /**
   * Character's role
   */
  role: CharacterRole;

  /**
   * Character's date of birth
   */
  date_of_birth?: string | null;

  /**
   * Character's email address
   */
  email?: string | null;

  /**
   * Character development across seasons
   */
  growth_arcs?: Array<GrowthArc>;

  /**
   * Height in meters
   */
  height_meters?: number | null;

  /**
   * URL to character's profile image
   */
  profile_image_url?: string | null;

  /**
   * Annual salary in GBP
   */
  salary_gbp?: number | string | null;

  /**
   * Memorable quotes from this character
   */
  signature_quotes?: Array<string>;

  /**
   * ID of the team they belong to
   */
  team_id?: string | null;
}

export interface CharacterUpdateParams {
  background?: string | null;

  date_of_birth?: string | null;

  email?: string | null;

  /**
   * Emotional intelligence statistics for a character.
   */
  emotional_stats?: EmotionalStats | null;

  growth_arcs?: Array<GrowthArc> | null;

  height_meters?: number | null;

  name?: string | null;

  personality_traits?: Array<string> | null;

  profile_image_url?: string | null;

  /**
   * Roles characters can have.
   */
  role?: CharacterRole | null;

  salary_gbp?: number | string | null;

  signature_quotes?: Array<string> | null;

  team_id?: string | null;
}

export interface CharacterListParams extends SkipLimitPageParams {
  /**
   * Minimum optimism score
   */
  min_optimism?: number | null;

  /**
   * Filter by role
   */
  role?: CharacterRole | null;

  /**
   * Filter by team ID
   */
  team_id?: string | null;
}

export declare namespace Characters {
  export {
    type Character as Character,
    type CharacterRole as CharacterRole,
    type EmotionalStats as EmotionalStats,
    type GrowthArc as GrowthArc,
    type CharacterGetQuotesResponse as CharacterGetQuotesResponse,
    type CharactersSkipLimitPage as CharactersSkipLimitPage,
    type CharacterCreateParams as CharacterCreateParams,
    type CharacterUpdateParams as CharacterUpdateParams,
    type CharacterListParams as CharacterListParams,
  };
}
