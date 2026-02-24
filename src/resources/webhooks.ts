// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Webhooks extends APIResource {
  /**
   * Register a new webhook endpoint to receive event notifications.
   *
   * ## Event Types
   *
   * Available event types to subscribe to:
   *
   * - `match.completed` - Fired when a football match ends
   * - `team_member.transferred` - Fired when a player/coach joins or leaves a team
   *
   * If no event types are specified, the webhook will receive all event types.
   *
   * ## Webhook Signatures
   *
   * All webhook deliveries include Standard Webhooks signature headers:
   *
   * - `webhook-id` - Unique message identifier
   * - `webhook-timestamp` - Unix timestamp of when the webhook was sent
   * - `webhook-signature` - HMAC-SHA256 signature in format `v1,{base64_signature}`
   *
   * Store the returned `secret` securely - you'll need it to verify webhook
   * signatures.
   */
  create(body: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookCreateResponse> {
    return this._client.post('/webhooks', { body, ...options });
  }

  /**
   * Get details of a specific webhook endpoint.
   */
  retrieve(webhookID: string, options?: RequestOptions): APIPromise<RegisteredWebhook> {
    return this._client.get(path`/webhooks/${webhookID}`, options);
  }

  /**
   * Get a list of all registered webhook endpoints.
   */
  list(options?: RequestOptions): APIPromise<WebhookListResponse> {
    return this._client.get('/webhooks', options);
  }

  /**
   * Unregister a webhook endpoint. It will no longer receive events.
   */
  delete(webhookID: string, options?: RequestOptions): APIPromise<WebhookDeleteResponse> {
    return this._client.delete(path`/webhooks/${webhookID}`, options);
  }

  /**
   * Trigger a webhook event and deliver it to all subscribed endpoints.
   *
   * This endpoint is useful for testing your webhook integration. It will:
   *
   * 1. Generate an event with the specified type and payload
   * 2. Find all webhooks subscribed to that event type
   * 3. Send a POST request to each webhook URL with signature headers
   * 4. Return the delivery results
   *
   * ## Event Payload
   *
   * You can provide a custom payload, or leave it empty to use a sample payload.
   *
   * ## Webhook Signature Headers
   *
   * Each webhook delivery includes:
   *
   * - `webhook-id` - Unique event identifier (e.g., `evt_abc123...`)
   * - `webhook-timestamp` - Unix timestamp
   * - `webhook-signature` - HMAC-SHA256 signature (`v1,{base64}`)
   *
   * To verify signatures, compute:
   *
   * ```
   * signature = HMAC-SHA256(
   *     key = base64_decode(secret_without_prefix),
   *     message = "{timestamp}.{raw_json_payload}"
   * )
   * ```
   */
  trigger(body: WebhookTriggerParams, options?: RequestOptions): APIPromise<WebhookTriggerResponse> {
    return this._client.post('/webhooks/trigger', { body, ...options });
  }
}

/**
 * A registered webhook endpoint.
 */
export interface RegisteredWebhook {
  /**
   * Unique webhook identifier
   */
  id: string;

  /**
   * When the webhook was registered
   */
  created_at: string;

  /**
   * List of event types this webhook is subscribed to
   */
  event_types: Array<'match.completed' | 'team_member.transferred'>;

  /**
   * The secret key for verifying webhook signatures (base64 encoded)
   */
  secret: string;

  /**
   * The URL to send webhook events to
   */
  url: string;

  /**
   * Optional description for this webhook
   */
  description?: string | null;
}

/**
 * Response after registering a webhook.
 */
export interface WebhookCreateResponse {
  /**
   * The registered webhook details
   */
  webhook: RegisteredWebhook;

  /**
   * Status message
   */
  message?: string;

  /**
   * Ted's reaction
   */
  ted_says?: string;
}

export type WebhookListResponse = Array<RegisteredWebhook>;

export type WebhookDeleteResponse = { [key: string]: unknown };

/**
 * Response after triggering webhook events.
 */
export interface WebhookTriggerResponse {
  /**
   * Results of webhook deliveries
   */
  deliveries: Array<WebhookTriggerResponse.Delivery>;

  /**
   * Unique event identifier
   */
  event_id: string;

  /**
   * The type of event triggered
   */
  event_type: 'match.completed' | 'team_member.transferred';

