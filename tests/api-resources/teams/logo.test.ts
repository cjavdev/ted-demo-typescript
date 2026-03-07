// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TedDemo, { toFile } from 'ted-demo';

const client = new TedDemo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource logo', () => {
  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.teams.logo.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      team_id: 'team_id',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.teams.logo.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      team_id: 'team_id',
    });
  });

  // Mock server tests are disabled
  test.skip('download: only required params', async () => {
    const responsePromise = client.teams.logo.download('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      team_id: 'team_id',
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
  test.skip('download: required and optional params', async () => {
    const response = await client.teams.logo.download('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      team_id: 'team_id',
    });
  });

  // Mock server tests are disabled
  test.skip('upload: only required params', async () => {
    const responsePromise = client.teams.logo.upload('team_id', {
      file: await toFile(Buffer.from('Example data'), 'README.md'),
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
  test.skip('upload: required and optional params', async () => {
    const response = await client.teams.logo.upload('team_id', {
      file: await toFile(Buffer.from('Example data'), 'README.md'),
    });
  });
});
