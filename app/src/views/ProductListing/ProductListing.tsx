import * as React from 'react'
import { useQuery } from 'urql'
import { Link } from 'react-router-dom'
import { Product } from 'use-shopify'
import { COLLECTION_QUERY, CollectionResult } from './query'
import { unwindEdges } from '../../utils/graphql'
import { FlexContainer, FlexThree } from 'Components/Layout'
import { BackgroundImage, OverLay } from '../ProductDetail/styled'

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
		<React.Fragment>
			<p>{collection.title}</p>
			<FlexContainer wrap="wrap">
				{products.map((product) => {
					let imageSrc = product.images.edges[0].node.originalSrc
					return (
						<FlexThree margin="none" padding="large">
							<BackgroundImage imageSrc={imageSrc}>
								<OverLay align="center">
									<Link key={product.id} to={`/products/${product.handle}`}>
										{product.title}
									</Link>
								</OverLay>
							</BackgroundImage>
						</FlexThree>
					)
				})}
				;
			</FlexContainer>
		</React.Fragment>
	)
}