  /**
   * Number of successful deliveries
   */
  successful_deliveries: number;

  /**
   * Ted's reaction
   */
  ted_says: string;

  /**
   * Total number of webhooks that received this event
   */
  total_webhooks: number;
}

export namespace WebhookTriggerResponse {
  /**
   * Result of delivering a webhook to a single endpoint.
   */
  export interface Delivery {
    /**
     * Whether delivery was successful
     */
    success: boolean;

    /**
     * URL the webhook was sent to
     */
    url: string;

    /**
     * ID of the webhook
     */
    webhook_id: string;

    /**
     * Error message if delivery failed
     */
    error?: string | null;

    /**
     * HTTP status code from the endpoint
     */
    status_code?: number | null;
  }
}

export interface WebhookCreateParams {
  /**
   * The URL to send webhook events to
   */
  url: string;

  /**
   * Optional description for this webhook
   */
  description?: string | null;

  /**
   * List of event types to subscribe to. If not provided, subscribes to all events.
   */
  event_types?: Array<'match.completed' | 'team_member.transferred'> | null;
}

export interface WebhookTriggerParams {
  /**
   * The type of event to trigger
   */
  event_type: 'match.completed' | 'team_member.transferred';

  /**
   * Optional event payload. If not provided, a sample payload will be generated.
   */
  payload?:
    | WebhookTriggerParams.MatchCompletedPayload
    | WebhookTriggerParams.TeamMemberTransferredPayload
    | null;
}

export namespace WebhookTriggerParams {
  /**
   * Payload for match.completed event.
   */
  export interface MatchCompletedPayload {
    /**
     * Event data
     */
    data: MatchCompletedPayload.Data;

    /**
     * The type of webhook event
     */
    event_type?: 'match.completed';
  }

  export namespace MatchCompletedPayload {
    /**
     * Event data
     */
    export interface Data {
      /**
       * Final away team score
       */
      away_score: number;

      /**
       * Away team ID
       */
      away_team_id: string;

      /**
       * When the match completed
       */
      completed_at: string;

      /**
       * Final home team score
       */
      home_score: number;

      /**
       * Home team ID
       */
      home_team_id: string;

      /**
       * Unique match identifier
       */
      match_id: string;

      /**
       * Type of match
       */
      match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final';

      /**
       * Match result from home team perspective
       */
      result: 'home_win' | 'away_win' | 'draw';

      /**
       * Ted's post-match wisdom
       */
      ted_post_match_quote: string;

      /**
       * Ted's lesson from the match
       */
      lesson_learned?: string | null;

      /**
       * Player of the match (if awarded)
       */
      man_of_the_match?: string | null;
    }
  }

  /**
   * Payload for team_member.transferred event.
   */
  export interface TeamMemberTransferredPayload {
    /**
     * Event data
     */
    data: TeamMemberTransferredPayload.Data;

    /**
     * The type of webhook event
     */
    event_type?: 'team_member.transferred';
  }

  export namespace TeamMemberTransferredPayload {
    /**
     * Event data
     */
    export interface Data {
      /**
       * ID of the character (links to /characters)
       */
      character_id: string;

      /**
       * Name of the character
       */
      character_name: string;

      /**
       * Type of team member
       */
      member_type: 'player' | 'coach' | 'medical_staff' | 'equipment_manager';

      /**
       * ID of the team involved
       */
      team_id: string;

      /**
       * ID of the team member
       */
      team_member_id: string;

      /**
       * Name of the team involved
       */
      team_name: string;

      /**
       * Ted's reaction to the transfer
       */
      ted_reaction: string;

      /**
       * Whether the member joined or departed
       */
      transfer_type: 'joined' | 'departed';

      /**
       * Previous team ID (for joins from another team)
       */
      previous_team_id?: string | null;

      /**
       * Previous team name (for joins from another team)
       */
      previous_team_name?: string | null;

      /**
       * Transfer fee in GBP (for players)
       */
      transfer_fee_gbp?: string | null;

      /**
       * Years spent with previous team
       */
      years_with_previous_team?: number | null;
    }
  }
}

export declare namespace Webhooks {
  export {
    type RegisteredWebhook as RegisteredWebhook,
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhookTriggerResponse as WebhookTriggerResponse,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookTriggerParams as WebhookTriggerParams,
  };
}
