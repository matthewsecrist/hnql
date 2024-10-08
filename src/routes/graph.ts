import type { BaseContext } from '@apollo/server'
import { ApolloServer } from '@apollo/server'
import {
  fastifyApolloDrainPlugin,
  fastifyApolloHandler,
} from '@as-integrations/fastify'
import fp from 'fastify-plugin'
import { context, resolvers, typeDefs } from '../graph'

export default fp(async (fastify, opts) => {
  const apollo = new ApolloServer<BaseContext>({
    typeDefs: typeDefs,
    resolvers: resolvers,
    plugins: [fastifyApolloDrainPlugin(fastify)],
  })

  await apollo.start()

  await fastify.route({
    url: '/graph',
    method: ['GET', 'POST', 'OPTIONS'],
    handler: fastifyApolloHandler(apollo, { context }),
  })
})
