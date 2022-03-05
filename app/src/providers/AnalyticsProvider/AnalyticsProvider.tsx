import * as React from 'react'
import { useRouter } from 'next/router'
import { arrayify, reportFBViewContent, isShopifyProduct } from '../../utils'
import { parseProduct } from './utils'
import { SelectedProduct, EventType, GTagEvent } from './types'

const { useEffect } = React

interface AnalyticsContextValue {
  sendProductImpression: (
    products: SelectedProduct | SelectedProduct[],
    list?: string,
  ) => void
  sendProductClick: (products: SelectedProduct | SelectedProduct[]) => void
  sendProductDetailView: (products: SelectedProduct | SelectedProduct[]) => void
  sendAddToCart: (products: SelectedProduct | SelectedProduct[]) => void
  sendRemoveFromCart: (products: SelectedProduct | SelectedProduct[]) => void
  sendBeginCheckout: (products: SelectedProduct | SelectedProduct[]) => void
}

const AnalyticsContext = React.createContext<AnalyticsContextValue | undefined>(
  undefined,
)

export const AnalyticsConsumer = AnalyticsContext.Consumer

export const useAnalytics = () => {
  const ctx = React.useContext(AnalyticsContext)
  if (!ctx)
    throw new Error(
      'useAnalyticsContext must be used within a AnalyticsProvider',
    )
  return ctx
}

interface AnalyticsProps {
  children: React.ReactNode
}

export const AnalyticsProvider = ({ children }: AnalyticsProps) => {
  const sendEvent = (event: GTagEvent) => {
    if (typeof window === 'undefined') return
    if (window.dataLayer) window.dataLayer.push(event)
  }
  const router = useRouter()

  const { asPath } = router

  const sendPageView = (path: string) => {
    const search = path.match(/\?.*$/)
    if (
      /^\/products\//.test(path) &&
      (search === null || !/v=/.test(search[0]))
    ) {
      // Do not track page hits for product pages without the v= query,
      // it will be appended after loading and it would be a duplicate hit
      return
    }

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view')
    }
  }

  useEffect(() => sendPageView(asPath), [asPath])

  const sendProductImpression: AnalyticsContextValue['sendProductImpression'] =
    (selected, list) => {
      const impressions = arrayify(selected).map((s, i) =>
        parseProduct(s, { position: i + 1, list }),
      )
      sendEvent({
        event: EventType.Impressions,
        ecommerce: { impressions },
      })
    }

  const sendProductClick: AnalyticsContextValue['sendProductClick'] = (
    selected,
  ) => {
    const products = arrayify(selected).map((s, i) =>
      parseProduct(s, { position: i + 1 }),
    )
    sendEvent({
      event: EventType.ProductClick,
      ecommerce: { products },
    })
  }

  const sendProductDetailView: AnalyticsContextValue['sendProductDetailView'] =
    (selected) => {
      const products = arrayify(selected).map((s, i) =>
        parseProduct(s, { position: i + 1 }),
      )

      arrayify(selected).forEach((s) => {
        const selectedProduct = s?.product
        if (isShopifyProduct(selectedProduct)) {
          reportFBViewContent(selectedProduct)
        }
      })
      sendEvent({
        event: EventType.ProductDetailView,
        ecommerce: { products },
      })
    }

  const sendAddToCart: AnalyticsContextValue['sendAddToCart'] = (selected) => {
    const products = arrayify(selected).map((s, i) =>
      parseProduct(s, { position: i + 1 }),
    )
    sendEvent({
      event: EventType.AddToCart,
      ecommerce: { add: { products } },
    })
  }

  const sendRemoveFromCart: AnalyticsContextValue['sendRemoveFromCart'] = (
    selected,
  ) => {
    const products = arrayify(selected).map((s, i) =>
      parseProduct(s, { position: i + 1 }),
    )
    sendEvent({
      event: EventType.RemoveFromCart,
      ecommerce: { remove: { products } },
    })
  }
  const sendBeginCheckout: AnalyticsContextValue['sendBeginCheckout'] = (
    selected,
  ) => {
    const products = arrayify(selected).map((s, i) =>
      parseProduct(s, { position: i + 1 }),
    )
    sendEvent({
      event: EventType.BeginCheckout,
      ecommerce: { checkout: { products } },
    })
  }

  const value = {
    sendProductImpression,
    sendProductClick,
    sendProductDetailView,
    sendAddToCart,
    sendRemoveFromCart,
    sendBeginCheckout,
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}
