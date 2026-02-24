// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TedDemo from 'ted-demo';

const client = new TedDemo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource believe', () => {
  // Mock server tests are disabled
  test.skip('submit: only required params', async () => {
    const responsePromise = client.believe.submit({
      situation: "I just got passed over for a promotion I've been working toward for two years.",
      situation_type: 'work_challenge',
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
  test.skip('submit: required and optional params', async () => {
    const response = await client.believe.submit({
      situation: "I just got passed over for a promotion I've been working toward for two years.",
      situation_type: 'work_challenge',
      context: "I've always tried to be a team player and support my colleagues.",
      intensity: 7,
    });
  });
});
