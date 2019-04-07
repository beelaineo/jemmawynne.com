import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useQuery } from 'Utils/graphql'
import { productQuery, QueryResult } from './query'

interface MatchParams {
	handle: string
}

export const ProductDetail = ({ match }: RouteComponentProps<MatchParams>) => {
	// console.log(props)
	const { handle } = match.params
	console.log(productQuery)
	// console.log(gql.stringify(productQuery))
	const { loading, error, data } = useQuery<QueryResult>(productQuery, { variables: { handle } })
	// console.log(loading, error, data)
	console.log(data)
	// if (loading) return <p>Loading...</p>
	return (
		<div>
			<p>Product Detail</p>
			<pre>{JSON.stringify({}, null, 2)}</pre>
		</div>
	)
}
