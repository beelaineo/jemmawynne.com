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
import { IoMdClose } from 'react-icons/io'
import { increment } from '../../../../migrate/src/put/limit'

const { useState } = React

/**
 * Main Checkout view
 */

export const Checkout = () => {
	const { checkout, updateQuantity } = useCheckout()
	if (!checkout || checkout.lineItems.length < 1) {
		return <NormalizeDiv top="0">Your cart is empty</NormalizeDiv>
	}

	const [hovered, setHover] = useState('invisible')

	const updateHover = () => {
		setHover('visible')
	}
	const removeHover = () => {
		setHover('invisible')
	}

	const increment = (variant, quantity) => {
		console.log('add')
		updateQuantity(variant, quantity)
	}

	return (
		<NormalizeDiv top="0">
			<Header3 color="dark" align="center">
				Your cart
			</Header3>
			{checkout.lineItems.edges.map((element) => {
				let { title, variant, quantity } = element.node

				return (
					<FlexContainer
						key={variant.id}
						margin="small"
						onMouseOver={updateHover}
						onMouseOut={removeHover}
					>
						<FlexThree>
							<img src={variant.image.originalSrc} />
						</FlexThree>
						<FlexSix marginVertical="0">
							<Header5 weight="light" color="dark">
								{title}
							</Header5>
							<div>
								<FlexSix>
									<Header5 weight="strong" color="dark">
										${variant.priceV2.amount}
									</Header5>
								</FlexSix>
								<FlexSix>
									<QuantitySelectorCart className={hovered}>
										Quantity: {quantity}
										<span> </span>
										<button type="button">
											<span>&#8722;</span>
										</button>
										<QuantityInput quantity={quantity} />
										<button
											type="button"
											onClick={(e) => increment(variant.id, 1)}
										>
											<span>&#43;</span>
										</button>
									</QuantitySelectorCart>
								</FlexSix>
							</div>
						</FlexSix>
						<IoMdClose className={hovered} />
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
				<NormalizeDiv align="center">
					<Button
						as="a"
						href={checkout.webUrl}
						background="dark"
						color="light"
						weight="semi"
						width="100%"
					>
						Checkout
					</Button>

					<Header6 align="center">
						Shipping and discount codes are added at checkout.
					</Header6>
				</NormalizeDiv>
			</CartBottom>
		</NormalizeDiv>
	)
}
