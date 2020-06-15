import * as React from 'react'
import Sentry from '../../services/sentry'

const { useState, useEffect } = React

interface ErrorContextValue {
  errorMessage: string | undefined
  handleError: (error: Error) => void
  clearError: () => void
}

const ErrorContext = React.createContext<ErrorContextValue | undefined>(
  undefined,
)

export const ErrorConsumer = ErrorContext.Consumer

export const useError = () => {
  const ctx = React.useContext(ErrorContext)
  if (!ctx)
    throw new Error('useErrorContext must be used within a ErrorProvider')
  return ctx
}

interface ErrorProps {
  children: React.ReactNode
  error?: Error
}

const getErrorMessage = (error: Error): string => {
  if ('networkError' in error || 'graphQLErrors' in error) {
    return 'Sorry, there was a problem connecting to our servers. Our engineers have been notified.'
  }
  return 'Sorry, there was an error loading this page. Our engineers have been notified.'
}

export const ErrorProvider = ({ children, error }: ErrorProps) => {
  const initialMessage = error ? getErrorMessage(error) : undefined
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    initialMessage,
  )

  const handleError = (error: Error, scope?: any) => {
    const message = getErrorMessage(error)
    console.error(error)
    if (scope) {
      Sentry.configureScope(scope)
    }
    Sentry.captureException(error)
    setErrorMessage(message)
  }
  const clearError = () => setErrorMessage(undefined)

  useEffect(() => {
    if (error) {
      handleError(error)
    } else {
      setErrorMessage(undefined)
    }
  }, [error])

  const value = {
    errorMessage,
    handleError,
    clearError,
  }

  return <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
}
