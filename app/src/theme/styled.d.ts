import 'styled-components'
import '@xstyled/system'
import {
  ITheme,
  DefaultTheme as XStyledDefaultTheme,
} from '@xstyled/styled-components'

interface AppTheme extends ITheme, XStyledDefaultTheme {
  navHeight: string
  tabletNavHeight: string
  announcementHeight: string
  space: number[]
  sizes: {
    xSmall: number
    small: number
    medium: number
    wide: number
    xWide: number
    xxWide: number
  }
  fontSizes: number[]
  mobileFontSizes: number[]
  fontWeights: number[]

  radii: {
    round: string
  }

  fonts: {
    serif: string
    sans: string
    display: string
    body: string
  }

  zIndices: {
    main: number
    nav: number
    cart: number
    dialog: number
    alert: number
  }

  colors: {
    grays: string[]
    body: string[]
    bodyMain: string
    background: string
    highlight: string
    error: string[]
  }

  mediaQueries: {
    mobile: string
    aboveMobile: string
    tablet: string
    aboveTablet: string
    desktop: string
    aboveDesktop: string
  }

  transition: {
    fast: string
    slow: string
  }

  breakpoints?: {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
  }
}

// and extend them!
declare module '@xstyled/system' {
  export interface Theme extends AppTheme {}
}
declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
