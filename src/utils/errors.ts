import type { NotFoundError } from '../types/graph'

export function NotFound(
  message = `The resource you've requested is not found`,
): NotFoundError {
  return {
    __typename: 'NotFoundError',
    code: 'NOT_FOUND',
    message,
  }
}
