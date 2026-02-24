// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Logo extends APIResource {
  /**
   * Delete a team's logo.
   *
   * @example
   * ```ts
   * await client.teams.logo.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { team_id: 'team_id' },
   * );
   * ```
   */
  delete(fileID: string, params: LogoDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { team_id } = params;
    return this._client.delete(path`/teams/${team_id}/logo/${fileID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Download a team's logo by file ID.
   *
   * @example
   * ```ts
   * const response = await client.teams.logo.download(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { team_id: 'team_id' },
   * );
   * ```
   */
  download(fileID: string, params: LogoDownloadParams, options?: RequestOptions): APIPromise<unknown> {
    const { team_id } = params;
    return this._client.get(path`/teams/${team_id}/logo/${fileID}`, options);
  }

  /**
   * Upload a logo image for a team. Accepts image files (jpg, png, gif, webp).
   *
   * @example
   * ```ts
   * const fileUpload = await client.teams.logo.upload(
   *   'team_id',
   *   { file: fs.createReadStream('path/to/file') },
   * );
   * ```
   */
  upload(teamID: string, body: LogoUploadParams, options?: RequestOptions): APIPromise<FileUpload> {
    return this._client.post(
      path`/teams/${teamID}/logo`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

/**
 * Response model for file uploads.
 */
export interface FileUpload {
  checksum_sha256: string;

  content_type: string;

  file_id: string;

  filename: string;

  size_bytes: number;

  uploaded_at: string;
}

export type LogoDownloadResponse = unknown;

export interface LogoDeleteParams {
  team_id: string;
}

export interface LogoDownloadParams {
  team_id: string;
}

export interface LogoUploadParams {
  /**
   * Logo image file
   */
  file: Uploadable;
}

export declare namespace Logo {
  export {
    type FileUpload as FileUpload,
    type LogoDownloadResponse as LogoDownloadResponse,
    type LogoDeleteParams as LogoDeleteParams,
    type LogoDownloadParams as LogoDownloadParams,
    type LogoUploadParams as LogoUploadParams,
  };
}
