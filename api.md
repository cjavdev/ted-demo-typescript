# TedDemo

Types:

- <code><a href="./src/resources/top-level.ts">GetWelcomeResponse</a></code>

Methods:

- <code title="get /">client.<a href="./src/index.ts">getWelcome</a>() -> unknown</code>

# Believe

Types:

- <code><a href="./src/resources/believe.ts">BelieveSubmitResponse</a></code>

Methods:

- <code title="post /believe">client.believe.<a href="./src/resources/believe.ts">submit</a>({ ...params }) -> BelieveSubmitResponse</code>

# Biscuits

Types:

- <code><a href="./src/resources/biscuits.ts">Biscuit</a></code>
- <code><a href="./src/resources/biscuits.ts">BiscuitListResponse</a></code>

Methods:

- <code title="get /biscuits/{biscuit_id}">client.biscuits.<a href="./src/resources/biscuits.ts">retrieve</a>(biscuitID) -> Biscuit</code>
- <code title="get /biscuits">client.biscuits.<a href="./src/resources/biscuits.ts">list</a>({ ...params }) -> BiscuitListResponse</code>
- <code title="get /biscuits/fresh">client.biscuits.<a href="./src/resources/biscuits.ts">getFresh</a>() -> Biscuit</code>

# Characters

Types:

- <code><a href="./src/resources/characters.ts">Character</a></code>
- <code><a href="./src/resources/characters.ts">CharacterRole</a></code>
- <code><a href="./src/resources/characters.ts">EmotionalStats</a></code>
- <code><a href="./src/resources/characters.ts">GrowthArc</a></code>
- <code><a href="./src/resources/characters.ts">CharacterListResponse</a></code>
- <code><a href="./src/resources/characters.ts">CharacterGetQuotesResponse</a></code>

Methods:

- <code title="post /characters">client.characters.<a href="./src/resources/characters.ts">create</a>({ ...params }) -> Character</code>
- <code title="get /characters/{character_id}">client.characters.<a href="./src/resources/characters.ts">retrieve</a>(characterID) -> Character</code>
- <code title="patch /characters/{character_id}">client.characters.<a href="./src/resources/characters.ts">update</a>(characterID, { ...params }) -> Character</code>
- <code title="get /characters">client.characters.<a href="./src/resources/characters.ts">list</a>({ ...params }) -> CharacterListResponse</code>
- <code title="delete /characters/{character_id}">client.characters.<a href="./src/resources/characters.ts">delete</a>(characterID) -> void</code>
- <code title="get /characters/{character_id}/quotes">client.characters.<a href="./src/resources/characters.ts">getQuotes</a>(characterID) -> CharacterGetQuotesResponse</code>

# Coaching

## Principles

Types:

- <code><a href="./src/resources/coaching/principles.ts">CoachingPrinciple</a></code>
- <code><a href="./src/resources/coaching/principles.ts">PrincipleListResponse</a></code>

Methods:

- <code title="get /coaching/principles/{principle_id}">client.coaching.principles.<a href="./src/resources/coaching/principles.ts">retrieve</a>(principleID) -> CoachingPrinciple</code>
- <code title="get /coaching/principles">client.coaching.principles.<a href="./src/resources/coaching/principles.ts">list</a>({ ...params }) -> PrincipleListResponse</code>
- <code title="get /coaching/principles/random">client.coaching.principles.<a href="./src/resources/coaching/principles.ts">getRandom</a>() -> CoachingPrinciple</code>

# Conflicts

Types:

- <code><a href="./src/resources/conflicts.ts">ConflictResolveResponse</a></code>

Methods:

- <code title="post /conflicts/resolve">client.conflicts.<a href="./src/resources/conflicts.ts">resolve</a>({ ...params }) -> ConflictResolveResponse</code>

# Episodes

Types:

- <code><a href="./src/resources/episodes.ts">Episode</a></code>
- <code><a href="./src/resources/episodes.ts">EpisodeListResponse</a></code>
- <code><a href="./src/resources/episodes.ts">EpisodeGetWisdomResponse</a></code>

Methods:

