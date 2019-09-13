import * as React from 'react'
import {} from 'use-shopify'
import { Product, ProductVariant } from '../../../types/generated'
import { NormalizeDiv } from '../styled'
import { formatMoney } from '../../../utils'
import { Header2, Header4 } from 'Components/Text'

interface ProductDetailHeaderProps {
	product: Product
	currentVariant: ProductVariant
}

export const ProductDetailHeader = ({
	product,
	currentVariant,
}: ProductDetailHeaderProps) => {
	return (
		<NormalizeDiv>
			<Header2 weight="xlight" color="grays.0">
				{product.title}
			</Header2>
			<Header4 weight="strong" color="grays.0">
				{formatMoney(currentVariant.price)}
			</Header4>
		</NormalizeDiv>
	)
}
