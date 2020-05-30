import { Hero } from '../types'

export const isValidHero = (hero?: Hero | null): boolean => {
  if (!hero) return false
  return Boolean(hero?.image)
}
