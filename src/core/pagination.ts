// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { TedDemoError } from './error';
import { FinalRequestOptions } from '../internal/request-options';
import { defaultParseResponse } from '../internal/parse';
import { type TedDemo } from '../client';
import { APIPromise } from './api-promise';
import { type APIResponseProps } from '../internal/parse';
import { maybeObj } from '../internal/utils/values';

export type PageRequestOptions = Pick<FinalRequestOptions, 'query' | 'headers' | 'body' | 'path' | 'method'>;

export abstract class AbstractPage<Item> implements AsyncIterable<Item> {
  #client: TedDemo;
  protected options: FinalRequestOptions;

  protected response: Response;
  protected body: unknown;

  constructor(client: TedDemo, response: Response, body: unknown, options: FinalRequestOptions) {
    this.#client = client;
    this.options = options;
    this.response = response;
    this.body = body;
  }

  abstract nextPageRequestOptions(): PageRequestOptions | null;

  abstract getPaginatedItems(): Item[];

  hasNextPage(): boolean {
    const items = this.getPaginatedItems();
    if (!items.length) return false;
    return this.nextPageRequestOptions() != null;
  }

  async getNextPage(): Promise<this> {
    const nextOptions = this.nextPageRequestOptions();
    if (!nextOptions) {
      throw new TedDemoError(
        'No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.',
      );
    }

    return await this.#client.requestAPIList(this.constructor as any, nextOptions);
  }

  async *iterPages(): AsyncGenerator<this> {
    let page: this = this;
    yield page;
    while (page.hasNextPage()) {
      page = await page.getNextPage();
      yield page;
    }
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    for await (const page of this.iterPages()) {
      for (const item of page.getPaginatedItems()) {
        yield item;
      }
    }
  }
}

/**
 * This subclass of Promise will resolve to an instantiated Page once the request completes.
 *
 * It also implements AsyncIterable to allow auto-paginating iteration on an unawaited list call, eg:
 *
 *    for await (const item of client.items.list()) {
 *      console.log(item)
 *    }
 */
export class PagePromise<
    PageClass extends AbstractPage<Item>,
    Item = ReturnType<PageClass['getPaginatedItems']>[number],
  >
  extends APIPromise<PageClass>
  implements AsyncIterable<Item>
{
  constructor(
    client: TedDemo,
    request: Promise<APIResponseProps>,
    Page: new (...args: ConstructorParameters<typeof AbstractPage>) => PageClass,
  ) {
    super(
      client,
      request,
      async (client, props) =>
        new Page(client, props.response, await defaultParseResponse(client, props), props.options),
    );
  }

  /**
   * Allow auto-paginating iteration on an unawaited list call, eg:
   *
   *    for await (const item of client.items.list()) {
   *      console.log(item)
   *    }
   */
  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    const page = await this;
    for await (const item of page) {
      yield item;
    }
  }
}

export interface SkipLimitPageResponse<Item> {
  data: Array<Item>;

  total: number;

  skip: number;
}

export interface SkipLimitPageParams {
  /**
   * Number of items to skip (offset).
   */
  skip?: number;

  /**
   * Maximum number of items to return.
   */
  limit?: number;
}

export class SkipLimitPage<Item> extends AbstractPage<Item> implements SkipLimitPageResponse<Item> {
  data: Array<Item>;

  total: number;

  skip: number;

  constructor(
    client: TedDemo,
    response: Response,
    body: SkipLimitPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.data = body.data || [];
    this.total = body.total || 0;
    this.skip = body.skip || 0;
  }

  getPaginatedItems(): Item[] {
    return this.data ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const offset = this.skip ?? 0;
    const length = this.getPaginatedItems().length;
    const currentCount = offset + length;

    const totalCount = this.total;
    if (!totalCount) {
      return null;
    }

    if (currentCount < totalCount) {
      return {
        ...this.options,
        query: {
          ...maybeObj(this.options.query),
          skip: currentCount,
        },
      };
    }

    return null;
  }
}
