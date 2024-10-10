import type { Item } from '@/graph/dataSources/hackerNewsAPI'
import type { User as HNUser } from '@/graph/dataSources/hackerNewsAPI'
import { type Comment, ItemType, type Story, type User } from '@/types/graph'

export function itemType(type: string): ItemType {
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

export function serializeComment(item: Item): Comment {
  const author = { username: item.by } as User

  return {
    id: item.id,
    text: item.text,
    replies: { edges: [], pageInfo: { totalResults: item.descendants ?? 0 } },
    author,
    type: itemType(item.type),
  }
}

export function serializeUser(user: HNUser): User {
  return {
    username: user.id,
    about: user.about,
    karma: user.karma,
  }
}

export function serializeStory(item: Item): Story {
  const author = { username: item.by } as User

  return {
    id: item.id,
    title: item.title ?? '',
    type: itemType(item.type),
    score: item.score,
    replies: { edges: [], pageInfo: { totalResults: item.descendants ?? 0 } },
    author,
  }
}
