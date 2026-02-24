// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.getWelcome',
    fullyQualifiedName: 'getWelcome',
    httpMethod: 'get',
    httpPath: '/',
  },
  {
    clientCallName: 'client.believe.submit',
    fullyQualifiedName: 'believe.submit',
    httpMethod: 'post',
    httpPath: '/believe',
  },
  {
    clientCallName: 'client.biscuits.retrieve',
    fullyQualifiedName: 'biscuits.retrieve',
    httpMethod: 'get',
    httpPath: '/biscuits/{biscuit_id}',
  },
  {
    clientCallName: 'client.biscuits.list',
    fullyQualifiedName: 'biscuits.list',
    httpMethod: 'get',
    httpPath: '/biscuits',
  },
  {
    clientCallName: 'client.biscuits.getFresh',
    fullyQualifiedName: 'biscuits.getFresh',
    httpMethod: 'get',
    httpPath: '/biscuits/fresh',
  },
  {
    clientCallName: 'client.characters.create',
    fullyQualifiedName: 'characters.create',
    httpMethod: 'post',
    httpPath: '/characters',
  },
  {
    clientCallName: 'client.characters.retrieve',
    fullyQualifiedName: 'characters.retrieve',
    httpMethod: 'get',
    httpPath: '/characters/{character_id}',
  },
  {
    clientCallName: 'client.characters.update',
    fullyQualifiedName: 'characters.update',
    httpMethod: 'patch',
    httpPath: '/characters/{character_id}',
  },
  {
    clientCallName: 'client.characters.list',
    fullyQualifiedName: 'characters.list',
    httpMethod: 'get',
    httpPath: '/characters',
  },
  {
    clientCallName: 'client.characters.delete',
    fullyQualifiedName: 'characters.delete',
    httpMethod: 'delete',
    httpPath: '/characters/{character_id}',
  },
  {
    clientCallName: 'client.characters.getQuotes',
    fullyQualifiedName: 'characters.getQuotes',
    httpMethod: 'get',
    httpPath: '/characters/{character_id}/quotes',
  },
  {
    clientCallName: 'client.coaching.principles.retrieve',
    fullyQualifiedName: 'coaching.principles.retrieve',
    httpMethod: 'get',
    httpPath: '/coaching/principles/{principle_id}',
  },
  {
    clientCallName: 'client.coaching.principles.list',
    fullyQualifiedName: 'coaching.principles.list',
    httpMethod: 'get',
    httpPath: '/coaching/principles',
  },
  {
    clientCallName: 'client.coaching.principles.getRandom',
    fullyQualifiedName: 'coaching.principles.getRandom',
    httpMethod: 'get',
    httpPath: '/coaching/principles/random',
  },
  {
    clientCallName: 'client.conflicts.resolve',
    fullyQualifiedName: 'conflicts.resolve',
    httpMethod: 'post',
    httpPath: '/conflicts/resolve',
  },
  {
    clientCallName: 'client.episodes.create',
    fullyQualifiedName: 'episodes.create',
    httpMethod: 'post',
    httpPath: '/episodes',
  },
  {
    clientCallName: 'client.episodes.retrieve',
    fullyQualifiedName: 'episodes.retrieve',
    httpMethod: 'get',
    httpPath: '/episodes/{episode_id}',
  },
  {
    clientCallName: 'client.episodes.update',
    fullyQualifiedName: 'episodes.update',
    httpMethod: 'patch',
    httpPath: '/episodes/{episode_id}',
  },
  {
    clientCallName: 'client.episodes.list',
    fullyQualifiedName: 'episodes.list',
    httpMethod: 'get',
    httpPath: '/episodes',
  },
  {
    clientCallName: 'client.episodes.delete',
    fullyQualifiedName: 'episodes.delete',
    httpMethod: 'delete',
    httpPath: '/episodes/{episode_id}',
  },
  {
    clientCallName: 'client.episodes.getWisdom',
    fullyQualifiedName: 'episodes.getWisdom',
    httpMethod: 'get',
    httpPath: '/episodes/{episode_id}/wisdom',
  },
  {
    clientCallName: 'client.health.check',
    fullyQualifiedName: 'health.check',
    httpMethod: 'get',
    httpPath: '/health',
  },
  {
    clientCallName: 'client.matches.create',
    fullyQualifiedName: 'matches.create',
    httpMethod: 'post',
    httpPath: '/matches',
  },
  {
    clientCallName: 'client.matches.retrieve',
    fullyQualifiedName: 'matches.retrieve',
    httpMethod: 'get',
    httpPath: '/matches/{match_id}',
  },
  {
    clientCallName: 'client.matches.update',
    fullyQualifiedName: 'matches.update',
    httpMethod: 'patch',
    httpPath: '/matches/{match_id}',
  },
  {
    clientCallName: 'client.matches.list',
    fullyQualifiedName: 'matches.list',
    httpMethod: 'get',
    httpPath: '/matches',
  },
  {
    clientCallName: 'client.matches.delete',
    fullyQualifiedName: 'matches.delete',
    httpMethod: 'delete',
    httpPath: '/matches/{match_id}',
  },
  {
    clientCallName: 'client.matches.getLesson',
    fullyQualifiedName: 'matches.getLesson',
    httpMethod: 'get',
    httpPath: '/matches/{match_id}/lesson',
  },
  {
    clientCallName: 'client.matches.getTurningPoints',
    fullyQualifiedName: 'matches.getTurningPoints',
    httpMethod: 'get',
    httpPath: '/matches/{match_id}/turning-points',
  },
  {
    clientCallName: 'client.matches.streamLiveSimulation',
    fullyQualifiedName: 'matches.streamLiveSimulation',
    httpMethod: 'get',
    httpPath: '/matches/live',
  },
  {
    clientCallName: 'client.matches.commentary.stream',
    fullyQualifiedName: 'matches.commentary.stream',
    httpMethod: 'post',
    httpPath: '/matches/{match_id}/commentary/stream',
  },
  {
    clientCallName: 'client.pepTalk.retrieve',
    fullyQualifiedName: 'pepTalk.retrieve',
    httpMethod: 'get',
    httpPath: '/pep-talk',
  },
  {
    clientCallName: 'client.press.simulate',
    fullyQualifiedName: 'press.simulate',
    httpMethod: 'post',
    httpPath: '/press',
  },
  {
    clientCallName: 'client.quotes.create',
    fullyQualifiedName: 'quotes.create',
    httpMethod: 'post',
    httpPath: '/quotes',
  },
  {
    clientCallName: 'client.quotes.retrieve',
    fullyQualifiedName: 'quotes.retrieve',
    httpMethod: 'get',
    httpPath: '/quotes/{quote_id}',
  },
  {
    clientCallName: 'client.quotes.update',
    fullyQualifiedName: 'quotes.update',
    httpMethod: 'patch',
    httpPath: '/quotes/{quote_id}',
  },
  {
    clientCallName: 'client.quotes.list',
    fullyQualifiedName: 'quotes.list',
    httpMethod: 'get',
    httpPath: '/quotes',
  },
  {
    clientCallName: 'client.quotes.delete',
    fullyQualifiedName: 'quotes.delete',
    httpMethod: 'delete',
    httpPath: '/quotes/{quote_id}',
  },
  {
    clientCallName: 'client.quotes.getRandom',
    fullyQualifiedName: 'quotes.getRandom',
    httpMethod: 'get',
    httpPath: '/quotes/random',
  },
  {
    clientCallName: 'client.quotes.listByCharacter',
    fullyQualifiedName: 'quotes.listByCharacter',
    httpMethod: 'get',
    httpPath: '/quotes/characters/{character_id}',
  },
  {
    clientCallName: 'client.quotes.listByTheme',
    fullyQualifiedName: 'quotes.listByTheme',
    httpMethod: 'get',
    httpPath: '/quotes/themes/{theme}',
  },
  {
    clientCallName: 'client.reframe.transformNegativeThoughts',
    fullyQualifiedName: 'reframe.transformNegativeThoughts',
    httpMethod: 'post',
    httpPath: '/reframe',
  },
  {
    clientCallName: 'client.stream.testConnection',
    fullyQualifiedName: 'stream.testConnection',
    httpMethod: 'get',
    httpPath: '/stream/test',
  },
  {
    clientCallName: 'client.teamMembers.create',
    fullyQualifiedName: 'teamMembers.create',
    httpMethod: 'post',
    httpPath: '/team-members',
  },
  {
    clientCallName: 'client.teamMembers.retrieve',
    fullyQualifiedName: 'teamMembers.retrieve',
    httpMethod: 'get',
    httpPath: '/team-members/{member_id}',
  },
  {
    clientCallName: 'client.teamMembers.update',
    fullyQualifiedName: 'teamMembers.update',
    httpMethod: 'patch',
    httpPath: '/team-members/{member_id}',
  },
  {
    clientCallName: 'client.teamMembers.list',
    fullyQualifiedName: 'teamMembers.list',
    httpMethod: 'get',
    httpPath: '/team-members',
  },
  {
    clientCallName: 'client.teamMembers.delete',
    fullyQualifiedName: 'teamMembers.delete',
    httpMethod: 'delete',
    httpPath: '/team-members/{member_id}',
  },
  {
    clientCallName: 'client.teamMembers.listCoaches',
    fullyQualifiedName: 'teamMembers.listCoaches',
    httpMethod: 'get',
    httpPath: '/team-members/coaches/',
  },
  {
    clientCallName: 'client.teamMembers.listPlayers',
    fullyQualifiedName: 'teamMembers.listPlayers',
    httpMethod: 'get',
    httpPath: '/team-members/players/',
  },
  {
    clientCallName: 'client.teamMembers.listStaff',
    fullyQualifiedName: 'teamMembers.listStaff',
    httpMethod: 'get',
    httpPath: '/team-members/staff/',
  },
  {
    clientCallName: 'client.teams.create',
    fullyQualifiedName: 'teams.create',
    httpMethod: 'post',
    httpPath: '/teams',
  },
  {
    clientCallName: 'client.teams.retrieve',
    fullyQualifiedName: 'teams.retrieve',
    httpMethod: 'get',
    httpPath: '/teams/{team_id}',
  },
  {
    clientCallName: 'client.teams.update',
    fullyQualifiedName: 'teams.update',
    httpMethod: 'patch',
    httpPath: '/teams/{team_id}',
  },
  {
    clientCallName: 'client.teams.list',
    fullyQualifiedName: 'teams.list',
    httpMethod: 'get',
    httpPath: '/teams',
  },
  {
    clientCallName: 'client.teams.delete',
    fullyQualifiedName: 'teams.delete',
    httpMethod: 'delete',
    httpPath: '/teams/{team_id}',
  },
  {
    clientCallName: 'client.teams.getCulture',
    fullyQualifiedName: 'teams.getCulture',
    httpMethod: 'get',
    httpPath: '/teams/{team_id}/culture',
  },
  {
    clientCallName: 'client.teams.getRivals',
    fullyQualifiedName: 'teams.getRivals',
    httpMethod: 'get',
    httpPath: '/teams/{team_id}/rivals',
  },
  {
    clientCallName: 'client.teams.listLogos',
    fullyQualifiedName: 'teams.listLogos',
    httpMethod: 'get',
    httpPath: '/teams/{team_id}/logos',
  },
  {
    clientCallName: 'client.teams.logo.delete',
    fullyQualifiedName: 'teams.logo.delete',
    httpMethod: 'delete',
    httpPath: '/teams/{team_id}/logo/{file_id}',
  },
  {
    clientCallName: 'client.teams.logo.download',
    fullyQualifiedName: 'teams.logo.download',
    httpMethod: 'get',
    httpPath: '/teams/{team_id}/logo/{file_id}',
  },
  {
    clientCallName: 'client.teams.logo.upload',
    fullyQualifiedName: 'teams.logo.upload',
    httpMethod: 'post',
    httpPath: '/teams/{team_id}/logo',
  },
  {
    clientCallName: 'client.version.retrieve',
    fullyQualifiedName: 'version.retrieve',
    httpMethod: 'get',
    httpPath: '/version',
  },
  {
    clientCallName: 'client.webhooks.create',
    fullyQualifiedName: 'webhooks.create',
    httpMethod: 'post',
    httpPath: '/webhooks',
  },
  {
    clientCallName: 'client.webhooks.retrieve',
    fullyQualifiedName: 'webhooks.retrieve',
    httpMethod: 'get',
    httpPath: '/webhooks/{webhook_id}',
  },
  {
    clientCallName: 'client.webhooks.list',
    fullyQualifiedName: 'webhooks.list',
    httpMethod: 'get',
    httpPath: '/webhooks',
  },
  {
    clientCallName: 'client.webhooks.delete',
    fullyQualifiedName: 'webhooks.delete',
    httpMethod: 'delete',
    httpPath: '/webhooks/{webhook_id}',
  },
  {
    clientCallName: 'client.webhooks.trigger',
    fullyQualifiedName: 'webhooks.trigger',
    httpMethod: 'post',
    httpPath: '/webhooks/trigger',
  },
  {
    clientCallName: 'client.ws.test',
    fullyQualifiedName: 'ws.test',
    httpMethod: 'get',
    httpPath: '/ws/test',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
