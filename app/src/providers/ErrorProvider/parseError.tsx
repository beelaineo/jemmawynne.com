import * as React from 'react'
import { SetErrorArgs } from './reducer'

const isSanityConnectionError = (message: string): boolean =>
  message.includes('Network error') && message.includes('caazz4uw.apicdn')

export const parseError = (error: Error): SetErrorArgs => {
  if (isSanityConnectionError(error.message)) {
    return {
      error,
      errorMessage: (
        <span>
          Your browser is having trouble reaching our servers. If you are using
          an ad blocker, make sure that{' '}
          <pre>https://caazz4uw.apicdn.sanity.io</pre> is not blocked.
        </span>
      ),
      isFatal: false,
    }
  }
  const errorMessage = error.message
  const isFatal = true
  return {
    error,
    errorMessage,
    isFatal,
  }
}
