import * as React from 'react'
import { useShopify } from '../providers/shopify'

/**
 * Main Checkout view
 */

export const Checkout = () => {
	const { checkout } = useShopify()
	const { currentCheckout } = checkout

	if (!currentCheckout || currentCheckout.lineItems.length < 1) {
		return <p>Your cart is empty</p>
	}

	return <p>You have {currentCheckout.lineItems.length} items in your cart</p>
}
