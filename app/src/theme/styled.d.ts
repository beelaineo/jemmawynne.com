import 'styled-components'
import '@xstyled/styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    space: number[]
    sizes: {
      small: number
      medium: number
      wide: number
      xWide: number
    }
    fontSizes: number[]
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
      error: string[]
    }

    mediaQueries: {
      mobile: string
      aboveMobile: string
      tablet: string
      aboveTablet: string
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
}
