import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useQuery } from 'graphql-hooks'
import { productQuery, QueryResult } from './query'

interface MatchParams {
	handle: string
}

export const ProductDetail = ({ match }: RouteComponentProps<MatchParams>) => {
	const { handle } = match.params
	const result = useQuery<QueryResult>(productQuery, { variables: { handle } })
	// console.log(loading, error, data)
	console.log(result.data.shop)
	// if (loading) return <p>Loading...</p>
	return (
		<div>
			<p>Product Detail</p>
			<pre>{JSON.stringify({}, null, 2)}</pre>
		</div>
	)
}
