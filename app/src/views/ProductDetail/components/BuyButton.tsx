import * as React from 'react'
import { Variant, UseCheckoutProps } from 'use-shopify'
import { ButtonPrimary } from '../styled'

interface Props extends Pick<UseCheckoutProps, 'addItemToCheckout'> {
	currentVariant?: Pick<Variant, 'id' | 'availableForSale'>
	quantity?: number
}

export const BuyButton = ({ currentVariant, addItemToCheckout, quantity }: Props) => {
	const handleClick = () => addItemToCheckout({ variantId: currentVariant.id, quantity: quantity || 1 })
	return (
		<ButtonPrimary disabled={Boolean(!currentVariant || currentVariant.availableForSale === false)} onClick={handleClick}>
			add to cart
		</ButtonPrimary>
	)
}
