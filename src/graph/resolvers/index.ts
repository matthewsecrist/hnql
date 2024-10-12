import type { Resolvers } from '@/types/graph'
import { Comment } from './comment'
import { Poll } from './poll'
import { Query } from './query'
import { Story } from './story'

export const resolvers: Resolvers = {
  Query,
  Story,
  Comment,
  Poll,
}
