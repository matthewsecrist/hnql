import pino, { type LoggerOptions, type Level } from 'pino'
import { type ServiceEnv, env } from './env'

const serializers: LoggerOptions['serializers'] = {
  err: pino.stdSerializers.errWithCause,
  req: pino.stdSerializers.req,
  res: pino.stdSerializers.res,
}

const shared: LoggerOptions = {
  level: env('LOG_LEVEL', 'info'),
  base: undefined,
  serializers,
}

const loggerOptions: Record<ServiceEnv, LoggerOptions | boolean> = {
  dev: {
    ...shared,
    transport: {
      options: {
        colorize: true,
        levelFirst: true,
        singleLine: true,
      },
      target: 'pino-pretty',
    },
  },
  prod: shared,
  stage: shared,
  test: false,
}

export const getLoggerConfig = () =>
  loggerOptions[env<ServiceEnv>('SERVICE_ENV', 'dev')]

export const statusToLogLevel = (statusCode: number): Level => {
  if (statusCode >= 500) {
    return 'error'
  }

  if (statusCode >= 400) {
    return 'warn'
  }

  return 'info'
}
