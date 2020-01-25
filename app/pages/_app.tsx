import * as React from 'react'
import {
  Homepage,
  SearchResults,
  ProductListing,
  ProductDetail,
  Navigation,
} from '../views'
import { Providers } from '../providers/AllProviders'

interface AppProps {
  Component: React.ComponentType
  pageProps: any
  router: any
}

const App = (props: AppProps) => {
  console.log(props)
  const { Component, pageProps } = props

  return (
    <Providers>
      <Navigation />
      <SearchResults />
      <Component {...pageProps} />
    </Providers>
  )
}

export default App
