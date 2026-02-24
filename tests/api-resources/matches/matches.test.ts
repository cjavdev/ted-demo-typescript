// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TedDemo from 'ted-demo';

const client = new TedDemo({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource matches', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.matches.create({
      away_team_id: 'tottenham',
      date: '2024-02-20T19:45:00Z',
      home_team_id: 'afc-richmond',
      match_type: 'cup',
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
    const response = await client.matches.create({
      away_team_id: 'tottenham',
      date: '2024-02-20T19:45:00Z',
      home_team_id: 'afc-richmond',
      match_type: 'cup',
      attendance: 24500,
      away_score: 0,
      episode_id: 's02e05',
      home_score: 0,
      lesson_learned:
        "It's not about the wins and losses, it's about helping these young fellas be the best versions of themselves.",
      possession_percentage: 50,
      result: 'pending',
      ted_halftime_speech:
        "You know what the happiest animal on Earth is? It's a goldfish. You know why? It's got a 10-second memory.",
      ticket_revenue_gbp: '735000.00',
      turning_points: [
        {
          description: 'description',
          emotional_impact: "Galvanized the team's fighting spirit",
          minute: 0,
          character_involved: 'jamie-tartt',
        },
      ],
      weather_temp_celsius: 8.5,
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.matches.retrieve('match_id');
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
    const responsePromise = client.matches.update('match_id', {});
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
    const responsePromise = client.matches.list();
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
      client.matches.list(
        {
          limit: 10,
          match_type: 'league',
          result: 'win',
          skip: 0,
          team_id: 'team_id',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TedDemo.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.matches.delete('match_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getLesson', async () => {
    const responsePromise = client.matches.getLesson('match_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getTurningPoints', async () => {
    const responsePromise = client.matches.getTurningPoints('match_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('streamLiveSimulation', async () => {
    const responsePromise = client.matches.streamLiveSimulation();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('streamLiveSimulation: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.matches.streamLiveSimulation(
        {
          away_team: 'away_team',
          excitement_level: 1,
          home_team: 'home_team',
          speed: 0.1,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(TedDemo.NotFoundError);
  });
});
