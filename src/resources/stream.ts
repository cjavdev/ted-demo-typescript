// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Stream extends APIResource {
  /**
   * A simple SSE test endpoint that streams numbers 1-5.
   */
  testConnection(options?: RequestOptions): APIPromise<unknown> {
    return this._client.get('/stream/test', options);
  }
}

export type StreamTestConnectionResponse = unknown;

export declare namespace Stream {
  export { type StreamTestConnectionResponse as StreamTestConnectionResponse };
}
