import * as React from 'react'
import {
  useCheckout,
  UseCheckoutValues,
  UseCheckoutQueries,
  UseCheckoutConfig,
} from './useCheckout'
import { QueryFunction } from './types'

type ShopifyContextValue = UseCheckoutValues

export const ShopifyContext = React.createContext<
  ShopifyContextValue | undefined
>(undefined)

export const ShopifyConsumer = ShopifyContext.Consumer

export const useShopify = () => {
  const ctx = React.useContext(ShopifyContext)
  if (!ctx)
    throw new Error('`useShopify` must be used within a ShopifyProvider')
  return ctx
}

type CustomQueries = Partial<UseCheckoutQueries>

interface Props {
  children: React.ReactNode
  query: QueryFunction
  queries?: CustomQueries
  config?: {
    checkout: Partial<UseCheckoutConfig>
  }
}

const defaultConfig = {
  checkout: undefined,
}

export const ShopifyProvider = ({
  children,
  queries,
  query,
  config: userConfig,
}: Props) => {
  const config = {
    ...defaultConfig,
    ...userConfig,
  }

  const checkout = useCheckout({
    queries,
    query,
    config: config.checkout ? config.checkout : undefined,
  })

  const value = {
    ...checkout,
  }

  return (
    <ShopifyContext.Provider value={value}>{children}</ShopifyContext.Provider>
  )
}
