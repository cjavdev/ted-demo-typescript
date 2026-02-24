// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TedDemo from 'ted-demo';

const client = new TedDemo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reframe', () => {
  // Mock server tests are disabled
  test.skip('transformNegativeThoughts: only required params', async () => {
    const responsePromise = client.reframe.transformNegativeThoughts({
      negative_thought: "I'm not good enough for this job.",
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
  test.skip('transformNegativeThoughts: required and optional params', async () => {
    const response = await client.reframe.transformNegativeThoughts({
      negative_thought: "I'm not good enough for this job.",
      recurring: true,
    });
  });
});
