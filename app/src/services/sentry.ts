import * as NodeSentryInitializer from '@sentry/node'
import * as BrowserSentryInitializer from '@sentry/browser'
import type { Scope } from '@sentry/browser'
import path from 'path'
import { RewriteFrames } from '@sentry/integrations'
import Debug from 'debug'
import { Severity } from '@sentry/node'
import { config } from '../config'

/** Some Sentry setup for sourcemaps */
// This allows TypeScript to detect our global value
declare global {
  /* eslint-disable-next-line */
  namespace NodeJS {
    interface Global {
      /* eslint-disable-next-line */
      __rootdir__: string
    }
  }
}

const rootdir = path.resolve(__dirname || process.cwd(), '..', '..')

global.__rootdir__ = rootdir

const debug = Debug('dev:sentry')

const ENV = process.env.NODE_ENV as 'production' | 'development' | 'staging'
const FORCE = Boolean(process.env.FORCE_SENTRY)

const { SENTRY_DSN } = config

const SentryInitializer =
  typeof window === 'undefined'
    ? NodeSentryInitializer
    : BrowserSentryInitializer

export let Sentry: typeof SentryInitializer

if (ENV === 'production' || ENV === 'staging' || FORCE) {
  if (!SENTRY_DSN) throw new Error('No Sentry DSN supplied')
  Sentry = SentryInitializer
  Sentry.init({
    dsn: SENTRY_DSN,
    environment: ENV,
    integrations: [
      new RewriteFrames({
        root: global.__rootdir__,
      }),
    ],
  })
} else {
  debug('Mocking local sentry')
  const noop = () => undefined
  Sentry = {
    // @ts-ignore
    setUserContext: noop,
    // @ts-ignore
    requestHandler: () => (req, res, next) => next(),
    parsers: {
      parseRequest: noop,
    },
    setContext: (name: string, ctx: any) => {
      debug('Set context:')
      debug({ [name]: ctx })
    },
    configureScope: (callback: (scope: Scope) => void) => undefined,
    captureException: (e: Error) => {
      debug('Captured exception:')
      debug(e)
      const randomId = Math.random().toString().replace('0.', '')
      return `mock-ref-${randomId}`
    },
    captureMessage: (m: string) => {
      debug('Captured message:')
      debug(m)
      return m
    },
  }
}
