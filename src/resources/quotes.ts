// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PagePromise, SkipLimitPage, type SkipLimitPageParams } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Quotes extends APIResource {
  /**
   * Add a new memorable quote to the collection.
   *
   * @example
   * ```ts
   * const quote = await client.quotes.create({
   *   character_id: 'ted-lasso',
   *   context:
   *     "Ted's first team meeting, revealing his coaching philosophy",
   *   moment_type: 'locker_room',
   *   text: 'I believe in believe.',
   *   theme: 'belief',
   * });
   * ```
   */
  create(body: QuoteCreateParams, options?: RequestOptions): APIPromise<Quote> {
    return this._client.post('/quotes', { body, ...options });
  }

  /**
   * Retrieve a specific quote by its ID.
   *
   * @example
   * ```ts
   * const quote = await client.quotes.retrieve('quote_id');
   * ```
   */
  retrieve(quoteID: string, options?: RequestOptions): APIPromise<Quote> {
    return this._client.get(path`/quotes/${quoteID}`, options);
  }

  /**
   * Update specific fields of an existing quote.
   *
   * @example
   * ```ts
   * const quote = await client.quotes.update('quote_id');
   * ```
   */
  update(quoteID: string, body: QuoteUpdateParams, options?: RequestOptions): APIPromise<Quote> {
    return this._client.patch(path`/quotes/${quoteID}`, { body, ...options });
  }

  /**
   * Get a paginated list of all memorable Ted Lasso quotes with optional filtering.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const quote of client.quotes.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: QuoteListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<QuotesSkipLimitPage, Quote> {
    return this._client.getAPIList('/quotes', SkipLimitPage<Quote>, { query, ...options });
  }

  /**
   * Remove a quote from the collection.
   *
   * @example
   * ```ts
   * await client.quotes.delete('quote_id');
   * ```
   */
  delete(quoteID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/quotes/${quoteID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a random Ted Lasso quote, optionally filtered.
   *
   * @example
   * ```ts
   * const quote = await client.quotes.getRandom();
   * ```
   */
  getRandom(
    query: QuoteGetRandomParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Quote> {
    return this._client.get('/quotes/random', { query, ...options });
  }

  /**
   * Get a paginated list of quotes from a specific character.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const quote of client.quotes.listByCharacter(
   *   'character_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  listByCharacter(
    characterID: string,
    query: QuoteListByCharacterParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<QuotesSkipLimitPage, Quote> {
    return this._client.getAPIList(path`/quotes/characters/${characterID}`, SkipLimitPage<Quote>, {
      query,
      ...options,
    });
  }

  /**
   * Get a paginated list of quotes related to a specific theme.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const quote of client.quotes.listByTheme(
   *   'belief',
   * )) {
   *   // ...
   * }
   * ```
   */
  listByTheme(
    theme: QuoteTheme,
    query: QuoteListByThemeParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<QuotesSkipLimitPage, Quote> {
    return this._client.getAPIList(path`/quotes/themes/${theme}`, SkipLimitPage<Quote>, {
      query,
      ...options,
    });
  }
}

export type QuotesSkipLimitPage = SkipLimitPage<Quote>;

export interface PaginatedResponseQuote {
  data: Array<Quote>;

  /**
   * Whether there are more items after this page.
   */
  has_more: boolean;

  limit: number;

  /**
   * Current page number (1-indexed, for display purposes).
   */
  page: number;

  /**
   * Total number of pages.
   */
  pages: number;

  skip: number;

  total: number;
}

/**
 * Full quote model with ID.
 */
export interface Quote {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * ID of the character who said it
   */
  character_id: string;

  /**
   * Context in which the quote was said
   */
  context: string;

  /**
   * Type of moment when the quote was said
   */
  moment_type: QuoteMoment;

  /**
   * The quote text
   */
  text: string;

  /**
   * Primary theme of the quote
   */
  theme: QuoteTheme;

  /**
   * Episode where the quote appears
   */
  episode_id?: string | null;

  /**
   * Whether this quote is humorous
   */
  is_funny?: boolean;

  /**
   * Whether this quote is inspirational
   */
  is_inspirational?: boolean;

  /**
   * Popularity/virality score (0-100)
   */
  popularity_score?: number | null;

  /**
   * Additional themes
   */
  secondary_themes?: Array<QuoteTheme>;

  /**
   * Number of times shared on social media
   */
  times_shared?: number | null;
}

/**
 * Types of moments when quotes occur.
 */
export type QuoteMoment =
  | 'halftime_speech'
  | 'press_conference'
  | 'locker_room'
  | 'training'
  | 'biscuits_with_boss'
  | 'pub'
  | 'one_on_one'
  | 'celebration'
  | 'crisis'
  | 'casual'
  | 'confrontation';

/**
 * Themes that quotes can be categorized under.
 */
export type QuoteTheme =
  | 'belief'
  | 'teamwork'
  | 'curiosity'
  | 'kindness'
  | 'resilience'
  | 'vulnerability'
  | 'growth'
  | 'humor'
  | 'wisdom'
  | 'leadership'
  | 'love'
  | 'forgiveness'
  | 'philosophy'
  | 'romance'
  | 'cultural-pride'
  | 'cultural-differences'
  | 'antagonism'
  | 'celebration'
  | 'identity'
  | 'isolation'
  | 'power'
  | 'sacrifice'
  | 'standards'
  | 'confidence'
  | 'conflict'
  | 'honesty'
  | 'integrity';

export interface QuoteCreateParams {
  /**
   * ID of the character who said it
   */
  character_id: string;

  /**
   * Context in which the quote was said
   */
  context: string;

  /**
   * Type of moment when the quote was said
   */
  moment_type: QuoteMoment;

  /**
   * The quote text
   */
  text: string;

  /**
   * Primary theme of the quote
   */
  theme: QuoteTheme;

  /**
   * Episode where the quote appears
   */
  episode_id?: string | null;

  /**
   * Whether this quote is humorous
   */
  is_funny?: boolean;

  /**
   * Whether this quote is inspirational
   */
  is_inspirational?: boolean;

  /**
   * Popularity/virality score (0-100)
   */
  popularity_score?: number | null;

  /**
   * Additional themes
   */
  secondary_themes?: Array<QuoteTheme>;

  /**
   * Number of times shared on social media
   */
  times_shared?: number | null;
}

export interface QuoteUpdateParams {
  character_id?: string | null;

  context?: string | null;

  episode_id?: string | null;

  is_funny?: boolean | null;

  is_inspirational?: boolean | null;

  /**
   * Types of moments when quotes occur.
   */
  moment_type?: QuoteMoment | null;

  popularity_score?: number | null;

  secondary_themes?: Array<QuoteTheme> | null;

  text?: string | null;

  /**
   * Themes that quotes can be categorized under.
   */
  theme?: QuoteTheme | null;

  times_shared?: number | null;
}

export interface QuoteListParams extends SkipLimitPageParams {
  /**
   * Filter by character
   */
  character_id?: string | null;

  /**
   * Filter funny quotes
   */
  funny?: boolean | null;

  /**
   * Filter inspirational quotes
   */
  inspirational?: boolean | null;

  /**
   * Filter by moment type
   */
  moment_type?: QuoteMoment | null;

  /**
   * Filter by theme
   */
  theme?: QuoteTheme | null;
}

export interface QuoteGetRandomParams {
  /**
   * Filter by character
   */
  character_id?: string | null;

  /**
   * Filter inspirational quotes
   */
  inspirational?: boolean | null;

  /**
   * Filter by theme
   */
  theme?: QuoteTheme | null;
}

export interface QuoteListByCharacterParams extends SkipLimitPageParams {}

export interface QuoteListByThemeParams extends SkipLimitPageParams {}

export declare namespace Quotes {
  export {
    type PaginatedResponseQuote as PaginatedResponseQuote,
    type Quote as Quote,
    type QuoteMoment as QuoteMoment,
    type QuoteTheme as QuoteTheme,
    type QuotesSkipLimitPage as QuotesSkipLimitPage,
    type QuoteCreateParams as QuoteCreateParams,
    type QuoteUpdateParams as QuoteUpdateParams,
    type QuoteListParams as QuoteListParams,
    type QuoteGetRandomParams as QuoteGetRandomParams,
    type QuoteListByCharacterParams as QuoteListByCharacterParams,
    type QuoteListByThemeParams as QuoteListByThemeParams,
  };
}
