import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: './schema.graphql',
  generates: {
    'src/types/graph.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        contextType: '../graph/index#Context',
      },
    },
  },
}

export default config
