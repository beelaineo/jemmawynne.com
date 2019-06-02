import * as React from 'react'
import { useQuery } from 'urql'
import { Link } from 'react-router-dom'
import { Product } from 'use-shopify'
import { COLLECTION_QUERY, CollectionResult } from './query'
import { unwindEdges } from '../../utils/graphql'
import { FlexContainer, FlexThree } from 'Components/Layout'
import { Header2, Header6 } from 'Components/Text'
import { BackgroundImage, OverLay } from './styled'

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
					console.log(product)

					let imageSrc = product.images.edges[0].node.originalSrc
					let { minVariantPrice, maxVariantPrice } = product.priceRange
					return (
						<FlexThree margin="1px" padding="large" mobileWidth="2">
							<BackgroundImage imageSrc={imageSrc}>
								<Link key={product.id} to={`/products/${product.handle}`}>
									<OverLay>
										<div>
											<Header2>{product.title}</Header2>
											<hr />
											{minVariantPrice.amount !== maxVariantPrice.amount ? (
												<Header6>
													${minVariantPrice.amount} - ${maxVariantPrice.amount}
												</Header6>
											) : (
												<Header6>${maxVariantPrice.amount}</Header6>
											)}
										</div>
									</OverLay>
								</Link>
							</BackgroundImage>
						</FlexThree>
					)
				})}
				;
			</FlexContainer>
		</React.Fragment>
	)
}
