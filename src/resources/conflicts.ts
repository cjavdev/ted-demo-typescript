// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Conflicts extends APIResource {
  /**
   * Get Ted Lasso-style advice for resolving conflicts.
   *
   * @example
   * ```ts
   * const response = await client.conflicts.resolve({
   *   conflict_type: 'interpersonal',
   *   description:
   *     "Alex keeps taking credit for my ideas in meetings and I'm getting resentful.",
   *   parties_involved: ['Me', 'My teammate Alex'],
   * });
   * ```
   */
  resolve(body: ConflictResolveParams, options?: RequestOptions): APIPromise<ConflictResolveResponse> {
    return this._client.post('/conflicts/resolve', { body, ...options });
  }
}

/**
 * Conflict resolution response.
 */
export interface ConflictResolveResponse {
  /**
   * A folksy metaphor to remember
   */
  barbecue_sauce_wisdom: string;

  /**
   * Understanding the root cause
   */
  diagnosis: string;

  /**
   * Advice from the Diamond Dogs support group
   */
  diamond_dogs_advice: string;

  /**
   * What resolution could look like
   */
  potential_outcome: string;

  /**
   * Concrete steps to resolve the conflict
   */
  steps_to_resolution: Array<string>;

  /**
   * How Ted would handle this
   */
  ted_approach: string;
}

export interface ConflictResolveParams {
  /**
   * Type of conflict
   */
  conflict_type:
    | 'interpersonal'
    | 'team_dynamics'
    | 'leadership'
    | 'ego'
    | 'miscommunication'
    | 'competition';

  /**
   * Describe the conflict
   */
  description: string;

  /**
   * Who is involved in the conflict
   */
  parties_involved: Array<string>;

  /**
   * What you've already tried
   */
  attempts_made?: Array<string> | null;
}

export declare namespace Conflicts {
  export {
    type ConflictResolveResponse as ConflictResolveResponse,
    type ConflictResolveParams as ConflictResolveParams,
  };
}
