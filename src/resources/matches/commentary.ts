// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Commentary extends APIResource {
  /**
   * Stream live match commentary for a specific match. Uses Server-Sent Events (SSE)
   * to stream commentary events in real-time.
   *
   * @example
   * ```ts
   * const response = await client.matches.commentary.stream(
   *   'match_id',
   * );
   * ```
   */
  stream(matchID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(path`/matches/${matchID}/commentary/stream`, options);
  }
}

export type CommentaryStreamResponse = unknown;

export declare namespace Commentary {
  export { type CommentaryStreamResponse as CommentaryStreamResponse };
}
