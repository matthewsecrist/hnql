import type { UserResolvers } from '@/types/graph'
import { PaginationSchema } from '@/utils/pagination'
import { serializeItem } from '@/utils/serializers'
import { validate } from '@/utils/validate'

export const User: UserResolvers = {
  items: async ({ username }, { first, after }, context) => {
    await validate(PaginationSchema, { first, after })

    const parent = await context.dataSources.hackerNewsApi.getUser(username)
    const items = await context.dataSources.hackerNewsApi.getItems(
      parent.submitted,
      { after: Number(after), first },
    )

    return {
      pageInfo: {
        totalResults: parent.created ?? 0,
      },
      edges: items.map((item) => ({
        node: serializeItem(item),
      })),
    }
  },
}
