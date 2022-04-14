import * as React from 'react'
import App, { AppProps as NextAppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { SearchPane } from '../src/components/Search'
import { Navigation } from '../src/components/Navigation'
import { Footer } from '../src/components/Footer'
import { Announcement } from '../src/components/Announcement'
import { Providers } from '../src/providers/AllProviders'
import { ErrorProvider, ErrorDisplay } from '../src/providers/ErrorProvider'
import Sentry from '../src/services/sentry'
import { tagInfo } from '../src/services/tagManager'

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

    // @ts-ignore
    super.componentDidCatch(error, errorInfo)
  }

  render() {
    const { Component, pageProps: allPageProps, router } = this.props
    const { error, shopData, ...pageProps } = allPageProps
    return (
      <>
        <Head>
          <meta
            name="google-site-verification"
            content="FMybvh787T8f4wVXecF7CnvRImZuCMWgeKKO-dOsuQE"
          />
        </Head>
        {tagInfo ? (
          <Script
            /* Tag Manager */
            id="tagManager"
            type="text/javascript"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: tagInfo.script,
            }}
          />
        ) : null}
        <ErrorProvider error={error}>
          <Providers shopData={shopData}>
            <main id="main">
              <Announcement />
              <Navigation router={router} />
              <SearchPane />
              <ErrorDisplay />
              <Component {...pageProps} />
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
