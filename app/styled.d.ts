import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    utils: {
      getTextAlignment: (position: string | void | null) => string
      getFlexAlignment: (position: string | void | null) => string
      getFlexJustification: (position: string | void | null) => string
      getColor: (color: string | void | null, theme: DefaultTheme) => string
    }
    layout: {
      z: { [key: string]: number }
      spacing: { [key: string]: string }
      columns: { [key: string]: string }
      navHeight: string
    }
    font: {
      size: { [key: string]: string }
      weight: { [key: string]: number }
      family: { [key: string]: string }
    }
    color: {
      light: string
      grays: string[]
      white: string
      black: string
      roseGold: string
      yellowGold: string
    }
    mediaQueries: { [key: string]: string }
    transition: { [key: string]: string }
  }
}
