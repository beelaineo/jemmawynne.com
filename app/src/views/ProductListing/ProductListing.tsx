import * as React from 'react'
import { useQuery } from 'urql'
import { Link } from 'react-router-dom'
import { Product } from 'use-shopify'
import { COLLECTION_QUERY, CollectionResult } from './query'
import { unwindEdges } from '../../utils/graphql'

interface ProductListingProps {
	match: {
		params: {
			handle: string
		}
	}
}

export const ProductListing = ({ match }: ProductListingProps) => {
	const { handle } = match.params
	const variables = { handle }
	const [response] = useQuery<CollectionResult>({ query: COLLECTION_QUERY, variables })
	console.log(response)
	if (response.fetching || !response.data) return <p>Loading..</p>
	const collection = response.data.collectionByHandle
	const [products] = unwindEdges<Product>(collection.products)
	return (
		<div>
			<p>{collection.title}</p>
			{products.map((product) => (
				<Link key={product.id} to={`/products/${product.handle}`}>
					{product.title}
				</Link>
			))}
		</div>
	)
}
