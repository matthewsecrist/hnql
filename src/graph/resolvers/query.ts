import type { QueryResolvers, Story, User } from '@/types/graph'
import { serializeStory, serializeUser } from '@/utils/serializers'

export const Query: QueryResolvers = {
  story: async (_, { id }, context): Promise<Story> => {
    const item = await context.dataSources.hackerNewsApi.getItem(id)
    return serializeStory(item)
  },
  user: async (_, { username }, context): Promise<User> => {
    const user = await context.dataSources.hackerNewsApi.getUser(username)
    return serializeUser(user)
  },
}
