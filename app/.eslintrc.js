const path = require('path')
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
