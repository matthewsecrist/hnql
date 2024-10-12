import type { PollResolvers } from '../../types/graph'
import { PaginationSchema } from '../../utils/pagination'
import { serializePollOption } from '../../utils/serializers'
import { validate } from '../../utils/validate'

export const Poll: PollResolvers = {
  options: async ({ id }, { first, after }, context) => {
    await validate(PaginationSchema, { after, first })
    const parent = await context.dataSources.hackerNewsApi.getItem(id)
    const opts = await context.dataSources.hackerNewsApi.getItems(
      parent.parts ?? [],
      { after: Number(after), first },
    )

    console.log(opts)

    return {
      pageInfo: {
        totalResults: parent.descendants ?? 0,
      },
      edges: opts.map((opt) => ({
        node: serializePollOption(opt),
      })),
    }
  },
}
