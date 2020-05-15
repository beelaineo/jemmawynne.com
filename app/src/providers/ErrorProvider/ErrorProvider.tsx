import * as React from 'react'
import { ApolloError } from 'apollo-client'

const { useState, useEffect } = React

interface ErrorContextValue {
  errorMessage: string | undefined
  handleError: (error: ApolloError | Error) => void
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
  error?: ApolloError | Error
}

const getErrorMessage = (error: ApolloError | Error): string => {
  if ('networkError' in error || 'graphQLErrors' in error) {
    return 'Sorry, there was a problem connecting to our servers. Our engineers have been notified.'
  }
  return 'Sorry, there was an error loading this page. Our engineers have been notified.'
}

export const ErrorProvider = ({ children, error }: ErrorProps) => {
  const initialMessage = error ? getErrorMessage(error) : undefined
  if (error) {
    console.warn(error)
  }
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    initialMessage,
  )

  const handleError = (error: ApolloError | Error) => {
    const message = getErrorMessage(error)
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
