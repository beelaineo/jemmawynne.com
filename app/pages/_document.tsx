import * as React from 'react'
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
// import Script from 'next/script'
import { ServerStyleSheet } from '@xstyled/styled-components'
import { Sentry } from '../src/services/sentry'
import { tagInfo } from '../src/services/tagManager'

process.on('unhandledRejection', (err) => {
  Sentry.captureException(err)
})

process.on('uncaughtException', (err) => {
  Sentry.captureException(err)
})

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="/static/fonts/fonts.css" />
          <meta
            name="google-site-verification"
            content="FMybvh787T8f4wVXecF7CnvRImZuCMWgeKKO-dOsuQE"
          />
        </Head>
        <body>
          {tagInfo ? (
            <noscript
              dangerouslySetInnerHTML={{
                __html: `
                <iframe
                  src={tagInfo.iframeSrc}
                  width="0"
                  height="0"
                  style={{ display: 'none', visibility: 'hidden' }}
                />
                `,
              }}
            />
          ) : null}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
