import * as React from 'react'

interface ErrorPageProps {
  /* */
  children: React.ReactNode
}

export const ErrorWrapper = ({ children }: ErrorPageProps) => {
  return <>{children}</>
}
