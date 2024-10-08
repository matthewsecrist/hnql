import { readFileSync } from 'node:fs'
import path from 'node:path'
import type { ApolloFastifyContextFunction } from '@as-integrations/fastify'
import {
  type Comment,
  ItemType,
  type Resolvers,
  type Story,
  type User,
} from '../types/graph'
import { HackerNewsAPI } from './dataSources/hackerNewsAPI'

function determineItemType(type: string): ItemType {
  switch (type) {
    case 'job':
      return ItemType.Job
    case 'comment':
      return ItemType.Comment
    case 'poll':
      return ItemType.Poll
    case 'pollopt':
      return ItemType.PollOpt
    case 'story':
      return ItemType.Story
    default:
      return ItemType.Story
  }
}

export const resolvers: Resolvers = {
  Query: {
    story: async (_, { id }, context): Promise<Story> => {
      const item = await context.dataSources.hackerNewsApi.getItem(id)
      const replies = item?.kids?.map((id) => ({ id }))
      const author = { username: item.by } as User

      return {
        id: item.id,
        title: item.title ?? '',
        type: determineItemType(item.type),
        score: item.score,
        replies: replies as Comment[],
        author,
      }
    },
    user: async (_, { username }, context): Promise<User> => {
      const user = await context.dataSources.hackerNewsApi.getUser(username)
      return {
        about: user.about,
        username: user.id,
        karma: user.karma,
      }
    },
  },
  Story: {
    author: async (parent, _, context): Promise<User> => {
      const user = await context.dataSources.hackerNewsApi.getUser(
        parent.author.username,
      )

      return {
        username: user.id,
        about: user.about,
        karma: user.karma,
      }
    },
    replies: async (parent, _, context): Promise<Comment[]> => {
      const ids = parent?.replies
        ?.filter((i) => Boolean(i?.id))
        ?.map((i) => i?.id) as number[]

      if (!ids?.length) {
        return []
      }

      const items = await context.dataSources.hackerNewsApi.getItems(ids)

      return items.map((item) => {
        const replies = item?.kids?.map((id) => ({ id })) as Comment[]
        const author = { username: item.by } as User

        return {
          id: item.id,
          text: item.text,
          replies,
          author,
          type: determineItemType(item.type),
        }
      })
    },
  },
  Comment: {
    author: async (parent, _, context): Promise<User> => {
      const user = await context.dataSources.hackerNewsApi.getUser(
        parent.author.username,
      )

      return {
        username: user.id,
        about: user.about,
        karma: user.karma,
      }
    },
    replies: async (parent, _, context): Promise<Comment[]> => {
      const ids = parent?.replies
        ?.filter((i) => Boolean(i?.id))
        ?.map((i) => i?.id) as number[]

      if (!ids?.length) {
        return []
      }

      const items = await context.dataSources.hackerNewsApi.getItems(ids)

      return items.map((item) => {
        const replies = item?.kids?.map((id) => ({ id })) as Comment[]
        const author = { username: item.by } as User

        return {
          id: item.id,
          text: item.text,
          replies,
          author,
          type: determineItemType(item.type),
        }
      })
    },
  },
}

export const typeDefs = readFileSync(path.join(__dirname, 'schema.graphql'), {
  encoding: 'utf-8',
})

export interface Context {
  dataSources: {
    hackerNewsApi: HackerNewsAPI
  }
}

export const context: ApolloFastifyContextFunction<Context> = async () => {
  return {
    dataSources: {
      hackerNewsApi: new HackerNewsAPI(),
    },
  }
}
