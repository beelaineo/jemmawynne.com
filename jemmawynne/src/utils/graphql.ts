import { useQuery as gqlhUseQuery, UseClientRequestOptions, UseQueryResult } from 'graphql-hooks'

interface QueryResult<ExpectedResult> extends UseQueryResult {
	data: ExpectedResult
}

export const useQuery = <ExpectedResult>(query: string, options: UseClientRequestOptions): QueryResult<ExpectedResult> => {
	return gqlhUseQuery(query, options)
}
