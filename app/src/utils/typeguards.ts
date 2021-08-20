import { ShopifyProduct } from '../types'

export const isShopifyProduct = (
  obj: any | void | null,
): obj is ShopifyProduct => Boolean(obj && obj?.__typename === 'ShopifyProduct')
