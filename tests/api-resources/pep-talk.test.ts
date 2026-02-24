// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TedDemo from 'ted-demo';

const client = new TedDemo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pepTalk', () => {
  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.pepTalk.retrieve();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.pepTalk.retrieve({ stream: true }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(TedDemo.NotFoundError);
  });
});
