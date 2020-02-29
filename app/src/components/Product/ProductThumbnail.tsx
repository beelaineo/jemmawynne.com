import * as React from 'react'
import { ShopifyProduct } from '../../types'
import Link from 'next/link'
import { unwindEdges } from '@good-idea/unwind-edges'
import { Header3, Header6 } from '../Text'
import { Image } from '../Image'
import { formatMoney } from '../../utils'

import { ProductInfo, ProductThumb } from './styled'

interface ProductThumbnail {
  product: ShopifyProduct
  hidePrice?: boolean
}

export const ProductThumbnail = ({ hidePrice, product }: ProductThumbnail) => {
  if (!product) return null
  const productImages = product?.sourceData?.images
    ? unwindEdges(
        // @ts-ignore
        product.sourceData.images,
      )[0]
    : []

  const productImage = productImages.length ? productImages[0] : undefined
  const { minVariantPrice, maxVariantPrice } =
    product.sourceData.priceRange || {}
  const to = `/products/${product.handle}`
  const hoverImage = productImages.length >= 2 ? productImages[1] : undefined
  return (
    <Link href={to}>
      <a>
        <ProductThumb>
          <Image image={productImage} hoverImage={hoverImage} />
          <ProductInfo hidePrice={hidePrice}>
            <Header3>{product.title}</Header3>
            {hidePrice ? null : minVariantPrice &&
              minVariantPrice.amount &&
              maxVariantPrice &&
              maxVariantPrice.amount &&
              minVariantPrice.amount !== maxVariantPrice.amount ? (
              <Header6>
                {formatMoney(minVariantPrice)} - {formatMoney(maxVariantPrice)}
              </Header6>
            ) : (
              <Header6>{formatMoney(maxVariantPrice)}</Header6>
            )}
          </ProductInfo>
        </ProductThumb>
      </a>
    </Link>
  )
}
