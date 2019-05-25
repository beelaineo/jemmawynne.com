import * as React from 'react'
import { Variant, UseCheckoutValues } from 'use-shopify'
import { ButtonPrimary } from '../styled'
import { Placeholder } from 'Components/Placeholder'

interface Props extends Pick<UseCheckoutValues, 'addItemToCheckout'> {
	currentVariant?: Pick<Variant, 'id' | 'availableForSale'>
	quantity?: number
}

export const BuyButton = ({ currentVariant, addItemToCheckout, quantity }: Props) => {
	const handleClick = () => addItemToCheckout({ variantId: currentVariant.id, quantity: quantity || 1 })
	if (!currentVariant.availableForSale) return <Placeholder>Out of stock</Placeholder>
	return (
		<ButtonPrimary disabled={Boolean(!currentVariant)} onClick={handleClick}>
			add to cart
		</ButtonPrimary>
	)
}
