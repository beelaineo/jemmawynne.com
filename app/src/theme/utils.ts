import { DefaultTheme } from 'styled-components'

export const getTextAlignment = (
  position: string | void | null,
): string | undefined => {
  if (!position) return 'center'
  const split = position.split('-')
  if (split.length > 1) return split[1]
  return undefined
}

export const getFlexAlignment = (
  position: string | void | null,
): string | undefined => {
  switch (position) {
    case 'top-left':
    case 'top-center':
    case 'top-right':
      return 'flex-start'
    case 'middle-left':
    case 'middle-center':
    case 'middle-right':
      return 'center'
    case 'bottom-left':
    case 'bottom-center':
    case 'bottom-right':
      return 'flex-end'
    default:
      return undefined
  }
}

export const getFlexJustification = (
  position: string | void | null,
): string | undefined => {
  switch (position) {
    case 'top-left':
    case 'middle-left':
    case 'bottom-left':
      return 'flex-start'
    case 'top-center':
    case 'middle-center':
    case 'bottom-center':
      return 'center'
    case 'top-right':
    case 'middle-right':
    case 'bottom-right':
      return 'flex-end'
    default:
      return undefined
  }
}

export const getColor = (
  color: string | void | null,
  theme: DefaultTheme,
): string | undefined => {
  switch (color) {
    case 'black':
      return theme.color.black
    case 'darkGray':
      return theme.color.grays[8]
    case 'lightGray':
      return theme.color.grays[2]
    case 'white':
    default:
      return theme.color.white
  }
}
