import * as React from 'react'
import { Product } from 'use-shopify'
import { NormalizeDiv, Accordion } from '../styled'
import { P } from 'Components/Text'
const { useState } = React

interface ProductDetailFooterProps {
	product: Product
}

export const ProductDetailFooter = ({ product }: ProductDetailFooterProps) => {
	const [toggleOpen, toggleAccordionOpen] = useState('closed')

	const openAccordion = () => toggleAccordionOpen(toggleOpen === 'open' ? 'closed' : 'open')

	return (
		<NormalizeDiv>
			<Accordion border="true" className={toggleOpen}>
				<button onClick={openAccordion}>+ Details</button>
				<P>{product.description}</P>
			</Accordion>
		</NormalizeDiv>
	)
}
