import { DefaultTheme } from '@xstyled/styled-components'

/* generated at: https://www.colorbox.io/#steps=7#hue_start=281#hue_end=271#hue_curve=easeInQuad#sat_start=22#sat_end=0#sat_curve=easeOutQuart#sat_rate=130#lum_start=12#lum_end=100#lum_curve=easeInCubic#minor_steps_map=0 */
const grays = [
  '#ffffff',
  '#f9fafa',
  '#F3EDE8',
  '#e7e6e8',
  '#d1d1d2',
  '#b0b0b0',
  '#818181',
  '#666666',
  '#222222',
  '#000000',
]

/* generated at: https://www.colorbox.io/#steps=7#hue_start=281#hue_end=271#hue_curve=easeInQuad#sat_start=4#sat_end=100#sat_curve=linear#sat_rate=130#lum_start=100#lum_end=100#lum_curve=linear#lock_hex=b879f5#minor_steps_map=0 */

const sans =
  '"Gotham", "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, AppleGothic, sans-serif;'

const serif =
  '"Freight", Didot, "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif;'

export const defaultTheme: DefaultTheme = {
  radii: {
    round: '9px',
  },
  /* Spacing - applies to:
   *   margin, margin-top, margin-right, margin-bottom, margin-left, padding,
   *   padding-top, padding-right, padding-bottom, padding-left, grid-gap,
   *   grid-column-gap, grid-row-gap
   */
  space: [
    0, // 0
    3, // 1
    6, // 2
    12, // 3
    18, // 4
    24, // 5
    38, // 6
    42, // 7
    48, // 8
    64, // 9
    72, // 10
    120, // 11
  ],

  /* Sizing - applies to:
   * 	width, height, min-width,	max-width, min-height, max-height
   */

  sizes: {
    xSmall: 200,
    small: 340,
    medium: 600,
    wide: 860,
    xWide: 1440,
  },

  /* Font Sizes, applies to:
   *   font-size
   */
  fontSizes: [
    99, // stupid high, just don't use fontSizes.0
    50, // h1
    25, // h2
    20, // h3
    16, // readable text: p, h4
    13, // small text: h5, captions
    11, // h6
    9, //  h7
  ],
  fontWeights: [0, 200, 400, 500, 700],
  fonts: {
    serif,
    sans,
    display: serif,
    body: serif,
  },

  /* Applies to:
   *   z-index
   */
  zIndices: {
    main: 0,
    nav: 100,
    cart: 200,
    dialog: 300,
    alert: 400,
  },

  /* Colors, applies to:
   *  color, background-color, border-color
   */
  colors: {
    /**
     * Body colors
     *
     * First colors should offset well on the primary background, i.e.
     * body.0 should be dark for a light theme
     * body.0 should be light for a dark theme
     */
    grays,
    body: grays,
    /* Shortcut for main body color */
    bodyMain: grays[8],
    background: grays[2],
    highlight: '#ffd5dd',
    /* Used for errors and warnings. */
    error: ['#e6d49e', '#f09e32', '#f04b32'],
  },

  transition: {
    fast: '150ms',
    slow: '250ms',
  },

  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },

  mediaQueries: {
    mobile: '@media screen and (max-width: 650px)',
    aboveMobile: '@media screen and (min-width: 651px)',
    tablet: '@media screen and (max-width: 900px)',
    aboveTablet: '@media screen and (max-width: 901px)',
  },
}
