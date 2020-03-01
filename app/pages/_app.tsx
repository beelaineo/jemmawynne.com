import * as React from 'react'
import { ApolloClient } from 'apollo-client'
import { SearchResults, Navigation } from '../src/views'
import { Footer } from '../src/components/Footer'
import { Providers } from '../src/providers/AllProviders'
import { withApollo } from '../src/graphql'

interface AppProps {
  Component: React.ComponentType
  pageProps: any
  router: any
  apollo: ApolloClient<any>
}

const App = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <Providers>
      <Navigation />
      <SearchResults />
      <Component {...pageProps} />
      <Footer />
    </Providers>
  )
}

export default withApollo()(App)
