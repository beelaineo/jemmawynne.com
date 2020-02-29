import {
  ShopifySourceProductVariant,
  StorefrontApiProductVariant,
} from '../types'

export const getVariantImage = (
  variant: ShopifySourceProductVariant | StorefrontApiProductVariant,
): string | void => {
  if (variant.image) return variant.image.originalSrc
  return undefined
}
