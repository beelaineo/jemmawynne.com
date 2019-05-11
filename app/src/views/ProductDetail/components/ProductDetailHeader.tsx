import * as React from 'react'
import { Product, Variant } from 'use-shopify'
import { NormalizeDiv } from '../styled'
import { Header2, Header4 } from 'Components/Text'

interface ProductDetailHeaderProps {
	product: Product
	currentVariant: Variant
}

export const ProductDetailHeader = ({ product, currentVariant }: ProductDetailHeaderProps) => {
	return (
		<NormalizeDiv>
			<Header2 weight="xlight" color="semiDark">
				{product.title}
			</Header2>
			<Header4 weight="xlight" color="semiDark">
				${currentVariant.price}
			</Header4>
		</NormalizeDiv>
	)
}
