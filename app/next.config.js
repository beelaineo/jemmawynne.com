// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const dotEnv = require('dotenv')
// const bundleAnalyzer = require('@next/bundle-analyzer')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withSourceMaps = require('@zeit/next-source-maps')

dotEnv.config()

// const withBundleAnalyzer = bundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// })

const SANITY_AUTH_TOKEN = process.env.SANITY_AUTH_TOKEN
const SANITY_PROJECT_ID = process.env.SANITY_PROJECT_ID
const SANITY_DATASET = process.env.SANITY_DATASET
const SANITY_READ_TOKEN = process.env.SANITY_READ_TOKEN
const SANITY_GRAPHQL_URL = process.env.SANITY_GRAPHQL_URL
const SENTRY_DSN = process.env.SENTRY_DSN

const KLAVIYO_LIST_ID = process.env.KLAVIYO_LIST_ID
const KLAVIYO_API_KEY = process.env.KLAVIYO_API_KEY

module.exports = withSourceMaps({
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  // webpack5: false,
  publicRuntimeConfig: {
    SANITY_PROJECT_ID,
    SANITY_DATASET,
    SANITY_AUTH_TOKEN,
    SANITY_READ_TOKEN,
    SANITY_GRAPHQL_URL,
    SENTRY_DSN,
    KLAVIYO_LIST_ID,
    KLAVIYO_API_KEY,
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  webpack: (config, { isServer, buildId }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.SENTRY_RELEASE': JSON.stringify(buildId),
      }),
    )

    if (!isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser'
    }

    return config
  },
})
