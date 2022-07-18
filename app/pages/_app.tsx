import * as React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { SearchPane } from '../src/components/Search'
import { Navigation } from '../src/components/Navigation'
import { Footer } from '../src/components/Footer'
import { Announcement } from '../src/components/Announcement'
import { Providers } from '../src/providers/AllProviders'
import { ErrorProvider, ErrorDisplay } from '../src/providers/ErrorProvider'
// import Sentry from '../src/services/sentry'
import { tagInfo } from '../src/services/tagManager'

interface AppProps {
  Component: React.ComponentType
  pageProps: any
  router: any
}

const App = (props: AppProps) => {
  const { Component, pageProps: allPageProps, router } = props
  const { error, shopData, ...pageProps } = allPageProps
  if (!shopData) return null

  return (
    <ErrorProvider error={error}>
      <Providers shopData={shopData}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=2"
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
  )
}

export default App
