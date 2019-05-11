import * as React from 'react'
import { Product } from 'use-shopify'
import { NormalizeDiv } from '../styled'
import { P } from 'Components/Text'

interface ProductDetailFooterProps {
	product: Product
}

export const ProductDetailFooter = ({ product }: ProductDetailFooterProps) => {
	return (
		<NormalizeDiv>
			<P>{product.description}</P>
		</NormalizeDiv>
	)
}
