import * as React from 'react'
import { UseCheckoutProps, useCheckout, defaultCheckoutProps } from './checkout'

interface ShopifyContextValue {
	checkout: UseCheckoutProps
}

const defaults = {
	checkout: defaultCheckoutProps,
}

const Context = React.createContext<ShopifyContextValue>(defaults)

export const ShopifyConsumer = Context.Consumer

export const useShopify = () => React.useContext(Context)

interface Props {
	children: React.ReactNode
}

export const ShopifyProvider = ({ children }: Props) => {
	const checkout = useCheckout()
	const value = {
		checkout,
	}
	return <Context.Provider value={value}>{children}</Context.Provider>
}
