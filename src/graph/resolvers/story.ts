import type { RepliesConnection, StoryResolvers, User } from '@/types/graph'
import { serializeComment, serializeUser } from '@/utils/serializers'

export const Story: StoryResolvers = {
  author: async (parent, _, context): Promise<User> => {
    const user = await context.dataSources.hackerNewsApi.getUser(
      parent.author.username,
    )

    return serializeUser(user)
  },
  replies: async (
    { id },
    { first, after },
    context,
  ): Promise<RepliesConnection> => {
    const parent = await context.dataSources.hackerNewsApi.getItem(id)
    const replies = await context.dataSources.hackerNewsApi.getItems(
      parent.kids,
      { first, after },
    )

    return {
      pageInfo: {
        totalResults: parent.descendants ?? 0,
      },
      edges: replies.map((reply) => ({
        node: serializeComment(reply),
      })),
    }
  },
}
