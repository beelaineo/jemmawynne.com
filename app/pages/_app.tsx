import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'
import App from 'next/app'
import Head from 'next/head'
import { ApolloClient } from 'apollo-client'
import { SearchResults } from '../src/components/Search'
import { Navigation } from '../src/components/Navigation'
import { Footer } from '../src/components/Footer'
import { Announcement } from '../src/components/Announcement'
import { Providers } from '../src/providers/AllProviders'
import { withApollo } from '../src/graphql'
import Sentry from '../src/services/sentry'

interface AppProps {
  Component: React.ComponentType
  pageProps: any
  router: any
  apollo: ApolloClient<any>
}

export interface PageContext {
  query: any
  apolloClient: ApolloClient<any>
}

const Main = styled.main``

class MyApp extends App {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key])
      })

      Sentry.captureException(error)
    })

    super.componentDidCatch(error, errorInfo)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <link rel="stylesheet" href="/static/fonts/fonts.css" />
        </Head>
        <Providers>
          <Announcement />
          <Navigation />
          <Main>
            <SearchResults />
            <Component {...pageProps} />
            <Footer />
          </Main>
        </Providers>
      </>
    )
  }
}

export default withApollo()(MyApp)
