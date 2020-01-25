import { unwindEdges } from '@good-idea/unwind-edges'
import { Image, ProductVariant } from '../types'

export const getVariantImage = (variant: ProductVariant): Image | void => {
  if (variant.image) return variant.image
  if (
    variant.product &&
    variant.product.images &&
    variant.product.images.edges.length
  )
    return variant.product.images.edges[0].node
  return undefined
}
