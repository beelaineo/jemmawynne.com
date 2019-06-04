import * as React from 'react'
import { useCheckout } from 'use-shopify'
import { NormalizeDiv } from '../ProductDetail/styled'
import { FlexContainer, FlexFour, FlexHalf, FlexThree } from '../../components/Layout/Flex'

/**
 * Main Checkout view
 */

export const Checkout = () => {
	const { checkout } = useCheckout()
	if (!checkout || checkout.lineItems.length < 1) {
		return <NormalizeDiv>Your cart is empty</NormalizeDiv>
	}

	return (
		<NormalizeDiv>
			{/* <p>You have {checkout.lineItems.edges.length} items in your cart</p> */}
			<p>Your cart</p>

			{checkout.lineItems.edges.map((element) => {
				let { title, variant } = element.node
				return (
					<FlexContainer>
						<FlexThree>
							<img src={variant.image.originalSrc} />
						</FlexThree>
						<FlexHalf>
							<h2>{title}</h2>
							<h3>{variant.price}</h3>
						</FlexHalf>
					</FlexContainer>
				)
			})}
			<button>Add To Cart</button>
		</NormalizeDiv>
	)
}
