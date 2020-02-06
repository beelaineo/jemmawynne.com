import * as React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { SearchResults, Navigation } from '../views'
import { Providers } from '../providers/AllProviders'
import { withApollo } from '../graphql'

interface AppProps {
  Component: React.ComponentType
  pageProps: any
  router: any
}

const App = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <Providers>
      <Navigation />
      <SearchResults />
      <Component {...pageProps} />
    </Providers>
  )
}

export default withApollo(App)
