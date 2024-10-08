const ENV_VARS = ['SERVICE_ENV', 'LOG_LEVEL'] as const

export type ServiceEnv = 'stage' | 'prod' | 'dev' | 'test'

export type Env = (typeof ENV_VARS)[number]

export function env<T = string>(prop: Env, defaultValue?: T | undefined): T {
  if (process.env[prop]) return process.env[prop] as T
  if (defaultValue) return defaultValue
  throw new Error(`Missing env var: ${prop}`)
}