- <code title="post /episodes">client.episodes.<a href="./src/resources/episodes.ts">create</a>({ ...params }) -> Episode</code>
- <code title="get /episodes/{episode_id}">client.episodes.<a href="./src/resources/episodes.ts">retrieve</a>(episodeID) -> Episode</code>
- <code title="patch /episodes/{episode_id}">client.episodes.<a href="./src/resources/episodes.ts">update</a>(episodeID, { ...params }) -> Episode</code>
- <code title="get /episodes">client.episodes.<a href="./src/resources/episodes.ts">list</a>({ ...params }) -> EpisodeListResponse</code>
- <code title="delete /episodes/{episode_id}">client.episodes.<a href="./src/resources/episodes.ts">delete</a>(episodeID) -> void</code>
- <code title="get /episodes/{episode_id}/wisdom">client.episodes.<a href="./src/resources/episodes.ts">getWisdom</a>(episodeID) -> EpisodeGetWisdomResponse</code>

# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> unknown</code>

# Matches

Types:

- <code><a href="./src/resources/matches/matches.ts">Match</a></code>
- <code><a href="./src/resources/matches/matches.ts">MatchResult</a></code>
- <code><a href="./src/resources/matches/matches.ts">MatchType</a></code>
- <code><a href="./src/resources/matches/matches.ts">TurningPoint</a></code>
- <code><a href="./src/resources/matches/matches.ts">MatchListResponse</a></code>
- <code><a href="./src/resources/matches/matches.ts">MatchGetLessonResponse</a></code>
- <code><a href="./src/resources/matches/matches.ts">MatchGetTurningPointsResponse</a></code>

Methods:

- <code title="post /matches">client.matches.<a href="./src/resources/matches/matches.ts">create</a>({ ...params }) -> Match</code>
- <code title="get /matches/{match_id}">client.matches.<a href="./src/resources/matches/matches.ts">retrieve</a>(matchID) -> Match</code>
- <code title="patch /matches/{match_id}">client.matches.<a href="./src/resources/matches/matches.ts">update</a>(matchID, { ...params }) -> Match</code>
- <code title="get /matches">client.matches.<a href="./src/resources/matches/matches.ts">list</a>({ ...params }) -> MatchListResponse</code>
- <code title="delete /matches/{match_id}">client.matches.<a href="./src/resources/matches/matches.ts">delete</a>(matchID) -> void</code>
- <code title="get /matches/{match_id}/lesson">client.matches.<a href="./src/resources/matches/matches.ts">getLesson</a>(matchID) -> MatchGetLessonResponse</code>
- <code title="get /matches/{match_id}/turning-points">client.matches.<a href="./src/resources/matches/matches.ts">getTurningPoints</a>(matchID) -> MatchGetTurningPointsResponse</code>
- <code title="get /matches/live">client.matches.<a href="./src/resources/matches/matches.ts">streamLiveSimulation</a>({ ...params }) -> void</code>

## Commentary

Types:

- <code><a href="./src/resources/matches/commentary.ts">CommentaryStreamResponse</a></code>

Methods:

- <code title="post /matches/{match_id}/commentary/stream">client.matches.commentary.<a href="./src/resources/matches/commentary.ts">stream</a>(matchID) -> unknown</code>

# PepTalk

Types:

- <code><a href="./src/resources/pep-talk.ts">PepTalkRetrieveResponse</a></code>

Methods:

- <code title="get /pep-talk">client.pepTalk.<a href="./src/resources/pep-talk.ts">retrieve</a>({ ...params }) -> PepTalkRetrieveResponse</code>

# Press

Types:

- <code><a href="./src/resources/press.ts">PressSimulateResponse</a></code>

Methods:

- <code title="post /press">client.press.<a href="./src/resources/press.ts">simulate</a>({ ...params }) -> PressSimulateResponse</code>

# Quotes

Types:

- <code><a href="./src/resources/quotes.ts">PaginatedResponseQuote</a></code>
- <code><a href="./src/resources/quotes.ts">Quote</a></code>
- <code><a href="./src/resources/quotes.ts">QuoteMoment</a></code>
- <code><a href="./src/resources/quotes.ts">QuoteTheme</a></code>

Methods:

