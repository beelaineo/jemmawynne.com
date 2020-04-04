const webpack = require('webpack')
const withSourceMaps = require('@zeit/next-source-maps')
const dotenv = require('dotenv')

dotenv.config()

module.exports = withSourceMaps({
  env: {
    SC_DISABLE_SPEEDY: true,
    KLAVIYO_LIST_ID: process.env.KLAVIYO_LIST_ID,
    KLAVIYO_API_KEY: process.env.KLAVIYO_API_KEY,
    SENTRY_DSN: process.env.SENTRY_DSN,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    //
    // This option is rarely needed, and should be reserved for advanced
    // setups. You may be looking for `ignoreDevErrors` instead.
    // !! WARN !!
    ignoreBuildErrors: true,
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
