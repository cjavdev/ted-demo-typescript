// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PagePromise, SkipLimitPage, type SkipLimitPageParams } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Operations related to TV episodes
 */
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
   * // Automatically fetches more pages as needed.
   * for await (const episode of client.episodes.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EpisodeListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EpisodesSkipLimitPage, Episode> {
    return this._client.getAPIList('/episodes', SkipLimitPage<Episode>, { query, ...options });
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

export type EpisodesSkipLimitPage = SkipLimitPage<Episode>;

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

export interface EpisodeListParams extends SkipLimitPageParams {
  /**
   * Filter by character focus (character ID)
   */
  character_focus?: string | null;

  /**
   * Filter by season
   */
  season?: number | null;
}

export declare namespace Episodes {
  export {
    type Episode as Episode,
    type EpisodeGetWisdomResponse as EpisodeGetWisdomResponse,
    type EpisodesSkipLimitPage as EpisodesSkipLimitPage,
    type EpisodeCreateParams as EpisodeCreateParams,
    type EpisodeUpdateParams as EpisodeUpdateParams,
    type EpisodeListParams as EpisodeListParams,
  };
}
