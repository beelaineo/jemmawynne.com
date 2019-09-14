import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
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
