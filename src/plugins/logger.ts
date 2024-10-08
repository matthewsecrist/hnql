import fp from 'fastify-plugin'
import { statusToLogLevel } from '../utils/logger'

export default fp(async (fastify, options) => {
  fastify.addHook('onRequest', (req, res, done) => {
    req.log.info({ req }, `<-- ${req.raw.method} ${req.raw.url}`)
    done()
  })

  fastify.addHook('onResponse', (req, res, done) => {
    req.log[statusToLogLevel(res.statusCode)](
      { req, res },
      `--> ${res.raw.statusCode} ${req.raw.method} ${req.raw.url}`,
    )
  })
})
