import * as React from 'react'
import { UseCheckoutProps, useCheckout, defaultCheckoutProps } from './useCheckout'
import { useProductVariant } from './useProductVariant'

interface ShopifyContextValue {
	checkout: UseCheckoutProps
	hooks: {
		useProductVariant: typeof useProductVariant
	}
	customer: null
}

const defaults = {
	checkout: defaultCheckoutProps,
	hooks: {
		useProductVariant,
	},
	customer: null,
}

const Context = React.createContext<ShopifyContextValue>(defaults)

export const ShopifyConsumer = Context.Consumer

export const useShopify = () => React.useContext(Context)

interface Props {
	children: React.ReactNode
}

export const ShopifyProvider = ({ children }: Props) => {
	const checkout = useCheckout()
	const customer = null
	const value = {
		checkout,
		customer,
	}
	return <Context.Provider value={value}>{children}</Context.Provider>
}
