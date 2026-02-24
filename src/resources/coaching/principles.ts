// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SkipLimitPage, type SkipLimitPageParams } from '../../core/pagination';
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
   * // Automatically fetches more pages as needed.
   * for await (const coachingPrinciple of client.coaching.principles.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PrincipleListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CoachingPrinciplesSkipLimitPage, CoachingPrinciple> {
    return this._client.getAPIList('/coaching/principles', SkipLimitPage<CoachingPrinciple>, {
      query,
      ...options,
    });
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

export type CoachingPrinciplesSkipLimitPage = SkipLimitPage<CoachingPrinciple>;

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

export interface PrincipleListParams extends SkipLimitPageParams {}

export declare namespace Principles {
  export {
    type CoachingPrinciple as CoachingPrinciple,
    type CoachingPrinciplesSkipLimitPage as CoachingPrinciplesSkipLimitPage,
    type PrincipleListParams as PrincipleListParams,
  };
}
