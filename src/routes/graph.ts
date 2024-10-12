import type { BaseContext } from '@apollo/server'
import { ApolloServer } from '@apollo/server'
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default'
import {
  fastifyApolloDrainPlugin,
  fastifyApolloHandler,
} from '@as-integrations/fastify'
import fp from 'fastify-plugin'
import { context, resolvers, typeDefs } from '../graph'
import { type ServiceEnv, env } from '../utils/env'

export default fp(async (fastify, opts) => {
  const landingPage =
    env<ServiceEnv>('SERVICE_ENV', 'dev') === 'production'
      ? // @ts-expect-error it doesn't like missing graphRef
        ApolloServerPluginLandingPageProductionDefault({ embed: true })
      : ApolloServerPluginLandingPageLocalDefault({})

  const apollo = new ApolloServer<BaseContext>({
    typeDefs: typeDefs,
    resolvers: resolvers,
    plugins: [fastifyApolloDrainPlugin(fastify), landingPage],
  })

  await apollo.start()

  await fastify.route({
    url: '/graph',
    method: ['GET', 'POST', 'OPTIONS'],
    handler: fastifyApolloHandler(apollo, { context }),
  })
})
