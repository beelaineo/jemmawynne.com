import { unwindEdges } from '@good-idea/unwind-edges'
import { Variant, ShopifyImage } from 'use-shopify'

export const getVariantImage = (variant: Variant): ShopifyImage | void => {
	if (variant.image) return variant.image
	if (
		variant.product &&
		variant.product.images &&
		variant.product.images.edges.length
	)
		return variant.product.images.edges[0].node
	return undefined
}
