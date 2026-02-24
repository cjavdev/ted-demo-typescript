// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Believe extends APIResource {
  /**
   * Submit your situation and receive Ted Lasso-style motivational guidance.
   *
   * @example
   * ```ts
   * const response = await client.believe.submit({
   *   situation:
   *     "I just got passed over for a promotion I've been working toward for two years.",
   *   situation_type: 'work_challenge',
   * });
   * ```
   */
  submit(body: BelieveSubmitParams, options?: RequestOptions): APIPromise<BelieveSubmitResponse> {
    return this._client.post('/believe', { body, ...options });
  }
}

/**
 * Response from the Believe Engine.
 */
export interface BelieveSubmitResponse {
  /**
   * Suggested action to take
   */
  action_suggestion: string;

  /**
   * Your current believe-o-meter score
   */
  believe_score: number;

  /**
   * A reminder to have a goldfish memory when needed
   */
  goldfish_wisdom: string;

  /**
   * A relevant Ted Lasso quote
   */
  relevant_quote: string;

  /**
   * Ted's motivational response
   */
  ted_response: string;
}

export interface BelieveSubmitParams {
  /**
   * Describe your situation
   */
  situation: string;

  /**
   * Type of situation
   */
  situation_type:
    | 'work_challenge'
    | 'personal_setback'
    | 'team_conflict'
    | 'self_doubt'
    | 'big_decision'
    | 'failure'
    | 'new_beginning'
    | 'relationship';

  /**
   * Additional context
   */
  context?: string | null;

  /**
   * How intense is the response needed (1=gentle, 10=full Ted)
   */
  intensity?: number;
}

export declare namespace Believe {
  export {
    type BelieveSubmitResponse as BelieveSubmitResponse,
    type BelieveSubmitParams as BelieveSubmitParams,
  };
}