- <code title="post /quotes">client.quotes.<a href="./src/resources/quotes.ts">create</a>({ ...params }) -> Quote</code>
- <code title="get /quotes/{quote_id}">client.quotes.<a href="./src/resources/quotes.ts">retrieve</a>(quoteID) -> Quote</code>
- <code title="patch /quotes/{quote_id}">client.quotes.<a href="./src/resources/quotes.ts">update</a>(quoteID, { ...params }) -> Quote</code>
- <code title="get /quotes">client.quotes.<a href="./src/resources/quotes.ts">list</a>({ ...params }) -> PaginatedResponseQuote</code>
- <code title="delete /quotes/{quote_id}">client.quotes.<a href="./src/resources/quotes.ts">delete</a>(quoteID) -> void</code>
- <code title="get /quotes/random">client.quotes.<a href="./src/resources/quotes.ts">getRandom</a>({ ...params }) -> Quote</code>
- <code title="get /quotes/characters/{character_id}">client.quotes.<a href="./src/resources/quotes.ts">listByCharacter</a>(characterID, { ...params }) -> PaginatedResponseQuote</code>
- <code title="get /quotes/themes/{theme}">client.quotes.<a href="./src/resources/quotes.ts">listByTheme</a>(theme, { ...params }) -> PaginatedResponseQuote</code>

# Reframe

Types:

- <code><a href="./src/resources/reframe.ts">ReframeTransformNegativeThoughtsResponse</a></code>

Methods:

- <code title="post /reframe">client.reframe.<a href="./src/resources/reframe.ts">transformNegativeThoughts</a>({ ...params }) -> ReframeTransformNegativeThoughtsResponse</code>

# Stream

Types:

- <code><a href="./src/resources/stream.ts">StreamTestConnectionResponse</a></code>

Methods:

- <code title="get /stream/test">client.stream.<a href="./src/resources/stream.ts">testConnection</a>() -> unknown</code>

# TeamMembers

Types:

- <code><a href="./src/resources/team-members.ts">Coach</a></code>
- <code><a href="./src/resources/team-members.ts">CoachSpecialty</a></code>
- <code><a href="./src/resources/team-members.ts">EquipmentManager</a></code>
- <code><a href="./src/resources/team-members.ts">MedicalSpecialty</a></code>
- <code><a href="./src/resources/team-members.ts">MedicalStaff</a></code>
- <code><a href="./src/resources/team-members.ts">Player</a></code>
- <code><a href="./src/resources/team-members.ts">Position</a></code>
- <code><a href="./src/resources/team-members.ts">TeamMemberCreateResponse</a></code>
- <code><a href="./src/resources/team-members.ts">TeamMemberRetrieveResponse</a></code>
- <code><a href="./src/resources/team-members.ts">TeamMemberUpdateResponse</a></code>
- <code><a href="./src/resources/team-members.ts">TeamMemberListResponse</a></code>
- <code><a href="./src/resources/team-members.ts">TeamMemberListCoachesResponse</a></code>
- <code><a href="./src/resources/team-members.ts">TeamMemberListPlayersResponse</a></code>
- <code><a href="./src/resources/team-members.ts">TeamMemberListStaffResponse</a></code>

Methods:

- <code title="post /team-members">client.teamMembers.<a href="./src/resources/team-members.ts">create</a>({ ...params }) -> TeamMemberCreateResponse</code>
- <code title="get /team-members/{member_id}">client.teamMembers.<a href="./src/resources/team-members.ts">retrieve</a>(memberID) -> TeamMemberRetrieveResponse</code>
- <code title="patch /team-members/{member_id}">client.teamMembers.<a href="./src/resources/team-members.ts">update</a>(memberID, { ...params }) -> TeamMemberUpdateResponse</code>
- <code title="get /team-members">client.teamMembers.<a href="./src/resources/team-members.ts">list</a>({ ...params }) -> TeamMemberListResponse</code>
- <code title="delete /team-members/{member_id}">client.teamMembers.<a href="./src/resources/team-members.ts">delete</a>(memberID) -> void</code>
- <code title="get /team-members/coaches/">client.teamMembers.<a href="./src/resources/team-members.ts">listCoaches</a>({ ...params }) -> TeamMemberListCoachesResponse</code>
- <code title="get /team-members/players/">client.teamMembers.<a href="./src/resources/team-members.ts">listPlayers</a>({ ...params }) -> TeamMemberListPlayersResponse</code>
- <code title="get /team-members/staff/">client.teamMembers.<a href="./src/resources/team-members.ts">listStaff</a>({ ...params }) -> TeamMemberListStaffResponse</code>

