// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TedDemo from 'ted-demo';

const client = new TedDemo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource episodes', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.episodes.create({
      air_date: '2020-10-02',
      character_focus: ['ted-lasso', 'coach-beard', 'higgins', 'nate'],
      director: 'MJ Delaney',
      episode_number: 8,
      main_theme: 'The power of vulnerability and male friendship',
      runtime_minutes: 29,
      season: 1,
      synopsis:
        'Ted creates a support group for the coaching staff while Rebecca faces a difficult decision about her future.',
      ted_wisdom: "There's two buttons I never like to hit: that's panic and snooze.",
      title: 'The Diamond Dogs',
      writer: 'Jason Sudeikis, Brendan Hunt, Joe Kelly',
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
    const response = await client.episodes.create({
      air_date: '2020-10-02',
      character_focus: ['ted-lasso', 'coach-beard', 'higgins', 'nate'],
      director: 'MJ Delaney',
      episode_number: 8,
      main_theme: 'The power of vulnerability and male friendship',
      runtime_minutes: 29,
      season: 1,
      synopsis:
        'Ted creates a support group for the coaching staff while Rebecca faces a difficult decision about her future.',
      ted_wisdom: "There's two buttons I never like to hit: that's panic and snooze.",
      title: 'The Diamond Dogs',
      writer: 'Jason Sudeikis, Brendan Hunt, Joe Kelly',
      biscuits_with_boss_moment: 'Ted and Rebecca have an honest conversation about trust.',
      memorable_moments: [
        'First Diamond Dogs meeting',
        'The famous dart scene with Rupert',
        'Be curious, not judgmental speech',
      ],
      us_viewers_millions: 1.42,
      viewer_rating: 9.1,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.episodes.retrieve('episode_id');
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
    const responsePromise = client.episodes.update('episode_id', {});
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
    const responsePromise = client.episodes.list();
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
      client.episodes.list(
        {
          character_focus: 'character_focus',
          limit: 10,
          season: 1,
          skip: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TedDemo.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.episodes.delete('episode_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getWisdom', async () => {
    const responsePromise = client.episodes.getWisdom('episode_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
