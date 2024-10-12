import type { Item } from '@/graph/dataSources/hackerNewsAPI'
import type { User as HNUser } from '@/graph/dataSources/hackerNewsAPI'
import {
  type Comment,
  ItemType,
  type Job,
  type Poll,
  type PollOption,
  type Story,
  type User,
} from '@/types/graph'

export function serializeUser(user: HNUser): User {
  return {
    __typename: 'User',
    about: user.about,
    karma: user.karma,
    username: user.id,
  }
}

export function serializeComment(item: Item): Comment {
  const author = { username: item.by } as User

  return {
    __typename: 'Comment',
    author,
    id: item.id,
    replies: { edges: [], pageInfo: { totalResults: item.descendants ?? 0 } },
    text: item.text!,
    type: ItemType.Comment,
  }
}

export function serializeStory(item: Item): Story {
  const author = { username: item.by } as User

  return {
    __typename: 'Story',
    id: item.id,
    title: item.title ?? '',
    type: ItemType.Story,
    score: item.score,
    replies: { edges: [], pageInfo: { totalResults: item.descendants ?? 0 } },
    author,
  }
}

export function serializeJob(item: Item): Job {
  const author = { username: item.by } as User

  return {
    __typename: 'Job',
    author,
    id: item.id,
    score: item.score,
    title: item.title!,
    type: ItemType.Job,
  }
}

export function serializePoll(item: Item): Poll {
  const author = { username: item.by } as User

  return {
    __typename: 'Poll',
    author,
    id: item.id,
    score: item.score,
    title: item.title!,
    type: ItemType.Poll,
    options: { edges: [], pageInfo: { totalResults: item.parts?.length ?? 0 } },
    replies: { edges: [], pageInfo: { totalResults: item.descendants ?? 0 } },
  }
}

export function serializePollOption(item: Item): PollOption {
  const author = { username: item.by } as User

  return {
    __typename: 'PollOption',
    author,
    id: item.id,
    score: item.score,
    type: ItemType.PollOpt,
    text: item.text!,
  }
}
