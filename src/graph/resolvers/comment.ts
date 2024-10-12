import type { CommentResolvers } from '@/types/graph'
import { PaginationSchema } from '@/utils/pagination'
import { serializeComment, serializeUser } from '@/utils/serializers'
import { validate } from '@/utils/validate'

export const Comment: CommentResolvers = {
  author: async (parent, _, context) => {
    const user = await context.dataSources.hackerNewsApi.getUser(
      parent.author.username,
    )

    return serializeUser(user)
  },
  replies: async ({ id }, { after, first = 10 }, context) => {
    await validate(PaginationSchema, { after, first })
    const parent = await context.dataSources.hackerNewsApi.getItem(id)
    const replies = await context.dataSources.hackerNewsApi.getItems(
      parent.kids,
      { after: Number(after), first },
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
