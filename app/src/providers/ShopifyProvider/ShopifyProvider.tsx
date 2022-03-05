import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import {
  useCheckout,
  UseCheckoutValues,
  UseCheckoutQueries,
  UseCheckoutConfig,
} from './useCheckout'
import { QueryFunction } from './types'
import { useAnalytics } from '../AnalyticsProvider'

const domain = 'jemma-wynne.myshopify.com'

type ShopifyContextValue = UseCheckoutValues & {
  goToCheckout: () => void
}

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
  const { sendBeginCheckout } = useAnalytics()
  const config = {
    ...defaultConfig,
    ...userConfig,
  }
  const useCheckoutValues = useCheckout({
    queries,
    query,
    config: config.checkout ? config.checkout : undefined,
  })

  const goToCheckout = () => {
    const { checkout } = useCheckoutValues
    if (!checkout) {
      throw new Error('No checkout has been initiated')
    }
    const [lineItems] = unwindEdges(checkout.lineItems)
    /* Send the analytics event */
    sendBeginCheckout(
      // @ts-ignore
      lineItems.map((li) => ({
        product: li.variant?.product,
        variant: li.variant,
        quantity: li.quantity,
      })),
    )
    // @ts-ignore
    const { protocol, pathname, search } = new URL(checkout.webUrl)
    const redirect: string = `${protocol}//${domain}${pathname}${search}`
    window.location.href = redirect
  }

  const value = {
    ...useCheckoutValues,
    goToCheckout,
  }

  return (
    <ShopifyContext.Provider value={value}>{children}</ShopifyContext.Provider>
  )
}
