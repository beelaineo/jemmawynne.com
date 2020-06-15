import useSWR, { responseInterface as ResponseInterface } from 'swr'
import { DocumentNode } from 'graphql'
import { print } from 'graphql/language/printer'
import { Variables } from 'graphql-request/dist/src/types'
import { request as gqlRequest } from 'graphql-request'
import { SANITY_GRAPHQL_URL } from '../config'

interface RequestOptions {
  skip?: boolean
}

interface RequestArgs<V> {
  query: DocumentNode | string
  variables?: V
  options?: RequestOptions
}

export const request = async <R, V extends Variables = Variables>(
  query: DocumentNode | string,
  variables?: V,
): Promise<R> =>
  gqlRequest<R>(
    SANITY_GRAPHQL_URL,
    typeof query === 'string' ? query : print(query),
    variables,
  )

export const useRequest = <R, V extends Variables = Variables>(
  query: DocumentNode,
  variables?: V,
) => {
  return useSWR<R | null>(print(query), (q) => request<R>(q, variables))
}

type LazyRequestTuple<R, V extends Variables = Variables> = [
  (v: V) => Promise<void>,
  ResponseInterface<R | null, Error>,
]

export const useLazyRequest = <R, V extends Variables = Variables>(
  query: DocumentNode,
): LazyRequestTuple<R, V> => {
  const response = useSWR<R | null>(
    print(query),
    () => {
      return null
    },
    { revalidateOnFocus: false },
  )

  const executeQuery = async (variables?: V) => {
    const result = await request<R>(query, variables)
    response.mutate(result, false)
  }

  return [executeQuery, response]
}
