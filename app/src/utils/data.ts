import { Maybe } from '../types'

export const propByPath = (path: string | string[], obj: object) => {
  const propPath = typeof path === 'string' ? path.split('.') : path
  const [firstKey, ...rest] = propPath
  return rest.length ? propByPath(rest, obj[firstKey]) : obj[firstKey]
}

export function isDefined<T>(x: Maybe<T>): x is T {
  return x !== undefined && x !== null
}

export function definitely<T>(items?: Maybe<T>[] | null): T[] {
  if (!items) return []
  return items.reduce<T[]>((acc, item) => (item ? [...acc, item] : acc), [])
}
