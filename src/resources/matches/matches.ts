// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CommentaryAPI from './commentary';
import { Commentary, CommentaryStreamResponse } from './commentary';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Matches extends APIResource {
  commentary: CommentaryAPI.Commentary = new CommentaryAPI.Commentary(this._client);

  /**
   * Schedule a new match.
   *
   * @example
   * ```ts
   * const match = await client.matches.create({
   *   away_team_id: 'tottenham',
   *   date: '2024-02-20T19:45:00Z',
   *   home_team_id: 'afc-richmond',
   *   match_type: 'cup',
   * });
   * ```
   */
  create(body: MatchCreateParams, options?: RequestOptions): APIPromise<Match> {
    return this._client.post('/matches', { body, ...options });
  }

  /**
   * Retrieve detailed information about a specific match.
   *
   * @example
   * ```ts
   * const match = await client.matches.retrieve('match_id');
   * ```
   */
  retrieve(matchID: string, options?: RequestOptions): APIPromise<Match> {
    return this._client.get(path`/matches/${matchID}`, options);
  }

  /**
   * Update specific fields of an existing match (e.g., update score).
   *
   * @example
   * ```ts
   * const match = await client.matches.update('match_id');
   * ```
   */
  update(matchID: string, body: MatchUpdateParams, options?: RequestOptions): APIPromise<Match> {
    return this._client.patch(path`/matches/${matchID}`, { body, ...options });
  }

  /**
   * Get a paginated list of all matches with optional filtering.
   *
   * @example
   * ```ts
   * const matches = await client.matches.list();
   * ```
   */
  list(
    query: MatchListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MatchListResponse> {
    return this._client.get('/matches', { query, ...options });
  }

  /**
   * Remove a match from the database.
   *
   * @example
   * ```ts
   * await client.matches.delete('match_id');
   * ```
   */
  delete(matchID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/matches/${matchID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get the life lesson learned from a specific match.
   *
   * @example
   * ```ts
   * const response = await client.matches.getLesson('match_id');
   * ```
   */
  getLesson(matchID: string, options?: RequestOptions): APIPromise<MatchGetLessonResponse> {
    return this._client.get(path`/matches/${matchID}/lesson`, options);
  }

  /**
   * Get all turning points from a specific match.
   *
   * @example
   * ```ts
   * const response = await client.matches.getTurningPoints(
   *   'match_id',
   * );
   * ```
   */
  getTurningPoints(matchID: string, options?: RequestOptions): APIPromise<MatchGetTurningPointsResponse> {
    return this._client.get(path`/matches/${matchID}/turning-points`, options);
  }

  /**
   * WebSocket endpoint for real-time live match simulation.
   *
   * Connect to receive a stream of match events as they happen in a simulated
   * football match.
   *
   * ## Connection
   *
   * Connect via WebSocket with optional query parameters to customize the
   * simulation.
   *
   * ## Example WebSocket URL
   *
   * ```
   * ws://localhost:8000/matches/live?home_team=AFC%20Richmond&away_team=Manchester%20City&speed=2.0&excitement_level=7
   * ```
   *
   * ## Server Messages
   *
   * The server sends JSON messages with these types:
   *
   * - `match_start` - When the match begins
   * - `match_event` - For each match event (goals, fouls, cards, etc.)
   * - `match_end` - When the match concludes
   * - `error` - If an error occurs
   * - `pong` - Response to client ping
   *
   * ## Client Messages
   *
   * Send JSON to control the simulation:
   *
   * - `{"action": "ping"}` - Keep-alive, server responds with `{"type": "pong"}`
   * - `{"action": "pause"}` - Pause the simulation
   * - `{"action": "resume"}` - Resume a paused simulation
   * - `{"action": "set_speed", "speed": 2.0}` - Change playback speed (0.1-10.0)
   * - `{"action": "get_status"}` - Request current match status
   *
   * @example
   * ```ts
   * await client.matches.streamLiveSimulation();
   * ```
   */
  streamLiveSimulation(
    query: MatchStreamLiveSimulationParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.get('/matches/live', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Full match model with ID.
 */
export interface Match {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Away team ID
   */
  away_team_id: string;

  /**
   * Match date and time
   */
  date: string;

  /**
   * Home team ID
   */
  home_team_id: string;

  /**
   * Type of match
   */
  match_type: MatchType;

  /**
   * Match attendance
   */
  attendance?: number | null;

  /**
   * Away team score
   */
  away_score?: number;

  /**
   * Episode ID where this match is featured
   */
  episode_id?: string | null;

  /**
   * Home team score
   */
  home_score?: number;

  /**
   * The life lesson learned from this match
   */
  lesson_learned?: string | null;

  /**
   * Home team possession percentage
   */
  possession_percentage?: number | null;

  /**
   * Match result from home team perspective
   */
  result?: MatchResult;

  /**
   * Ted's inspirational halftime speech
   */
  ted_halftime_speech?: string | null;

  /**
   * Total ticket revenue in GBP
   */
  ticket_revenue_gbp?: string | null;

  /**
   * Key moments that changed the match
   */
  turning_points?: Array<TurningPoint>;

  /**
   * Temperature at kickoff in Celsius
   */
  weather_temp_celsius?: number | null;
}

/**
 * Match result types.
 */
export type MatchResult = 'win' | 'loss' | 'draw' | 'pending';

/**
 * Types of matches.
 */
export type MatchType = 'league' | 'cup' | 'friendly' | 'playoff' | 'final';

/**
 * A pivotal moment in a match.
 */
export interface TurningPoint {
  /**
   * What happened
   */
  description: string;

  /**
   * How this affected the team emotionally
   */
  emotional_impact: string;

  /**
   * Minute of the match
   */
  minute: number;

  /**
   * Character ID who was central to this moment
   */
  character_involved?: string | null;
}

export interface MatchListResponse {
  data: Array<Match>;

  /**
   * Whether there are more items after this page.
   */
  has_more: boolean;

  limit: number;

  /**
   * Current page number (1-indexed, for display purposes).
   */
  page: number;

  /**
   * Total number of pages.
   */
  pages: number;

  skip: number;

  total: number;
}

export type MatchGetLessonResponse = { [key: string]: unknown };

export type MatchGetTurningPointsResponse = Array<{ [key: string]: unknown }>;

export interface MatchCreateParams {
  /**
   * Away team ID
   */
  away_team_id: string;

  /**
   * Match date and time
   */
  date: string;

  /**
   * Home team ID
   */
  home_team_id: string;

  /**
   * Type of match
   */
  match_type: MatchType;

  /**
   * Match attendance
   */
  attendance?: number | null;

  /**
   * Away team score
   */
  away_score?: number;

  /**
   * Episode ID where this match is featured
   */
  episode_id?: string | null;

  /**
   * Home team score
   */
  home_score?: number;

  /**
   * The life lesson learned from this match
   */
  lesson_learned?: string | null;

  /**
   * Home team possession percentage
   */
  possession_percentage?: number | null;

  /**
   * Match result from home team perspective
   */
  result?: MatchResult;

  /**
   * Ted's inspirational halftime speech
   */
  ted_halftime_speech?: string | null;

  /**
   * Total ticket revenue in GBP
   */
  ticket_revenue_gbp?: number | string | null;

  /**
   * Key moments that changed the match
   */
  turning_points?: Array<TurningPoint>;

  /**
   * Temperature at kickoff in Celsius
   */
  weather_temp_celsius?: number | null;
}

export interface MatchUpdateParams {
  attendance?: number | null;

  away_score?: number | null;

  away_team_id?: string | null;

  date?: string | null;

  episode_id?: string | null;

  home_score?: number | null;

  home_team_id?: string | null;

  lesson_learned?: string | null;

  /**
   * Types of matches.
   */
  match_type?: MatchType | null;

  possession_percentage?: number | null;

  /**
   * Match result types.
   */
  result?: MatchResult | null;

  ted_halftime_speech?: string | null;

  ticket_revenue_gbp?: number | string | null;

  turning_points?: Array<TurningPoint> | null;

  weather_temp_celsius?: number | null;
}

export interface MatchListParams {
  /**
   * Maximum number of items to return (max: 100)
   */
  limit?: number;

  /**
   * Filter by match type
   */
  match_type?: MatchType | null;

  /**
   * Filter by result
   */
  result?: MatchResult | null;

  /**
   * Number of items to skip (offset)
   */
  skip?: number;

  /**
   * Filter by team (home or away)
   */
  team_id?: string | null;
}

export interface MatchStreamLiveSimulationParams {
  /**
   * Away team name
   */
  away_team?: string;

  /**
   * How eventful the match should be (1=boring, 10=chaos)
   */
  excitement_level?: number;

  /**
   * Home team name
   */
  home_team?: string;

  /**
   * Simulation speed multiplier (1.0 = real-time)
   */
  speed?: number;
}

Matches.Commentary = Commentary;

export declare namespace Matches {
  export {
    type Match as Match,
    type MatchResult as MatchResult,
    type MatchType as MatchType,
    type TurningPoint as TurningPoint,
    type MatchListResponse as MatchListResponse,
    type MatchGetLessonResponse as MatchGetLessonResponse,
    type MatchGetTurningPointsResponse as MatchGetTurningPointsResponse,
    type MatchCreateParams as MatchCreateParams,
    type MatchUpdateParams as MatchUpdateParams,
    type MatchListParams as MatchListParams,
    type MatchStreamLiveSimulationParams as MatchStreamLiveSimulationParams,
  };

  export { Commentary as Commentary, type CommentaryStreamResponse as CommentaryStreamResponse };
}
