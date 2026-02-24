// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LogoAPI from './logo';
import {
  FileUpload,
  Logo,
  LogoDeleteParams,
  LogoDownloadParams,
  LogoDownloadResponse,
  LogoUploadParams,
} from './logo';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SkipLimitPage, type SkipLimitPageParams } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Teams extends APIResource {
  logo: LogoAPI.Logo = new LogoAPI.Logo(this._client);

  /**
   * Add a new team to the league.
   *
   * @example
   * ```ts
   * const team = await client.teams.create({
   *   culture_score: 70,
   *   founded_year: 1895,
   *   league: 'Premier League',
   *   name: 'West Ham United',
   *   stadium: 'London Stadium',
   *   values: {
   *     primary_value: 'Pride',
   *     secondary_values: ['History', 'Community', 'Passion'],
   *     team_motto: 'Forever Blowing Bubbles',
   *   },
   * });
   * ```
   */
  create(body: TeamCreateParams, options?: RequestOptions): APIPromise<Team> {
    return this._client.post('/teams', { body, ...options });
  }

  /**
   * Retrieve detailed information about a specific team.
   *
   * @example
   * ```ts
   * const team = await client.teams.retrieve('team_id');
   * ```
   */
  retrieve(teamID: string, options?: RequestOptions): APIPromise<Team> {
    return this._client.get(path`/teams/${teamID}`, options);
  }

  /**
   * Update specific fields of an existing team.
   *
   * @example
   * ```ts
   * const team = await client.teams.update('team_id');
   * ```
   */
  update(teamID: string, body: TeamUpdateParams, options?: RequestOptions): APIPromise<Team> {
    return this._client.patch(path`/teams/${teamID}`, { body, ...options });
  }

  /**
   * Get a paginated list of all teams with optional filtering by league or culture
   * score.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const team of client.teams.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TeamListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TeamsSkipLimitPage, Team> {
    return this._client.getAPIList('/teams', SkipLimitPage<Team>, { query, ...options });
  }

  /**
   * Remove a team from the database (relegation to oblivion).
   *
   * @example
   * ```ts
   * await client.teams.delete('team_id');
   * ```
   */
  delete(teamID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/teams/${teamID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get detailed culture and values information for a team.
   *
   * @example
   * ```ts
   * const response = await client.teams.getCulture('team_id');
   * ```
   */
  getCulture(teamID: string, options?: RequestOptions): APIPromise<TeamGetCultureResponse> {
    return this._client.get(path`/teams/${teamID}/culture`, options);
  }

  /**
   * Get all rival teams for a specific team.
   *
   * @example
   * ```ts
   * const teams = await client.teams.getRivals('team_id');
   * ```
   */
  getRivals(teamID: string, options?: RequestOptions): APIPromise<TeamGetRivalsResponse> {
    return this._client.get(path`/teams/${teamID}/rivals`, options);
  }

  /**
   * List all uploaded logos for a team.
   *
   * @example
   * ```ts
   * const fileUploads = await client.teams.listLogos('team_id');
   * ```
   */
  listLogos(teamID: string, options?: RequestOptions): APIPromise<TeamListLogosResponse> {
    return this._client.get(path`/teams/${teamID}/logos`, options);
  }
}

export type TeamsSkipLimitPage = SkipLimitPage<Team>;

/**
 * Geographic coordinates for a location.
 */
export interface GeoLocation {
  /**
   * Latitude in degrees
   */
  latitude: number;

  /**
   * Longitude in degrees
   */
  longitude: number;
}

/**
 * Football leagues.
 */
export type League =
  | 'Premier League'
  | 'Championship'
  | 'League One'
  | 'League Two'
  | 'La Liga'
  | 'Serie A'
  | 'Bundesliga'
  | 'Ligue 1';

/**
 * Full team model with ID.
 */
export interface Team {
  /**
   * Unique identifier
   */
  id: string;

  /**
   * Team culture/morale score (0-100)
   */
  culture_score: number;

  /**
   * Year the club was founded
   */
  founded_year: number;

  /**
   * Current league
   */
  league: League;

  /**
   * Team name
   */
  name: string;

  /**
   * Home stadium name
   */
  stadium: string;

  /**
   * Team's core values
   */
  values: TeamValues;

  /**
   * Annual budget in GBP
   */
  annual_budget_gbp?: string | null;

  /**
   * Average match attendance
   */
  average_attendance?: number | null;

  /**
   * Team contact email
   */
  contact_email?: string | null;

  /**
   * Whether the team is currently active
   */
  is_active?: boolean;

  /**
   * Team nickname
   */
  nickname?: string | null;

  /**
   * Primary team color (hex)
   */
  primary_color?: string | null;

  /**
   * List of rival team IDs
   */
  rival_teams?: Array<string>;

  /**
   * Secondary team color (hex)
   */
  secondary_color?: string | null;

  /**
   * Geographic coordinates for a location.
   */
  stadium_location?: GeoLocation | null;

  /**
   * Official team website
   */
  website?: string | null;

  /**
   * Season win percentage
   */
  win_percentage?: number | null;
}

/**
 * Core values that define a team's culture.
 */
export interface TeamValues {
  /**
   * The team's primary guiding value
   */
  primary_value: string;

  /**
   * Supporting values
   */
  secondary_values: Array<string>;

  /**
   * Team's motivational motto
   */
  team_motto: string;
}

export type TeamGetCultureResponse = { [key: string]: unknown };

export type TeamGetRivalsResponse = Array<Team>;

export type TeamListLogosResponse = Array<LogoAPI.FileUpload>;

export interface TeamCreateParams {
  /**
   * Team culture/morale score (0-100)
   */
  culture_score: number;

  /**
   * Year the club was founded
   */
  founded_year: number;

  /**
   * Current league
   */
  league: League;

  /**
   * Team name
   */
  name: string;

  /**
   * Home stadium name
   */
  stadium: string;

  /**
   * Team's core values
   */
  values: TeamValues;

  /**
   * Annual budget in GBP
   */
  annual_budget_gbp?: number | string | null;

  /**
   * Average match attendance
   */
  average_attendance?: number | null;

  /**
   * Team contact email
   */
  contact_email?: string | null;

  /**
   * Whether the team is currently active
   */
  is_active?: boolean;

  /**
   * Team nickname
   */
  nickname?: string | null;

  /**
   * Primary team color (hex)
   */
  primary_color?: string | null;

  /**
   * List of rival team IDs
   */
  rival_teams?: Array<string>;

  /**
   * Secondary team color (hex)
   */
  secondary_color?: string | null;

  /**
   * Geographic coordinates for a location.
   */
  stadium_location?: GeoLocation | null;

  /**
   * Official team website
   */
  website?: string | null;

  /**
   * Season win percentage
   */
  win_percentage?: number | null;
}

export interface TeamUpdateParams {
  annual_budget_gbp?: number | string | null;

  average_attendance?: number | null;

  contact_email?: string | null;

  culture_score?: number | null;

  founded_year?: number | null;

  is_active?: boolean | null;

  /**
   * Football leagues.
   */
  league?: League | null;

  name?: string | null;

  nickname?: string | null;

  primary_color?: string | null;

  rival_teams?: Array<string> | null;

  secondary_color?: string | null;

  stadium?: string | null;

  /**
   * Geographic coordinates for a location.
   */
  stadium_location?: GeoLocation | null;

  /**
   * Core values that define a team's culture.
   */
  values?: TeamValues | null;

  website?: string | null;

  win_percentage?: number | null;
}

export interface TeamListParams extends SkipLimitPageParams {
  /**
   * Filter by league
   */
  league?: League | null;

  /**
   * Minimum culture score
   */
  min_culture_score?: number | null;
}

Teams.Logo = Logo;

export declare namespace Teams {
  export {
    type GeoLocation as GeoLocation,
    type League as League,
    type Team as Team,
    type TeamValues as TeamValues,
    type TeamGetCultureResponse as TeamGetCultureResponse,
    type TeamGetRivalsResponse as TeamGetRivalsResponse,
    type TeamListLogosResponse as TeamListLogosResponse,
    type TeamsSkipLimitPage as TeamsSkipLimitPage,
    type TeamCreateParams as TeamCreateParams,
    type TeamUpdateParams as TeamUpdateParams,
    type TeamListParams as TeamListParams,
  };

  export {
    Logo as Logo,
    type FileUpload as FileUpload,
    type LogoDownloadResponse as LogoDownloadResponse,
    type LogoDeleteParams as LogoDeleteParams,
    type LogoDownloadParams as LogoDownloadParams,
    type LogoUploadParams as LogoUploadParams,
  };
}
