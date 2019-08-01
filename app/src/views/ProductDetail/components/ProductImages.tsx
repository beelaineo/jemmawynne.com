import * as React from 'react'
import { Variant } from 'use-shopify'
import { Product } from '../../../types/generated'
import { unwindEdges } from '../../../utils/graphql'
import { Gallery } from '../../../components/Gallery'
import { ProductGalleryWrapper } from '../styled'

interface ProductImagesProps {
	product: Product
	currentVariant: Variant
}

export const ProductImages = ({
	product,
	currentVariant,
}: ProductImagesProps) => {
	if (!product.images || !product.images.edges || !product.images.edges.length)
		return null
	const [images] = unwindEdges(product.images)
	return (
		<ProductGalleryWrapper>
			<Gallery images={images} currentImageId={currentVariant.image.id} />
		</ProductGalleryWrapper>
	)
}
