import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { useQuery } from 'urql'
import { Link } from 'react-router-dom'
import { Product } from 'use-shopify'
import { COLLECTION_QUERY, CollectionResult } from './query'
import { Header3, Header6 } from 'Components/Text'
import { BackgroundImage, OverLay, ProductGrid, ProductInfo } from './styled'

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
	const [response] = useQuery<CollectionResult>({
		query: COLLECTION_QUERY,
		variables,
	})
	if (response.fetching || !response.data) return <p>Loading..</p>
	const collection = response.data.collectionByHandle
	const [products] = unwindEdges<Product>(collection.products)
	return (
		<React.Fragment>
			<p>{collection.title}</p>
			<ProductGrid>
				{products.map((product) => {
					const [images] = unwindEdges(product.images)
					const imageSrc = images.length ? images[0].originalSrc : undefined
					let { minVariantPrice, maxVariantPrice } = product.priceRange
					return (
						<Link to={`/products/${product.handle}`}>
							<BackgroundImage key={product.id} imageSrc={imageSrc} />
							<ProductInfo>
								<Header3>{product.title}</Header3>
								{minVariantPrice.amount !== maxVariantPrice.amount ? (
									<Header6>
										${minVariantPrice.amount} - ${maxVariantPrice.amount}
									</Header6>
								) : (
									<Header6>${maxVariantPrice.amount}</Header6>
								)}
							</ProductInfo>
						</Link>
					)
				})}
			</ProductGrid>
		</React.Fragment>
	)
}
