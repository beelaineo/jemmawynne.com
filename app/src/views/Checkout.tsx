import * as React from 'react'
import { useCheckout } from 'use-shopify'

/**
 * Main Checkout view
 */

export const Checkout = () => {
	const { currentCheckout } = useCheckout()

	if (!currentCheckout || currentCheckout.lineItems.length < 1) {
		return <p>Your cart is empty</p>
	}

	return <p>You have {currentCheckout.lineItems.length} items in your cart</p>
}
