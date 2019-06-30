import * as React from 'react'
import { Product } from 'use-shopify'
import { NormalizeDiv } from '../styled'
import { P } from 'Components/Text'
import { Accordion } from '../../../Components/Accordion'
const { useState } = React

interface ProductDetailFooterProps {
	product: Product
}

export const ProductDetailFooter = ({ product }: ProductDetailFooterProps) => {
	return (
		<NormalizeDiv>
			<Accordion label="Details">
				<P>{product.description}</P>
			</Accordion>
		</NormalizeDiv>
	)
}
