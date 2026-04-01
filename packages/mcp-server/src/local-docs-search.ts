// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type PerLanguageData = {
  method?: string;
  example?: string;
};

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
  perLanguage?: Record<string, PerLanguageData>;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'get_welcome',
    endpoint: '/',
    httpMethod: 'get',
    summary: 'Welcome to the Ted Lasso API',
    description: 'Get a warm welcome and overview of available endpoints.',
    stainlessPath: '(resource) $client > (method) get_welcome',
    qualified: 'client.getWelcome',
    response: 'object',
    markdown:
      "## get_welcome\n\n`client.getWelcome(): object`\n\n**get** `/`\n\nGet a warm welcome and overview of available endpoints.\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst response = await client.getWelcome();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example: 'curl https://believe.cjav.dev/ \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.getWelcome',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.getWelcome();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'submit',
    endpoint: '/believe',
    httpMethod: 'post',
    summary: 'The Believe Engine',
    description: 'Submit your situation and receive Ted Lasso-style motivational guidance.',
    stainlessPath: '(resource) believe > (method) submit',
    qualified: 'client.believe.submit',
    params: ['situation: string;', 'situation_type: string;', 'context?: string;', 'intensity?: number;'],
    response:
      '{ action_suggestion: string; believe_score: number; goldfish_wisdom: string; relevant_quote: string; ted_response: string; }',
    markdown:
      "## submit\n\n`client.believe.submit(situation: string, situation_type: string, context?: string, intensity?: number): { action_suggestion: string; believe_score: number; goldfish_wisdom: string; relevant_quote: string; ted_response: string; }`\n\n**post** `/believe`\n\nSubmit your situation and receive Ted Lasso-style motivational guidance.\n\n### Parameters\n\n- `situation: string`\n  Describe your situation\n\n- `situation_type: string`\n  Type of situation\n\n- `context?: string`\n  Additional context\n\n- `intensity?: number`\n  How intense is the response needed (1=gentle, 10=full Ted)\n\n### Returns\n\n- `{ action_suggestion: string; believe_score: number; goldfish_wisdom: string; relevant_quote: string; ted_response: string; }`\n  Response from the Believe Engine.\n\n  - `action_suggestion: string`\n  - `believe_score: number`\n  - `goldfish_wisdom: string`\n  - `relevant_quote: string`\n  - `ted_response: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst response = await client.believe.submit({ situation: 'I just got passed over for a promotion I\\'ve been working toward for two years.', situation_type: 'work_challenge' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/believe \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY" \\\n    -d "{\n          \\"situation\\": \\"I just got passed over for a promotion I\'ve been working toward for two years.\\",\n          \\"situation_type\\": \\"work_challenge\\",\n          \\"context\\": \\"I\'ve always tried to be a team player and support my colleagues.\\"\n        }"',
      },
      typescript: {
        method: 'client.believe.submit',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.believe.submit({\n  situation: \"I just got passed over for a promotion I've been working toward for two years.\",\n  situation_type: 'work_challenge',\n});\n\nconsole.log(response.action_suggestion);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/biscuits',
    httpMethod: 'get',
    summary: 'Biscuits as a Service',
    description:
      "Get a paginated list of Ted's famous homemade biscuits! Each comes with a heartwarming message.",
    stainlessPath: '(resource) biscuits > (method) list',
    qualified: 'client.biscuits.list',
    params: ['limit?: number;', 'skip?: number;'],
    response:
      "{ id: string; message: string; pairs_well_with: string; ted_note: string; type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin'; warmth_level: number; }",
    markdown:
      "## list\n\n`client.biscuits.list(limit?: number, skip?: number): { id: string; message: string; pairs_well_with: string; ted_note: string; type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin'; warmth_level: number; }`\n\n**get** `/biscuits`\n\nGet a paginated list of Ted's famous homemade biscuits! Each comes with a heartwarming message.\n\n### Parameters\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n### Returns\n\n- `{ id: string; message: string; pairs_well_with: string; ted_note: string; type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin'; warmth_level: number; }`\n  A biscuit from Ted.\n\n  - `id: string`\n  - `message: string`\n  - `pairs_well_with: string`\n  - `ted_note: string`\n  - `type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin'`\n  - `warmth_level: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\n// Automatically fetches more pages as needed.\nfor await (const biscuit of client.biscuits.list()) {\n  console.log(biscuit);\n}\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/biscuits \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.biscuits.list',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const biscuit of client.biscuits.list()) {\n  console.log(biscuit.id);\n}",
      },
    },
  },
  {
    name: 'get_fresh',
    endpoint: '/biscuits/fresh',
    httpMethod: 'get',
    summary: 'Get a Fresh Biscuit',
    description: 'Get a single fresh biscuit with a personalized message from Ted.',
    stainlessPath: '(resource) biscuits > (method) get_fresh',
    qualified: 'client.biscuits.getFresh',
    response:
      "{ id: string; message: string; pairs_well_with: string; ted_note: string; type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin'; warmth_level: number; }",
    markdown:
      "## get_fresh\n\n`client.biscuits.getFresh(): { id: string; message: string; pairs_well_with: string; ted_note: string; type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin'; warmth_level: number; }`\n\n**get** `/biscuits/fresh`\n\nGet a single fresh biscuit with a personalized message from Ted.\n\n### Returns\n\n- `{ id: string; message: string; pairs_well_with: string; ted_note: string; type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin'; warmth_level: number; }`\n  A biscuit from Ted.\n\n  - `id: string`\n  - `message: string`\n  - `pairs_well_with: string`\n  - `ted_note: string`\n  - `type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin'`\n  - `warmth_level: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst biscuit = await client.biscuits.getFresh();\n\nconsole.log(biscuit);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/biscuits/fresh \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.biscuits.getFresh',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst biscuit = await client.biscuits.getFresh();\n\nconsole.log(biscuit.id);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/biscuits/{biscuit_id}',
    httpMethod: 'get',
    summary: 'Get a Specific Biscuit',
    description: 'Get a specific type of biscuit by ID.',
    stainlessPath: '(resource) biscuits > (method) retrieve',
    qualified: 'client.biscuits.retrieve',
    params: ['biscuit_id: string;'],
    response:
      "{ id: string; message: string; pairs_well_with: string; ted_note: string; type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin'; warmth_level: number; }",
    markdown:
      "## retrieve\n\n`client.biscuits.retrieve(biscuit_id: string): { id: string; message: string; pairs_well_with: string; ted_note: string; type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin'; warmth_level: number; }`\n\n**get** `/biscuits/{biscuit_id}`\n\nGet a specific type of biscuit by ID.\n\n### Parameters\n\n- `biscuit_id: string`\n\n### Returns\n\n- `{ id: string; message: string; pairs_well_with: string; ted_note: string; type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin'; warmth_level: number; }`\n  A biscuit from Ted.\n\n  - `id: string`\n  - `message: string`\n  - `pairs_well_with: string`\n  - `ted_note: string`\n  - `type: 'classic' | 'shortbread' | 'chocolate_chip' | 'oatmeal_raisin'`\n  - `warmth_level: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst biscuit = await client.biscuits.retrieve('biscuit_id');\n\nconsole.log(biscuit);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/biscuits/$BISCUIT_ID \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.biscuits.retrieve',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst biscuit = await client.biscuits.retrieve('biscuit_id');\n\nconsole.log(biscuit.id);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/characters',
    httpMethod: 'get',
    summary: 'List all characters',
    description: 'Get a paginated list of Ted Lasso characters.',
    stainlessPath: '(resource) characters > (method) list',
    qualified: 'client.characters.list',
    params: [
      'limit?: number;',
      'min_optimism?: number;',
      'role?: string;',
      'skip?: number;',
      'team_id?: string;',
    ],
    response:
      '{ id: string; background: string; emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }; name: string; personality_traits: string[]; role: string; date_of_birth?: string; email?: string; growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }',
    markdown:
      "## list\n\n`client.characters.list(limit?: number, min_optimism?: number, role?: string, skip?: number, team_id?: string): { id: string; background: string; emotional_stats: emotional_stats; name: string; personality_traits: string[]; role: character_role; date_of_birth?: string; email?: string; growth_arcs?: growth_arc[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }`\n\n**get** `/characters`\n\nGet a paginated list of Ted Lasso characters.\n\n### Parameters\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `min_optimism?: number`\n  Minimum optimism score\n\n- `role?: string`\n  Filter by role\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n- `team_id?: string`\n  Filter by team ID\n\n### Returns\n\n- `{ id: string; background: string; emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }; name: string; personality_traits: string[]; role: string; date_of_birth?: string; email?: string; growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }`\n  Full character model with ID.\n\n  - `id: string`\n  - `background: string`\n  - `emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }`\n  - `name: string`\n  - `personality_traits: string[]`\n  - `role: string`\n  - `date_of_birth?: string`\n  - `email?: string`\n  - `growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]`\n  - `height_meters?: number`\n  - `profile_image_url?: string`\n  - `salary_gbp?: string`\n  - `signature_quotes?: string[]`\n  - `team_id?: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\n// Automatically fetches more pages as needed.\nfor await (const character of client.characters.list()) {\n  console.log(character);\n}\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/characters \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.characters.list',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const character of client.characters.list()) {\n  console.log(character.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/characters',
    httpMethod: 'post',
    summary: 'Create a new character',
    description: 'Add a new character to the Ted Lasso universe.',
    stainlessPath: '(resource) characters > (method) create',
    qualified: 'client.characters.create',
    params: [
      'background: string;',
      'emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; };',
      'name: string;',
      'personality_traits: string[];',
      'role: string;',
      'date_of_birth?: string;',
      'email?: string;',
      'growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[];',
      'height_meters?: number;',
      'profile_image_url?: string;',
      'salary_gbp?: number | string;',
      'signature_quotes?: string[];',
      'team_id?: string;',
    ],
    response:
      '{ id: string; background: string; emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }; name: string; personality_traits: string[]; role: string; date_of_birth?: string; email?: string; growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }',
    markdown:
      "## create\n\n`client.characters.create(background: string, emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }, name: string, personality_traits: string[], role: string, date_of_birth?: string, email?: string, growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[], height_meters?: number, profile_image_url?: string, salary_gbp?: number | string, signature_quotes?: string[], team_id?: string): { id: string; background: string; emotional_stats: emotional_stats; name: string; personality_traits: string[]; role: character_role; date_of_birth?: string; email?: string; growth_arcs?: growth_arc[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }`\n\n**post** `/characters`\n\nAdd a new character to the Ted Lasso universe.\n\n### Parameters\n\n- `background: string`\n  Character background and history\n\n- `emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }`\n  Emotional intelligence stats\n  - `curiosity: number`\n    Level of curiosity over judgment (0-100)\n  - `empathy: number`\n    Capacity for empathy (0-100)\n  - `optimism: number`\n    Level of optimism (0-100)\n  - `resilience: number`\n    Bounce-back ability (0-100)\n  - `vulnerability: number`\n    Willingness to be vulnerable (0-100)\n\n- `name: string`\n  Character's full name\n\n- `personality_traits: string[]`\n  Key personality traits\n\n- `role: string`\n  Character's role\n\n- `date_of_birth?: string`\n  Character's date of birth\n\n- `email?: string`\n  Character's email address\n\n- `growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]`\n  Character development across seasons\n\n- `height_meters?: number`\n  Height in meters\n\n- `profile_image_url?: string`\n  URL to character's profile image\n\n- `salary_gbp?: number | string`\n  Annual salary in GBP\n\n- `signature_quotes?: string[]`\n  Memorable quotes from this character\n\n- `team_id?: string`\n  ID of the team they belong to\n\n### Returns\n\n- `{ id: string; background: string; emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }; name: string; personality_traits: string[]; role: string; date_of_birth?: string; email?: string; growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }`\n  Full character model with ID.\n\n  - `id: string`\n  - `background: string`\n  - `emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }`\n  - `name: string`\n  - `personality_traits: string[]`\n  - `role: string`\n  - `date_of_birth?: string`\n  - `email?: string`\n  - `growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]`\n  - `height_meters?: number`\n  - `profile_image_url?: string`\n  - `salary_gbp?: string`\n  - `signature_quotes?: string[]`\n  - `team_id?: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst character = await client.characters.create({\n  background: 'Legendary midfielder for Chelsea and AFC Richmond, now assistant coach. Known for his gruff exterior hiding a heart of gold.',\n  emotional_stats: {\n  curiosity: 40,\n  empathy: 85,\n  optimism: 45,\n  resilience: 95,\n  vulnerability: 60,\n},\n  name: 'Roy Kent',\n  personality_traits: ['intense', 'loyal', 'secretly caring', 'profane'],\n  role: 'coach',\n});\n\nconsole.log(character);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/characters \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY" \\\n    -d "{\n          \\"background\\": \\"Legendary midfielder for Chelsea and AFC Richmond, now assistant coach. Known for his gruff exterior hiding a heart of gold.\\",\n          \\"emotional_stats\\": {\n            \\"curiosity\\": 40,\n            \\"empathy\\": 85,\n            \\"optimism\\": 45,\n            \\"resilience\\": 95,\n            \\"vulnerability\\": 60\n          },\n          \\"name\\": \\"Roy Kent\\",\n          \\"personality_traits\\": [\n            \\"intense\\",\n            \\"loyal\\",\n            \\"secretly caring\\",\n            \\"profane\\"\n          ],\n          \\"role\\": \\"coach\\",\n          \\"date_of_birth\\": \\"1977-03-15\\",\n          \\"email\\": \\"roy.kent@afcrichmond.com\\",\n          \\"height_meters\\": 1.78,\n          \\"profile_image_url\\": \\"https://afcrichmond.com/images/roy-kent.jpg\\",\n          \\"salary_gbp\\": \\"175000.00\\",\n          \\"signature_quotes\\": [\n            \\"He\'s here, he\'s there, he\'s every-f***ing-where, Roy Kent!\\",\n            \\"Whistle!\\"\n          ],\n          \\"team_id\\": \\"afc-richmond\\"\n        }"',
      },
      typescript: {
        method: 'client.characters.create',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst character = await client.characters.create({\n  background:\n    'Legendary midfielder for Chelsea and AFC Richmond, now assistant coach. Known for his gruff exterior hiding a heart of gold.',\n  emotional_stats: {\n    curiosity: 40,\n    empathy: 85,\n    optimism: 45,\n    resilience: 95,\n    vulnerability: 60,\n  },\n  name: 'Roy Kent',\n  personality_traits: ['intense', 'loyal', 'secretly caring', 'profane'],\n  role: 'coach',\n});\n\nconsole.log(character.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/characters/{character_id}',
    httpMethod: 'delete',
    summary: 'Delete a character',
    description: 'Remove a character from the database.',
    stainlessPath: '(resource) characters > (method) delete',
    qualified: 'client.characters.delete',
    params: ['character_id: string;'],
    markdown:
      "## delete\n\n`client.characters.delete(character_id: string): void`\n\n**delete** `/characters/{character_id}`\n\nRemove a character from the database.\n\n### Parameters\n\n- `character_id: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nawait client.characters.delete('character_id')\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/characters/$CHARACTER_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.characters.delete',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.characters.delete('character_id');",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/characters/{character_id}',
    httpMethod: 'get',
    summary: 'Get a character by ID',
    description: 'Retrieve detailed information about a specific character.',
    stainlessPath: '(resource) characters > (method) retrieve',
    qualified: 'client.characters.retrieve',
    params: ['character_id: string;'],
    response:
      '{ id: string; background: string; emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }; name: string; personality_traits: string[]; role: string; date_of_birth?: string; email?: string; growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }',
    markdown:
      "## retrieve\n\n`client.characters.retrieve(character_id: string): { id: string; background: string; emotional_stats: emotional_stats; name: string; personality_traits: string[]; role: character_role; date_of_birth?: string; email?: string; growth_arcs?: growth_arc[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }`\n\n**get** `/characters/{character_id}`\n\nRetrieve detailed information about a specific character.\n\n### Parameters\n\n- `character_id: string`\n\n### Returns\n\n- `{ id: string; background: string; emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }; name: string; personality_traits: string[]; role: string; date_of_birth?: string; email?: string; growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }`\n  Full character model with ID.\n\n  - `id: string`\n  - `background: string`\n  - `emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }`\n  - `name: string`\n  - `personality_traits: string[]`\n  - `role: string`\n  - `date_of_birth?: string`\n  - `email?: string`\n  - `growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]`\n  - `height_meters?: number`\n  - `profile_image_url?: string`\n  - `salary_gbp?: string`\n  - `signature_quotes?: string[]`\n  - `team_id?: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst character = await client.characters.retrieve('character_id');\n\nconsole.log(character);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/characters/$CHARACTER_ID \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.characters.retrieve',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst character = await client.characters.retrieve('character_id');\n\nconsole.log(character.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/characters/{character_id}',
    httpMethod: 'patch',
    summary: 'Update a character',
    description: 'Update specific fields of an existing character.',
    stainlessPath: '(resource) characters > (method) update',
    qualified: 'client.characters.update',
    params: [
      'character_id: string;',
      'background?: string;',
      'date_of_birth?: string;',
      'email?: string;',
      'emotional_stats?: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; };',
      'growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[];',
      'height_meters?: number;',
      'name?: string;',
      'personality_traits?: string[];',
      'profile_image_url?: string;',
      'role?: string;',
      'salary_gbp?: number | string;',
      'signature_quotes?: string[];',
      'team_id?: string;',
    ],
    response:
      '{ id: string; background: string; emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }; name: string; personality_traits: string[]; role: string; date_of_birth?: string; email?: string; growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }',
    markdown:
      "## update\n\n`client.characters.update(character_id: string, background?: string, date_of_birth?: string, email?: string, emotional_stats?: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }, growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[], height_meters?: number, name?: string, personality_traits?: string[], profile_image_url?: string, role?: string, salary_gbp?: number | string, signature_quotes?: string[], team_id?: string): { id: string; background: string; emotional_stats: emotional_stats; name: string; personality_traits: string[]; role: character_role; date_of_birth?: string; email?: string; growth_arcs?: growth_arc[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }`\n\n**patch** `/characters/{character_id}`\n\nUpdate specific fields of an existing character.\n\n### Parameters\n\n- `character_id: string`\n\n- `background?: string`\n\n- `date_of_birth?: string`\n\n- `email?: string`\n\n- `emotional_stats?: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }`\n  Emotional intelligence statistics for a character.\n  - `curiosity: number`\n    Level of curiosity over judgment (0-100)\n  - `empathy: number`\n    Capacity for empathy (0-100)\n  - `optimism: number`\n    Level of optimism (0-100)\n  - `resilience: number`\n    Bounce-back ability (0-100)\n  - `vulnerability: number`\n    Willingness to be vulnerable (0-100)\n\n- `growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]`\n\n- `height_meters?: number`\n\n- `name?: string`\n\n- `personality_traits?: string[]`\n\n- `profile_image_url?: string`\n\n- `role?: string`\n  Roles characters can have.\n\n- `salary_gbp?: number | string`\n\n- `signature_quotes?: string[]`\n\n- `team_id?: string`\n\n### Returns\n\n- `{ id: string; background: string; emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }; name: string; personality_traits: string[]; role: string; date_of_birth?: string; email?: string; growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]; height_meters?: number; profile_image_url?: string; salary_gbp?: string; signature_quotes?: string[]; team_id?: string; }`\n  Full character model with ID.\n\n  - `id: string`\n  - `background: string`\n  - `emotional_stats: { curiosity: number; empathy: number; optimism: number; resilience: number; vulnerability: number; }`\n  - `name: string`\n  - `personality_traits: string[]`\n  - `role: string`\n  - `date_of_birth?: string`\n  - `email?: string`\n  - `growth_arcs?: { breakthrough: string; challenge: string; ending_point: string; season: number; starting_point: string; }[]`\n  - `height_meters?: number`\n  - `profile_image_url?: string`\n  - `salary_gbp?: string`\n  - `signature_quotes?: string[]`\n  - `team_id?: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst character = await client.characters.update('character_id');\n\nconsole.log(character);\n```",
    perLanguage: {
      http: {
        example:
          "curl https://believe.cjav.dev/characters/$CHARACTER_ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $TED_DEMO_API_KEY\" \\\n    -d '{}'",
      },
      typescript: {
        method: 'client.characters.update',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst character = await client.characters.update('character_id');\n\nconsole.log(character.id);",
      },
    },
  },
  {
    name: 'get_quotes',
    endpoint: '/characters/{character_id}/quotes',
    httpMethod: 'get',
    summary: "Get character's signature quotes",
    description: 'Get all signature quotes from a specific character.',
    stainlessPath: '(resource) characters > (method) get_quotes',
    qualified: 'client.characters.getQuotes',
    params: ['character_id: string;'],
    response: 'string[]',
    markdown:
      "## get_quotes\n\n`client.characters.getQuotes(character_id: string): string[]`\n\n**get** `/characters/{character_id}/quotes`\n\nGet all signature quotes from a specific character.\n\n### Parameters\n\n- `character_id: string`\n\n### Returns\n\n- `string[]`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst response = await client.characters.getQuotes('character_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/characters/$CHARACTER_ID/quotes \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.characters.getQuotes',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.characters.getQuotes('character_id');\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/coaching/principles',
    httpMethod: 'get',
    summary: 'Get Coaching Principles',
    description: "Get a paginated list of Ted Lasso's core coaching principles and philosophy.",
    stainlessPath: '(resource) coaching.principles > (method) list',
    qualified: 'client.coaching.principles.list',
    params: ['limit?: number;', 'skip?: number;'],
    response:
      '{ id: string; application: string; example_from_show: string; explanation: string; principle: string; ted_quote: string; }',
    markdown:
      "## list\n\n`client.coaching.principles.list(limit?: number, skip?: number): { id: string; application: string; example_from_show: string; explanation: string; principle: string; ted_quote: string; }`\n\n**get** `/coaching/principles`\n\nGet a paginated list of Ted Lasso's core coaching principles and philosophy.\n\n### Parameters\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n### Returns\n\n- `{ id: string; application: string; example_from_show: string; explanation: string; principle: string; ted_quote: string; }`\n  A Ted Lasso coaching principle.\n\n  - `id: string`\n  - `application: string`\n  - `example_from_show: string`\n  - `explanation: string`\n  - `principle: string`\n  - `ted_quote: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\n// Automatically fetches more pages as needed.\nfor await (const coachingPrinciple of client.coaching.principles.list()) {\n  console.log(coachingPrinciple);\n}\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/coaching/principles \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.coaching.principles.list',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const coachingPrinciple of client.coaching.principles.list()) {\n  console.log(coachingPrinciple.id);\n}",
      },
    },
  },
  {
    name: 'get_random',
    endpoint: '/coaching/principles/random',
    httpMethod: 'get',
    summary: 'Get a Random Coaching Principle',
    description: 'Get a random coaching principle to inspire your day.',
    stainlessPath: '(resource) coaching.principles > (method) get_random',
    qualified: 'client.coaching.principles.getRandom',
    response:
      '{ id: string; application: string; example_from_show: string; explanation: string; principle: string; ted_quote: string; }',
    markdown:
      "## get_random\n\n`client.coaching.principles.getRandom(): { id: string; application: string; example_from_show: string; explanation: string; principle: string; ted_quote: string; }`\n\n**get** `/coaching/principles/random`\n\nGet a random coaching principle to inspire your day.\n\n### Returns\n\n- `{ id: string; application: string; example_from_show: string; explanation: string; principle: string; ted_quote: string; }`\n  A Ted Lasso coaching principle.\n\n  - `id: string`\n  - `application: string`\n  - `example_from_show: string`\n  - `explanation: string`\n  - `principle: string`\n  - `ted_quote: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst coachingPrinciple = await client.coaching.principles.getRandom();\n\nconsole.log(coachingPrinciple);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/coaching/principles/random \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.coaching.principles.getRandom',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst coachingPrinciple = await client.coaching.principles.getRandom();\n\nconsole.log(coachingPrinciple.id);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/coaching/principles/{principle_id}',
    httpMethod: 'get',
    summary: 'Get a Specific Coaching Principle',
    description: 'Get details about a specific coaching principle.',
    stainlessPath: '(resource) coaching.principles > (method) retrieve',
    qualified: 'client.coaching.principles.retrieve',
    params: ['principle_id: string;'],
    response:
      '{ id: string; application: string; example_from_show: string; explanation: string; principle: string; ted_quote: string; }',
    markdown:
      "## retrieve\n\n`client.coaching.principles.retrieve(principle_id: string): { id: string; application: string; example_from_show: string; explanation: string; principle: string; ted_quote: string; }`\n\n**get** `/coaching/principles/{principle_id}`\n\nGet details about a specific coaching principle.\n\n### Parameters\n\n- `principle_id: string`\n\n### Returns\n\n- `{ id: string; application: string; example_from_show: string; explanation: string; principle: string; ted_quote: string; }`\n  A Ted Lasso coaching principle.\n\n  - `id: string`\n  - `application: string`\n  - `example_from_show: string`\n  - `explanation: string`\n  - `principle: string`\n  - `ted_quote: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst coachingPrinciple = await client.coaching.principles.retrieve('principle_id');\n\nconsole.log(coachingPrinciple);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/coaching/principles/$PRINCIPLE_ID \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.coaching.principles.retrieve',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst coachingPrinciple = await client.coaching.principles.retrieve('principle_id');\n\nconsole.log(coachingPrinciple.id);",
      },
    },
  },
  {
    name: 'resolve',
    endpoint: '/conflicts/resolve',
    httpMethod: 'post',
    summary: 'Resolve Conflicts',
    description: 'Get Ted Lasso-style advice for resolving conflicts.',
    stainlessPath: '(resource) conflicts > (method) resolve',
    qualified: 'client.conflicts.resolve',
    params: [
      "conflict_type: 'interpersonal' | 'team_dynamics' | 'leadership' | 'ego' | 'miscommunication' | 'competition';",
      'description: string;',
      'parties_involved: string[];',
      'attempts_made?: string[];',
    ],
    response:
      '{ barbecue_sauce_wisdom: string; diagnosis: string; diamond_dogs_advice: string; potential_outcome: string; steps_to_resolution: string[]; ted_approach: string; }',
    markdown:
      "## resolve\n\n`client.conflicts.resolve(conflict_type: 'interpersonal' | 'team_dynamics' | 'leadership' | 'ego' | 'miscommunication' | 'competition', description: string, parties_involved: string[], attempts_made?: string[]): { barbecue_sauce_wisdom: string; diagnosis: string; diamond_dogs_advice: string; potential_outcome: string; steps_to_resolution: string[]; ted_approach: string; }`\n\n**post** `/conflicts/resolve`\n\nGet Ted Lasso-style advice for resolving conflicts.\n\n### Parameters\n\n- `conflict_type: 'interpersonal' | 'team_dynamics' | 'leadership' | 'ego' | 'miscommunication' | 'competition'`\n  Type of conflict\n\n- `description: string`\n  Describe the conflict\n\n- `parties_involved: string[]`\n  Who is involved in the conflict\n\n- `attempts_made?: string[]`\n  What you've already tried\n\n### Returns\n\n- `{ barbecue_sauce_wisdom: string; diagnosis: string; diamond_dogs_advice: string; potential_outcome: string; steps_to_resolution: string[]; ted_approach: string; }`\n  Conflict resolution response.\n\n  - `barbecue_sauce_wisdom: string`\n  - `diagnosis: string`\n  - `diamond_dogs_advice: string`\n  - `potential_outcome: string`\n  - `steps_to_resolution: string[]`\n  - `ted_approach: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst response = await client.conflicts.resolve({\n  conflict_type: 'interpersonal',\n  description: 'Alex keeps taking credit for my ideas in meetings and I\\'m getting resentful.',\n  parties_involved: ['Me', 'My teammate Alex'],\n});\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/conflicts/resolve \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY" \\\n    -d "{\n          \\"conflict_type\\": \\"interpersonal\\",\n          \\"description\\": \\"Alex keeps taking credit for my ideas in meetings and I\'m getting resentful.\\",\n          \\"parties_involved\\": [\n            \\"Me\\",\n            \\"My teammate Alex\\"\n          ],\n          \\"attempts_made\\": [\n            \\"Mentioned it casually\\",\n            \\"Avoided them\\"\n          ]\n        }"',
      },
      typescript: {
        method: 'client.conflicts.resolve',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.conflicts.resolve({\n  conflict_type: 'interpersonal',\n  description: \"Alex keeps taking credit for my ideas in meetings and I'm getting resentful.\",\n  parties_involved: ['Me', 'My teammate Alex'],\n});\n\nconsole.log(response.barbecue_sauce_wisdom);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/episodes',
    httpMethod: 'get',
    summary: 'List all episodes',
    description: 'Get a paginated list of all Ted Lasso episodes with optional filtering by season.',
    stainlessPath: '(resource) episodes > (method) list',
    qualified: 'client.episodes.list',
    params: ['character_focus?: string;', 'limit?: number;', 'season?: number;', 'skip?: number;'],
    response:
      '{ id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }',
    markdown:
      "## list\n\n`client.episodes.list(character_focus?: string, limit?: number, season?: number, skip?: number): { id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }`\n\n**get** `/episodes`\n\nGet a paginated list of all Ted Lasso episodes with optional filtering by season.\n\n### Parameters\n\n- `character_focus?: string`\n  Filter by character focus (character ID)\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `season?: number`\n  Filter by season\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n### Returns\n\n- `{ id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }`\n  Full episode model with ID.\n\n  - `id: string`\n  - `air_date: string`\n  - `character_focus: string[]`\n  - `director: string`\n  - `episode_number: number`\n  - `main_theme: string`\n  - `runtime_minutes: number`\n  - `season: number`\n  - `synopsis: string`\n  - `ted_wisdom: string`\n  - `title: string`\n  - `writer: string`\n  - `biscuits_with_boss_moment?: string`\n  - `memorable_moments?: string[]`\n  - `us_viewers_millions?: number`\n  - `viewer_rating?: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\n// Automatically fetches more pages as needed.\nfor await (const episode of client.episodes.list()) {\n  console.log(episode);\n}\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/episodes \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.episodes.list',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const episode of client.episodes.list()) {\n  console.log(episode.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/episodes',
    httpMethod: 'post',
    summary: 'Create a new episode',
    description: 'Add a new episode to the series.',
    stainlessPath: '(resource) episodes > (method) create',
    qualified: 'client.episodes.create',
    params: [
      'air_date: string;',
      'character_focus: string[];',
      'director: string;',
      'episode_number: number;',
      'main_theme: string;',
      'runtime_minutes: number;',
      'season: number;',
      'synopsis: string;',
      'ted_wisdom: string;',
      'title: string;',
      'writer: string;',
      'biscuits_with_boss_moment?: string;',
      'memorable_moments?: string[];',
      'us_viewers_millions?: number;',
      'viewer_rating?: number;',
    ],
    response:
      '{ id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }',
    markdown:
      "## create\n\n`client.episodes.create(air_date: string, character_focus: string[], director: string, episode_number: number, main_theme: string, runtime_minutes: number, season: number, synopsis: string, ted_wisdom: string, title: string, writer: string, biscuits_with_boss_moment?: string, memorable_moments?: string[], us_viewers_millions?: number, viewer_rating?: number): { id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }`\n\n**post** `/episodes`\n\nAdd a new episode to the series.\n\n### Parameters\n\n- `air_date: string`\n  Original air date\n\n- `character_focus: string[]`\n  Characters with significant development\n\n- `director: string`\n  Episode director\n\n- `episode_number: number`\n  Episode number within season\n\n- `main_theme: string`\n  Central theme of the episode\n\n- `runtime_minutes: number`\n  Episode runtime in minutes\n\n- `season: number`\n  Season number\n\n- `synopsis: string`\n  Brief plot synopsis\n\n- `ted_wisdom: string`\n  Key piece of Ted wisdom from the episode\n\n- `title: string`\n  Episode title\n\n- `writer: string`\n  Episode writer(s)\n\n- `biscuits_with_boss_moment?: string`\n  Notable biscuits with the boss scene\n\n- `memorable_moments?: string[]`\n  Standout moments from the episode\n\n- `us_viewers_millions?: number`\n  US viewership in millions\n\n- `viewer_rating?: number`\n  Viewer rating out of 10\n\n### Returns\n\n- `{ id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }`\n  Full episode model with ID.\n\n  - `id: string`\n  - `air_date: string`\n  - `character_focus: string[]`\n  - `director: string`\n  - `episode_number: number`\n  - `main_theme: string`\n  - `runtime_minutes: number`\n  - `season: number`\n  - `synopsis: string`\n  - `ted_wisdom: string`\n  - `title: string`\n  - `writer: string`\n  - `biscuits_with_boss_moment?: string`\n  - `memorable_moments?: string[]`\n  - `us_viewers_millions?: number`\n  - `viewer_rating?: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst episode = await client.episodes.create({\n  air_date: '2020-10-02',\n  character_focus: ['ted-lasso', 'coach-beard', 'higgins', 'nate'],\n  director: 'MJ Delaney',\n  episode_number: 8,\n  main_theme: 'The power of vulnerability and male friendship',\n  runtime_minutes: 29,\n  season: 1,\n  synopsis: 'Ted creates a support group for the coaching staff while Rebecca faces a difficult decision about her future.',\n  ted_wisdom: 'There\\'s two buttons I never like to hit: that\\'s panic and snooze.',\n  title: 'The Diamond Dogs',\n  writer: 'Jason Sudeikis, Brendan Hunt, Joe Kelly',\n});\n\nconsole.log(episode);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/episodes \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY" \\\n    -d "{\n          \\"air_date\\": \\"2020-10-02\\",\n          \\"character_focus\\": [\n            \\"ted-lasso\\",\n            \\"coach-beard\\",\n            \\"higgins\\",\n            \\"nate\\"\n          ],\n          \\"director\\": \\"MJ Delaney\\",\n          \\"episode_number\\": 8,\n          \\"main_theme\\": \\"The power of vulnerability and male friendship\\",\n          \\"runtime_minutes\\": 29,\n          \\"season\\": 1,\n          \\"synopsis\\": \\"Ted creates a support group for the coaching staff while Rebecca faces a difficult decision about her future.\\",\n          \\"ted_wisdom\\": \\"There\'s two buttons I never like to hit: that\'s panic and snooze.\\",\n          \\"title\\": \\"The Diamond Dogs\\",\n          \\"writer\\": \\"Jason Sudeikis, Brendan Hunt, Joe Kelly\\",\n          \\"biscuits_with_boss_moment\\": \\"Ted and Rebecca have an honest conversation about trust.\\",\n          \\"memorable_moments\\": [\n            \\"First Diamond Dogs meeting\\",\n            \\"The famous dart scene with Rupert\\",\n            \\"Be curious, not judgmental speech\\"\n          ],\n          \\"us_viewers_millions\\": 1.42,\n          \\"viewer_rating\\": 9.1\n        }"',
      },
      typescript: {
        method: 'client.episodes.create',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst episode = await client.episodes.create({\n  air_date: '2020-10-02',\n  character_focus: ['ted-lasso', 'coach-beard', 'higgins', 'nate'],\n  director: 'MJ Delaney',\n  episode_number: 8,\n  main_theme: 'The power of vulnerability and male friendship',\n  runtime_minutes: 29,\n  season: 1,\n  synopsis:\n    'Ted creates a support group for the coaching staff while Rebecca faces a difficult decision about her future.',\n  ted_wisdom: \"There's two buttons I never like to hit: that's panic and snooze.\",\n  title: 'The Diamond Dogs',\n  writer: 'Jason Sudeikis, Brendan Hunt, Joe Kelly',\n});\n\nconsole.log(episode.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/episodes/{episode_id}',
    httpMethod: 'delete',
    summary: 'Delete an episode',
    description: 'Remove an episode from the database.',
    stainlessPath: '(resource) episodes > (method) delete',
    qualified: 'client.episodes.delete',
    params: ['episode_id: string;'],
    markdown:
      "## delete\n\n`client.episodes.delete(episode_id: string): void`\n\n**delete** `/episodes/{episode_id}`\n\nRemove an episode from the database.\n\n### Parameters\n\n- `episode_id: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nawait client.episodes.delete('episode_id')\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/episodes/$EPISODE_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.episodes.delete',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.episodes.delete('episode_id');",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/episodes/{episode_id}',
    httpMethod: 'get',
    summary: 'Get an episode by ID',
    description: 'Retrieve detailed information about a specific episode.',
    stainlessPath: '(resource) episodes > (method) retrieve',
    qualified: 'client.episodes.retrieve',
    params: ['episode_id: string;'],
    response:
      '{ id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }',
    markdown:
      "## retrieve\n\n`client.episodes.retrieve(episode_id: string): { id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }`\n\n**get** `/episodes/{episode_id}`\n\nRetrieve detailed information about a specific episode.\n\n### Parameters\n\n- `episode_id: string`\n\n### Returns\n\n- `{ id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }`\n  Full episode model with ID.\n\n  - `id: string`\n  - `air_date: string`\n  - `character_focus: string[]`\n  - `director: string`\n  - `episode_number: number`\n  - `main_theme: string`\n  - `runtime_minutes: number`\n  - `season: number`\n  - `synopsis: string`\n  - `ted_wisdom: string`\n  - `title: string`\n  - `writer: string`\n  - `biscuits_with_boss_moment?: string`\n  - `memorable_moments?: string[]`\n  - `us_viewers_millions?: number`\n  - `viewer_rating?: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst episode = await client.episodes.retrieve('episode_id');\n\nconsole.log(episode);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/episodes/$EPISODE_ID \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.episodes.retrieve',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst episode = await client.episodes.retrieve('episode_id');\n\nconsole.log(episode.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/episodes/{episode_id}',
    httpMethod: 'patch',
    summary: 'Update an episode',
    description: 'Update specific fields of an existing episode.',
    stainlessPath: '(resource) episodes > (method) update',
    qualified: 'client.episodes.update',
    params: [
      'episode_id: string;',
      'air_date?: string;',
      'biscuits_with_boss_moment?: string;',
      'character_focus?: string[];',
      'director?: string;',
      'episode_number?: number;',
      'main_theme?: string;',
      'memorable_moments?: string[];',
      'runtime_minutes?: number;',
      'season?: number;',
      'synopsis?: string;',
      'ted_wisdom?: string;',
      'title?: string;',
      'us_viewers_millions?: number;',
      'viewer_rating?: number;',
      'writer?: string;',
    ],
    response:
      '{ id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }',
    markdown:
      "## update\n\n`client.episodes.update(episode_id: string, air_date?: string, biscuits_with_boss_moment?: string, character_focus?: string[], director?: string, episode_number?: number, main_theme?: string, memorable_moments?: string[], runtime_minutes?: number, season?: number, synopsis?: string, ted_wisdom?: string, title?: string, us_viewers_millions?: number, viewer_rating?: number, writer?: string): { id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }`\n\n**patch** `/episodes/{episode_id}`\n\nUpdate specific fields of an existing episode.\n\n### Parameters\n\n- `episode_id: string`\n\n- `air_date?: string`\n\n- `biscuits_with_boss_moment?: string`\n\n- `character_focus?: string[]`\n\n- `director?: string`\n\n- `episode_number?: number`\n\n- `main_theme?: string`\n\n- `memorable_moments?: string[]`\n\n- `runtime_minutes?: number`\n\n- `season?: number`\n\n- `synopsis?: string`\n\n- `ted_wisdom?: string`\n\n- `title?: string`\n\n- `us_viewers_millions?: number`\n\n- `viewer_rating?: number`\n\n- `writer?: string`\n\n### Returns\n\n- `{ id: string; air_date: string; character_focus: string[]; director: string; episode_number: number; main_theme: string; runtime_minutes: number; season: number; synopsis: string; ted_wisdom: string; title: string; writer: string; biscuits_with_boss_moment?: string; memorable_moments?: string[]; us_viewers_millions?: number; viewer_rating?: number; }`\n  Full episode model with ID.\n\n  - `id: string`\n  - `air_date: string`\n  - `character_focus: string[]`\n  - `director: string`\n  - `episode_number: number`\n  - `main_theme: string`\n  - `runtime_minutes: number`\n  - `season: number`\n  - `synopsis: string`\n  - `ted_wisdom: string`\n  - `title: string`\n  - `writer: string`\n  - `biscuits_with_boss_moment?: string`\n  - `memorable_moments?: string[]`\n  - `us_viewers_millions?: number`\n  - `viewer_rating?: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst episode = await client.episodes.update('episode_id');\n\nconsole.log(episode);\n```",
    perLanguage: {
      http: {
        example:
          "curl https://believe.cjav.dev/episodes/$EPISODE_ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $TED_DEMO_API_KEY\" \\\n    -d '{}'",
      },
      typescript: {
        method: 'client.episodes.update',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst episode = await client.episodes.update('episode_id');\n\nconsole.log(episode.id);",
      },
    },
  },
  {
    name: 'get_wisdom',
    endpoint: '/episodes/{episode_id}/wisdom',
    httpMethod: 'get',
    summary: 'Get episode wisdom',
    description: "Get Ted's wisdom and memorable moments from a specific episode.",
    stainlessPath: '(resource) episodes > (method) get_wisdom',
    qualified: 'client.episodes.getWisdom',
    params: ['episode_id: string;'],
    response: 'object',
    markdown:
      "## get_wisdom\n\n`client.episodes.getWisdom(episode_id: string): object`\n\n**get** `/episodes/{episode_id}/wisdom`\n\nGet Ted's wisdom and memorable moments from a specific episode.\n\n### Parameters\n\n- `episode_id: string`\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst response = await client.episodes.getWisdom('episode_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/episodes/$EPISODE_ID/wisdom \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.episodes.getWisdom',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.episodes.getWisdom('episode_id');\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'check',
    endpoint: '/health',
    httpMethod: 'get',
    summary: 'Health Check',
    description: 'Check if the API is running and healthy.',
    stainlessPath: '(resource) health > (method) check',
    qualified: 'client.health.check',
    response: 'object',
    markdown:
      "## check\n\n`client.health.check(): object`\n\n**get** `/health`\n\nCheck if the API is running and healthy.\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst response = await client.health.check();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example: 'curl https://believe.cjav.dev/health \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.health.check',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.health.check();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/matches',
    httpMethod: 'get',
    summary: 'List all matches',
    description: 'Get a paginated list of all matches with optional filtering.',
    stainlessPath: '(resource) matches > (method) list',
    qualified: 'client.matches.list',
    params: [
      'limit?: number;',
      "match_type?: 'league' | 'cup' | 'friendly' | 'playoff' | 'final';",
      "result?: 'win' | 'loss' | 'draw' | 'pending';",
      'skip?: number;',
      'team_id?: string;',
    ],
    response:
      "{ id: string; away_team_id: string; date: string; home_team_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: 'win' | 'loss' | 'draw' | 'pending'; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]; weather_temp_celsius?: number; }",
    markdown:
      "## list\n\n`client.matches.list(limit?: number, match_type?: 'league' | 'cup' | 'friendly' | 'playoff' | 'final', result?: 'win' | 'loss' | 'draw' | 'pending', skip?: number, team_id?: string): { id: string; away_team_id: string; date: string; home_team_id: string; match_type: match_type; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: match_result; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: turning_point[]; weather_temp_celsius?: number; }`\n\n**get** `/matches`\n\nGet a paginated list of all matches with optional filtering.\n\n### Parameters\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `match_type?: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'`\n  Filter by match type\n\n- `result?: 'win' | 'loss' | 'draw' | 'pending'`\n  Filter by result\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n- `team_id?: string`\n  Filter by team (home or away)\n\n### Returns\n\n- `{ id: string; away_team_id: string; date: string; home_team_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: 'win' | 'loss' | 'draw' | 'pending'; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]; weather_temp_celsius?: number; }`\n  Full match model with ID.\n\n  - `id: string`\n  - `away_team_id: string`\n  - `date: string`\n  - `home_team_id: string`\n  - `match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'`\n  - `attendance?: number`\n  - `away_score?: number`\n  - `episode_id?: string`\n  - `home_score?: number`\n  - `lesson_learned?: string`\n  - `possession_percentage?: number`\n  - `result?: 'win' | 'loss' | 'draw' | 'pending'`\n  - `ted_halftime_speech?: string`\n  - `ticket_revenue_gbp?: string`\n  - `turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]`\n  - `weather_temp_celsius?: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\n// Automatically fetches more pages as needed.\nfor await (const match of client.matches.list()) {\n  console.log(match);\n}\n```",
    perLanguage: {
      http: {
        example: 'curl https://believe.cjav.dev/matches \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.matches.list',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const match of client.matches.list()) {\n  console.log(match.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/matches',
    httpMethod: 'post',
    summary: 'Create a new match',
    description: 'Schedule a new match.',
    stainlessPath: '(resource) matches > (method) create',
    qualified: 'client.matches.create',
    params: [
      'away_team_id: string;',
      'date: string;',
      'home_team_id: string;',
      "match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final';",
      'attendance?: number;',
      'away_score?: number;',
      'episode_id?: string;',
      'home_score?: number;',
      'lesson_learned?: string;',
      'possession_percentage?: number;',
      "result?: 'win' | 'loss' | 'draw' | 'pending';",
      'ted_halftime_speech?: string;',
      'ticket_revenue_gbp?: number | string;',
      'turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[];',
      'weather_temp_celsius?: number;',
    ],
    response:
      "{ id: string; away_team_id: string; date: string; home_team_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: 'win' | 'loss' | 'draw' | 'pending'; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]; weather_temp_celsius?: number; }",
    markdown:
      "## create\n\n`client.matches.create(away_team_id: string, date: string, home_team_id: string, match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final', attendance?: number, away_score?: number, episode_id?: string, home_score?: number, lesson_learned?: string, possession_percentage?: number, result?: 'win' | 'loss' | 'draw' | 'pending', ted_halftime_speech?: string, ticket_revenue_gbp?: number | string, turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[], weather_temp_celsius?: number): { id: string; away_team_id: string; date: string; home_team_id: string; match_type: match_type; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: match_result; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: turning_point[]; weather_temp_celsius?: number; }`\n\n**post** `/matches`\n\nSchedule a new match.\n\n### Parameters\n\n- `away_team_id: string`\n  Away team ID\n\n- `date: string`\n  Match date and time\n\n- `home_team_id: string`\n  Home team ID\n\n- `match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'`\n  Type of match\n\n- `attendance?: number`\n  Match attendance\n\n- `away_score?: number`\n  Away team score\n\n- `episode_id?: string`\n  Episode ID where this match is featured\n\n- `home_score?: number`\n  Home team score\n\n- `lesson_learned?: string`\n  The life lesson learned from this match\n\n- `possession_percentage?: number`\n  Home team possession percentage\n\n- `result?: 'win' | 'loss' | 'draw' | 'pending'`\n  Match result from home team perspective\n\n- `ted_halftime_speech?: string`\n  Ted's inspirational halftime speech\n\n- `ticket_revenue_gbp?: number | string`\n  Total ticket revenue in GBP\n\n- `turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]`\n  Key moments that changed the match\n\n- `weather_temp_celsius?: number`\n  Temperature at kickoff in Celsius\n\n### Returns\n\n- `{ id: string; away_team_id: string; date: string; home_team_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: 'win' | 'loss' | 'draw' | 'pending'; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]; weather_temp_celsius?: number; }`\n  Full match model with ID.\n\n  - `id: string`\n  - `away_team_id: string`\n  - `date: string`\n  - `home_team_id: string`\n  - `match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'`\n  - `attendance?: number`\n  - `away_score?: number`\n  - `episode_id?: string`\n  - `home_score?: number`\n  - `lesson_learned?: string`\n  - `possession_percentage?: number`\n  - `result?: 'win' | 'loss' | 'draw' | 'pending'`\n  - `ted_halftime_speech?: string`\n  - `ticket_revenue_gbp?: string`\n  - `turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]`\n  - `weather_temp_celsius?: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst match = await client.matches.create({\n  away_team_id: 'tottenham',\n  date: '2024-02-20T19:45:00Z',\n  home_team_id: 'afc-richmond',\n  match_type: 'cup',\n});\n\nconsole.log(match);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/matches \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY" \\\n    -d "{\n          \\"away_team_id\\": \\"tottenham\\",\n          \\"date\\": \\"2024-02-20T19:45:00Z\\",\n          \\"home_team_id\\": \\"afc-richmond\\",\n          \\"match_type\\": \\"cup\\",\n          \\"attendance\\": 24500,\n          \\"episode_id\\": \\"s02e05\\",\n          \\"lesson_learned\\": \\"It\'s not about the wins and losses, it\'s about helping these young fellas be the best versions of themselves.\\",\n          \\"possession_percentage\\": 50,\n          \\"ted_halftime_speech\\": \\"You know what the happiest animal on Earth is? It\'s a goldfish. You know why? It\'s got a 10-second memory.\\",\n          \\"ticket_revenue_gbp\\": \\"735000.00\\",\n          \\"weather_temp_celsius\\": 8.5\n        }"',
      },
      typescript: {
        method: 'client.matches.create',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst match = await client.matches.create({\n  away_team_id: 'tottenham',\n  date: '2024-02-20T19:45:00Z',\n  home_team_id: 'afc-richmond',\n  match_type: 'cup',\n});\n\nconsole.log(match.id);",
      },
    },
  },
  {
    name: 'stream_live_simulation',
    endpoint: '/matches/live',
    httpMethod: 'get',
    summary: 'Live Match Simulation WebSocket',
    description:
      'WebSocket endpoint for real-time live match simulation.\n\nConnect to receive a stream of match events as they happen in a simulated football match.\n\n## Connection\n\nConnect via WebSocket with optional query parameters to customize the simulation.\n\n## Example WebSocket URL\n\n```\nws://localhost:8000/matches/live?home_team=AFC%20Richmond&away_team=Manchester%20City&speed=2.0&excitement_level=7\n```\n\n## Server Messages\n\nThe server sends JSON messages with these types:\n- `match_start` - When the match begins\n- `match_event` - For each match event (goals, fouls, cards, etc.)\n- `match_end` - When the match concludes\n- `error` - If an error occurs\n- `pong` - Response to client ping\n\n## Client Messages\n\nSend JSON to control the simulation:\n- `{"action": "ping"}` - Keep-alive, server responds with `{"type": "pong"}`\n- `{"action": "pause"}` - Pause the simulation\n- `{"action": "resume"}` - Resume a paused simulation\n- `{"action": "set_speed", "speed": 2.0}` - Change playback speed (0.1-10.0)\n- `{"action": "get_status"}` - Request current match status\n',
    stainlessPath: '(resource) matches > (method) stream_live_simulation',
    qualified: 'client.matches.streamLiveSimulation',
    params: ['away_team?: string;', 'excitement_level?: number;', 'home_team?: string;', 'speed?: number;'],
    markdown:
      '## stream_live_simulation\n\n`client.matches.streamLiveSimulation(away_team?: string, excitement_level?: number, home_team?: string, speed?: number): void`\n\n**get** `/matches/live`\n\nWebSocket endpoint for real-time live match simulation.\n\nConnect to receive a stream of match events as they happen in a simulated football match.\n\n## Connection\n\nConnect via WebSocket with optional query parameters to customize the simulation.\n\n## Example WebSocket URL\n\n```\nws://localhost:8000/matches/live?home_team=AFC%20Richmond&away_team=Manchester%20City&speed=2.0&excitement_level=7\n```\n\n## Server Messages\n\nThe server sends JSON messages with these types:\n- `match_start` - When the match begins\n- `match_event` - For each match event (goals, fouls, cards, etc.)\n- `match_end` - When the match concludes\n- `error` - If an error occurs\n- `pong` - Response to client ping\n\n## Client Messages\n\nSend JSON to control the simulation:\n- `{"action": "ping"}` - Keep-alive, server responds with `{"type": "pong"}`\n- `{"action": "pause"}` - Pause the simulation\n- `{"action": "resume"}` - Resume a paused simulation\n- `{"action": "set_speed", "speed": 2.0}` - Change playback speed (0.1-10.0)\n- `{"action": "get_status"}` - Request current match status\n\n\n### Parameters\n\n- `away_team?: string`\n  Away team name\n\n- `excitement_level?: number`\n  How eventful the match should be (1=boring, 10=chaos)\n\n- `home_team?: string`\n  Home team name\n\n- `speed?: number`\n  Simulation speed multiplier (1.0 = real-time)\n\n### Example\n\n```typescript\nimport TedDemo from \'ted-demo\';\n\nconst client = new TedDemo();\n\nawait client.matches.streamLiveSimulation()\n```',
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/matches/live \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.matches.streamLiveSimulation',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.matches.streamLiveSimulation();",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/matches/{match_id}',
    httpMethod: 'delete',
    summary: 'Delete a match',
    description: 'Remove a match from the database.',
    stainlessPath: '(resource) matches > (method) delete',
    qualified: 'client.matches.delete',
    params: ['match_id: string;'],
    markdown:
      "## delete\n\n`client.matches.delete(match_id: string): void`\n\n**delete** `/matches/{match_id}`\n\nRemove a match from the database.\n\n### Parameters\n\n- `match_id: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nawait client.matches.delete('match_id')\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/matches/$MATCH_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.matches.delete',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.matches.delete('match_id');",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/matches/{match_id}',
    httpMethod: 'get',
    summary: 'Get a match by ID',
    description: 'Retrieve detailed information about a specific match.',
    stainlessPath: '(resource) matches > (method) retrieve',
    qualified: 'client.matches.retrieve',
    params: ['match_id: string;'],
    response:
      "{ id: string; away_team_id: string; date: string; home_team_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: 'win' | 'loss' | 'draw' | 'pending'; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]; weather_temp_celsius?: number; }",
    markdown:
      "## retrieve\n\n`client.matches.retrieve(match_id: string): { id: string; away_team_id: string; date: string; home_team_id: string; match_type: match_type; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: match_result; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: turning_point[]; weather_temp_celsius?: number; }`\n\n**get** `/matches/{match_id}`\n\nRetrieve detailed information about a specific match.\n\n### Parameters\n\n- `match_id: string`\n\n### Returns\n\n- `{ id: string; away_team_id: string; date: string; home_team_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: 'win' | 'loss' | 'draw' | 'pending'; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]; weather_temp_celsius?: number; }`\n  Full match model with ID.\n\n  - `id: string`\n  - `away_team_id: string`\n  - `date: string`\n  - `home_team_id: string`\n  - `match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'`\n  - `attendance?: number`\n  - `away_score?: number`\n  - `episode_id?: string`\n  - `home_score?: number`\n  - `lesson_learned?: string`\n  - `possession_percentage?: number`\n  - `result?: 'win' | 'loss' | 'draw' | 'pending'`\n  - `ted_halftime_speech?: string`\n  - `ticket_revenue_gbp?: string`\n  - `turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]`\n  - `weather_temp_celsius?: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst match = await client.matches.retrieve('match_id');\n\nconsole.log(match);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/matches/$MATCH_ID \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.matches.retrieve',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst match = await client.matches.retrieve('match_id');\n\nconsole.log(match.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/matches/{match_id}',
    httpMethod: 'patch',
    summary: 'Update a match',
    description: 'Update specific fields of an existing match (e.g., update score).',
    stainlessPath: '(resource) matches > (method) update',
    qualified: 'client.matches.update',
    params: [
      'match_id: string;',
      'attendance?: number;',
      'away_score?: number;',
      'away_team_id?: string;',
      'date?: string;',
      'episode_id?: string;',
      'home_score?: number;',
      'home_team_id?: string;',
      'lesson_learned?: string;',
      "match_type?: 'league' | 'cup' | 'friendly' | 'playoff' | 'final';",
      'possession_percentage?: number;',
      "result?: 'win' | 'loss' | 'draw' | 'pending';",
      'ted_halftime_speech?: string;',
      'ticket_revenue_gbp?: number | string;',
      'turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[];',
      'weather_temp_celsius?: number;',
    ],
    response:
      "{ id: string; away_team_id: string; date: string; home_team_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: 'win' | 'loss' | 'draw' | 'pending'; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]; weather_temp_celsius?: number; }",
    markdown:
      "## update\n\n`client.matches.update(match_id: string, attendance?: number, away_score?: number, away_team_id?: string, date?: string, episode_id?: string, home_score?: number, home_team_id?: string, lesson_learned?: string, match_type?: 'league' | 'cup' | 'friendly' | 'playoff' | 'final', possession_percentage?: number, result?: 'win' | 'loss' | 'draw' | 'pending', ted_halftime_speech?: string, ticket_revenue_gbp?: number | string, turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[], weather_temp_celsius?: number): { id: string; away_team_id: string; date: string; home_team_id: string; match_type: match_type; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: match_result; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: turning_point[]; weather_temp_celsius?: number; }`\n\n**patch** `/matches/{match_id}`\n\nUpdate specific fields of an existing match (e.g., update score).\n\n### Parameters\n\n- `match_id: string`\n\n- `attendance?: number`\n\n- `away_score?: number`\n\n- `away_team_id?: string`\n\n- `date?: string`\n\n- `episode_id?: string`\n\n- `home_score?: number`\n\n- `home_team_id?: string`\n\n- `lesson_learned?: string`\n\n- `match_type?: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'`\n  Types of matches.\n\n- `possession_percentage?: number`\n\n- `result?: 'win' | 'loss' | 'draw' | 'pending'`\n  Match result types.\n\n- `ted_halftime_speech?: string`\n\n- `ticket_revenue_gbp?: number | string`\n\n- `turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]`\n\n- `weather_temp_celsius?: number`\n\n### Returns\n\n- `{ id: string; away_team_id: string; date: string; home_team_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; attendance?: number; away_score?: number; episode_id?: string; home_score?: number; lesson_learned?: string; possession_percentage?: number; result?: 'win' | 'loss' | 'draw' | 'pending'; ted_halftime_speech?: string; ticket_revenue_gbp?: string; turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]; weather_temp_celsius?: number; }`\n  Full match model with ID.\n\n  - `id: string`\n  - `away_team_id: string`\n  - `date: string`\n  - `home_team_id: string`\n  - `match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'`\n  - `attendance?: number`\n  - `away_score?: number`\n  - `episode_id?: string`\n  - `home_score?: number`\n  - `lesson_learned?: string`\n  - `possession_percentage?: number`\n  - `result?: 'win' | 'loss' | 'draw' | 'pending'`\n  - `ted_halftime_speech?: string`\n  - `ticket_revenue_gbp?: string`\n  - `turning_points?: { description: string; emotional_impact: string; minute: number; character_involved?: string; }[]`\n  - `weather_temp_celsius?: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst match = await client.matches.update('match_id');\n\nconsole.log(match);\n```",
    perLanguage: {
      http: {
        example:
          "curl https://believe.cjav.dev/matches/$MATCH_ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $TED_DEMO_API_KEY\" \\\n    -d '{}'",
      },
      typescript: {
        method: 'client.matches.update',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst match = await client.matches.update('match_id');\n\nconsole.log(match.id);",
      },
    },
  },
  {
    name: 'get_lesson',
    endpoint: '/matches/{match_id}/lesson',
    httpMethod: 'get',
    summary: 'Get match lesson',
    description: 'Get the life lesson learned from a specific match.',
    stainlessPath: '(resource) matches > (method) get_lesson',
    qualified: 'client.matches.getLesson',
    params: ['match_id: string;'],
    response: 'object',
    markdown:
      "## get_lesson\n\n`client.matches.getLesson(match_id: string): object`\n\n**get** `/matches/{match_id}/lesson`\n\nGet the life lesson learned from a specific match.\n\n### Parameters\n\n- `match_id: string`\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst response = await client.matches.getLesson('match_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/matches/$MATCH_ID/lesson \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.matches.getLesson',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.matches.getLesson('match_id');\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'get_turning_points',
    endpoint: '/matches/{match_id}/turning-points',
    httpMethod: 'get',
    summary: 'Get match turning points',
    description: 'Get all turning points from a specific match.',
    stainlessPath: '(resource) matches > (method) get_turning_points',
    qualified: 'client.matches.getTurningPoints',
    params: ['match_id: string;'],
    response: 'object[]',
    markdown:
      "## get_turning_points\n\n`client.matches.getTurningPoints(match_id: string): object[]`\n\n**get** `/matches/{match_id}/turning-points`\n\nGet all turning points from a specific match.\n\n### Parameters\n\n- `match_id: string`\n\n### Returns\n\n- `object[]`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst response = await client.matches.getTurningPoints('match_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/matches/$MATCH_ID/turning-points \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.matches.getTurningPoints',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.matches.getTurningPoints('match_id');\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'stream',
    endpoint: '/matches/{match_id}/commentary/stream',
    httpMethod: 'post',
    summary: 'Stream Match Commentary',
    description:
      'Stream live match commentary for a specific match. Uses Server-Sent Events (SSE) to stream commentary events in real-time.',
    stainlessPath: '(resource) matches.commentary > (method) stream',
    qualified: 'client.matches.commentary.stream',
    params: ['match_id: string;'],
    response: 'object',
    markdown:
      "## stream\n\n`client.matches.commentary.stream(match_id: string): object`\n\n**post** `/matches/{match_id}/commentary/stream`\n\nStream live match commentary for a specific match. Uses Server-Sent Events (SSE) to stream commentary events in real-time.\n\n### Parameters\n\n- `match_id: string`\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst response = await client.matches.commentary.stream('match_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/matches/$MATCH_ID/commentary/stream \\\n    -X POST \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.matches.commentary.stream',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.matches.commentary.stream('match_id');\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/pep-talk',
    httpMethod: 'get',
    summary: 'Get a Pep Talk',
    description:
      'Get a motivational pep talk from Ted Lasso himself. By default returns the complete pep talk. Add `?stream=true` to get Server-Sent Events (SSE) streaming the pep talk chunk by chunk.',
    stainlessPath: '(resource) pep_talk > (method) retrieve',
    qualified: 'client.pepTalk.retrieve',
    params: ['stream?: boolean;'],
    response:
      '{ chunks: { chunk_id: number; is_final: boolean; text: string; emotional_beat?: string; }[]; text: string; }',
    markdown:
      "## retrieve\n\n`client.pepTalk.retrieve(stream?: boolean): { chunks: object[]; text: string; }`\n\n**get** `/pep-talk`\n\nGet a motivational pep talk from Ted Lasso himself. By default returns the complete pep talk. Add `?stream=true` to get Server-Sent Events (SSE) streaming the pep talk chunk by chunk.\n\n### Parameters\n\n- `stream?: boolean`\n  If true, returns SSE stream instead of full response\n\n### Returns\n\n- `{ chunks: { chunk_id: number; is_final: boolean; text: string; emotional_beat?: string; }[]; text: string; }`\n  A complete pep talk response.\n\n  - `chunks: { chunk_id: number; is_final: boolean; text: string; emotional_beat?: string; }[]`\n  - `text: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst pepTalk = await client.pepTalk.retrieve();\n\nconsole.log(pepTalk);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/pep-talk \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.pepTalk.retrieve',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst pepTalk = await client.pepTalk.retrieve();\n\nconsole.log(pepTalk.chunks);",
      },
    },
  },
  {
    name: 'simulate',
    endpoint: '/press',
    httpMethod: 'post',
    summary: 'Press Conference Simulator',
    description: "Get Ted's response to press conference questions.",
    stainlessPath: '(resource) press > (method) simulate',
    qualified: 'client.press.simulate',
    params: ['question: string;', 'hostile?: boolean;', 'topic?: string;'],
    response:
      '{ actual_wisdom: string; follow_up_dodge: string; reporter_reaction: string; response: string; deflection_humor?: string; }',
    markdown:
      "## simulate\n\n`client.press.simulate(question: string, hostile?: boolean, topic?: string): { actual_wisdom: string; follow_up_dodge: string; reporter_reaction: string; response: string; deflection_humor?: string; }`\n\n**post** `/press`\n\nGet Ted's response to press conference questions.\n\n### Parameters\n\n- `question: string`\n  The press question to answer\n\n- `hostile?: boolean`\n  Is this a hostile question from Trent Crimm?\n\n- `topic?: string`\n  Topic category\n\n### Returns\n\n- `{ actual_wisdom: string; follow_up_dodge: string; reporter_reaction: string; response: string; deflection_humor?: string; }`\n  Ted's press conference response.\n\n  - `actual_wisdom: string`\n  - `follow_up_dodge: string`\n  - `reporter_reaction: string`\n  - `response: string`\n  - `deflection_humor?: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst response = await client.press.simulate({ question: 'Ted, your team just lost 5-0. How do you explain this embarrassing defeat?' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/press \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY" \\\n    -d \'{\n          "question": "Ted, your team just lost 5-0. How do you explain this embarrassing defeat?",\n          "topic": "match_result"\n        }\'',
      },
      typescript: {
        method: 'client.press.simulate',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.press.simulate({\n  question: 'Ted, your team just lost 5-0. How do you explain this embarrassing defeat?',\n});\n\nconsole.log(response.actual_wisdom);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/quotes',
    httpMethod: 'get',
    summary: 'List all quotes',
    description: 'Get a paginated list of all memorable Ted Lasso quotes with optional filtering.',
    stainlessPath: '(resource) quotes > (method) list',
    qualified: 'client.quotes.list',
    params: [
      'character_id?: string;',
      'funny?: boolean;',
      'inspirational?: boolean;',
      'limit?: number;',
      'moment_type?: string;',
      'skip?: number;',
      'theme?: string;',
    ],
    response:
      '{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }',
    markdown:
      "## list\n\n`client.quotes.list(character_id?: string, funny?: boolean, inspirational?: boolean, limit?: number, moment_type?: string, skip?: number, theme?: string): { id: string; character_id: string; context: string; moment_type: quote_moment; text: string; theme: quote_theme; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: quote_theme[]; times_shared?: number; }`\n\n**get** `/quotes`\n\nGet a paginated list of all memorable Ted Lasso quotes with optional filtering.\n\n### Parameters\n\n- `character_id?: string`\n  Filter by character\n\n- `funny?: boolean`\n  Filter funny quotes\n\n- `inspirational?: boolean`\n  Filter inspirational quotes\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `moment_type?: string`\n  Filter by moment type\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n- `theme?: string`\n  Filter by theme\n\n### Returns\n\n- `{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }`\n  Full quote model with ID.\n\n  - `id: string`\n  - `character_id: string`\n  - `context: string`\n  - `moment_type: string`\n  - `text: string`\n  - `theme: string`\n  - `episode_id?: string`\n  - `is_funny?: boolean`\n  - `is_inspirational?: boolean`\n  - `popularity_score?: number`\n  - `secondary_themes?: string[]`\n  - `times_shared?: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\n// Automatically fetches more pages as needed.\nfor await (const quote of client.quotes.list()) {\n  console.log(quote);\n}\n```",
    perLanguage: {
      http: {
        example: 'curl https://believe.cjav.dev/quotes \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.quotes.list',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const quote of client.quotes.list()) {\n  console.log(quote.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/quotes',
    httpMethod: 'post',
    summary: 'Create a new quote',
    description: 'Add a new memorable quote to the collection.',
    stainlessPath: '(resource) quotes > (method) create',
    qualified: 'client.quotes.create',
    params: [
      'character_id: string;',
      'context: string;',
      'moment_type: string;',
      'text: string;',
      'theme: string;',
      'episode_id?: string;',
      'is_funny?: boolean;',
      'is_inspirational?: boolean;',
      'popularity_score?: number;',
      'secondary_themes?: string[];',
      'times_shared?: number;',
    ],
    response:
      '{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }',
    markdown:
      "## create\n\n`client.quotes.create(character_id: string, context: string, moment_type: string, text: string, theme: string, episode_id?: string, is_funny?: boolean, is_inspirational?: boolean, popularity_score?: number, secondary_themes?: string[], times_shared?: number): { id: string; character_id: string; context: string; moment_type: quote_moment; text: string; theme: quote_theme; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: quote_theme[]; times_shared?: number; }`\n\n**post** `/quotes`\n\nAdd a new memorable quote to the collection.\n\n### Parameters\n\n- `character_id: string`\n  ID of the character who said it\n\n- `context: string`\n  Context in which the quote was said\n\n- `moment_type: string`\n  Type of moment when the quote was said\n\n- `text: string`\n  The quote text\n\n- `theme: string`\n  Primary theme of the quote\n\n- `episode_id?: string`\n  Episode where the quote appears\n\n- `is_funny?: boolean`\n  Whether this quote is humorous\n\n- `is_inspirational?: boolean`\n  Whether this quote is inspirational\n\n- `popularity_score?: number`\n  Popularity/virality score (0-100)\n\n- `secondary_themes?: string[]`\n  Additional themes\n\n- `times_shared?: number`\n  Number of times shared on social media\n\n### Returns\n\n- `{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }`\n  Full quote model with ID.\n\n  - `id: string`\n  - `character_id: string`\n  - `context: string`\n  - `moment_type: string`\n  - `text: string`\n  - `theme: string`\n  - `episode_id?: string`\n  - `is_funny?: boolean`\n  - `is_inspirational?: boolean`\n  - `popularity_score?: number`\n  - `secondary_themes?: string[]`\n  - `times_shared?: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst quote = await client.quotes.create({\n  character_id: 'ted-lasso',\n  context: 'Ted\\'s first team meeting, revealing his coaching philosophy',\n  moment_type: 'locker_room',\n  text: 'I believe in believe.',\n  theme: 'belief',\n});\n\nconsole.log(quote);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/quotes \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY" \\\n    -d "{\n          \\"character_id\\": \\"ted-lasso\\",\n          \\"context\\": \\"Ted\'s first team meeting, revealing his coaching philosophy\\",\n          \\"moment_type\\": \\"locker_room\\",\n          \\"text\\": \\"I believe in believe.\\",\n          \\"theme\\": \\"belief\\",\n          \\"episode_id\\": \\"s01e01\\",\n          \\"popularity_score\\": 98.5,\n          \\"secondary_themes\\": [\n            \\"leadership\\",\n            \\"teamwork\\"\n          ],\n          \\"times_shared\\": 250000\n        }"',
      },
      typescript: {
        method: 'client.quotes.create',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst quote = await client.quotes.create({\n  character_id: 'ted-lasso',\n  context: \"Ted's first team meeting, revealing his coaching philosophy\",\n  moment_type: 'locker_room',\n  text: 'I believe in believe.',\n  theme: 'belief',\n});\n\nconsole.log(quote.id);",
      },
    },
  },
  {
    name: 'list_by_character',
    endpoint: '/quotes/characters/{character_id}',
    httpMethod: 'get',
    summary: 'Get all quotes by a character',
    description: 'Get a paginated list of quotes from a specific character.',
    stainlessPath: '(resource) quotes > (method) list_by_character',
    qualified: 'client.quotes.listByCharacter',
    params: ['character_id: string;', 'limit?: number;', 'skip?: number;'],
    response:
      '{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }',
    markdown:
      "## list_by_character\n\n`client.quotes.listByCharacter(character_id: string, limit?: number, skip?: number): { id: string; character_id: string; context: string; moment_type: quote_moment; text: string; theme: quote_theme; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: quote_theme[]; times_shared?: number; }`\n\n**get** `/quotes/characters/{character_id}`\n\nGet a paginated list of quotes from a specific character.\n\n### Parameters\n\n- `character_id: string`\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n### Returns\n\n- `{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }`\n  Full quote model with ID.\n\n  - `id: string`\n  - `character_id: string`\n  - `context: string`\n  - `moment_type: string`\n  - `text: string`\n  - `theme: string`\n  - `episode_id?: string`\n  - `is_funny?: boolean`\n  - `is_inspirational?: boolean`\n  - `popularity_score?: number`\n  - `secondary_themes?: string[]`\n  - `times_shared?: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\n// Automatically fetches more pages as needed.\nfor await (const quote of client.quotes.listByCharacter('character_id')) {\n  console.log(quote);\n}\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/quotes/characters/$CHARACTER_ID \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.quotes.listByCharacter',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const quote of client.quotes.listByCharacter('character_id')) {\n  console.log(quote.id);\n}",
      },
    },
  },
  {
    name: 'get_random',
    endpoint: '/quotes/random',
    httpMethod: 'get',
    summary: 'Get a random quote',
    description: 'Get a random Ted Lasso quote, optionally filtered.',
    stainlessPath: '(resource) quotes > (method) get_random',
    qualified: 'client.quotes.getRandom',
    params: ['character_id?: string;', 'inspirational?: boolean;', 'theme?: string;'],
    response:
      '{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }',
    markdown:
      "## get_random\n\n`client.quotes.getRandom(character_id?: string, inspirational?: boolean, theme?: string): { id: string; character_id: string; context: string; moment_type: quote_moment; text: string; theme: quote_theme; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: quote_theme[]; times_shared?: number; }`\n\n**get** `/quotes/random`\n\nGet a random Ted Lasso quote, optionally filtered.\n\n### Parameters\n\n- `character_id?: string`\n  Filter by character\n\n- `inspirational?: boolean`\n  Filter inspirational quotes\n\n- `theme?: string`\n  Filter by theme\n\n### Returns\n\n- `{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }`\n  Full quote model with ID.\n\n  - `id: string`\n  - `character_id: string`\n  - `context: string`\n  - `moment_type: string`\n  - `text: string`\n  - `theme: string`\n  - `episode_id?: string`\n  - `is_funny?: boolean`\n  - `is_inspirational?: boolean`\n  - `popularity_score?: number`\n  - `secondary_themes?: string[]`\n  - `times_shared?: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst quote = await client.quotes.getRandom();\n\nconsole.log(quote);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/quotes/random \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.quotes.getRandom',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst quote = await client.quotes.getRandom();\n\nconsole.log(quote.id);",
      },
    },
  },
  {
    name: 'list_by_theme',
    endpoint: '/quotes/themes/{theme}',
    httpMethod: 'get',
    summary: 'Get quotes by theme',
    description: 'Get a paginated list of quotes related to a specific theme.',
    stainlessPath: '(resource) quotes > (method) list_by_theme',
    qualified: 'client.quotes.listByTheme',
    params: ['theme: string;', 'limit?: number;', 'skip?: number;'],
    response:
      '{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }',
    markdown:
      "## list_by_theme\n\n`client.quotes.listByTheme(theme: string, limit?: number, skip?: number): { id: string; character_id: string; context: string; moment_type: quote_moment; text: string; theme: quote_theme; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: quote_theme[]; times_shared?: number; }`\n\n**get** `/quotes/themes/{theme}`\n\nGet a paginated list of quotes related to a specific theme.\n\n### Parameters\n\n- `theme: string`\n  Themes that quotes can be categorized under.\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n### Returns\n\n- `{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }`\n  Full quote model with ID.\n\n  - `id: string`\n  - `character_id: string`\n  - `context: string`\n  - `moment_type: string`\n  - `text: string`\n  - `theme: string`\n  - `episode_id?: string`\n  - `is_funny?: boolean`\n  - `is_inspirational?: boolean`\n  - `popularity_score?: number`\n  - `secondary_themes?: string[]`\n  - `times_shared?: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\n// Automatically fetches more pages as needed.\nfor await (const quote of client.quotes.listByTheme('belief')) {\n  console.log(quote);\n}\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/quotes/themes/$THEME \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.quotes.listByTheme',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const quote of client.quotes.listByTheme('belief')) {\n  console.log(quote.id);\n}",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/quotes/{quote_id}',
    httpMethod: 'delete',
    summary: 'Delete a quote',
    description: 'Remove a quote from the collection.',
    stainlessPath: '(resource) quotes > (method) delete',
    qualified: 'client.quotes.delete',
    params: ['quote_id: string;'],
    markdown:
      "## delete\n\n`client.quotes.delete(quote_id: string): void`\n\n**delete** `/quotes/{quote_id}`\n\nRemove a quote from the collection.\n\n### Parameters\n\n- `quote_id: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nawait client.quotes.delete('quote_id')\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/quotes/$QUOTE_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.quotes.delete',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.quotes.delete('quote_id');",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/quotes/{quote_id}',
    httpMethod: 'get',
    summary: 'Get a quote by ID',
    description: 'Retrieve a specific quote by its ID.',
    stainlessPath: '(resource) quotes > (method) retrieve',
    qualified: 'client.quotes.retrieve',
    params: ['quote_id: string;'],
    response:
      '{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }',
    markdown:
      "## retrieve\n\n`client.quotes.retrieve(quote_id: string): { id: string; character_id: string; context: string; moment_type: quote_moment; text: string; theme: quote_theme; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: quote_theme[]; times_shared?: number; }`\n\n**get** `/quotes/{quote_id}`\n\nRetrieve a specific quote by its ID.\n\n### Parameters\n\n- `quote_id: string`\n\n### Returns\n\n- `{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }`\n  Full quote model with ID.\n\n  - `id: string`\n  - `character_id: string`\n  - `context: string`\n  - `moment_type: string`\n  - `text: string`\n  - `theme: string`\n  - `episode_id?: string`\n  - `is_funny?: boolean`\n  - `is_inspirational?: boolean`\n  - `popularity_score?: number`\n  - `secondary_themes?: string[]`\n  - `times_shared?: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst quote = await client.quotes.retrieve('quote_id');\n\nconsole.log(quote);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/quotes/$QUOTE_ID \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.quotes.retrieve',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst quote = await client.quotes.retrieve('quote_id');\n\nconsole.log(quote.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/quotes/{quote_id}',
    httpMethod: 'patch',
    summary: 'Update a quote',
    description: 'Update specific fields of an existing quote.',
    stainlessPath: '(resource) quotes > (method) update',
    qualified: 'client.quotes.update',
    params: [
      'quote_id: string;',
      'character_id?: string;',
      'context?: string;',
      'episode_id?: string;',
      'is_funny?: boolean;',
      'is_inspirational?: boolean;',
      'moment_type?: string;',
      'popularity_score?: number;',
      'secondary_themes?: string[];',
      'text?: string;',
      'theme?: string;',
      'times_shared?: number;',
    ],
    response:
      '{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }',
    markdown:
      "## update\n\n`client.quotes.update(quote_id: string, character_id?: string, context?: string, episode_id?: string, is_funny?: boolean, is_inspirational?: boolean, moment_type?: string, popularity_score?: number, secondary_themes?: string[], text?: string, theme?: string, times_shared?: number): { id: string; character_id: string; context: string; moment_type: quote_moment; text: string; theme: quote_theme; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: quote_theme[]; times_shared?: number; }`\n\n**patch** `/quotes/{quote_id}`\n\nUpdate specific fields of an existing quote.\n\n### Parameters\n\n- `quote_id: string`\n\n- `character_id?: string`\n\n- `context?: string`\n\n- `episode_id?: string`\n\n- `is_funny?: boolean`\n\n- `is_inspirational?: boolean`\n\n- `moment_type?: string`\n  Types of moments when quotes occur.\n\n- `popularity_score?: number`\n\n- `secondary_themes?: string[]`\n\n- `text?: string`\n\n- `theme?: string`\n  Themes that quotes can be categorized under.\n\n- `times_shared?: number`\n\n### Returns\n\n- `{ id: string; character_id: string; context: string; moment_type: string; text: string; theme: string; episode_id?: string; is_funny?: boolean; is_inspirational?: boolean; popularity_score?: number; secondary_themes?: string[]; times_shared?: number; }`\n  Full quote model with ID.\n\n  - `id: string`\n  - `character_id: string`\n  - `context: string`\n  - `moment_type: string`\n  - `text: string`\n  - `theme: string`\n  - `episode_id?: string`\n  - `is_funny?: boolean`\n  - `is_inspirational?: boolean`\n  - `popularity_score?: number`\n  - `secondary_themes?: string[]`\n  - `times_shared?: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst quote = await client.quotes.update('quote_id');\n\nconsole.log(quote);\n```",
    perLanguage: {
      http: {
        example:
          "curl https://believe.cjav.dev/quotes/$QUOTE_ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $TED_DEMO_API_KEY\" \\\n    -d '{}'",
      },
      typescript: {
        method: 'client.quotes.update',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst quote = await client.quotes.update('quote_id');\n\nconsole.log(quote.id);",
      },
    },
  },
  {
    name: 'transform_negative_thoughts',
    endpoint: '/reframe',
    httpMethod: 'post',
    summary: 'Reframe Negative Thoughts',
    description: "Transform negative thoughts into positive perspectives with Ted's help.",
    stainlessPath: '(resource) reframe > (method) transform_negative_thoughts',
    qualified: 'client.reframe.transformNegativeThoughts',
    params: ['negative_thought: string;', 'recurring?: boolean;'],
    response:
      '{ daily_affirmation: string; original_thought: string; reframed_thought: string; ted_perspective: string; dr_sharon_insight?: string; }',
    markdown:
      "## transform_negative_thoughts\n\n`client.reframe.transformNegativeThoughts(negative_thought: string, recurring?: boolean): { daily_affirmation: string; original_thought: string; reframed_thought: string; ted_perspective: string; dr_sharon_insight?: string; }`\n\n**post** `/reframe`\n\nTransform negative thoughts into positive perspectives with Ted's help.\n\n### Parameters\n\n- `negative_thought: string`\n  The negative thought to reframe\n\n- `recurring?: boolean`\n  Is this a recurring thought?\n\n### Returns\n\n- `{ daily_affirmation: string; original_thought: string; reframed_thought: string; ted_perspective: string; dr_sharon_insight?: string; }`\n  Reframed perspective response.\n\n  - `daily_affirmation: string`\n  - `original_thought: string`\n  - `reframed_thought: string`\n  - `ted_perspective: string`\n  - `dr_sharon_insight?: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst response = await client.reframe.transformNegativeThoughts({ negative_thought: 'I\\'m not good enough for this job.' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/reframe \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY" \\\n    -d "{\n          \\"negative_thought\\": \\"I\'m not good enough for this job.\\"\n        }"',
      },
      typescript: {
        method: 'client.reframe.transformNegativeThoughts',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.reframe.transformNegativeThoughts({\n  negative_thought: \"I'm not good enough for this job.\",\n});\n\nconsole.log(response.daily_affirmation);",
      },
    },
  },
  {
    name: 'test_connection',
    endpoint: '/stream/test',
    httpMethod: 'get',
    summary: 'Test SSE Connection',
    description: 'A simple SSE test endpoint that streams numbers 1-5.',
    stainlessPath: '(resource) stream > (method) test_connection',
    qualified: 'client.stream.testConnection',
    response: 'object',
    markdown:
      "## test_connection\n\n`client.stream.testConnection(): object`\n\n**get** `/stream/test`\n\nA simple SSE test endpoint that streams numbers 1-5.\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst response = await client.stream.testConnection();\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/stream/test \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.stream.testConnection',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.stream.testConnection();\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/team-members',
    httpMethod: 'get',
    summary: 'List all team members',
    description:
      'Get a paginated list of all team members.\n\nThis endpoint demonstrates **union types (oneOf)** in the response.\nEach team member can be one of: Player, Coach, MedicalStaff, or EquipmentManager.\nThe `member_type` field acts as a discriminator to determine the shape of each object.',
    stainlessPath: '(resource) team_members > (method) list',
    qualified: 'client.teamMembers.list',
    params: [
      'limit?: number;',
      "member_type?: 'player' | 'coach' | 'medical_staff' | 'equipment_manager';",
      'skip?: number;',
      'team_id?: string;',
    ],
    response:
      "{ id: string; character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; } | { id: string; character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; } | { id: string; character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { id: string; character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; }",
    markdown:
      "## list\n\n`client.teamMembers.list(limit?: number, member_type?: 'player' | 'coach' | 'medical_staff' | 'equipment_manager', skip?: number, team_id?: string): object | object | object | object`\n\n**get** `/team-members`\n\nGet a paginated list of all team members.\n\nThis endpoint demonstrates **union types (oneOf)** in the response.\nEach team member can be one of: Player, Coach, MedicalStaff, or EquipmentManager.\nThe `member_type` field acts as a discriminator to determine the shape of each object.\n\n### Parameters\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `member_type?: 'player' | 'coach' | 'medical_staff' | 'equipment_manager'`\n  Filter by member type\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n- `team_id?: string`\n  Filter by team ID\n\n### Returns\n\n- `{ id: string; character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; } | { id: string; character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; } | { id: string; character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { id: string; character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; }`\n  Full player model with ID.\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\n// Automatically fetches more pages as needed.\nfor await (const teamMemberListResponse of client.teamMembers.list()) {\n  console.log(teamMemberListResponse);\n}\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/team-members \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.teamMembers.list',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const teamMemberListResponse of client.teamMembers.list()) {\n  console.log(teamMemberListResponse);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/team-members',
    httpMethod: 'post',
    summary: 'Create a new team member',
    description:
      'Add a new team member to a team.\n\nThe request body is a **union type (oneOf)** - you must include the `member_type` discriminator field:\n- `"member_type": "player"` - Creates a player (requires position, jersey_number, etc.)\n- `"member_type": "coach"` - Creates a coach (requires specialty, etc.)\n- `"member_type": "medical_staff"` - Creates medical staff (requires medical specialty, etc.)\n- `"member_type": "equipment_manager"` - Creates equipment manager (requires responsibilities, etc.)\n\nThe `character_id` field references an existing character from `/characters/{id}`.\n\n**Example for creating a player:**\n```json\n{\n  "member_type": "player",\n  "character_id": "sam-obisanya",\n  "team_id": "afc-richmond",\n  "years_with_team": 2,\n  "position": "midfielder",\n  "jersey_number": 24,\n  "goals_scored": 12,\n  "assists": 15\n}\n```',
    stainlessPath: '(resource) team_members > (method) create',
    qualified: 'client.teamMembers.create',
    params: [
      "{ character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; } | { character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; } | { character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; };",
    ],
    response:
      "{ id: string; character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; } | { id: string; character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; } | { id: string; character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { id: string; character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; }",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/team-members \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY" \\\n    -d \'{\n          "character_id": "jamie-tartt",\n          "jersey_number": 9,\n          "position": "forward",\n          "team_id": "afc-richmond",\n          "years_with_team": 3,\n          "assists": 23,\n          "goals_scored": 47\n        }\'',
      },
      typescript: {
        method: 'client.teamMembers.create',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst teamMember = await client.teamMembers.create({\n  character_id: 'jamie-tartt',\n  jersey_number: 9,\n  position: 'forward',\n  team_id: 'afc-richmond',\n  years_with_team: 3,\n});\n\nconsole.log(teamMember);",
      },
    },
  },
  {
    name: 'list_coaches',
    endpoint: '/team-members/coaches/',
    httpMethod: 'get',
    summary: 'List all coaches',
    description: 'Get only coaches (filtered subset of team members).',
    stainlessPath: '(resource) team_members > (method) list_coaches',
    qualified: 'client.teamMembers.listCoaches',
    params: [
      'limit?: number;',
      'skip?: number;',
      "specialty?: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst';",
      'team_id?: string;',
    ],
    response:
      "{ id: string; character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; }",
    markdown:
      "## list_coaches\n\n`client.teamMembers.listCoaches(limit?: number, skip?: number, specialty?: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst', team_id?: string): { id: string; character_id: string; specialty: coach_specialty; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; }`\n\n**get** `/team-members/coaches/`\n\nGet only coaches (filtered subset of team members).\n\n### Parameters\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n- `specialty?: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'`\n  Filter by specialty\n\n- `team_id?: string`\n  Filter by team ID\n\n### Returns\n\n- `{ id: string; character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; }`\n  Full coach model with ID.\n\n  - `id: string`\n  - `character_id: string`\n  - `specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'`\n  - `team_id: string`\n  - `years_with_team: number`\n  - `certifications?: string[]`\n  - `member_type?: 'coach'`\n  - `win_rate?: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\n// Automatically fetches more pages as needed.\nfor await (const coach of client.teamMembers.listCoaches()) {\n  console.log(coach);\n}\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/team-members/coaches/ \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.teamMembers.listCoaches',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const coach of client.teamMembers.listCoaches()) {\n  console.log(coach.id);\n}",
      },
    },
  },
  {
    name: 'list_players',
    endpoint: '/team-members/players/',
    httpMethod: 'get',
    summary: 'List all players',
    description: 'Get only players (filtered subset of team members).',
    stainlessPath: '(resource) team_members > (method) list_players',
    qualified: 'client.teamMembers.listPlayers',
    params: [
      'limit?: number;',
      "position?: 'goalkeeper' | 'defender' | 'midfielder' | 'forward';",
      'skip?: number;',
      'team_id?: string;',
    ],
    response:
      "{ id: string; character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; }",
    markdown:
      "## list_players\n\n`client.teamMembers.listPlayers(limit?: number, position?: 'goalkeeper' | 'defender' | 'midfielder' | 'forward', skip?: number, team_id?: string): { id: string; character_id: string; jersey_number: number; position: position; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; }`\n\n**get** `/team-members/players/`\n\nGet only players (filtered subset of team members).\n\n### Parameters\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `position?: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'`\n  Filter by position\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n- `team_id?: string`\n  Filter by team ID\n\n### Returns\n\n- `{ id: string; character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; }`\n  Full player model with ID.\n\n  - `id: string`\n  - `character_id: string`\n  - `jersey_number: number`\n  - `position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'`\n  - `team_id: string`\n  - `years_with_team: number`\n  - `assists?: number`\n  - `goals_scored?: number`\n  - `is_captain?: boolean`\n  - `member_type?: 'player'`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\n// Automatically fetches more pages as needed.\nfor await (const player of client.teamMembers.listPlayers()) {\n  console.log(player);\n}\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/team-members/players/ \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.teamMembers.listPlayers',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const player of client.teamMembers.listPlayers()) {\n  console.log(player.id);\n}",
      },
    },
  },
  {
    name: 'list_staff',
    endpoint: '/team-members/staff/',
    httpMethod: 'get',
    summary: 'List all staff (non-player, non-coach)',
    description:
      'Get all staff members (medical staff and equipment managers).\n\nThis demonstrates a **narrower union type** - the response is oneOf MedicalStaff or EquipmentManager.',
    stainlessPath: '(resource) team_members > (method) list_staff',
    qualified: 'client.teamMembers.listStaff',
    params: ['limit?: number;', 'skip?: number;', 'team_id?: string;'],
    response:
      "{ id: string; character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { id: string; character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; }",
    markdown:
      "## list_staff\n\n`client.teamMembers.listStaff(limit?: number, skip?: number, team_id?: string): object | object`\n\n**get** `/team-members/staff/`\n\nGet all staff members (medical staff and equipment managers).\n\nThis demonstrates a **narrower union type** - the response is oneOf MedicalStaff or EquipmentManager.\n\n### Parameters\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n- `team_id?: string`\n  Filter by team ID\n\n### Returns\n\n- `{ id: string; character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { id: string; character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; }`\n  Full medical staff model with ID.\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\n// Automatically fetches more pages as needed.\nfor await (const teamMemberListStaffResponse of client.teamMembers.listStaff()) {\n  console.log(teamMemberListStaffResponse);\n}\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/team-members/staff/ \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.teamMembers.listStaff',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const teamMemberListStaffResponse of client.teamMembers.listStaff()) {\n  console.log(teamMemberListStaffResponse);\n}",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/team-members/{member_id}',
    httpMethod: 'delete',
    summary: 'Delete a team member',
    description: 'Remove a team member from the roster.',
    stainlessPath: '(resource) team_members > (method) delete',
    qualified: 'client.teamMembers.delete',
    params: ['member_id: string;'],
    markdown:
      "## delete\n\n`client.teamMembers.delete(member_id: string): void`\n\n**delete** `/team-members/{member_id}`\n\nRemove a team member from the roster.\n\n### Parameters\n\n- `member_id: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nawait client.teamMembers.delete('member_id')\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/team-members/$MEMBER_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.teamMembers.delete',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.teamMembers.delete('member_id');",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/team-members/{member_id}',
    httpMethod: 'get',
    summary: 'Get a team member by ID',
    description:
      "Retrieve detailed information about a specific team member.\n\nThe response is a **union type (oneOf)** - the actual shape depends on the member's type:\n- **player**: Includes position, jersey_number, goals_scored, assists, is_captain\n- **coach**: Includes specialty, certifications, win_rate\n- **medical_staff**: Includes specialty, qualifications, license_number\n- **equipment_manager**: Includes responsibilities, is_head_kitman\n\nUse `character_id` to fetch full character details from `/characters/{character_id}`.",
    stainlessPath: '(resource) team_members > (method) retrieve',
    qualified: 'client.teamMembers.retrieve',
    params: ['member_id: string;'],
    response:
      "{ id: string; character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; } | { id: string; character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; } | { id: string; character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { id: string; character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; }",
    markdown:
      "## retrieve\n\n`client.teamMembers.retrieve(member_id: string): object | object | object | object`\n\n**get** `/team-members/{member_id}`\n\nRetrieve detailed information about a specific team member.\n\nThe response is a **union type (oneOf)** - the actual shape depends on the member's type:\n- **player**: Includes position, jersey_number, goals_scored, assists, is_captain\n- **coach**: Includes specialty, certifications, win_rate\n- **medical_staff**: Includes specialty, qualifications, license_number\n- **equipment_manager**: Includes responsibilities, is_head_kitman\n\nUse `character_id` to fetch full character details from `/characters/{character_id}`.\n\n### Parameters\n\n- `member_id: string`\n\n### Returns\n\n- `{ id: string; character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; } | { id: string; character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; } | { id: string; character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { id: string; character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; }`\n  Full player model with ID.\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst teamMember = await client.teamMembers.retrieve('member_id');\n\nconsole.log(teamMember);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/team-members/$MEMBER_ID \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.teamMembers.retrieve',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst teamMember = await client.teamMembers.retrieve('member_id');\n\nconsole.log(teamMember);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/team-members/{member_id}',
    httpMethod: 'patch',
    summary: 'Update a team member',
    description: 'Update specific fields of an existing team member. Fields vary by member type.',
    stainlessPath: '(resource) team_members > (method) update',
    qualified: 'client.teamMembers.update',
    params: [
      'member_id: string;',
      "body: { assists?: number; goals_scored?: number; is_captain?: boolean; jersey_number?: number; position?: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id?: string; years_with_team?: number; } | { certifications?: string[]; specialty?: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id?: string; win_rate?: number; years_with_team?: number; } | { license_number?: string; qualifications?: string[]; specialty?: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id?: string; years_with_team?: number; } | { is_head_kitman?: boolean; responsibilities?: string[]; team_id?: string; years_with_team?: number; };",
    ],
    response:
      "{ id: string; character_id: string; jersey_number: number; position: 'goalkeeper' | 'defender' | 'midfielder' | 'forward'; team_id: string; years_with_team: number; assists?: number; goals_scored?: number; is_captain?: boolean; member_type?: 'player'; } | { id: string; character_id: string; specialty: 'head_coach' | 'assistant_coach' | 'goalkeeping_coach' | 'fitness_coach' | 'tactical_analyst'; team_id: string; years_with_team: number; certifications?: string[]; member_type?: 'coach'; win_rate?: number; } | { id: string; character_id: string; specialty: 'team_doctor' | 'physiotherapist' | 'sports_psychologist' | 'nutritionist' | 'massage_therapist'; team_id: string; years_with_team: number; license_number?: string; member_type?: 'medical_staff'; qualifications?: string[]; } | { id: string; character_id: string; team_id: string; years_with_team: number; is_head_kitman?: boolean; member_type?: 'equipment_manager'; responsibilities?: string[]; }",
    perLanguage: {
      http: {
        example:
          "curl https://believe.cjav.dev/team-members/$MEMBER_ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $TED_DEMO_API_KEY\" \\\n    -d '{}'",
      },
      typescript: {
        method: 'client.teamMembers.update',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst teamMember = await client.teamMembers.update('member_id');\n\nconsole.log(teamMember);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/teams',
    httpMethod: 'get',
    summary: 'List all teams',
    description: 'Get a paginated list of all teams with optional filtering by league or culture score.',
    stainlessPath: '(resource) teams > (method) list',
    qualified: 'client.teams.list',
    params: ['league?: string;', 'limit?: number;', 'min_culture_score?: number;', 'skip?: number;'],
    response:
      '{ id: string; culture_score: number; founded_year: number; league: string; name: string; stadium: string; values: { primary_value: string; secondary_values: string[]; team_motto: string; }; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: { latitude: number; longitude: number; }; website?: string; win_percentage?: number; }',
    markdown:
      "## list\n\n`client.teams.list(league?: string, limit?: number, min_culture_score?: number, skip?: number): { id: string; culture_score: number; founded_year: number; league: league; name: string; stadium: string; values: team_values; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: geo_location; website?: string; win_percentage?: number; }`\n\n**get** `/teams`\n\nGet a paginated list of all teams with optional filtering by league or culture score.\n\n### Parameters\n\n- `league?: string`\n  Filter by league\n\n- `limit?: number`\n  Maximum number of items to return (max: 100)\n\n- `min_culture_score?: number`\n  Minimum culture score\n\n- `skip?: number`\n  Number of items to skip (offset)\n\n### Returns\n\n- `{ id: string; culture_score: number; founded_year: number; league: string; name: string; stadium: string; values: { primary_value: string; secondary_values: string[]; team_motto: string; }; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: { latitude: number; longitude: number; }; website?: string; win_percentage?: number; }`\n  Full team model with ID.\n\n  - `id: string`\n  - `culture_score: number`\n  - `founded_year: number`\n  - `league: string`\n  - `name: string`\n  - `stadium: string`\n  - `values: { primary_value: string; secondary_values: string[]; team_motto: string; }`\n  - `annual_budget_gbp?: string`\n  - `average_attendance?: number`\n  - `contact_email?: string`\n  - `is_active?: boolean`\n  - `nickname?: string`\n  - `primary_color?: string`\n  - `rival_teams?: string[]`\n  - `secondary_color?: string`\n  - `stadium_location?: { latitude: number; longitude: number; }`\n  - `website?: string`\n  - `win_percentage?: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\n// Automatically fetches more pages as needed.\nfor await (const team of client.teams.list()) {\n  console.log(team);\n}\n```",
    perLanguage: {
      http: {
        example: 'curl https://believe.cjav.dev/teams \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.teams.list',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\n// Automatically fetches more pages as needed.\nfor await (const team of client.teams.list()) {\n  console.log(team.id);\n}",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/teams',
    httpMethod: 'post',
    summary: 'Create a new team',
    description: 'Add a new team to the league.',
    stainlessPath: '(resource) teams > (method) create',
    qualified: 'client.teams.create',
    params: [
      'culture_score: number;',
      'founded_year: number;',
      'league: string;',
      'name: string;',
      'stadium: string;',
      'values: { primary_value: string; secondary_values: string[]; team_motto: string; };',
      'annual_budget_gbp?: number | string;',
      'average_attendance?: number;',
      'contact_email?: string;',
      'is_active?: boolean;',
      'nickname?: string;',
      'primary_color?: string;',
      'rival_teams?: string[];',
      'secondary_color?: string;',
      'stadium_location?: { latitude: number; longitude: number; };',
      'website?: string;',
      'win_percentage?: number;',
    ],
    response:
      '{ id: string; culture_score: number; founded_year: number; league: string; name: string; stadium: string; values: { primary_value: string; secondary_values: string[]; team_motto: string; }; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: { latitude: number; longitude: number; }; website?: string; win_percentage?: number; }',
    markdown:
      "## create\n\n`client.teams.create(culture_score: number, founded_year: number, league: string, name: string, stadium: string, values: { primary_value: string; secondary_values: string[]; team_motto: string; }, annual_budget_gbp?: number | string, average_attendance?: number, contact_email?: string, is_active?: boolean, nickname?: string, primary_color?: string, rival_teams?: string[], secondary_color?: string, stadium_location?: { latitude: number; longitude: number; }, website?: string, win_percentage?: number): { id: string; culture_score: number; founded_year: number; league: league; name: string; stadium: string; values: team_values; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: geo_location; website?: string; win_percentage?: number; }`\n\n**post** `/teams`\n\nAdd a new team to the league.\n\n### Parameters\n\n- `culture_score: number`\n  Team culture/morale score (0-100)\n\n- `founded_year: number`\n  Year the club was founded\n\n- `league: string`\n  Current league\n\n- `name: string`\n  Team name\n\n- `stadium: string`\n  Home stadium name\n\n- `values: { primary_value: string; secondary_values: string[]; team_motto: string; }`\n  Team's core values\n  - `primary_value: string`\n    The team's primary guiding value\n  - `secondary_values: string[]`\n    Supporting values\n  - `team_motto: string`\n    Team's motivational motto\n\n- `annual_budget_gbp?: number | string`\n  Annual budget in GBP\n\n- `average_attendance?: number`\n  Average match attendance\n\n- `contact_email?: string`\n  Team contact email\n\n- `is_active?: boolean`\n  Whether the team is currently active\n\n- `nickname?: string`\n  Team nickname\n\n- `primary_color?: string`\n  Primary team color (hex)\n\n- `rival_teams?: string[]`\n  List of rival team IDs\n\n- `secondary_color?: string`\n  Secondary team color (hex)\n\n- `stadium_location?: { latitude: number; longitude: number; }`\n  Geographic coordinates for a location.\n  - `latitude: number`\n    Latitude in degrees\n  - `longitude: number`\n    Longitude in degrees\n\n- `website?: string`\n  Official team website\n\n- `win_percentage?: number`\n  Season win percentage\n\n### Returns\n\n- `{ id: string; culture_score: number; founded_year: number; league: string; name: string; stadium: string; values: { primary_value: string; secondary_values: string[]; team_motto: string; }; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: { latitude: number; longitude: number; }; website?: string; win_percentage?: number; }`\n  Full team model with ID.\n\n  - `id: string`\n  - `culture_score: number`\n  - `founded_year: number`\n  - `league: string`\n  - `name: string`\n  - `stadium: string`\n  - `values: { primary_value: string; secondary_values: string[]; team_motto: string; }`\n  - `annual_budget_gbp?: string`\n  - `average_attendance?: number`\n  - `contact_email?: string`\n  - `is_active?: boolean`\n  - `nickname?: string`\n  - `primary_color?: string`\n  - `rival_teams?: string[]`\n  - `secondary_color?: string`\n  - `stadium_location?: { latitude: number; longitude: number; }`\n  - `website?: string`\n  - `win_percentage?: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst team = await client.teams.create({\n  culture_score: 70,\n  founded_year: 1895,\n  league: 'Premier League',\n  name: 'West Ham United',\n  stadium: 'London Stadium',\n  values: {\n  primary_value: 'Pride',\n  secondary_values: ['History', 'Community', 'Passion'],\n  team_motto: 'Forever Blowing Bubbles',\n},\n});\n\nconsole.log(team);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/teams \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY" \\\n    -d \'{\n          "culture_score": 70,\n          "founded_year": 1895,\n          "league": "Premier League",\n          "name": "West Ham United",\n          "stadium": "London Stadium",\n          "values": {\n            "primary_value": "Pride",\n            "secondary_values": [\n              "History",\n              "Community",\n              "Passion"\n            ],\n            "team_motto": "Forever Blowing Bubbles"\n          },\n          "annual_budget_gbp": "150000000.00",\n          "average_attendance": 59988,\n          "contact_email": "info@westhamunited.co.uk",\n          "nickname": "The Hammers",\n          "primary_color": "#7A263A",\n          "rival_teams": [\n            "afc-richmond",\n            "tottenham"\n          ],\n          "secondary_color": "#1BB1E7",\n          "website": "https://www.whufc.com",\n          "win_percentage": 52.3\n        }\'',
      },
      typescript: {
        method: 'client.teams.create',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst team = await client.teams.create({\n  culture_score: 70,\n  founded_year: 1895,\n  league: 'Premier League',\n  name: 'West Ham United',\n  stadium: 'London Stadium',\n  values: {\n    primary_value: 'Pride',\n    secondary_values: ['History', 'Community', 'Passion'],\n    team_motto: 'Forever Blowing Bubbles',\n  },\n});\n\nconsole.log(team.id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/teams/{team_id}',
    httpMethod: 'delete',
    summary: 'Delete a team',
    description: 'Remove a team from the database (relegation to oblivion).',
    stainlessPath: '(resource) teams > (method) delete',
    qualified: 'client.teams.delete',
    params: ['team_id: string;'],
    markdown:
      "## delete\n\n`client.teams.delete(team_id: string): void`\n\n**delete** `/teams/{team_id}`\n\nRemove a team from the database (relegation to oblivion).\n\n### Parameters\n\n- `team_id: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nawait client.teams.delete('team_id')\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/teams/$TEAM_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.teams.delete',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.teams.delete('team_id');",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/teams/{team_id}',
    httpMethod: 'get',
    summary: 'Get a team by ID',
    description: 'Retrieve detailed information about a specific team.',
    stainlessPath: '(resource) teams > (method) retrieve',
    qualified: 'client.teams.retrieve',
    params: ['team_id: string;'],
    response:
      '{ id: string; culture_score: number; founded_year: number; league: string; name: string; stadium: string; values: { primary_value: string; secondary_values: string[]; team_motto: string; }; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: { latitude: number; longitude: number; }; website?: string; win_percentage?: number; }',
    markdown:
      "## retrieve\n\n`client.teams.retrieve(team_id: string): { id: string; culture_score: number; founded_year: number; league: league; name: string; stadium: string; values: team_values; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: geo_location; website?: string; win_percentage?: number; }`\n\n**get** `/teams/{team_id}`\n\nRetrieve detailed information about a specific team.\n\n### Parameters\n\n- `team_id: string`\n\n### Returns\n\n- `{ id: string; culture_score: number; founded_year: number; league: string; name: string; stadium: string; values: { primary_value: string; secondary_values: string[]; team_motto: string; }; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: { latitude: number; longitude: number; }; website?: string; win_percentage?: number; }`\n  Full team model with ID.\n\n  - `id: string`\n  - `culture_score: number`\n  - `founded_year: number`\n  - `league: string`\n  - `name: string`\n  - `stadium: string`\n  - `values: { primary_value: string; secondary_values: string[]; team_motto: string; }`\n  - `annual_budget_gbp?: string`\n  - `average_attendance?: number`\n  - `contact_email?: string`\n  - `is_active?: boolean`\n  - `nickname?: string`\n  - `primary_color?: string`\n  - `rival_teams?: string[]`\n  - `secondary_color?: string`\n  - `stadium_location?: { latitude: number; longitude: number; }`\n  - `website?: string`\n  - `win_percentage?: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst team = await client.teams.retrieve('team_id');\n\nconsole.log(team);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/teams/$TEAM_ID \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.teams.retrieve',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst team = await client.teams.retrieve('team_id');\n\nconsole.log(team.id);",
      },
    },
  },
  {
    name: 'update',
    endpoint: '/teams/{team_id}',
    httpMethod: 'patch',
    summary: 'Update a team',
    description: 'Update specific fields of an existing team.',
    stainlessPath: '(resource) teams > (method) update',
    qualified: 'client.teams.update',
    params: [
      'team_id: string;',
      'annual_budget_gbp?: number | string;',
      'average_attendance?: number;',
      'contact_email?: string;',
      'culture_score?: number;',
      'founded_year?: number;',
      'is_active?: boolean;',
      'league?: string;',
      'name?: string;',
      'nickname?: string;',
      'primary_color?: string;',
      'rival_teams?: string[];',
      'secondary_color?: string;',
      'stadium?: string;',
      'stadium_location?: { latitude: number; longitude: number; };',
      'values?: { primary_value: string; secondary_values: string[]; team_motto: string; };',
      'website?: string;',
      'win_percentage?: number;',
    ],
    response:
      '{ id: string; culture_score: number; founded_year: number; league: string; name: string; stadium: string; values: { primary_value: string; secondary_values: string[]; team_motto: string; }; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: { latitude: number; longitude: number; }; website?: string; win_percentage?: number; }',
    markdown:
      "## update\n\n`client.teams.update(team_id: string, annual_budget_gbp?: number | string, average_attendance?: number, contact_email?: string, culture_score?: number, founded_year?: number, is_active?: boolean, league?: string, name?: string, nickname?: string, primary_color?: string, rival_teams?: string[], secondary_color?: string, stadium?: string, stadium_location?: { latitude: number; longitude: number; }, values?: { primary_value: string; secondary_values: string[]; team_motto: string; }, website?: string, win_percentage?: number): { id: string; culture_score: number; founded_year: number; league: league; name: string; stadium: string; values: team_values; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: geo_location; website?: string; win_percentage?: number; }`\n\n**patch** `/teams/{team_id}`\n\nUpdate specific fields of an existing team.\n\n### Parameters\n\n- `team_id: string`\n\n- `annual_budget_gbp?: number | string`\n\n- `average_attendance?: number`\n\n- `contact_email?: string`\n\n- `culture_score?: number`\n\n- `founded_year?: number`\n\n- `is_active?: boolean`\n\n- `league?: string`\n  Football leagues.\n\n- `name?: string`\n\n- `nickname?: string`\n\n- `primary_color?: string`\n\n- `rival_teams?: string[]`\n\n- `secondary_color?: string`\n\n- `stadium?: string`\n\n- `stadium_location?: { latitude: number; longitude: number; }`\n  Geographic coordinates for a location.\n  - `latitude: number`\n    Latitude in degrees\n  - `longitude: number`\n    Longitude in degrees\n\n- `values?: { primary_value: string; secondary_values: string[]; team_motto: string; }`\n  Core values that define a team's culture.\n  - `primary_value: string`\n    The team's primary guiding value\n  - `secondary_values: string[]`\n    Supporting values\n  - `team_motto: string`\n    Team's motivational motto\n\n- `website?: string`\n\n- `win_percentage?: number`\n\n### Returns\n\n- `{ id: string; culture_score: number; founded_year: number; league: string; name: string; stadium: string; values: { primary_value: string; secondary_values: string[]; team_motto: string; }; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: { latitude: number; longitude: number; }; website?: string; win_percentage?: number; }`\n  Full team model with ID.\n\n  - `id: string`\n  - `culture_score: number`\n  - `founded_year: number`\n  - `league: string`\n  - `name: string`\n  - `stadium: string`\n  - `values: { primary_value: string; secondary_values: string[]; team_motto: string; }`\n  - `annual_budget_gbp?: string`\n  - `average_attendance?: number`\n  - `contact_email?: string`\n  - `is_active?: boolean`\n  - `nickname?: string`\n  - `primary_color?: string`\n  - `rival_teams?: string[]`\n  - `secondary_color?: string`\n  - `stadium_location?: { latitude: number; longitude: number; }`\n  - `website?: string`\n  - `win_percentage?: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst team = await client.teams.update('team_id');\n\nconsole.log(team);\n```",
    perLanguage: {
      http: {
        example:
          "curl https://believe.cjav.dev/teams/$TEAM_ID \\\n    -X PATCH \\\n    -H 'Content-Type: application/json' \\\n    -H \"Authorization: Bearer $TED_DEMO_API_KEY\" \\\n    -d '{}'",
      },
      typescript: {
        method: 'client.teams.update',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst team = await client.teams.update('team_id');\n\nconsole.log(team.id);",
      },
    },
  },
  {
    name: 'get_culture',
    endpoint: '/teams/{team_id}/culture',
    httpMethod: 'get',
    summary: 'Get team culture details',
    description: 'Get detailed culture and values information for a team.',
    stainlessPath: '(resource) teams > (method) get_culture',
    qualified: 'client.teams.getCulture',
    params: ['team_id: string;'],
    response: 'object',
    markdown:
      "## get_culture\n\n`client.teams.getCulture(team_id: string): object`\n\n**get** `/teams/{team_id}/culture`\n\nGet detailed culture and values information for a team.\n\n### Parameters\n\n- `team_id: string`\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst response = await client.teams.getCulture('team_id');\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/teams/$TEAM_ID/culture \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.teams.getCulture',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.teams.getCulture('team_id');\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'list_logos',
    endpoint: '/teams/{team_id}/logos',
    httpMethod: 'get',
    summary: 'List team logos',
    description: 'List all uploaded logos for a team.',
    stainlessPath: '(resource) teams > (method) list_logos',
    qualified: 'client.teams.listLogos',
    params: ['team_id: string;'],
    response:
      '{ checksum_sha256: string; content_type: string; file_id: string; filename: string; size_bytes: number; uploaded_at: string; }[]',
    markdown:
      "## list_logos\n\n`client.teams.listLogos(team_id: string): object[]`\n\n**get** `/teams/{team_id}/logos`\n\nList all uploaded logos for a team.\n\n### Parameters\n\n- `team_id: string`\n\n### Returns\n\n- `{ checksum_sha256: string; content_type: string; file_id: string; filename: string; size_bytes: number; uploaded_at: string; }[]`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst fileUploads = await client.teams.listLogos('team_id');\n\nconsole.log(fileUploads);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/teams/$TEAM_ID/logos \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.teams.listLogos',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst fileUploads = await client.teams.listLogos('team_id');\n\nconsole.log(fileUploads);",
      },
    },
  },
  {
    name: 'get_rivals',
    endpoint: '/teams/{team_id}/rivals',
    httpMethod: 'get',
    summary: "Get team's rivals",
    description: 'Get all rival teams for a specific team.',
    stainlessPath: '(resource) teams > (method) get_rivals',
    qualified: 'client.teams.getRivals',
    params: ['team_id: string;'],
    response:
      '{ id: string; culture_score: number; founded_year: number; league: string; name: string; stadium: string; values: object; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: object; website?: string; win_percentage?: number; }[]',
    markdown:
      "## get_rivals\n\n`client.teams.getRivals(team_id: string): object[]`\n\n**get** `/teams/{team_id}/rivals`\n\nGet all rival teams for a specific team.\n\n### Parameters\n\n- `team_id: string`\n\n### Returns\n\n- `{ id: string; culture_score: number; founded_year: number; league: string; name: string; stadium: string; values: object; annual_budget_gbp?: string; average_attendance?: number; contact_email?: string; is_active?: boolean; nickname?: string; primary_color?: string; rival_teams?: string[]; secondary_color?: string; stadium_location?: object; website?: string; win_percentage?: number; }[]`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst teams = await client.teams.getRivals('team_id');\n\nconsole.log(teams);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/teams/$TEAM_ID/rivals \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.teams.getRivals',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst teams = await client.teams.getRivals('team_id');\n\nconsole.log(teams);",
      },
    },
  },
  {
    name: 'upload',
    endpoint: '/teams/{team_id}/logo',
    httpMethod: 'post',
    summary: 'Upload team logo',
    description: 'Upload a logo image for a team. Accepts image files (jpg, png, gif, webp).',
    stainlessPath: '(resource) teams.logo > (method) upload',
    qualified: 'client.teams.logo.upload',
    params: ['team_id: string;', 'file: string;'],
    response:
      '{ checksum_sha256: string; content_type: string; file_id: string; filename: string; size_bytes: number; uploaded_at: string; }',
    markdown:
      "## upload\n\n`client.teams.logo.upload(team_id: string, file: string): { checksum_sha256: string; content_type: string; file_id: string; filename: string; size_bytes: number; uploaded_at: string; }`\n\n**post** `/teams/{team_id}/logo`\n\nUpload a logo image for a team. Accepts image files (jpg, png, gif, webp).\n\n### Parameters\n\n- `team_id: string`\n\n- `file: string`\n  Logo image file\n\n### Returns\n\n- `{ checksum_sha256: string; content_type: string; file_id: string; filename: string; size_bytes: number; uploaded_at: string; }`\n  Response model for file uploads.\n\n  - `checksum_sha256: string`\n  - `content_type: string`\n  - `file_id: string`\n  - `filename: string`\n  - `size_bytes: number`\n  - `uploaded_at: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst fileUpload = await client.teams.logo.upload('team_id', { file: fs.createReadStream('path/to/file') });\n\nconsole.log(fileUpload);\n```",
    perLanguage: {
      http: {
        example:
          "curl https://believe.cjav.dev/teams/$TEAM_ID/logo \\\n    -H 'Content-Type: multipart/form-data' \\\n    -H \"Authorization: Bearer $TED_DEMO_API_KEY\" \\\n    -F 'file=@/path/to/file'",
      },
      typescript: {
        method: 'client.teams.logo.upload',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst fileUpload = await client.teams.logo.upload('team_id', {\n  file: fs.createReadStream('path/to/file'),\n});\n\nconsole.log(fileUpload.file_id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/teams/{team_id}/logo/{file_id}',
    httpMethod: 'delete',
    summary: 'Delete team logo',
    description: "Delete a team's logo.",
    stainlessPath: '(resource) teams.logo > (method) delete',
    qualified: 'client.teams.logo.delete',
    params: ['team_id: string;', 'file_id: string;'],
    markdown:
      "## delete\n\n`client.teams.logo.delete(team_id: string, file_id: string): void`\n\n**delete** `/teams/{team_id}/logo/{file_id}`\n\nDelete a team's logo.\n\n### Parameters\n\n- `team_id: string`\n\n- `file_id: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nawait client.teams.logo.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { team_id: 'team_id' })\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/teams/$TEAM_ID/logo/$FILE_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.teams.logo.delete',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.teams.logo.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { team_id: 'team_id' });",
      },
    },
  },
  {
    name: 'download',
    endpoint: '/teams/{team_id}/logo/{file_id}',
    httpMethod: 'get',
    summary: 'Download team logo',
    description: "Download a team's logo by file ID.",
    stainlessPath: '(resource) teams.logo > (method) download',
    qualified: 'client.teams.logo.download',
    params: ['team_id: string;', 'file_id: string;'],
    response: 'object',
    markdown:
      "## download\n\n`client.teams.logo.download(team_id: string, file_id: string): object`\n\n**get** `/teams/{team_id}/logo/{file_id}`\n\nDownload a team's logo by file ID.\n\n### Parameters\n\n- `team_id: string`\n\n- `file_id: string`\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst response = await client.teams.logo.download('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { team_id: 'team_id' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/teams/$TEAM_ID/logo/$FILE_ID \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.teams.logo.download',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.teams.logo.download('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {\n  team_id: 'team_id',\n});\n\nconsole.log(response);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/version',
    httpMethod: 'get',
    summary: 'API Version Information',
    description: 'Get detailed information about API versioning.',
    stainlessPath: '(resource) version > (method) retrieve',
    qualified: 'client.version.retrieve',
    response: 'object',
    markdown:
      "## retrieve\n\n`client.version.retrieve(): object`\n\n**get** `/version`\n\nGet detailed information about API versioning.\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst version = await client.version.retrieve();\n\nconsole.log(version);\n```",
    perLanguage: {
      http: {
        example: 'curl https://believe.cjav.dev/version \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.version.retrieve',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst version = await client.version.retrieve();\n\nconsole.log(version);",
      },
    },
  },
  {
    name: 'list',
    endpoint: '/webhooks',
    httpMethod: 'get',
    summary: 'List registered webhooks',
    description: 'Get a list of all registered webhook endpoints.',
    stainlessPath: '(resource) webhooks > (method) list',
    qualified: 'client.webhooks.list',
    response:
      "{ id: string; created_at: string; event_types: 'match.completed' | 'team_member.transferred'[]; secret: string; url: string; description?: string; }[]",
    markdown:
      "## list\n\n`client.webhooks.list(): object[]`\n\n**get** `/webhooks`\n\nGet a list of all registered webhook endpoints.\n\n### Returns\n\n- `{ id: string; created_at: string; event_types: 'match.completed' | 'team_member.transferred'[]; secret: string; url: string; description?: string; }[]`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst registeredWebhooks = await client.webhooks.list();\n\nconsole.log(registeredWebhooks);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/webhooks \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.webhooks.list',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst registeredWebhooks = await client.webhooks.list();\n\nconsole.log(registeredWebhooks);",
      },
    },
  },
  {
    name: 'create',
    endpoint: '/webhooks',
    httpMethod: 'post',
    summary: 'Register a webhook endpoint',
    description:
      "Register a new webhook endpoint to receive event notifications.\n\n## Event Types\n\nAvailable event types to subscribe to:\n- `match.completed` - Fired when a football match ends\n- `team_member.transferred` - Fired when a player/coach joins or leaves a team\n\nIf no event types are specified, the webhook will receive all event types.\n\n## Webhook Signatures\n\nAll webhook deliveries include Standard Webhooks signature headers:\n- `webhook-id` - Unique message identifier\n- `webhook-timestamp` - Unix timestamp of when the webhook was sent\n- `webhook-signature` - HMAC-SHA256 signature in format `v1,{base64_signature}`\n\nStore the returned `secret` securely - you'll need it to verify webhook signatures.",
    stainlessPath: '(resource) webhooks > (method) create',
    qualified: 'client.webhooks.create',
    params: [
      'url: string;',
      'description?: string;',
      "event_types?: 'match.completed' | 'team_member.transferred'[];",
    ],
    response:
      "{ webhook: { id: string; created_at: string; event_types: 'match.completed' | 'team_member.transferred'[]; secret: string; url: string; description?: string; }; message?: string; ted_says?: string; }",
    markdown:
      "## create\n\n`client.webhooks.create(url: string, description?: string, event_types?: 'match.completed' | 'team_member.transferred'[]): { webhook: registered_webhook; message?: string; ted_says?: string; }`\n\n**post** `/webhooks`\n\nRegister a new webhook endpoint to receive event notifications.\n\n## Event Types\n\nAvailable event types to subscribe to:\n- `match.completed` - Fired when a football match ends\n- `team_member.transferred` - Fired when a player/coach joins or leaves a team\n\nIf no event types are specified, the webhook will receive all event types.\n\n## Webhook Signatures\n\nAll webhook deliveries include Standard Webhooks signature headers:\n- `webhook-id` - Unique message identifier\n- `webhook-timestamp` - Unix timestamp of when the webhook was sent\n- `webhook-signature` - HMAC-SHA256 signature in format `v1,{base64_signature}`\n\nStore the returned `secret` securely - you'll need it to verify webhook signatures.\n\n### Parameters\n\n- `url: string`\n  The URL to send webhook events to\n\n- `description?: string`\n  Optional description for this webhook\n\n- `event_types?: 'match.completed' | 'team_member.transferred'[]`\n  List of event types to subscribe to. If not provided, subscribes to all events.\n\n### Returns\n\n- `{ webhook: { id: string; created_at: string; event_types: 'match.completed' | 'team_member.transferred'[]; secret: string; url: string; description?: string; }; message?: string; ted_says?: string; }`\n  Response after registering a webhook.\n\n  - `webhook: { id: string; created_at: string; event_types: 'match.completed' | 'team_member.transferred'[]; secret: string; url: string; description?: string; }`\n  - `message?: string`\n  - `ted_says?: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst webhook = await client.webhooks.create({ url: 'https://example.com/webhooks' });\n\nconsole.log(webhook);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/webhooks \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY" \\\n    -d \'{\n          "url": "https://example.com/webhooks"\n        }\'',
      },
      typescript: {
        method: 'client.webhooks.create',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst webhook = await client.webhooks.create({ url: 'https://example.com/webhooks' });\n\nconsole.log(webhook.webhook);",
      },
    },
  },
  {
    name: 'trigger',
    endpoint: '/webhooks/trigger',
    httpMethod: 'post',
    summary: 'Trigger a webhook event',
    description:
      'Trigger a webhook event and deliver it to all subscribed endpoints.\n\nThis endpoint is useful for testing your webhook integration. It will:\n1. Generate an event with the specified type and payload\n2. Find all webhooks subscribed to that event type\n3. Send a POST request to each webhook URL with signature headers\n4. Return the delivery results\n\n## Event Payload\n\nYou can provide a custom payload, or leave it empty to use a sample payload.\n\n## Webhook Signature Headers\n\nEach webhook delivery includes:\n- `webhook-id` - Unique event identifier (e.g., `evt_abc123...`)\n- `webhook-timestamp` - Unix timestamp\n- `webhook-signature` - HMAC-SHA256 signature (`v1,{base64}`)\n\nTo verify signatures, compute:\n```\nsignature = HMAC-SHA256(\n    key = base64_decode(secret_without_prefix),\n    message = "{timestamp}.{raw_json_payload}"\n)\n```',
    stainlessPath: '(resource) webhooks > (method) trigger',
    qualified: 'client.webhooks.trigger',
    params: [
      "event_type: 'match.completed' | 'team_member.transferred';",
      "payload?: { data: { away_score: number; away_team_id: string; completed_at: string; home_score: number; home_team_id: string; match_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; result: 'home_win' | 'away_win' | 'draw'; ted_post_match_quote: string; lesson_learned?: string; man_of_the_match?: string; }; event_type?: 'match.completed'; } | { data: { character_id: string; character_name: string; member_type: 'player' | 'coach' | 'medical_staff' | 'equipment_manager'; team_id: string; team_member_id: string; team_name: string; ted_reaction: string; transfer_type: 'joined' | 'departed'; previous_team_id?: string; previous_team_name?: string; transfer_fee_gbp?: string; years_with_previous_team?: number; }; event_type?: 'team_member.transferred'; };",
    ],
    response:
      "{ deliveries: { success: boolean; url: string; webhook_id: string; error?: string; status_code?: number; }[]; event_id: string; event_type: 'match.completed' | 'team_member.transferred'; successful_deliveries: number; ted_says: string; total_webhooks: number; }",
    markdown:
      "## trigger\n\n`client.webhooks.trigger(event_type: 'match.completed' | 'team_member.transferred', payload?: { data: { away_score: number; away_team_id: string; completed_at: string; home_score: number; home_team_id: string; match_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; result: 'home_win' | 'away_win' | 'draw'; ted_post_match_quote: string; lesson_learned?: string; man_of_the_match?: string; }; event_type?: 'match.completed'; } | { data: { character_id: string; character_name: string; member_type: 'player' | 'coach' | 'medical_staff' | 'equipment_manager'; team_id: string; team_member_id: string; team_name: string; ted_reaction: string; transfer_type: 'joined' | 'departed'; previous_team_id?: string; previous_team_name?: string; transfer_fee_gbp?: string; years_with_previous_team?: number; }; event_type?: 'team_member.transferred'; }): { deliveries: object[]; event_id: string; event_type: 'match.completed' | 'team_member.transferred'; successful_deliveries: number; ted_says: string; total_webhooks: number; }`\n\n**post** `/webhooks/trigger`\n\nTrigger a webhook event and deliver it to all subscribed endpoints.\n\nThis endpoint is useful for testing your webhook integration. It will:\n1. Generate an event with the specified type and payload\n2. Find all webhooks subscribed to that event type\n3. Send a POST request to each webhook URL with signature headers\n4. Return the delivery results\n\n## Event Payload\n\nYou can provide a custom payload, or leave it empty to use a sample payload.\n\n## Webhook Signature Headers\n\nEach webhook delivery includes:\n- `webhook-id` - Unique event identifier (e.g., `evt_abc123...`)\n- `webhook-timestamp` - Unix timestamp\n- `webhook-signature` - HMAC-SHA256 signature (`v1,{base64}`)\n\nTo verify signatures, compute:\n```\nsignature = HMAC-SHA256(\n    key = base64_decode(secret_without_prefix),\n    message = \"{timestamp}.{raw_json_payload}\"\n)\n```\n\n### Parameters\n\n- `event_type: 'match.completed' | 'team_member.transferred'`\n  The type of event to trigger\n\n- `payload?: { data: { away_score: number; away_team_id: string; completed_at: string; home_score: number; home_team_id: string; match_id: string; match_type: 'league' | 'cup' | 'friendly' | 'playoff' | 'final'; result: 'home_win' | 'away_win' | 'draw'; ted_post_match_quote: string; lesson_learned?: string; man_of_the_match?: string; }; event_type?: 'match.completed'; } | { data: { character_id: string; character_name: string; member_type: 'player' | 'coach' | 'medical_staff' | 'equipment_manager'; team_id: string; team_member_id: string; team_name: string; ted_reaction: string; transfer_type: 'joined' | 'departed'; previous_team_id?: string; previous_team_name?: string; transfer_fee_gbp?: string; years_with_previous_team?: number; }; event_type?: 'team_member.transferred'; }`\n  Optional event payload. If not provided, a sample payload will be generated.\n\n### Returns\n\n- `{ deliveries: { success: boolean; url: string; webhook_id: string; error?: string; status_code?: number; }[]; event_id: string; event_type: 'match.completed' | 'team_member.transferred'; successful_deliveries: number; ted_says: string; total_webhooks: number; }`\n  Response after triggering webhook events.\n\n  - `deliveries: { success: boolean; url: string; webhook_id: string; error?: string; status_code?: number; }[]`\n  - `event_id: string`\n  - `event_type: 'match.completed' | 'team_member.transferred'`\n  - `successful_deliveries: number`\n  - `ted_says: string`\n  - `total_webhooks: number`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst response = await client.webhooks.trigger({ event_type: 'match.completed' });\n\nconsole.log(response);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/webhooks/trigger \\\n    -H \'Content-Type: application/json\' \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY" \\\n    -d \'{\n          "event_type": "match.completed"\n        }\'',
      },
      typescript: {
        method: 'client.webhooks.trigger',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.webhooks.trigger({ event_type: 'match.completed' });\n\nconsole.log(response.event_id);",
      },
    },
  },
  {
    name: 'delete',
    endpoint: '/webhooks/{webhook_id}',
    httpMethod: 'delete',
    summary: 'Delete a webhook',
    description: 'Unregister a webhook endpoint. It will no longer receive events.',
    stainlessPath: '(resource) webhooks > (method) delete',
    qualified: 'client.webhooks.delete',
    params: ['webhook_id: string;'],
    response: 'object',
    markdown:
      "## delete\n\n`client.webhooks.delete(webhook_id: string): object`\n\n**delete** `/webhooks/{webhook_id}`\n\nUnregister a webhook endpoint. It will no longer receive events.\n\n### Parameters\n\n- `webhook_id: string`\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst webhook = await client.webhooks.delete('webhook_id');\n\nconsole.log(webhook);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/webhooks/$WEBHOOK_ID \\\n    -X DELETE \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.webhooks.delete',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst webhook = await client.webhooks.delete('webhook_id');\n\nconsole.log(webhook);",
      },
    },
  },
  {
    name: 'retrieve',
    endpoint: '/webhooks/{webhook_id}',
    httpMethod: 'get',
    summary: 'Get a webhook',
    description: 'Get details of a specific webhook endpoint.',
    stainlessPath: '(resource) webhooks > (method) retrieve',
    qualified: 'client.webhooks.retrieve',
    params: ['webhook_id: string;'],
    response:
      "{ id: string; created_at: string; event_types: 'match.completed' | 'team_member.transferred'[]; secret: string; url: string; description?: string; }",
    markdown:
      "## retrieve\n\n`client.webhooks.retrieve(webhook_id: string): { id: string; created_at: string; event_types: 'match.completed' | 'team_member.transferred'[]; secret: string; url: string; description?: string; }`\n\n**get** `/webhooks/{webhook_id}`\n\nGet details of a specific webhook endpoint.\n\n### Parameters\n\n- `webhook_id: string`\n\n### Returns\n\n- `{ id: string; created_at: string; event_types: 'match.completed' | 'team_member.transferred'[]; secret: string; url: string; description?: string; }`\n  A registered webhook endpoint.\n\n  - `id: string`\n  - `created_at: string`\n  - `event_types: 'match.completed' | 'team_member.transferred'[]`\n  - `secret: string`\n  - `url: string`\n  - `description?: string`\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nconst registeredWebhook = await client.webhooks.retrieve('webhook_id');\n\nconsole.log(registeredWebhook);\n```",
    perLanguage: {
      http: {
        example:
          'curl https://believe.cjav.dev/webhooks/$WEBHOOK_ID \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.webhooks.retrieve',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst registeredWebhook = await client.webhooks.retrieve('webhook_id');\n\nconsole.log(registeredWebhook.id);",
      },
    },
  },
  {
    name: 'test',
    endpoint: '/ws/test',
    httpMethod: 'get',
    summary: 'WebSocket Test Endpoint',
    description:
      "Simple WebSocket test endpoint for connectivity testing.\n\nConnect to test WebSocket functionality. The server will:\n1. Send a welcome message on connection\n2. Echo back any message you send\n\n## Example\n\n```javascript\nconst ws = new WebSocket('ws://localhost:8000/ws/test');\nws.onmessage = (event) => console.log(event.data);\nws.send('Hello!');  // Server responds with echo\n```\n",
    stainlessPath: '(resource) ws > (method) test',
    qualified: 'client.ws.test',
    markdown:
      "## test\n\n`client.ws.test(): void`\n\n**get** `/ws/test`\n\nSimple WebSocket test endpoint for connectivity testing.\n\nConnect to test WebSocket functionality. The server will:\n1. Send a welcome message on connection\n2. Echo back any message you send\n\n## Example\n\n```javascript\nconst ws = new WebSocket('ws://localhost:8000/ws/test');\nws.onmessage = (event) => console.log(event.data);\nws.send('Hello!');  // Server responds with echo\n```\n\n\n### Example\n\n```typescript\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo();\n\nawait client.ws.test()\n```",
    perLanguage: {
      http: {
        example: 'curl https://believe.cjav.dev/ws/test \\\n    -H "Authorization: Bearer $TED_DEMO_API_KEY"',
      },
      typescript: {
        method: 'client.ws.test',
        example:
          "import TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nawait client.ws.test();",
      },
    },
  },
];

