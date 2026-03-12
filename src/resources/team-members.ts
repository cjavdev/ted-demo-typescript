// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PagePromise, SkipLimitPage, type SkipLimitPageParams } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Team members with union types (oneOf) - Players, Coaches, Medical Staff, Equipment Managers
 */
export class TeamMembers extends APIResource {
  /**
   * Add a new team member to a team.
   *
   * The request body is a **union type (oneOf)** - you must include the
   * `member_type` discriminator field:
   *
   * - `"member_type": "player"` - Creates a player (requires position,
   *   jersey_number, etc.)
   * - `"member_type": "coach"` - Creates a coach (requires specialty, etc.)
   * - `"member_type": "medical_staff"` - Creates medical staff (requires medical
   *   specialty, etc.)
   * - `"member_type": "equipment_manager"` - Creates equipment manager (requires
   *   responsibilities, etc.)
   *
   * The `character_id` field references an existing character from
   * `/characters/{id}`.
   *
   * **Example for creating a player:**
   *
   * ```json
   * {
   *   "member_type": "player",
   *   "character_id": "sam-obisanya",
   *   "team_id": "afc-richmond",
   *   "years_with_team": 2,
   *   "position": "midfielder",
   *   "jersey_number": 24,
   *   "goals_scored": 12,
   *   "assists": 15
   * }
   * ```
   *
   * @example
   * ```ts
   * const teamMember = await client.teamMembers.create({
   *   character_id: 'jamie-tartt',
   *   jersey_number: 9,
   *   position: 'forward',
   *   team_id: 'afc-richmond',
   *   years_with_team: 3,
   * });
   * ```
   */
  create(body: TeamMemberCreateParams, options?: RequestOptions): APIPromise<TeamMemberCreateResponse> {
    return this._client.post('/team-members', { body, ...options });
  }

  /**
   * Retrieve detailed information about a specific team member.
   *
   * The response is a **union type (oneOf)** - the actual shape depends on the
   * member's type:
   *
   * - **player**: Includes position, jersey_number, goals_scored, assists,
   *   is_captain
   * - **coach**: Includes specialty, certifications, win_rate
   * - **medical_staff**: Includes specialty, qualifications, license_number
   * - **equipment_manager**: Includes responsibilities, is_head_kitman
   *
   * Use `character_id` to fetch full character details from
   * `/characters/{character_id}`.
   */
  retrieve(memberID: string, options?: RequestOptions): APIPromise<TeamMemberRetrieveResponse> {
    return this._client.get(path`/team-members/${memberID}`, options);
  }

