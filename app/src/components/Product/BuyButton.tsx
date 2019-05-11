import * as React from 'react'
import { Variant } from '../../types'
import { UseProductVariant, UseCheckoutProps } from '../../providers/shopify'
import { Placeholder } from '../Placeholder'

/**
 * TODO: Make Variant partial, we just need ID and availbleForSale
 */

interface Props {
	currentVariant?: Variant
	addToCheckout: UseCheckoutProps.addToCheckout
	/* quantitySelector?: boolean */ // Implement later
}

export const BuyButton = (props: Props) => {
	return <Placeholder>Buy Button</Placeholder>
}
