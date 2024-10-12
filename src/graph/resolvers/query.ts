import type { QueryResolvers } from '../../types/graph'
import { NotFound } from '../../utils/errors'
import { serializeItem, serializeUser } from '../../utils/serializers'

export const Query: QueryResolvers = {
  item: async (_, { id }, context) => {
    const item = await context.dataSources.hackerNewsApi.getItem(id)
    if (!item) {
      return NotFound(`Item ${id} does not exist`)
    }

    return serializeItem(item)
  },
  user: async (_, { username }, context) => {
    const user = await context.dataSources.hackerNewsApi.getUser(username)
    if (!user) {
      return NotFound(`User ${username} does not exist.`)
    }
    return serializeUser(user)
  },
}
