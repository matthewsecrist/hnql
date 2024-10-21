import { RESTDataSource } from '@apollo/datasource-rest'
import DataLoader from 'dataloader'

export interface Item {
  by: string
  descendants: number
  id: number
  kids: number[]
  parts?: number[]
  score: number
  time: number
  title?: string
  type: 'story' | 'job' | 'comment' | 'poll' | 'pollopt'
  url: string
  text?: string
}

export interface User {
  about: string
  created: number
  id: string
  karma: number
  submitted: number[]
}

export interface PaginationParams {
  after?: number | undefined
  first: number
}

export class HackerNewsAPI extends RESTDataSource {
  override baseURL = 'https://hacker-news.firebaseio.com'

  private getPaginatedIds(
    ids: number[],
    { after, first }: PaginationParams,
  ): number[] {
    // Start at the beginning
    let startingIndex = 0
    if (after) {
      const idx = ids.findIndex((id) => id === after)
      if (idx === -1) {
        // out of bounds, return at the end of ids
        startingIndex = ids.length
      } else {
        // found index, move to next id
        startingIndex = idx + 1
      }
    }

    return ids.slice(startingIndex, first)
  }

  private itemsLoader = new DataLoader(
    async (ids: readonly number[]): Promise<Item[]> => {
      const items = await Promise.all(
        ids.map((id) => this.get(`/v0/item/${id}.json?print=pretty`)),
      )

      const itemIdToItemMap = items.reduce<Record<string, Item>>(
        (mapping, item) => {
          mapping[item.id] = item
          return mapping
        },
        {},
      )

      return ids.map((id) => itemIdToItemMap[id])
    },
    { name: 'ItemsLoader' },
  )

  private usersLoader = new DataLoader(
    async (ids: readonly string[]): Promise<User[]> => {
      const users = await Promise.all(
        ids.map((id) => this.get(`/v0/user/${id}.json?print=pretty`)),
      )

      const idToUserMap = users.reduce<Record<string, User>>(
        (mapping, item) => {
          mapping[item.id] = item
          return mapping
        },
        {},
      )

      return ids.map((id) => idToUserMap[id])
    },
    { name: 'ItemsLoader' },
  )

  async getItem(id: number): Promise<Item> {
    return await this.itemsLoader.load(id)
  }

  async getTopItems({ first = 10, after }: PaginationParams): Promise<{
    total: number
    results: Item[]
  }> {
    const ids = await this.get<number[]>('/v0/topstories.json?print=pretty')
    const itemsToLoad = this.getPaginatedIds(ids, { first, after })
    // Don't use batch because it returns Error | Item
    const results = await Promise.all(
      itemsToLoad?.map((id) => this.itemsLoader.load(id)),
    )

    return {
      total: ids.length,
      results,
    }
  }

  async getJobs({
    first = 10,
    after,
  }: PaginationParams): Promise<{ total: number; results: Item[] }> {
    const ids = await this.get<number[]>('/v0/jobstories.json?print=pretty')
    const itemsToLoad = this.getPaginatedIds(ids, { first, after })
    // Don't use batch because it returns Error | Item
    const results = await Promise.all(
      itemsToLoad?.map((id) => this.itemsLoader.load(id)),
    )

    return {
      total: ids.length,
      results,
    }
  }

  async getNew({
    first = 10,
    after,
  }: PaginationParams): Promise<{ total: number; results: Item[] }> {
    const ids = await this.get<number[]>('/v0/newstories.json?print=pretty')
    const itemsToLoad = this.getPaginatedIds(ids, { first, after })
    // Don't use batch because it returns Error | Item
    const results = await Promise.all(
      itemsToLoad?.map((id) => this.itemsLoader.load(id)),
    )

    return {
      total: ids.length,
      results,
    }
  }

  async getAsk({
    first = 10,
    after,
  }: PaginationParams): Promise<{ total: number; results: Item[] }> {
    const ids = await this.get<number[]>('/v0/askstories.json?print=pretty')
    const itemsToLoad = this.getPaginatedIds(ids, { first, after })
    // Don't use batch because it returns Error | Item
    const results = await Promise.all(
      itemsToLoad?.map((id) => this.itemsLoader.load(id)),
    )

    return {
      total: ids.length,
      results,
    }
  }

  async getBest({
    first = 10,
    after,
  }: PaginationParams): Promise<{ total: number; results: Item[] }> {
    const ids = await this.get<number[]>('/v0/beststories.json?print=pretty')
    const itemsToLoad = this.getPaginatedIds(ids, { first, after })
    // Don't use batch because it returns Error | Item
    const results = await Promise.all(
      itemsToLoad?.map((id) => this.itemsLoader.load(id)),
    )

    return {
      total: ids.length,
      results,
    }
  }

  async getItems(
    ids: number[],
    { first = 10, after }: PaginationParams,
  ): Promise<Item[]> {
    if (!ids?.length) {
      return []
    }
    const itemsToLoad = this.getPaginatedIds(ids, { first, after })
    // Don't use batch because it returns Error | Item
    return await Promise.all(
      itemsToLoad?.map((id) => this.itemsLoader.load(id)),
    )
  }

  async getUser(id: string): Promise<User> {
    return await this.usersLoader.load(id)
  }
}
