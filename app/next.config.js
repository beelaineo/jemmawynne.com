const webpack = require('webpack')
const dotEnv = require('dotenv')
const bundleAnalyzer = require('@next/bundle-analyzer')
const withSourceMaps = require('@zeit/next-source-maps')

dotEnv.config()

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withSourceMaps(
  withBundleAnalyzer({
    env: {
      SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
      SANITY_DATASET: process.env.SANITY_DATASET,
      SANITY_READ_TOKEN: process.env.SANITY_READ_TOKEN,
      SENTRY_DSN: process.env.SENTRY_DSN,
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
  }),
)
