// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TedDemo from 'ted-demo';

const client = new TedDemo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource quotes', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.quotes.create({
      character_id: 'ted-lasso',
      context: "Ted's first team meeting, revealing his coaching philosophy",
      moment_type: 'locker_room',
      text: 'I believe in believe.',
      theme: 'belief',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.quotes.create({
      character_id: 'ted-lasso',
      context: "Ted's first team meeting, revealing his coaching philosophy",
      moment_type: 'locker_room',
      text: 'I believe in believe.',
      theme: 'belief',
      episode_id: 's01e01',
      is_funny: false,
      is_inspirational: true,
      popularity_score: 98.5,
      secondary_themes: ['leadership', 'teamwork'],
      times_shared: 250000,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.quotes.retrieve('quote_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.quotes.update('quote_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.quotes.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.quotes.list(
        {
          character_id: 'character_id',
          funny: true,
          inspirational: true,
          limit: 10,
          moment_type: 'halftime_speech',
          skip: 0,
          theme: 'belief',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TedDemo.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.quotes.delete('quote_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getRandom', async () => {
    const responsePromise = client.quotes.getRandom();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getRandom: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.quotes.getRandom(
        {
          character_id: 'character_id',
          inspirational: true,
          theme: 'belief',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TedDemo.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listByCharacter', async () => {
    const responsePromise = client.quotes.listByCharacter('character_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listByCharacter: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.quotes.listByCharacter(
        'character_id',
        { limit: 10, skip: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TedDemo.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listByTheme', async () => {
    const responsePromise = client.quotes.listByTheme('belief');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listByTheme: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.quotes.listByTheme('belief', { limit: 10, skip: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(TedDemo.NotFoundError);
  });
});
