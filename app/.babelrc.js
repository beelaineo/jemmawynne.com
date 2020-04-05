module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'babel-plugin-styled-components',
      { ssr: true, displayName: true, preprocess: false },
    ],
    'inline-react-svg',
  ],
  env: {
    production: {
      plugins: [
        [
          'babel-plugin-styled-components',
          { ssr: true, displayName: false, preprocess: false },
        ],
      ],
    },
  },
}
