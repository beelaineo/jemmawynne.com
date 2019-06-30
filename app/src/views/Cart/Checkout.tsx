import * as React from 'react'
import { useCheckout } from 'use-shopify'
import {
	NormalizeDiv,
	Button,
	QuantitySelectorCart,
} from '../ProductDetail/styled'
import { QuantityInput } from 'Components/QuantityInput'
import {
	FlexContainer,
	FlexHalf,
	FlexThree,
	FlexSix,
} from '../../components/Layout/Flex'
import { Header6, Header5, Header3 } from 'Components/Text'
import { CartBottom } from 'Components/Cart'

/**
 * Main Checkout view
 */

export const Checkout = () => {
	const { checkout } = useCheckout()
	if (!checkout || checkout.lineItems.length < 1) {
		return <NormalizeDiv>Your cart is empty</NormalizeDiv>
	}
	console.log(checkout)
	return (
		<NormalizeDiv>
			<Header3 color="dark">Your cart</Header3>
			{checkout.lineItems.edges.map((element) => {
				let { title, variant } = element.node
				return (
					<FlexContainer key={variant.id} margin="small">
						<FlexThree>
							<img src={variant.image.originalSrc} />
						</FlexThree>
						<FlexSix>
							<Header5 weight="light" color="dark">
								{title}
							</Header5>
							<FlexContainer marginVertical="small">
								<FlexHalf>
									<QuantitySelectorCart>
										<button type="button">
											<span>&#8722;</span>
										</button>
										<QuantityInput quantity={1} />
										<button type="button">
											<span>&#43;</span>
										</button>
									</QuantitySelectorCart>
								</FlexHalf>
								<FlexHalf>
									<Header5 weight="strong" color="dark">
										${variant.price}
									</Header5>
								</FlexHalf>
							</FlexContainer>
						</FlexSix>
					</FlexContainer>
				)
			})}

			<CartBottom>
				<FlexContainer>
					<FlexHalf>
						<Header5 transform="uppercase" weight="light" color="lightGrayBody">
							Subtotal:
						</Header5>
					</FlexHalf>
					<FlexHalf>
						<Header5
							align="right"
							transform="uppercase"
							weight="light"
							color="dark"
						>
							${checkout.paymentDue}
						</Header5>
					</FlexHalf>
				</FlexContainer>
				<Header6 align="center">
					Shipping and discount codes are added at checkout.
				</Header6>
				<Button
					as="a"
					href={checkout.webUrl}
					background="dark"
					color="light"
					weight="semi"
				>
					Checkout
				</Button>
			</CartBottom>
		</NormalizeDiv>
	)
}
