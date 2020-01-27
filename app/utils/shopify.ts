import { Image, ShopifySourceImage, ProductVariant } from '../types'

export const getVariantImage = (variant: ProductVariant): string | void => {
  if (variant.sourceData.image) return variant.sourceData.image.originalSrc
  return undefined
}
