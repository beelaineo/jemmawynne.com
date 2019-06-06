import * as React from 'react'
import { Link } from 'react-router-dom'
import { Product, Collection } from 'use-shopify'
import { unwindEdges } from '../../../utils/graphql'
import { ProductRelatedWrapper, ProductRelatedInner } from '../styled'
import { Header2, Header4 } from 'Components/Text'
import { Image } from 'Components/Image'

interface ProductRelatedProps {
	product: Product
}

export const ProductRelated = ({ product }: ProductRelatedProps) => {
	const [collections] = unwindEdges<Collection>(product.collections)
	if (!collections || !collections.length) return null
	const [products] = unwindEdges<Product>(collections[0].products)
	if (!products || !products.length) return null
	return (
		<ProductRelatedWrapper>
			<Header2 transform="uppercase" color="lightGrayBody" align="center">
				Shop the {collections[0].title} Collection
			</Header2>
			<ProductRelatedInner>
				{products.slice(0, 5).map((product) => {
					let { title } = product
					const [images] = unwindEdges(product.images)
					return (
						<Link key={product.id} to={`/products/${product.handle}`}>
							{images[0] && <Image image={images[0]} />}
							<Header4 align="center" weight="xlight" color="dark">
								{title}
							</Header4>
						</Link>
					)
				})}
			</ProductRelatedInner>
		</ProductRelatedWrapper>
	)
}
