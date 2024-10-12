import { GraphQLError } from 'graphql'
import type { ZodSchema, z } from 'zod'

export async function validate<
  T extends Record<K, unknown>,
  Z extends ZodSchema,
  K extends PropertyKey = z.infer<Z>,
>(schema: Z, values: T): Promise<void> {
  const data = await schema.safeParseAsync(values)

  if (data.success) {
    return
  }
  const { fieldErrors } = data.error.flatten()
  const errors = (Object.keys(fieldErrors) as K[]).reduce(
    (acc: string[], field) => {
      acc.push(`${String(field)}: ${fieldErrors[field]}`)
      return acc
    },
    [],
  )

  throw new GraphQLError(errors.join(', '), {
    extensions: {},
  })
}
