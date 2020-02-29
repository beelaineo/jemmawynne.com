import { DefaultTheme } from '@xstyled/styled-components'

export const getTextAlignment = (position: string | void | null): string => {
  if (!position) return 'center'
  const split = position.split('-')
  if (split.length > 1) return split[1]
  return 'center'
}

export const getFlexAlignment = (position: string | void | null): string => {
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
      return 'center'
  }
}

export const getFlexJustification = (
  position: string | void | null,
): string => {
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
      return 'center'
  }
}

export const getColor = (color: string | void | null): string => {
  switch (color) {
    case 'black':
      return 'grays.9'
    case 'darkGray':
      return 'grays.8'
    case 'lightGray':
      return 'grays.3'
    case 'white':
    default:
      return 'grays.0'
  }
}
