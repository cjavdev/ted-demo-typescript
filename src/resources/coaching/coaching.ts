// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PrinciplesAPI from './principles';
import { CoachingPrinciple, PrincipleListParams, PrincipleListResponse, Principles } from './principles';

export class Coaching extends APIResource {
  principles: PrinciplesAPI.Principles = new PrinciplesAPI.Principles(this._client);
}

Coaching.Principles = Principles;

export declare namespace Coaching {
  export {
    Principles as Principles,
    type CoachingPrinciple as CoachingPrinciple,
    type PrincipleListResponse as PrincipleListResponse,
    type PrincipleListParams as PrincipleListParams,
  };
}