  /**
   * Update specific fields of an existing team member. Fields vary by member type.
   */
  update(
    memberID: string,
    body: TeamMemberUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TeamMemberUpdateResponse> {
    return this._client.patch(path`/team-members/${memberID}`, { body, ...options });
  }

  /**
   * Get a paginated list of all team members.
   *
   * This endpoint demonstrates **union types (oneOf)** in the response. Each team
   * member can be one of: Player, Coach, MedicalStaff, or EquipmentManager. The
   * `member_type` field acts as a discriminator to determine the shape of each
   * object.
   */
  list(
    query: TeamMemberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TeamMemberListResponsesSkipLimitPage, TeamMemberListResponse> {
    return this._client.getAPIList('/team-members', SkipLimitPage<TeamMemberListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Remove a team member from the roster.
   */
  delete(memberID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/team-members/${memberID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get only coaches (filtered subset of team members).
   */
  listCoaches(
    query: TeamMemberListCoachesParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CoachesSkipLimitPage, Coach> {
    return this._client.getAPIList('/team-members/coaches/', SkipLimitPage<Coach>, { query, ...options });
  }

  /**
   * Get only players (filtered subset of team members).
   */
  listPlayers(
    query: TeamMemberListPlayersParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PlayersSkipLimitPage, Player> {
    return this._client.getAPIList('/team-members/players/', SkipLimitPage<Player>, { query, ...options });
  }

  /**
   * Get all staff members (medical staff and equipment managers).
   *
   * This demonstrates a **narrower union type** - the response is oneOf MedicalStaff
   * or EquipmentManager.
   */
  listStaff(
    query: TeamMemberListStaffParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TeamMemberListStaffResponsesSkipLimitPage, TeamMemberListStaffResponse> {
    return this._client.getAPIList('/team-members/staff/', SkipLimitPage<TeamMemberListStaffResponse>, {
      query,
      ...options,
    });
  }
}

export type TeamMemberListResponsesSkipLimitPage = SkipLimitPage<TeamMemberListResponse>;

export type CoachesSkipLimitPage = SkipLimitPage<Coach>;

export type PlayersSkipLimitPage = SkipLimitPage<Player>;

export type TeamMemberListStaffResponsesSkipLimitPage = SkipLimitPage<TeamMemberListStaffResponse>;

/**
 * Full coach model with ID.
 */
export interface Coach {
  /**
   * Unique identifier for this team membership
   */
  id: string;

  /**
   * ID of the character (references /characters/{id})
   */
  character_id: string;

  /**
   * Coaching specialty/role
   */
  specialty: CoachSpecialty;

  /**
   * ID of the team they belong to
   */
  team_id: string;

  /**
   * Number of years with the current team
   */
  years_with_team: number;

  /**
   * Coaching certifications and licenses
   */
  certifications?: Array<string>;

  /**
   * Discriminator field indicating this is a coach
   */
  member_type?: 'coach';

  /**
   * Career win rate (0.0 to 1.0)
   */
  win_rate?: number | null;
}

/**
 * Coaching specialties.
 */
export type CoachSpecialty =
  | 'head_coach'
  | 'assistant_coach'
  | 'goalkeeping_coach'
  | 'fitness_coach'
  | 'tactical_analyst';

/**
 * Full equipment manager model with ID.
 */
export interface EquipmentManager {
  /**
   * Unique identifier for this team membership
   */
  id: string;

  /**
   * ID of the character (references /characters/{id})
   */
  character_id: string;

  /**
   * ID of the team they belong to
   */
  team_id: string;

  /**
   * Number of years with the current team
   */
  years_with_team: number;

  /**
   * Whether this is the head equipment manager
   */
  is_head_kitman?: boolean;

  /**
   * Discriminator field indicating this is an equipment manager
   */
  member_type?: 'equipment_manager';

  /**
   * List of responsibilities
   */
  responsibilities?: Array<string>;
}

/**
 * Medical staff specialties.
 */
export type MedicalSpecialty =
  | 'team_doctor'
  | 'physiotherapist'
  | 'sports_psychologist'
  | 'nutritionist'
  | 'massage_therapist';

/**
 * Full medical staff model with ID.
 */
export interface MedicalStaff {
  /**
   * Unique identifier for this team membership
   */
  id: string;

  /**
   * ID of the character (references /characters/{id})
   */
  character_id: string;

  /**
   * Medical specialty
   */
  specialty: MedicalSpecialty;

  /**
   * ID of the team they belong to
   */
  team_id: string;

  /**
   * Number of years with the current team
   */
  years_with_team: number;

  /**
   * Professional license number
   */
  license_number?: string | null;

  /**
   * Discriminator field indicating this is medical staff
   */
  member_type?: 'medical_staff';

  /**
   * Medical qualifications and degrees
   */
  qualifications?: Array<string>;
}

/**
 * Full player model with ID.
 */
export interface Player {
  /**
   * Unique identifier for this team membership
   */
  id: string;

  /**
   * ID of the character (references /characters/{id})
   */
  character_id: string;

  /**
   * Jersey/shirt number
   */
  jersey_number: number;

  /**
   * Playing position on the field
   */
  position: Position;

  /**
   * ID of the team they belong to
   */
  team_id: string;

  /**
   * Number of years with the current team
   */
  years_with_team: number;

  /**
   * Total assists for the team
   */
  assists?: number;

  /**
   * Total goals scored for the team
   */
  goals_scored?: number;

  /**
   * Whether this player is team captain
   */
  is_captain?: boolean;

  /**
   * Discriminator field indicating this is a player
   */
  member_type?: 'player';
}

/**
 * Football positions for players.
 */
export type Position = 'goalkeeper' | 'defender' | 'midfielder' | 'forward';

/**
 * Full player model with ID.
 */
export type TeamMemberCreateResponse = Player | Coach | MedicalStaff | EquipmentManager;

/**
 * Full player model with ID.
 */
export type TeamMemberRetrieveResponse = Player | Coach | MedicalStaff | EquipmentManager;

/**
 * Full player model with ID.
 */
export type TeamMemberUpdateResponse = Player | Coach | MedicalStaff | EquipmentManager;

/**
 * Full player model with ID.
 */
export type TeamMemberListResponse = Player | Coach | MedicalStaff | EquipmentManager;

/**
 * Full medical staff model with ID.
 */
export type TeamMemberListStaffResponse = MedicalStaff | EquipmentManager;

export type TeamMemberCreateParams =
  | TeamMemberCreateParams.PlayerBase
  | TeamMemberCreateParams.CoachBase
  | TeamMemberCreateParams.MedicalStaffBase
  | TeamMemberCreateParams.EquipmentManagerBase;

export declare namespace TeamMemberCreateParams {
  export interface PlayerBase {
    /**
     * ID of the character (references /characters/{id})
     */
    character_id: string;

    /**
     * Jersey/shirt number
     */
    jersey_number: number;

    /**
     * Playing position on the field
     */
    position: Position;

    /**
     * ID of the team they belong to
     */
    team_id: string;

    /**
     * Number of years with the current team
     */
    years_with_team: number;

    /**
     * Total assists for the team
     */
    assists?: number;

    /**
     * Total goals scored for the team
     */
    goals_scored?: number;

    /**
     * Whether this player is team captain
     */
    is_captain?: boolean;

    /**
     * Discriminator field indicating this is a player
     */
    member_type?: 'player';
  }

  export interface CoachBase {
    /**
     * ID of the character (references /characters/{id})
     */
    character_id: string;

    /**
     * Coaching specialty/role
     */
    specialty: CoachSpecialty;

    /**
     * ID of the team they belong to
     */
    team_id: string;

    /**
     * Number of years with the current team
     */
    years_with_team: number;

    /**
     * Coaching certifications and licenses
     */
    certifications?: Array<string>;

    /**
     * Discriminator field indicating this is a coach
     */
    member_type?: 'coach';

    /**
     * Career win rate (0.0 to 1.0)
     */
    win_rate?: number | null;
  }

  export interface MedicalStaffBase {
    /**
     * ID of the character (references /characters/{id})
     */
    character_id: string;

    /**
     * Medical specialty
     */
    specialty: MedicalSpecialty;

    /**
     * ID of the team they belong to
     */
    team_id: string;

    /**
     * Number of years with the current team
     */
    years_with_team: number;

    /**
     * Professional license number
     */
    license_number?: string | null;

    /**
     * Discriminator field indicating this is medical staff
     */
    member_type?: 'medical_staff';

    /**
     * Medical qualifications and degrees
     */
    qualifications?: Array<string>;
  }

  export interface EquipmentManagerBase {
    /**
     * ID of the character (references /characters/{id})
     */
    character_id: string;

    /**
     * ID of the team they belong to
     */
    team_id: string;

    /**
     * Number of years with the current team
     */
    years_with_team: number;

    /**
     * Whether this is the head equipment manager
     */
    is_head_kitman?: boolean;

    /**
     * Discriminator field indicating this is an equipment manager
     */
    member_type?: 'equipment_manager';

    /**
     * List of responsibilities
     */
    responsibilities?: Array<string>;
  }
}

export type TeamMemberUpdateParams =
  | TeamMemberUpdateParams.PlayerUpdate
  | TeamMemberUpdateParams.CoachUpdate
  | TeamMemberUpdateParams.MedicalStaffUpdate
  | TeamMemberUpdateParams.EquipmentManagerUpdate;

export declare namespace TeamMemberUpdateParams {
  export interface PlayerUpdate {
    assists?: number | null;

    goals_scored?: number | null;

    is_captain?: boolean | null;

    jersey_number?: number | null;

    /**
     * Football positions for players.
     */
    position?: Position | null;

    team_id?: string | null;

    years_with_team?: number | null;
  }

  export interface CoachUpdate {
    certifications?: Array<string> | null;

    /**
     * Coaching specialties.
     */
    specialty?: CoachSpecialty | null;

    team_id?: string | null;

    win_rate?: number | null;

    years_with_team?: number | null;
  }

  export interface MedicalStaffUpdate {
    license_number?: string | null;

    qualifications?: Array<string> | null;

    /**
     * Medical staff specialties.
     */
    specialty?: MedicalSpecialty | null;

    team_id?: string | null;

    years_with_team?: number | null;
  }

  export interface EquipmentManagerUpdate {
    is_head_kitman?: boolean | null;

    responsibilities?: Array<string> | null;

    team_id?: string | null;

    years_with_team?: number | null;
  }
}

export interface TeamMemberListParams extends SkipLimitPageParams {
  /**
   * Filter by member type
   */
  member_type?: 'player' | 'coach' | 'medical_staff' | 'equipment_manager' | null;

  /**
   * Filter by team ID
   */
  team_id?: string | null;
}

export interface TeamMemberListCoachesParams extends SkipLimitPageParams {
  /**
   * Filter by specialty
   */
  specialty?: CoachSpecialty | null;

  /**
   * Filter by team ID
   */
  team_id?: string | null;
}

export interface TeamMemberListPlayersParams extends SkipLimitPageParams {
  /**
   * Filter by position
   */
  position?: Position | null;

  /**
   * Filter by team ID
   */
  team_id?: string | null;
}

export interface TeamMemberListStaffParams extends SkipLimitPageParams {
  /**
   * Filter by team ID
   */
  team_id?: string | null;
}

export declare namespace TeamMembers {
  export {
    type Coach as Coach,
    type CoachSpecialty as CoachSpecialty,
    type EquipmentManager as EquipmentManager,
    type MedicalSpecialty as MedicalSpecialty,
    type MedicalStaff as MedicalStaff,
    type Player as Player,
    type Position as Position,
    type TeamMemberCreateResponse as TeamMemberCreateResponse,
    type TeamMemberRetrieveResponse as TeamMemberRetrieveResponse,
    type TeamMemberUpdateResponse as TeamMemberUpdateResponse,
    type TeamMemberListResponse as TeamMemberListResponse,
    type TeamMemberListStaffResponse as TeamMemberListStaffResponse,
    type TeamMemberListResponsesSkipLimitPage as TeamMemberListResponsesSkipLimitPage,
    type CoachesSkipLimitPage as CoachesSkipLimitPage,
    type PlayersSkipLimitPage as PlayersSkipLimitPage,
    type TeamMemberListStaffResponsesSkipLimitPage as TeamMemberListStaffResponsesSkipLimitPage,
    type TeamMemberCreateParams as TeamMemberCreateParams,
    type TeamMemberUpdateParams as TeamMemberUpdateParams,
    type TeamMemberListParams as TeamMemberListParams,
    type TeamMemberListCoachesParams as TeamMemberListCoachesParams,
    type TeamMemberListPlayersParams as TeamMemberListPlayersParams,
    type TeamMemberListStaffParams as TeamMemberListStaffParams,
  };
}
