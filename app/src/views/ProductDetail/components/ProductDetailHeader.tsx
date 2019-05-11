import * as React from 'react'
import { Product, Variant } from 'use-shopify'
import { unwindEdges } from '../../../utils/graphql'
import { Gallery } from '../../../components/Gallery'
import { FlexHalf, NormalizeDiv, LightHeadingH2, LightHeadingH3 } from '../styled'

interface ProductDetailHeaderProps {
	product: Product
	currentVariant: Variant
}

export const ProductDetailHeader = ({ product, currentVariant }: ProductDetailHeaderProps) => {
	return (
		<NormalizeDiv>
			<LightHeadingH2>{product.title}</LightHeadingH2>
			<LightHeadingH3>${currentVariant.price}</LightHeadingH3>
		</NormalizeDiv>
	)
}
