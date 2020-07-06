import { Hero } from '../types'

export const isValidHero = (hero?: Hero | null): boolean => {
  if (!hero) return false
  return Boolean(hero?.image)
}

export function getUrlParameter(name: string, path: string) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
  const results = regex.exec(path)
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '))
}
