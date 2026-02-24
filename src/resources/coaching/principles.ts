// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Principles extends APIResource {
  /**
   * Get details about a specific coaching principle.
   *
   * @example
   * ```ts
   * const coachingPrinciple =
   *   await client.coaching.principles.retrieve('principle_id');
   * ```
   */
  retrieve(principleID: string, options?: RequestOptions): APIPromise<CoachingPrinciple> {
    return this._client.get(path`/coaching/principles/${principleID}`, options);
  }

  /**
   * Get a paginated list of Ted Lasso's core coaching principles and philosophy.
   *
   * @example
   * ```ts
   * const principles = await client.coaching.principles.list();
   * ```
   */
  list(
    query: PrincipleListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PrincipleListResponse> {
    return this._client.get('/coaching/principles', { query, ...options });
  }

  /**
   * Get a random coaching principle to inspire your day.
   *
   * @example
   * ```ts
   * const coachingPrinciple =
   *   await client.coaching.principles.getRandom();
   * ```
   */
  getRandom(options?: RequestOptions): APIPromise<CoachingPrinciple> {
    return this._client.get('/coaching/principles/random', options);
  }
}

/**
 * A Ted Lasso coaching principle.
 */
export interface CoachingPrinciple {
  /**
   * Principle identifier
   */
  id: string;

  /**
   * How to apply this principle
   */
  application: string;

  /**
   * Example from the show
   */
  example_from_show: string;

  /**
   * What this principle means
   */
  explanation: string;

  /**
   * The coaching principle
   */
  principle: string;

  /**
   * Related Ted quote
   */
  ted_quote: string;
}

export interface PrincipleListResponse {
  data: Array<CoachingPrinciple>;

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

export interface PrincipleListParams {
  /**
   * Maximum number of items to return (max: 100)
   */
  limit?: number;

  /**
   * Number of items to skip (offset)
   */
  skip?: number;
}

export declare namespace Principles {
  export {
    type CoachingPrinciple as CoachingPrinciple,
    type PrincipleListResponse as PrincipleListResponse,
    type PrincipleListParams as PrincipleListParams,
  };
}
