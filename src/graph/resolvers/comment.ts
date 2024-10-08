import type {
  CommentResolvers,
  Comment as CommentType,
  User,
} from '@/types/graph'
import { serializeComment, serializeUser } from '@/utils/serializers'

export const Comment: CommentResolvers = {
  author: async (parent, _, context): Promise<User> => {
    const user = await context.dataSources.hackerNewsApi.getUser(
      parent.author.username,
    )

    return serializeUser(user)
  },
  replies: async (parent, _, context): Promise<CommentType[]> => {
    const ids = parent?.replies
      ?.filter((i) => Boolean(i?.id))
      ?.map((i) => i?.id) as number[]

    const items = await context.dataSources.hackerNewsApi.getItems(ids)

    return items.map(serializeComment)
  },
}
