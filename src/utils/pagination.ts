import z from 'zod'

export const PaginationSchema = z.object({
  first: z.number().positive().max(50),
  after: z.number().positive().optional(),
})
