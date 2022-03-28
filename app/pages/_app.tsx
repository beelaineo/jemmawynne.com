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

interface Props {
  Component: React.ComponentType
  pageProps: any
  router: any
}

type AppProps = NextAppProps<Props>

const tagInfo =
  process.env.NODE_ENV === 'production' || true
    ? {
        script: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MB53V3X');`,
        iframeSrc: 'https://www.googletagmanager.com/ns.html?id=GTM-MB53V3X',
      }
    : null

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
          {tagInfo ? (
            <Script
              /* Tag Manager */
              id="tagManager"
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: tagInfo.script,
              }}
            />
          ) : null}
        </Head>
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
        {tagInfo ? (
          <noscript>
            <iframe
              src={tagInfo.iframeSrc}
              width="0"
              height="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        ) : null}
      </>
    )
  }
}

export default MyApp
