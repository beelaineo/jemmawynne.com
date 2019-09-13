// @flow
import { DefaultTheme } from 'styled-components'
import * as layout from './layout'
import * as font from './font'
import * as color from './color'
import * as mediaQueries from './mediaQueries'
import { transition } from './misc'

export const theme: DefaultTheme = {
  layout,
  font,
  color,
  mediaQueries,
  transition,
}

export * from './global'
