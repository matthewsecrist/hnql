import type { ItemResult, Job, QueryResolvers } from '../../types/graph'
import { NotFound } from '../../utils/errors'
import { PaginationSchema } from '../../utils/pagination'
import { serializeItem, serializeUser } from '../../utils/serializers'
import { validate } from '../../utils/validate'

export const Query: QueryResolvers = {
  ask: async (_, { after, first }, context) => {
    await validate(PaginationSchema, { after, first })

    const { total, results } = await context.dataSources.hackerNewsApi.getAsk({
      first,
      ...(after ? { after } : {}),
    })

    return {
      pageInfo: {
        totalResults: total,
      },
      edges: results.map((item) => ({
        node: serializeItem(item) as Job,
      })),
    }
  },
  best: async (_, { after, first }, context) => {
    await validate(PaginationSchema, { after, first })

    const { total, results } = await context.dataSources.hackerNewsApi.getBest({
      first,
      ...(after ? { after } : {}),
    })

    return {
      pageInfo: {
        totalResults: total,
      },
      edges: results.map((item) => ({
        node: serializeItem(item) as Job,
      })),
    }
  },
  item: async (_, { id }, context) => {
    const item = await context.dataSources.hackerNewsApi.getItem(id)
    if (!item) {
      return NotFound(`Item ${id} does not exist`)
    }

    return serializeItem(item)
  },
  jobs: async (_, { after, first }, context) => {
    await validate(PaginationSchema, { after, first })

    const { total, results } = await context.dataSources.hackerNewsApi.getJobs({
      first,
      ...(after ? { after } : {}),
    })

    return {
      pageInfo: {
        totalResults: total,
      },
      edges: results.map((item) => ({
        node: serializeItem(item) as Job,
      })),
    }
  },
  new: async (_, { after, first }, context) => {
    await validate(PaginationSchema, { after, first })

    const { total, results } = await context.dataSources.hackerNewsApi.getNew({
      first,
      ...(after ? { after } : {}),
    })

    return {
      pageInfo: {
        totalResults: total,
      },
      edges: results.map((item) => ({
        node: serializeItem(item) as Job,
      })),
    }
  },
  top: async (_, { after, first }, context) => {
    await validate(PaginationSchema, { after, first })

    const { total, results } =
      await context.dataSources.hackerNewsApi.getTopItems({
        first,
        ...(after ? { after } : {}),
      })

    return {
      pageInfo: {
        totalResults: total,
      },
      edges: results.map((item) => ({
        node: serializeItem(item) as ItemResult,
      })),
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
