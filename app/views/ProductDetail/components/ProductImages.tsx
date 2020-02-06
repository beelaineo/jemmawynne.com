import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import {
  ShopifyProduct,
  ShopifyProductVariantSource,
  Image,
} from '../../../types'
import { Gallery } from '../../../components/Gallery'
import { ProductGalleryWrapper } from '../styled'

interface ProductImagesProps {
  product: ShopifyProduct
  currentVariant: ShopifyProductVariantSource
}

export const ProductImages = ({
  product,
  currentVariant,
}: ProductImagesProps) => {
  if (
    !product.sourceData.images ||
    !product.sourceData.images.edges ||
    !product.sourceData.images.edges.length
  )
    return null
  // @ts-ignore
  const [images] = unwindEdges<Image>(product.sourceData.images)

  return (
    <ProductGalleryWrapper>
      <Gallery images={images} currentImageId={currentVariant.image.id} />
    </ProductGalleryWrapper>
  )
}
