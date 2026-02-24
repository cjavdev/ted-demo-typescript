// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Reframe extends APIResource {
  /**
   * Transform negative thoughts into positive perspectives with Ted's help.
   *
   * @example
   * ```ts
   * const response =
   *   await client.reframe.transformNegativeThoughts({
   *     negative_thought: "I'm not good enough for this job.",
   *   });
   * ```
   */
  transformNegativeThoughts(
    body: ReframeTransformNegativeThoughtsParams,
    options?: RequestOptions,
  ): APIPromise<ReframeTransformNegativeThoughtsResponse> {
    return this._client.post('/reframe', { body, ...options });
  }
}

/**
 * Reframed perspective response.
 */
export interface ReframeTransformNegativeThoughtsResponse {
  /**
   * A daily affirmation to practice
   */
  daily_affirmation: string;

  /**
   * The original negative thought
   */
  original_thought: string;

  /**
   * The thought reframed positively
   */
  reframed_thought: string;

  /**
   * Ted's take on this thought
   */
  ted_perspective: string;

  /**
   * Dr. Sharon's therapeutic insight
   */
  dr_sharon_insight?: string | null;
}

export interface ReframeTransformNegativeThoughtsParams {
  /**
   * The negative thought to reframe
   */
  negative_thought: string;

  /**
   * Is this a recurring thought?
   */
  recurring?: boolean;
}

export declare namespace Reframe {
  export {
    type ReframeTransformNegativeThoughtsResponse as ReframeTransformNegativeThoughtsResponse,
    type ReframeTransformNegativeThoughtsParams as ReframeTransformNegativeThoughtsParams,
  };
}
