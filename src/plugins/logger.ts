import fp from 'fastify-plugin'
import { statusToLogLevel } from '../utils/logger'

const IGNORED_ROUTES = ['/health']

export default fp(async (fastify, options) => {
  fastify.addHook('onRequest', (req, res, done) => {
    if (!IGNORED_ROUTES.includes(req?.raw?.url!)) {
      req.log.info({ req }, `<-- ${req.raw.method} ${req.raw.url}`)
    }
    done()
  })

  fastify.addHook('onResponse', (req, res, done) => {
    if (!IGNORED_ROUTES.includes(req?.raw?.url!)) {
      req.log[statusToLogLevel(res.statusCode)](
        { req, res },
        `--> ${res.raw.statusCode} ${req.raw.method} ${req.raw.url}`,
      )
    }
    done()
  })
})
