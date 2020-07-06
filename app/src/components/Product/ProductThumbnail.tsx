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
  optionMatchesVariant,
} from '../../utils'
import { ProductSwatches } from './ProductSwatches'
import { ProductInfo, ImageWrapper, ProductThumb } from './styled'
import { TagBadges } from './TagBadges'

const { useState } = React

interface ProductThumbnail {
  product: ShopifyProduct
  image?: RichImage | null
  hidePrice?: boolean
  displayTags?: boolean
}

export const ProductThumbnail = ({
  image,
  hidePrice,
  displayTags,
  product,
}: ProductThumbnail) => {
  const { getProductSwatchOptions } = useShopData()
  const [variants] = unwindEdges(product?.sourceData?.variants)
  const [currentVariant, setCurrentVariant] = useState(variants[0])
  if (!product?.sourceData) return null
  if (product.archived === true) return null
  const productImages = product?.sourceData?.images
    ? unwindEdges(product.sourceData.images)[0]
    : []

  const productImage = currentVariant?.image
    ? currentVariant.image
    : productImages.length
    ? productImages[0]
    : undefined

  const { minVariantPrice, maxVariantPrice } =
    product.sourceData.priceRange || {}
  const as = `/products/${product.handle}`
  const hoverImage = productImages.length >= 2 ? productImages[1] : undefined
  const swatchOptions = getProductSwatchOptions(product)
  const swatchOption = swatchOptions.length ? swatchOptions[0] : undefined

  const onSwatchHover = (
    option: SwatchOption,
    value: SwatchOptionValue,
  ) => () => {
    const currentSelection = {
      name: option.name || 'foo',
      currentValue: value.value,
    }
    const newVariant = getVariantBySelectedOption(variants, currentSelection)
    if (newVariant) setCurrentVariant(newVariant)
  }

  const isSwatchActive = (
    option: SwatchOption,
    value: SwatchOptionValue,
  ): boolean => {
    const matches = optionMatchesVariant(
      option.name || 'foo',
      value,
      currentVariant,
    )
    return matches
  }

  return (
    <ProductThumb>
      <Link href="/products/[productSlug]" as={as}>
        <a>
          <ImageWrapper>
            <Image
              ratio={1}
              image={image || productImage}
              hoverImage={hoverImage}
            />

            {displayTags ? <TagBadges product={product} /> : null}
          </ImageWrapper>
          <ProductInfo>
            <Heading
              mb={3}
              level={7}
              textTransform="uppercase"
              weight={4}
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
                option={swatchOption}
                onSwatchHover={onSwatchHover}
                isSwatchActive={isSwatchActive}
              />
            ) : null}
          </ProductInfo>
        </a>
      </Link>
    </ProductThumb>
  )
}
