// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

/**
 * WebSocket endpoints for real-time bidirectional communication - Live match simulation
 */
export class Ws extends APIResource {
  /**
   * Simple WebSocket test endpoint for connectivity testing.
   *
   * Connect to test WebSocket functionality. The server will:
   *
   * 1. Send a welcome message on connection
   * 2. Echo back any message you send
   *
   * ## Example
   *
   * ```javascript
   * const ws = new WebSocket("ws://localhost:8000/ws/test");
   * ws.onmessage = (event) => console.log(event.data);
   * ws.send("Hello!"); // Server responds with echo
   * ```
   */
  test(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/ws/test', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
