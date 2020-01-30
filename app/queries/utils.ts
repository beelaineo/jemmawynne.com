import { SANITY_GRAPHQL_URL } from '../config'

interface GQLQuery {
  loc: {
    source: {
      body: string
    }
  }
}

export const graphqlQuery = async <ResponseType = any>(
  query: String | GQLQuery,
): Promise<ResponseType> => {
  const queryString =
    // @ts-ignore
    typeof query === 'string' ? query : query?.loc?.source?.body
  console.log(queryString)
  const data: ResponseType = await fetch(SANITY_GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(queryString),
  }).then((res) => res.json())
  return data
}
