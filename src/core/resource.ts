// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { TedDemo } from '../client';

export abstract class APIResource {
  protected _client: TedDemo;

  constructor(client: TedDemo) {
    this._client = client;
  }
}