# Teams

Types:

- <code><a href="./src/resources/teams/teams.ts">GeoLocation</a></code>
- <code><a href="./src/resources/teams/teams.ts">League</a></code>
- <code><a href="./src/resources/teams/teams.ts">Team</a></code>
- <code><a href="./src/resources/teams/teams.ts">TeamValues</a></code>
- <code><a href="./src/resources/teams/teams.ts">TeamListResponse</a></code>
- <code><a href="./src/resources/teams/teams.ts">TeamGetCultureResponse</a></code>
- <code><a href="./src/resources/teams/teams.ts">TeamGetRivalsResponse</a></code>
- <code><a href="./src/resources/teams/teams.ts">TeamListLogosResponse</a></code>

Methods:

- <code title="post /teams">client.teams.<a href="./src/resources/teams/teams.ts">create</a>({ ...params }) -> Team</code>
- <code title="get /teams/{team_id}">client.teams.<a href="./src/resources/teams/teams.ts">retrieve</a>(teamID) -> Team</code>
- <code title="patch /teams/{team_id}">client.teams.<a href="./src/resources/teams/teams.ts">update</a>(teamID, { ...params }) -> Team</code>
- <code title="get /teams">client.teams.<a href="./src/resources/teams/teams.ts">list</a>({ ...params }) -> TeamListResponse</code>
- <code title="delete /teams/{team_id}">client.teams.<a href="./src/resources/teams/teams.ts">delete</a>(teamID) -> void</code>
- <code title="get /teams/{team_id}/culture">client.teams.<a href="./src/resources/teams/teams.ts">getCulture</a>(teamID) -> TeamGetCultureResponse</code>
- <code title="get /teams/{team_id}/rivals">client.teams.<a href="./src/resources/teams/teams.ts">getRivals</a>(teamID) -> TeamGetRivalsResponse</code>
- <code title="get /teams/{team_id}/logos">client.teams.<a href="./src/resources/teams/teams.ts">listLogos</a>(teamID) -> TeamListLogosResponse</code>

## Logo

Types:

- <code><a href="./src/resources/teams/logo.ts">FileUpload</a></code>
- <code><a href="./src/resources/teams/logo.ts">LogoDownloadResponse</a></code>

Methods:

- <code title="delete /teams/{team_id}/logo/{file_id}">client.teams.logo.<a href="./src/resources/teams/logo.ts">delete</a>(fileID, { ...params }) -> void</code>
- <code title="get /teams/{team_id}/logo/{file_id}">client.teams.logo.<a href="./src/resources/teams/logo.ts">download</a>(fileID, { ...params }) -> unknown</code>
- <code title="post /teams/{team_id}/logo">client.teams.logo.<a href="./src/resources/teams/logo.ts">upload</a>(teamID, { ...params }) -> FileUpload</code>

# Version

Types:

- <code><a href="./src/resources/version.ts">VersionRetrieveResponse</a></code>

Methods:

- <code title="get /version">client.version.<a href="./src/resources/version.ts">retrieve</a>() -> unknown</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">RegisteredWebhook</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookCreateResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookListResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookDeleteResponse</a></code>
- <code><a href="./src/resources/webhooks.ts">WebhookTriggerResponse</a></code>

Methods:

- <code title="post /webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">create</a>({ ...params }) -> WebhookCreateResponse</code>
- <code title="get /webhooks/{webhook_id}">client.webhooks.<a href="./src/resources/webhooks.ts">retrieve</a>(webhookID) -> RegisteredWebhook</code>
- <code title="get /webhooks">client.webhooks.<a href="./src/resources/webhooks.ts">list</a>() -> WebhookListResponse</code>
- <code title="delete /webhooks/{webhook_id}">client.webhooks.<a href="./src/resources/webhooks.ts">delete</a>(webhookID) -> WebhookDeleteResponse</code>
- <code title="post /webhooks/trigger">client.webhooks.<a href="./src/resources/webhooks.ts">trigger</a>({ ...params }) -> WebhookTriggerResponse</code>

# Ws

Methods:

- <code title="get /ws/test">client.ws.<a href="./src/resources/ws.ts">test</a>() -> void</code>
