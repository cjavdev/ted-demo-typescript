// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TedDemo from 'ted-demo';

const client = new TedDemo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource press', () => {
  // Mock server tests are disabled
  test.skip('simulate: only required params', async () => {
    const responsePromise = client.press.simulate({
      question: 'Ted, your team just lost 5-0. How do you explain this embarrassing defeat?',
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
  test.skip('simulate: required and optional params', async () => {
    const response = await client.press.simulate({
      question: 'Ted, your team just lost 5-0. How do you explain this embarrassing defeat?',
      hostile: true,
      topic: 'match_result',
    });
  });
});
