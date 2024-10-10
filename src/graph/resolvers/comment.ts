import type { CommentResolvers, RepliesConnection, User } from '@/types/graph'
import { serializeComment, serializeUser } from '@/utils/serializers'

export const Comment: CommentResolvers = {
  author: async (parent, _, context): Promise<User> => {
    const user = await context.dataSources.hackerNewsApi.getUser(
      parent.author.username,
    )

    return serializeUser(user)
  },
  replies: async (
    { id },
    { after, first },
    context,
  ): Promise<RepliesConnection> => {
    const parent = await context.dataSources.hackerNewsApi.getItem(id)
    const replies = await context.dataSources.hackerNewsApi.getItems(
      parent.kids,
      { after, first },
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
