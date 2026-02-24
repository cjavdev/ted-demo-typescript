// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Press extends APIResource {
  /**
   * Get Ted's response to press conference questions.
   *
   * @example
   * ```ts
   * const response = await client.press.simulate({
   *   question:
   *     'Ted, your team just lost 5-0. How do you explain this embarrassing defeat?',
   * });
   * ```
   */
  simulate(body: PressSimulateParams, options?: RequestOptions): APIPromise<PressSimulateResponse> {
    return this._client.post('/press', { body, ...options });
  }
}

/**
 * Ted's press conference response.
 */
export interface PressSimulateResponse {
  /**
   * The actual wisdom beneath the humor
   */
  actual_wisdom: string;

  /**
   * How Ted would dodge a follow-up
   */
  follow_up_dodge: string;

  /**
   * How reporters would react
   */
  reporter_reaction: string;

  /**
   * Ted's press conference answer
   */
  response: string;

  /**
   * Humorous deflection if appropriate
   */
  deflection_humor?: string | null;
}

export interface PressSimulateParams {
  /**
   * The press question to answer
   */
  question: string;

  /**
   * Is this a hostile question from Trent Crimm?
   */
  hostile?: boolean;

  /**
   * Topic category
   */
  topic?: string | null;
}

export declare namespace Press {
  export {
    type PressSimulateResponse as PressSimulateResponse,
    type PressSimulateParams as PressSimulateParams,
  };
}