const EMBEDDED_READMES: { language: string; content: string }[] = [
  {
    language: 'typescript',
    content:
      "# Ted Demo TypeScript API Library\n\n[![NPM version](https://img.shields.io/npm/v/ted-demo.svg?label=npm%20(stable))](https://npmjs.org/package/ted-demo) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/ted-demo)\n\nThis library provides convenient access to the Ted Demo REST API from server-side TypeScript or JavaScript.\n\n\n\nThe full API of this library can be found in [api.md](api.md).\n\nIt is generated with [Stainless](https://www.stainless.com/).\n\n## MCP Server\n\nUse the Ted Demo MCP Server to enable AI assistants to interact with this API, allowing them to explore endpoints, make test requests, and use documentation to help integrate this SDK into your application.\n\n[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=ted-demo-mcp&config=eyJuYW1lIjoidGVkLWRlbW8tbWNwIiwidHJhbnNwb3J0IjoiaHR0cCIsInVybCI6Imh0dHBzOi8vdGVkLWRlbW8uc3RsbWNwLmNvbSIsImhlYWRlcnMiOnsieC10ZWQtZGVtby1hcGkta2V5IjoiTXkgQVBJIEtleSJ9fQ)\n[![Install in VS Code](https://img.shields.io/badge/_-Add_to_VS_Code-blue?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAuMjM1IDM5Ljg4NGEyLjQ5MSAyLjQ5MSAwIDAgMS0xLjc4MS0uNzNMMTIuNyAyNC43OGwtMy40NiAyLjYyNC0zLjQwNiAyLjU4MmExLjY2NSAxLjY2NSAwIDAgMS0xLjA4Mi4zMzggMS42NjQgMS42NjQgMCAwIDEtMS4wNDYtLjQzMWwtMi4yLTJhMS42NjYgMS42NjYgMCAwIDEgMC0yLjQ2M0w3LjQ1OCAyMCA0LjY3IDE3LjQ1MyAxLjUwNyAxNC41N2ExLjY2NSAxLjY2NSAwIDAgMSAwLTIuNDYzbDIuMi0yYTEuNjY1IDEuNjY1IDAgMCAxIDIuMTMtLjA5N2w2Ljg2MyA1LjIwOUwyOC40NTIuODQ0YTIuNDg4IDIuNDg4IDAgMCAxIDEuODQxLS43MjljLjM1MS4wMDkuNjk5LjA5MSAxLjAxOS4yNDVsOC4yMzYgMy45NjFhMi41IDIuNSAwIDAgMSAxLjQxNSAyLjI1M3YuMDk5LS4wNDVWMzMuMzd2LS4wNDUuMDk1YTIuNTAxIDIuNTAxIDAgMCAxLTEuNDE2IDIuMjU3bC04LjIzNSAzLjk2MWEyLjQ5MiAyLjQ5MiAwIDAgMS0xLjA3Ny4yNDZabS43MTYtMjguOTQ3LTExLjk0OCA5LjA2MiAxMS45NTIgOS4wNjUtLjAwNC0xOC4xMjdaIi8+PC9zdmc+)](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22ted-demo-mcp%22%2C%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fted-demo.stlmcp.com%22%2C%22headers%22%3A%7B%22x-ted-demo-api-key%22%3A%22My%20API%20Key%22%7D%7D)\n\n> Note: You may need to set environment variables in your MCP client.\n\n## Installation\n\n```sh\nnpm install ted-demo\n```\n\n\n\n## Usage\n\nThe full API of this library can be found in [api.md](api.md).\n\n<!-- prettier-ignore -->\n```js\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response = await client.getWelcome();\n```\n\n\n\n### Request & Response types\n\nThis library includes TypeScript definitions for all request params and response fields. You may import and use them like so:\n\n<!-- prettier-ignore -->\n```ts\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  apiKey: process.env['TED_DEMO_API_KEY'], // This is the default and can be omitted\n});\n\nconst response: unknown = await client.getWelcome();\n```\n\nDocumentation for each method, request param, and response field are available in docstrings and will appear on hover in most modern editors.\n\n## File uploads\n\nRequest parameters that correspond to file uploads can be passed in many different forms:\n- `File` (or an object with the same structure)\n- a `fetch` `Response` (or an object with the same structure)\n- an `fs.ReadStream`\n- the return value of our `toFile` helper\n\n```ts\nimport fs from 'fs';\nimport TedDemo, { toFile } from 'ted-demo';\n\nconst client = new TedDemo();\n\n// If you have access to Node `fs` we recommend using `fs.createReadStream()`:\nawait client.teams.logo.upload('team_id', { file: fs.createReadStream('/path/to/file') });\n\n// Or if you have the web `File` API you can pass a `File` instance:\nawait client.teams.logo.upload('team_id', { file: new File(['my bytes'], 'file') });\n\n// You can also pass a `fetch` `Response`:\nawait client.teams.logo.upload('team_id', { file: await fetch('https://somesite/file') });\n\n// Finally, if none of the above are convenient, you can use our `toFile` helper:\nawait client.teams.logo.upload('team_id', { file: await toFile(Buffer.from('my bytes'), 'file') });\nawait client.teams.logo.upload('team_id', {\n  file: await toFile(new Uint8Array([0, 1, 2]), 'file'),\n});\n```\n\n\n\n## Handling errors\n\nWhen the library is unable to connect to the API,\nor if the API returns a non-success status code (i.e., 4xx or 5xx response),\na subclass of `APIError` will be thrown:\n\n<!-- prettier-ignore -->\n```ts\nconst response = await client.getWelcome().catch(async (err) => {\n  if (err instanceof TedDemo.APIError) {\n    console.log(err.status); // 400\n    console.log(err.name); // BadRequestError\n    console.log(err.headers); // {server: 'nginx', ...}\n  } else {\n    throw err;\n  }\n});\n```\n\nError codes are as follows:\n\n| Status Code | Error Type                 |\n| ----------- | -------------------------- |\n| 400         | `BadRequestError`          |\n| 401         | `AuthenticationError`      |\n| 403         | `PermissionDeniedError`    |\n| 404         | `NotFoundError`            |\n| 422         | `UnprocessableEntityError` |\n| 429         | `RateLimitError`           |\n| >=500       | `InternalServerError`      |\n| N/A         | `APIConnectionError`       |\n\n### Retries\n\nCertain errors will be automatically retried 2 times by default, with a short exponential backoff.\nConnection errors (for example, due to a network connectivity problem), 408 Request Timeout, 409 Conflict,\n429 Rate Limit, and >=500 Internal errors will all be retried by default.\n\nYou can use the `maxRetries` option to configure or disable this:\n\n<!-- prettier-ignore -->\n```js\n// Configure the default for all requests:\nconst client = new TedDemo({\n  maxRetries: 0, // default is 2\n});\n\n// Or, configure per-request:\nawait client.getWelcome({\n  maxRetries: 5,\n});\n```\n\n### Timeouts\n\nRequests time out after 1 minute by default. You can configure this with a `timeout` option:\n\n<!-- prettier-ignore -->\n```ts\n// Configure the default for all requests:\nconst client = new TedDemo({\n  timeout: 20 * 1000, // 20 seconds (default is 1 minute)\n});\n\n// Override per-request:\nawait client.getWelcome({\n  timeout: 5 * 1000,\n});\n```\n\nOn timeout, an `APIConnectionTimeoutError` is thrown.\n\nNote that requests which time out will be [retried twice by default](#retries).\n\n## Auto-pagination\n\nList methods in the TedDemo API are paginated.\nYou can use the `for await … of` syntax to iterate through items across all pages:\n\n```ts\nasync function fetchAllBiscuits(params) {\n  const allBiscuits = [];\n  // Automatically fetches more pages as needed.\n  for await (const biscuit of client.biscuits.list()) {\n    allBiscuits.push(biscuit);\n  }\n  return allBiscuits;\n}\n```\n\nAlternatively, you can request a single page at a time:\n\n```ts\nlet page = await client.biscuits.list();\nfor (const biscuit of page.data) {\n  console.log(biscuit);\n}\n\n// Convenience methods are provided for manually paginating:\nwhile (page.hasNextPage()) {\n  page = await page.getNextPage();\n  // ...\n}\n```\n\n\n\n## Advanced Usage\n\n### Accessing raw Response data (e.g., headers)\n\nThe \"raw\" `Response` returned by `fetch()` can be accessed through the `.asResponse()` method on the `APIPromise` type that all methods return.\nThis method returns as soon as the headers for a successful response are received and does not consume the response body, so you are free to write custom parsing or streaming logic.\n\nYou can also use the `.withResponse()` method to get the raw `Response` along with the parsed data.\nUnlike `.asResponse()` this method consumes the body, returning once it is parsed.\n\n<!-- prettier-ignore -->\n```ts\nconst client = new TedDemo();\n\nconst response = await client.getWelcome().asResponse();\nconsole.log(response.headers.get('X-My-Header'));\nconsole.log(response.statusText); // access the underlying Response object\n\nconst { data: response, response: raw } = await client.getWelcome().withResponse();\nconsole.log(raw.headers.get('X-My-Header'));\nconsole.log(response);\n```\n\n### Logging\n\n> [!IMPORTANT]\n> All log messages are intended for debugging only. The format and content of log messages\n> may change between releases.\n\n#### Log levels\n\nThe log level can be configured in two ways:\n\n1. Via the `TED_DEMO_LOG` environment variable\n2. Using the `logLevel` client option (overrides the environment variable if set)\n\n```ts\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  logLevel: 'debug', // Show all log messages\n});\n```\n\nAvailable log levels, from most to least verbose:\n\n- `'debug'` - Show debug messages, info, warnings, and errors\n- `'info'` - Show info messages, warnings, and errors\n- `'warn'` - Show warnings and errors (default)\n- `'error'` - Show only errors\n- `'off'` - Disable all logging\n\nAt the `'debug'` level, all HTTP requests and responses are logged, including headers and bodies.\nSome authentication-related headers are redacted, but sensitive data in request and response bodies\nmay still be visible.\n\n#### Custom logger\n\nBy default, this library logs to `globalThis.console`. You can also provide a custom logger.\nMost logging libraries are supported, including [pino](https://www.npmjs.com/package/pino), [winston](https://www.npmjs.com/package/winston), [bunyan](https://www.npmjs.com/package/bunyan), [consola](https://www.npmjs.com/package/consola), [signale](https://www.npmjs.com/package/signale), and [@std/log](https://jsr.io/@std/log). If your logger doesn't work, please open an issue.\n\nWhen providing a custom logger, the `logLevel` option still controls which messages are emitted, messages\nbelow the configured level will not be sent to your logger.\n\n```ts\nimport TedDemo from 'ted-demo';\nimport pino from 'pino';\n\nconst logger = pino();\n\nconst client = new TedDemo({\n  logger: logger.child({ name: 'TedDemo' }),\n  logLevel: 'debug', // Send all messages to pino, allowing it to filter\n});\n```\n\n### Making custom/undocumented requests\n\nThis library is typed for convenient access to the documented API. If you need to access undocumented\nendpoints, params, or response properties, the library can still be used.\n\n#### Undocumented endpoints\n\nTo make requests to undocumented endpoints, you can use `client.get`, `client.post`, and other HTTP verbs.\nOptions on the client, such as retries, will be respected when making these requests.\n\n```ts\nawait client.post('/some/path', {\n  body: { some_prop: 'foo' },\n  query: { some_query_arg: 'bar' },\n});\n```\n\n#### Undocumented request params\n\nTo make requests using undocumented parameters, you may use `// @ts-expect-error` on the undocumented\nparameter. This library doesn't validate at runtime that the request matches the type, so any extra values you\nsend will be sent as-is.\n\n```ts\nclient.getWelcome({\n  // ...\n  // @ts-expect-error baz is not yet public\n  baz: 'undocumented option',\n});\n```\n\nFor requests with the `GET` verb, any extra params will be in the query, all other requests will send the\nextra param in the body.\n\nIf you want to explicitly send an extra argument, you can do so with the `query`, `body`, and `headers` request\noptions.\n\n#### Undocumented response properties\n\nTo access undocumented response properties, you may access the response object with `// @ts-expect-error` on\nthe response object, or cast the response object to the requisite type. Like the request params, we do not\nvalidate or strip extra properties from the response from the API.\n\n### Customizing the fetch client\n\nBy default, this library expects a global `fetch` function is defined.\n\nIf you want to use a different `fetch` function, you can either polyfill the global:\n\n```ts\nimport fetch from 'my-fetch';\n\nglobalThis.fetch = fetch;\n```\n\nOr pass it to the client:\n\n```ts\nimport TedDemo from 'ted-demo';\nimport fetch from 'my-fetch';\n\nconst client = new TedDemo({ fetch });\n```\n\n### Fetch options\n\nIf you want to set custom `fetch` options without overriding the `fetch` function, you can provide a `fetchOptions` object when instantiating the client or making a request. (Request-specific options override client options.)\n\n```ts\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  fetchOptions: {\n    // `RequestInit` options\n  },\n});\n```\n\n#### Configuring proxies\n\nTo modify proxy behavior, you can provide custom `fetchOptions` that add runtime-specific proxy\noptions to requests:\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/node.svg\" align=\"top\" width=\"18\" height=\"21\"> **Node** <sup>[[docs](https://github.com/nodejs/undici/blob/main/docs/docs/api/ProxyAgent.md#example---proxyagent-with-fetch)]</sup>\n\n```ts\nimport TedDemo from 'ted-demo';\nimport * as undici from 'undici';\n\nconst proxyAgent = new undici.ProxyAgent('http://localhost:8888');\nconst client = new TedDemo({\n  fetchOptions: {\n    dispatcher: proxyAgent,\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/bun.svg\" align=\"top\" width=\"18\" height=\"21\"> **Bun** <sup>[[docs](https://bun.sh/guides/http/proxy)]</sup>\n\n```ts\nimport TedDemo from 'ted-demo';\n\nconst client = new TedDemo({\n  fetchOptions: {\n    proxy: 'http://localhost:8888',\n  },\n});\n```\n\n<img src=\"https://raw.githubusercontent.com/stainless-api/sdk-assets/refs/heads/main/deno.svg\" align=\"top\" width=\"18\" height=\"21\"> **Deno** <sup>[[docs](https://docs.deno.com/api/deno/~/Deno.createHttpClient)]</sup>\n\n```ts\nimport TedDemo from 'npm:ted-demo';\n\nconst httpClient = Deno.createHttpClient({ proxy: { url: 'http://localhost:8888' } });\nconst client = new TedDemo({\n  fetchOptions: {\n    client: httpClient,\n  },\n});\n```\n\n## Frequently Asked Questions\n\n## Semantic versioning\n\nThis package generally follows [SemVer](https://semver.org/spec/v2.0.0.html) conventions, though certain backwards-incompatible changes may be released as minor versions:\n\n1. Changes that only affect static types, without breaking runtime behavior.\n2. Changes to library internals which are technically public but not intended or documented for external use. _(Please open a GitHub issue to let us know if you are relying on such internals.)_\n3. Changes that we do not expect to impact the vast majority of users in practice.\n\nWe take backwards-compatibility seriously and work hard to ensure you can rely on a smooth upgrade experience.\n\nWe are keen for your feedback; please open an [issue](https://www.github.com/cjavdev/ted-demo-typescript/issues) with questions, bugs, or suggestions.\n\n## Requirements\n\nTypeScript >= 4.9 is supported.\n\nThe following runtimes are supported:\n\n- Web browsers (Up-to-date Chrome, Firefox, Safari, Edge, and more)\n- Node.js 20 LTS or later ([non-EOL](https://endoflife.date/nodejs)) versions.\n- Deno v1.28.0 or higher.\n- Bun 1.0 or later.\n- Cloudflare Workers.\n- Vercel Edge Runtime.\n- Jest 28 or greater with the `\"node\"` environment (`\"jsdom\"` is not supported at this time).\n- Nitro v2.6 or greater.\n\nNote that React Native is not supported at this time.\n\nIf you are interested in other runtime environments, please open or upvote an issue on GitHub.\n\n## Contributing\n\nSee [the contributing documentation](./CONTRIBUTING.md).\n",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.1,
    boost: {
      name: 5,
      stainlessPath: 3,
      endpoint: 3,
      qualified: 3,
      summary: 2,
      content: 1,
      description: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    for (const readme of EMBEDDED_READMES) {
      instance.indexProse(readme.content, `readme:${readme.language}`);
    }
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, language = 'typescript', detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score.
    // Filter prose hits so language-tagged content (READMEs and docs with
    // frontmatter) only matches the requested language.
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex
      .search(query)
      .filter((hit) => {
        const source = ((hit as Record<string, unknown>)['_original'] as ProseChunk | undefined)?.source;
        if (!source) return true;
        // Check for language-tagged sources: "readme:<lang>" or "lang:<lang>:<filename>"
        let taggedLang: string | undefined;
        if (source.startsWith('readme:')) taggedLang = source.slice('readme:'.length);
        else if (source.startsWith('lang:')) taggedLang = source.split(':')[1];
        if (!taggedLang) return true;
        return taggedLang === language || (language === 'javascript' && taggedLang === 'typescript');
      })
      .map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          // Use per-language data when available, falling back to the
          // top-level fields (which are TypeScript-specific in the
          // legacy codepath).
          const langData = m.perLanguage?.[language];
          fullResults.push({
            method: langData?.method ?? m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(langData?.example ? { example: langData.example } : {}),
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          // Parse optional YAML frontmatter for language tagging.
          // Files with a "language" field in frontmatter will only
          // surface in searches for that language.
          //
          // Example:
          //   ---
          //   language: python
          //   ---
          //   # Error handling in Python
          //   ...
          const frontmatter = parseFrontmatter(content);
          const source = frontmatter.language ? `lang:${frontmatter.language}:${file.name}` : file.name;
          this.indexProse(content, source);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}

/** Parses YAML frontmatter from a markdown string, extracting the language field if present. */
function parseFrontmatter(markdown: string): { language?: string } {
  const match = markdown.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const body = match[1] ?? '';
  const langMatch = body.match(/^language:\s*(.+)$/m);
  return langMatch ? { language: langMatch[1]!.trim() } : {};
}
