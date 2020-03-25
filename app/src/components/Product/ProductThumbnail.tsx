import * as React from 'react'
import { RichImage, ShopifyProduct } from '../../types'
import Link from 'next/link'
import { unwindEdges } from '@good-idea/unwind-edges'
import { Heading } from '../Text'
import { Image } from '../Image'
import { formatMoney } from '../../utils'
import { ProductInfo, ProductThumb } from './styled'

interface ProductThumbnail {
  product: ShopifyProduct
  image?: RichImage | null
  hidePrice?: boolean
}

export const ProductThumbnail = ({
  image,
  hidePrice,
  product,
}: ProductThumbnail) => {
  if (!product) return null
  const { sourceData } = product
  if (!sourceData) return null
  const productImages = product?.sourceData?.images
    ? unwindEdges(
        // @ts-ignore
        product.sourceData.images,
      )[0]
    : []

  const productImage = productImages.length ? productImages[0] : undefined
  const { minVariantPrice, maxVariantPrice } = sourceData.priceRange || {}
  const to = `/products/${product.handle}`
  const hoverImage = productImages.length >= 2 ? productImages[1] : undefined
  return (
    <Link href={to}>
      <a>
        <ProductThumb>
          <Image image={image || productImage} hoverImage={hoverImage} />
          <ProductInfo>
            <Heading
              mb={3}
              level={6}
              textTransform="uppercase"
              weight={3}
              family="sans"
            >
              {product.title}
            </Heading>
            {hidePrice ? null : minVariantPrice &&
              minVariantPrice.amount &&
              maxVariantPrice &&
              maxVariantPrice.amount &&
              minVariantPrice.amount !== maxVariantPrice.amount ? (
              <Heading color="body.6" level={5} fontStyle="italic">
                {formatMoney(minVariantPrice)} - {formatMoney(maxVariantPrice)}
              </Heading>
            ) : maxVariantPrice ? (
              <Heading color="body.6" level={5} fontStyle="italic">
                {formatMoney(maxVariantPrice)}
              </Heading>
            ) : null}
          </ProductInfo>
        </ProductThumb>
      </a>
    </Link>
  )
}
