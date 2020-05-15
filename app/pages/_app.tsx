import * as React from 'react'
import App, { AppInitialProps } from 'next/app'
import { NextPageContext } from 'next'
import Head from 'next/head'
import { ApolloClient } from 'apollo-client'
import { SearchResults } from '../src/components/Search'
import { Navigation } from '../src/components/Navigation'
import { Footer } from '../src/components/Footer'
import { Announcement } from '../src/components/Announcement'
import { Providers } from '../src/providers/AllProviders'
import { withApollo } from '../src/graphql'
import { ErrorProvider, ErrorWrapper } from '../src/providers/ErrorProvider'
import Sentry from '../src/services/sentry'

interface AppProps {
  Component: React.ComponentType
  pageProps: any
  router: any
  apollo: ApolloClient<any>
}

export interface PageContext extends NextPageContext {
  apolloClient: ApolloClient<any>
}

type GetInitialProps = (
  ctx: PageContext,
) => Promise<AppInitialProps['pageProps']>

export const catchErrors = (getInitialProps: GetInitialProps) => async (
  ctx: PageContext,
) => {
  try {
    return getInitialProps(ctx)
  } catch (error) {
    return {
      error,
    }
  }
}

class MyApp extends App<AppProps> {
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
    const { error } = pageProps
    return (
      <>
        <Head>
          <link rel="stylesheet" href="/static/fonts/fonts.css" />
        </Head>
        <ErrorProvider error={error}>
          <Providers>
            <Announcement />
            <Navigation />
            <main>
              <SearchResults />
              <ErrorWrapper>
                <Component {...pageProps} />
              </ErrorWrapper>
              <Footer />
            </main>
          </Providers>
        </ErrorProvider>
      </>
    )
  }
}

export default withApollo()(MyApp)
