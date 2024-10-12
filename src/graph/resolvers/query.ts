import type { QueryResolvers } from '@/types/graph'
import { NotFound } from '@/utils/errors'
import {
  serializeComment,
  serializeJob,
  serializePoll,
  serializePollOption,
  serializeStory,
  serializeUser,
} from '@/utils/serializers'

export const Query: QueryResolvers = {
  item: async (_, { id }, context) => {
    const item = await context.dataSources.hackerNewsApi.getItem(id)
    if (!item) {
      return NotFound(`Item ${id} does not exist`)
    }

    switch (item.type) {
      case 'story':
        return serializeStory(item)
      case 'comment':
        return serializeComment(item)
      case 'job':
        return serializeJob(item)
      case 'poll':
        return serializePoll(item)
      case 'pollopt':
        return serializePollOption(item)
      default:
        return NotFound(`Item ${id} does not exist`)
    }
  },
  user: async (_, { username }, context) => {
    const user = await context.dataSources.hackerNewsApi.getUser(username)
    if (!user) {
      return NotFound(`User ${username} does not exist.`)
    }
    return serializeUser(user)
  },
}
