import * as React from 'react'

interface ErrorContextValue {
  /* */
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
}

export const ErrorProvider = ({ children }: ErrorProps) => {
  const value = {
    /* */
  }

  return <ErrorContext.Provider value={value}>{children}</ErrorContext.Provider>
}
