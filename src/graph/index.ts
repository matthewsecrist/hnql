import { readFileSync } from 'node:fs'
import path from 'node:path'

export const typeDefs = readFileSync(path.join(__dirname, 'schema.graphql'), {
  encoding: 'utf-8',
})

export { type Context, context } from './context'
export { resolvers } from './resolvers'
