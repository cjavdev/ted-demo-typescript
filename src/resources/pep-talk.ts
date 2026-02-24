// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class PepTalk extends APIResource {
  /**
   * Get a motivational pep talk from Ted Lasso himself. By default returns the
   * complete pep talk. Add `?stream=true` to get Server-Sent Events (SSE) streaming
   * the pep talk chunk by chunk.
   *
   * @example
   * ```ts
   * const pepTalk = await client.pepTalk.retrieve();
   * ```
   */
  retrieve(
    query: PepTalkRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PepTalkRetrieveResponse> {
    return this._client.get('/pep-talk', { query, ...options });
  }
}

/**
 * A complete pep talk response.
 */
export interface PepTalkRetrieveResponse {
  /**
   * Individual chunks of the pep talk
   */
  chunks: Array<PepTalkRetrieveResponse.Chunk>;

  /**
   * The full pep talk text
   */
  text: string;
}

export namespace PepTalkRetrieveResponse {
  /**
   * A chunk of a streaming pep talk from Ted.
   */
  export interface Chunk {
    /**
     * Chunk sequence number
     */
    chunk_id: number;

    /**
     * Is this the final chunk
     */
    is_final: boolean;

    /**
     * The text of this chunk
     */
    text: string;

    /**
     * The emotional purpose of this chunk (e.g., greeting, acknowledgment, wisdom,
     * affirmation, encouragement)
     */
    emotional_beat?: string | null;
  }
}

export interface PepTalkRetrieveParams {
  /**
   * If true, returns SSE stream instead of full response
   */
  stream?: boolean;
}

export declare namespace PepTalk {
  export {
    type PepTalkRetrieveResponse as PepTalkRetrieveResponse,
    type PepTalkRetrieveParams as PepTalkRetrieveParams,
  };
}
