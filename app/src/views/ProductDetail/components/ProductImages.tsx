import * as React from 'react'
import { Product, Variant } from 'use-shopify'
import { unwindEdges } from '../../../utils/graphql'
import { Gallery } from '../../../components/Gallery'
import { FlexHalf, ProductGalleryWrapper } from '../styled'

interface ProductImagesProps {
	product: Product
	currentVariant: Variant
}

export const ProductImages = ({ product, currentVariant }: ProductImagesProps) => {
	if (!product.images || !product.images.edges || !product.images.edges.length) return null
	const [images] = unwindEdges(product.images)
	return (
		<ProductGalleryWrapper className="product___gallery__wrapper">
			<Gallery images={images} currentImageId={currentVariant.image.id} />
		</ProductGalleryWrapper>
	)
}
