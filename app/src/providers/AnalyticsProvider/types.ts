import {
  StorefrontApiProductVariant as Variant,
  StorefrontApiProduct as Product,
  StorefrontApiCheckoutLineItem as CheckoutLineItem,
} from '../../types/generated-shopify'
import {
  ShopifyProduct,
  ShopifyProductVariant,
  ShopifySourceProduct,
  ShopifySourceProductVariant,
} from '../../types'

declare global {
  interface Window {
    dataLayer: any[]
    gtag: any
  }
}

export interface SelectedProduct {
  product:
    | ShopifyProduct
    | ShopifySourceProduct
    | Product
    | CheckoutLineItem
    | undefined
    | null
  variant:
    | ShopifyProductVariant
    | ShopifySourceProductVariant
    | Variant
    | undefined
    | null
  quantity?: number
}

export interface EcommerceObject {
  name?: string | null
  id?: string | null
  price?: string
  category?: string
  variant?: string
  list?: string
  position?: number
  quantity?: number
}

export enum EventType {
  Impressions = 'productImpressions',
  ProductClick = 'productClick',
  ProductDetailView = 'productDetail',
  AddToCart = 'productAddToCart',
  RemoveFromCart = 'productRemoveFromCart',
  BeginCheckout = 'productBeginCheckout',
}

interface ImpressionEvent {
  event: EventType.Impressions
  ecommerce: {
    impressions: EcommerceObject[]
  }
}

interface ProductClickEvent {
  event: EventType.ProductClick
  ecommerce: {
    products: EcommerceObject[]
  }
}

interface ProductDetailEvent {
  event: EventType.ProductDetailView
  ecommerce: {
    products: EcommerceObject[]
  }
}

interface AddToCartEvent {
  event: EventType.AddToCart
  ecommerce: {
    add: {
      products: EcommerceObject[]
    }
  }
}

interface RemoveFromCartEvent {
  event: EventType.RemoveFromCart
  ecommerce: {
    remove: {
      products: EcommerceObject[]
    }
  }
}

interface BeginCheckoutEvent {
  event: EventType.BeginCheckout
  ecommerce: {
    checkout: {
      products: EcommerceObject[]
    }
  }
}

export type GTagEvent =
  | ImpressionEvent
  | ProductClickEvent
  | ProductDetailEvent
  | AddToCartEvent
  | RemoveFromCartEvent
  | BeginCheckoutEvent
