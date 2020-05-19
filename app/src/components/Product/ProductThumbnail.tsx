import * as React from 'react'
import {
  RichImage,
  ShopifyProduct,
  SwatchOption,
  SwatchOptionValue,
} from '../../types'
import Link from 'next/link'
import { unwindEdges } from '@good-idea/unwind-edges'
import { useShopData } from '../../providers/ShopDataProvider'
import { Heading } from '../Text'
import { Image } from '../Image'
import {
  getVariantBySelectedOption,
  formatMoney,
  definitely,
} from '../../utils'
import { ProductSwatches } from './ProductSwatches'
import { ProductInfo, ProductThumb } from './styled'

const { useState } = React

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
  const { getProductSwatchOptions } = useShopData()
  const [variants] = unwindEdges(product?.sourceData?.variants)
  const [currentVariant, setCurrentVariant] = useState(variants[0])
  if (!product?.sourceData) return null
  if (product.archived === true) return null
  const productImages = product?.sourceData?.images
    ? unwindEdges(
        // @ts-ignore
        product.sourceData.images,
      )[0]
    : []

  const productImage =
    currentVariant?.image ?? productImages.length ? productImages[0] : undefined
  const { minVariantPrice, maxVariantPrice } =
    product.sourceData.priceRange || {}
  const as = `/products/${product.handle}`
  const hoverImage = productImages.length >= 2 ? productImages[1] : undefined
  const swatchOptions = getProductSwatchOptions(product)
  const swatchOption = swatchOptions.length ? swatchOptions[0] : undefined
  const activeOption = swatchOption
    ? definitely(currentVariant.selectedOptions).find(
        (o) => o.name === swatchOption.name,
      )
    : undefined
  const onSwatchHover = (
    option: SwatchOption,
    value: SwatchOptionValue,
  ) => () => {
    const optionValue = { name: option.name, currentValue: value.value }
    const updatedVariant = getVariantBySelectedOption(variants, optionValue)
    if (updatedVariant) setCurrentVariant(updatedVariant)
  }

  return (
    <Link href="/products/[productSlug]" as={as}>
      <a>
        <ProductThumb>
          <Image image={image || productImage} hoverImage={hoverImage} />
          <ProductInfo>
            <Heading
              mb={3}
              level={7}
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
              <Heading mt={2} color="body.6" level={5} fontStyle="italic">
                {formatMoney(minVariantPrice)} - {formatMoney(maxVariantPrice)}
              </Heading>
            ) : maxVariantPrice ? (
              <Heading mt={2} color="body.6" level={5} fontStyle="italic">
                {formatMoney(maxVariantPrice)}
              </Heading>
            ) : null}
            {swatchOption ? (
              <ProductSwatches
                onSwatchHover={onSwatchHover}
                option={swatchOption}
                activeValue={activeOption?.value}
              />
            ) : null}
          </ProductInfo>
        </ProductThumb>
      </a>
    </Link>
  )
}
