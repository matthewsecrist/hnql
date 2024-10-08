import { RESTDataSource } from '@apollo/datasource-rest'
import DataLoader from 'dataloader'

export interface Item {
  by: string
  descendants: number
  id: number
  kids: number[]
  score: number
  time: number
  title?: string
  type: string
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

export class HackerNewsAPI extends RESTDataSource {
  override baseURL = 'https://hacker-news.firebaseio.com'

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

  async getItems(ids: number[]): Promise<Item[]> {
    if (!ids?.length) {
      return []
    }
    // Don't use batch because it returns Error | Item
    return await Promise.all(ids?.map((id) => this.itemsLoader.load(id)))
  }

  async getUser(id: string): Promise<User> {
    return await this.usersLoader.load(id)
  }
}
