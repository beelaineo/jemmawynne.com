import * as React from 'react'
import App, { AppProps as NextAppProps } from 'next/app'
import Head from 'next/head'
import { SearchResults } from '../src/components/Search'
import { Navigation } from '../src/components/Navigation'
import { Footer } from '../src/components/Footer'
import { Announcement } from '../src/components/Announcement'
import { Providers } from '../src/providers/AllProviders'
import { ErrorProvider, ErrorWrapper } from '../src/providers/ErrorProvider'
import Sentry from '../src/services/sentry'

interface Props {
  Component: React.ComponentType
  pageProps: any
  router: any
}

type AppProps = NextAppProps<Props>

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
    const { Component, pageProps: allPageProps, router } = this.props
    const { error, shopData, ...pageProps } = allPageProps
    return (
      <>
        <Head>
          <link rel="stylesheet" href="/static/fonts/fonts.css" />
        </Head>
        <ErrorProvider error={error}>
          <Providers shopData={shopData}>
            <main id="main">
              <Announcement />
              <Navigation router={router} />
              <SearchResults />
              <ErrorWrapper>
                <Component {...pageProps} />
              </ErrorWrapper>
              <Footer />
            </main>
            <div id="modal" />
          </Providers>
        </ErrorProvider>
      </>
    )
  }
}

export default MyApp
