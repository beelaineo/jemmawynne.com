import * as React from 'react'
import { Link } from 'react-router-dom'
import { Product, Collection } from '../../../types/generated'
import { unwindEdges } from '../../../utils/graphql'
import { ProductRelatedWrapper, ProductRelatedInner } from '../styled'
import { Carousel } from 'Components/Carousel'
import { Header2, Header4 } from 'Components/Text'
import { Image } from 'Components/Image'
import { Figure } from 'Components/Figure'
import { ProductThumbnail } from '../../ProductListing/ProductThumbnail'

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
				<Carousel>
					{products.slice(0, 10).map((product) => {
						let { title } = product
						const [images] = unwindEdges(product.images)
						const productLink = `/products/${product.handle}`

						return <ProductThumbnail product={product} />
					})}
				</Carousel>
			</ProductRelatedInner>
		</ProductRelatedWrapper>
	)
}
