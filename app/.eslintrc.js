// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseConfig = require('../.eslintrc.js')

module.exports = {
  ...baseConfig,
  settings: {
    next: {
      rootDir: path.join(__dirname),
    },
  },

  rules: {
    ...baseConfig.rules,
    '@next/next/no-img-element': 'off',
    '@next/next/no-html-link-for-pages': ['error'],
  },
  extends: [...baseConfig.extends, 'plugin:@next/next/recommended'],
}
