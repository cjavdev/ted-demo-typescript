// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Episodes extends APIResource {
  /**
   * Add a new episode to the series.
   *
   * @example
   * ```ts
   * const episode = await client.episodes.create({
   *   air_date: '2020-10-02',
   *   character_focus: [
   *     'ted-lasso',
   *     'coach-beard',
   *     'higgins',
   *     'nate',
   *   ],
   *   director: 'MJ Delaney',
   *   episode_number: 8,
   *   main_theme:
   *     'The power of vulnerability and male friendship',
   *   runtime_minutes: 29,
   *   season: 1,
   *   synopsis:
   *     'Ted creates a support group for the coaching staff while Rebecca faces a difficult decision about her future.',
   *   ted_wisdom:
   *     "There's two buttons I never like to hit: that's panic and snooze.",
   *   title: 'The Diamond Dogs',
   *   writer: 'Jason Sudeikis, Brendan Hunt, Joe Kelly',
   * });
   * ```
   */
  create(body: EpisodeCreateParams, options?: RequestOptions): APIPromise<Episode> {
    return this._client.post('/episodes', { body, ...options });
  }

  /**
   * Retrieve detailed information about a specific episode.
   *
   * @example
   * ```ts
   * const episode = await client.episodes.retrieve(
   *   'episode_id',
   * );
   * ```
   */
  retrieve(episodeID: string, options?: RequestOptions): APIPromise<Episode> {
    return this._client.get(path`/episodes/${episodeID}`, options);
  }

  /**
   * Update specific fields of an existing episode.
   *
   * @example
   * ```ts
   * const episode = await client.episodes.update('episode_id');
   * ```
   */
  update(episodeID: string, body: EpisodeUpdateParams, options?: RequestOptions): APIPromise<Episode> {
    return this._client.patch(path`/episodes/${episodeID}`, { body, ...options });
  }

  /**
   * Get a paginated list of all Ted Lasso episodes with optional filtering by
   * season.
   *
   * @example
   * ```ts
   * const episodes = await client.episodes.list();
   * ```
   */
  list(
    query: EpisodeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EpisodeListResponse> {
    return this._client.get('/episodes', { query, ...options });
  }

  /**
   * Remove an episode from the database.
   *
   * @example
   * ```ts
   * await client.episodes.delete('episode_id');
   * ```
   */
  delete(episodeID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/episodes/${episodeID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get Ted's wisdom and memorable moments from a specific episode.
   *
   * @example
   * ```ts
   * const response = await client.episodes.getWisdom(
   *   'episode_id',
   * );
   * ```
   */
  getWisdom(episodeID: string, options?: RequestOptions): APIPromise<EpisodeGetWisdomResponse> {
    return this._client.get(path`/episodes/${episodeID}/wisdom`, options);
  }
}

/**
 * Full episode model with ID.
 */
export interface Episode {
  /**
   * Unique identifier (format: s##e##)
   */
  id: string;

  /**
   * Original air date
   */
  air_date: string;

  /**
   * Characters with significant development
   */
  character_focus: Array<string>;

  /**
   * Episode director
   */
  director: string;

  /**
   * Episode number within season
   */
  episode_number: number;

  /**
   * Central theme of the episode
   */
  main_theme: string;

  /**
   * Episode runtime in minutes
   */
  runtime_minutes: number;

  /**
   * Season number
   */
  season: number;

  /**
   * Brief plot synopsis
   */
  synopsis: string;

  /**
   * Key piece of Ted wisdom from the episode
   */
  ted_wisdom: string;

  /**
   * Episode title
   */
  title: string;

  /**
   * Episode writer(s)
   */
  writer: string;

  /**
   * Notable biscuits with the boss scene
   */
  biscuits_with_boss_moment?: string | null;

  /**
   * Standout moments from the episode
   */
  memorable_moments?: Array<string>;

  /**
   * US viewership in millions
   */
  us_viewers_millions?: number | null;

  /**
   * Viewer rating out of 10
   */
  viewer_rating?: number | null;
}

export interface EpisodeListResponse {
  data: Array<Episode>;

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

export type EpisodeGetWisdomResponse = { [key: string]: unknown };

export interface EpisodeCreateParams {
  /**
   * Original air date
   */
  air_date: string;

  /**
   * Characters with significant development
   */
  character_focus: Array<string>;

  /**
   * Episode director
   */
  director: string;

  /**
   * Episode number within season
   */
  episode_number: number;

  /**
   * Central theme of the episode
   */
  main_theme: string;

  /**
   * Episode runtime in minutes
   */
  runtime_minutes: number;

  /**
   * Season number
   */
  season: number;

  /**
   * Brief plot synopsis
   */
  synopsis: string;

  /**
   * Key piece of Ted wisdom from the episode
   */
  ted_wisdom: string;

  /**
   * Episode title
   */
  title: string;

  /**
   * Episode writer(s)
   */
  writer: string;

  /**
   * Notable biscuits with the boss scene
   */
  biscuits_with_boss_moment?: string | null;

  /**
   * Standout moments from the episode
   */
  memorable_moments?: Array<string>;

  /**
   * US viewership in millions
   */
  us_viewers_millions?: number | null;

  /**
   * Viewer rating out of 10
   */
  viewer_rating?: number | null;
}

export interface EpisodeUpdateParams {
  air_date?: string | null;

  biscuits_with_boss_moment?: string | null;

  character_focus?: Array<string> | null;

  director?: string | null;

  episode_number?: number | null;

  main_theme?: string | null;

  memorable_moments?: Array<string> | null;

  runtime_minutes?: number | null;

  season?: number | null;

  synopsis?: string | null;

  ted_wisdom?: string | null;

  title?: string | null;

  us_viewers_millions?: number | null;

  viewer_rating?: number | null;

  writer?: string | null;
}

export interface EpisodeListParams {
  /**
   * Filter by character focus (character ID)
   */
  character_focus?: string | null;

  /**
   * Maximum number of items to return (max: 100)
   */
  limit?: number;

  /**
   * Filter by season
   */
  season?: number | null;

  /**
   * Number of items to skip (offset)
   */
  skip?: number;
}

export declare namespace Episodes {
  export {
    type Episode as Episode,
    type EpisodeListResponse as EpisodeListResponse,
    type EpisodeGetWisdomResponse as EpisodeGetWisdomResponse,
    type EpisodeCreateParams as EpisodeCreateParams,
    type EpisodeUpdateParams as EpisodeUpdateParams,
    type EpisodeListParams as EpisodeListParams,
  };
}
