import type { ApolloFastifyContextFunction } from '@as-integrations/fastify'
import { HackerNewsAPI } from './dataSources/hackerNewsAPI'

export interface Context {
  dataSources: {
    hackerNewsApi: HackerNewsAPI
  }
}

export const context: ApolloFastifyContextFunction<Context> = async () => {
  return {
    dataSources: {
      hackerNewsApi: new HackerNewsAPI(),
    },
  }
}
