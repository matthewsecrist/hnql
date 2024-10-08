import Fastify from 'fastify'
import { app } from './app'
import { getLoggerConfig } from './utils/logger'

async function main() {
  const server = Fastify({
    disableRequestLogging: true,
    ignoreDuplicateSlashes: true,
    ignoreTrailingSlash: true,
    logger: getLoggerConfig(),
    genReqId: () => crypto.randomUUID(),
    requestTimeout: 60 * 1000,
  })

  await server.register(app)

  server.listen({ port: 3000 }, (err) => {
    if (err) {
      server.log.fatal({ err }, 'Server Error')
      process.exit(1)
    }
  })
}

void main()
