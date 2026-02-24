// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PagePromise, SkipLimitPage, type SkipLimitPageParams } from '../core/pagination';
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
   * // Automatically fetches more pages as needed.
   * for await (const biscuit of client.biscuits.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: BiscuitListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BiscuitsSkipLimitPage, Biscuit> {
    return this._client.getAPIList('/biscuits', SkipLimitPage<Biscuit>, { query, ...options });
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

export type BiscuitsSkipLimitPage = SkipLimitPage<Biscuit>;

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

export interface BiscuitListParams extends SkipLimitPageParams {}

export declare namespace Biscuits {
  export {
    type Biscuit as Biscuit,
    type BiscuitsSkipLimitPage as BiscuitsSkipLimitPage,
    type BiscuitListParams as BiscuitListParams,
  };
}
