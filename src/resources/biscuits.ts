// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Biscuits extends APIResource {
  /**
   * Get a specific type of biscuit by ID.
   *
   * @example
   * ```ts
   * const biscuit = await client.biscuits.retrieve(
   *   'biscuit_id',
   * );
   * ```
   */
  retrieve(biscuitID: string, options?: RequestOptions): APIPromise<Biscuit> {
    return this._client.get(path`/biscuits/${biscuitID}`, options);
  }

  /**
   * Get a paginated list of Ted's famous homemade biscuits! Each comes with a
   * heartwarming message.
   *
   * @example
   * ```ts
   * const biscuits = await client.biscuits.list();
   * ```
   */
  list(
    query: BiscuitListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BiscuitListResponse> {
    return this._client.get('/biscuits', { query, ...options });
  }

  /**
   * Get a single fresh biscuit with a personalized message from Ted.
   *
   * @example
   * ```ts
   * const biscuit = await client.biscuits.getFresh();
   * ```
   */
  getFresh(options?: RequestOptions): APIPromise<Biscuit> {
    return this._client.get('/biscuits/fresh', options);
  }
}

/**
 * A biscuit from Ted.
 */
export interface Biscuit {
  /**
   * Biscuit identifier
   */
  id: string;

  /**
   * Message that comes with the biscuit
   */
  message: string;

  /**
   * What this biscuit pairs well with
   */
  pairs_well_with: string;

  /**
   * A handwritten note from Ted
   */
  ted_note: string;

  /**
   * Type of biscuit
   */
  type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin';

  /**
   * How warm and fresh (1-10)
   */
  warmth_level: number;
}

export interface BiscuitListResponse {
  data: Array<Biscuit>;

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

export interface BiscuitListParams {
  /**
   * Maximum number of items to return (max: 100)
   */
  limit?: number;

  /**
   * Number of items to skip (offset)
   */
  skip?: number;
}

export declare namespace Biscuits {
  export {
    type Biscuit as Biscuit,
    type BiscuitListResponse as BiscuitListResponse,
    type BiscuitListParams as BiscuitListParams,
  };
}
