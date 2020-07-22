const toArray = <T>(i: T | T[]): T[] => (Array.isArray(i) ? i : [i])

type WithType<T> = T & {
  _type: string | null | undefined
}

type WithTypename<T> = T & {
  __typename?: string
}

const addTypename = <T>(item: WithType<T>) => {
  if (typeof item !== 'object') return item
  return Object.entries(item).reduce((acc, [key, value]) => {
    if (!value) {
      return { ...acc, [key]: value }
    }
    if (key === '_type') {
      return {
        ...acc,
        [key]: value,
        __typename: value.replace(/^./, (c) => c.toUpperCase()),
      }
    }
    if (Array.isArray(value)) {
      return {
        ...acc,
        [key]: value.map(addTypename),
      }
    }
    if (typeof value === 'object') {
      return {
        ...acc,
        [key]: addTypename(value),
      }
    }
    return {
      ...acc,
      [key]: value,
    }
  }, {})
}

export const withTypenames = <T>(items: WithType<T>[]): WithTypename<T>[] =>
  toArray(items).map(addTypename)
