// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PrinciplesAPI from './principles';
import {
  CoachingPrinciple,
  CoachingPrinciplesSkipLimitPage,
  PrincipleListParams,
  Principles,
} from './principles';

export class Coaching extends APIResource {
  principles: PrinciplesAPI.Principles = new PrinciplesAPI.Principles(this._client);
}

Coaching.Principles = Principles;

export declare namespace Coaching {
  export {
    Principles as Principles,
    type CoachingPrinciple as CoachingPrinciple,
    type CoachingPrinciplesSkipLimitPage as CoachingPrinciplesSkipLimitPage,
    type PrincipleListParams as PrincipleListParams,
  };
}
