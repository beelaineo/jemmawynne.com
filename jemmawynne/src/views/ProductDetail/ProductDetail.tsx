import * as React from 'react'
import { useQuery } from 'graphql-hooks'
import { RouteComponentProps } from 'react-router-dom'
import { productQuery } from './query'

interface MatchParams {
	handle: string
}

export const ProductDetail = ({ match }: RouteComponentProps<MatchParams>) => {
	// console.log(props)
	const { handle } = match.params
	const { loading, error, data } = useQuery(productQuery, { variables: { handle } })
	console.log(loading, error, data)
	if (loading) return <p>Loading...</p>
	return (
		<div>
			<p>Product Detail</p>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	)
}
