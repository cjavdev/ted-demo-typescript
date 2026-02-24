// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TedDemo from 'ted-demo';

const client = new TedDemo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource characters', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.characters.create({
      background:
        'Legendary midfielder for Chelsea and AFC Richmond, now assistant coach. Known for his gruff exterior hiding a heart of gold.',
      emotional_stats: {
        curiosity: 40,
        empathy: 85,
        optimism: 45,
        resilience: 95,
        vulnerability: 60,
      },
      name: 'Roy Kent',
      personality_traits: ['intense', 'loyal', 'secretly caring', 'profane'],
      role: 'coach',
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
    const response = await client.characters.create({
      background:
        'Legendary midfielder for Chelsea and AFC Richmond, now assistant coach. Known for his gruff exterior hiding a heart of gold.',
      emotional_stats: {
        curiosity: 40,
        empathy: 85,
        optimism: 45,
        resilience: 95,
        vulnerability: 60,
      },
      name: 'Roy Kent',
      personality_traits: ['intense', 'loyal', 'secretly caring', 'profane'],
      role: 'coach',
      date_of_birth: '1977-03-15',
      email: 'roy.kent@afcrichmond.com',
      growth_arcs: [
        {
          breakthrough: 'Finding purpose beyond playing',
          challenge: "Accepting his body's limitations",
          ending_point: 'Retired but lost',
          season: 1,
          starting_point: 'Aging footballer facing retirement',
        },
      ],
      height_meters: 1.78,
      profile_image_url: 'https://afcrichmond.com/images/roy-kent.jpg',
      salary_gbp: '175000.00',
      signature_quotes: ["He's here, he's there, he's every-f***ing-where, Roy Kent!", 'Whistle!'],
      team_id: 'afc-richmond',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.characters.retrieve('character_id');
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
    const responsePromise = client.characters.update('character_id', {});
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
    const responsePromise = client.characters.list();
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
      client.characters.list(
        {
          limit: 10,
          min_optimism: 0,
          role: 'coach',
          skip: 0,
          team_id: 'team_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TedDemo.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.characters.delete('character_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getQuotes', async () => {
    const responsePromise = client.characters.getQuotes('character_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
