const toArray = <T>(i: T | T[]): T[] => (Array.isArray(i) ? i : [i])

type WithType<T> = T & {
  _type: string | null | undefined
}

type WithTypename<T> = T & {
  __typename?: string
}

const addTypename = <T>(item: WithType<T>) => ({
  __typename: item._type
    ? item._type.replace(/^./, (c) => c.toUpperCase())
    : undefined,
  ...item,
})

export const withTypenames = <T>(items: WithType<T>[]): WithTypename<T>[] => {
  const arr = toArray(items)
  const b = arr.map(addTypename)
  return b
}
