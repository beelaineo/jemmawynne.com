import { Maybe } from '../types'

export function isDefined<T>(x: Maybe<T>): x is T {
  return x !== undefined && x !== null
}

export const filterMaybes = <T extends any>(items: Maybe<T>[]): T[] => {
  return items.reduce<T[]>((acc, current) => {
    if (current) return [...acc, current]
    return acc
  }, [])
}
