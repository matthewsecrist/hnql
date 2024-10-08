import type { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/health', async (request, reply) => ({ status: 'ok' }))
}

export default root
