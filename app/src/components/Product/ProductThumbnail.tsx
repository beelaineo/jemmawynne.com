import * as React from 'react'
import {
  RichImage,
  ShopifyProduct,
  SwatchOption,
  SwatchOptionValue,
  ShopifySourceProductVariant,
  ShopifySourceImage,
} from '../../types'
import Link from 'next/link'
import { unwindEdges } from '@good-idea/unwind-edges'
import { useShopData } from '../../providers/ShopDataProvider'
import { useAnalytics } from '../../providers/AnalyticsProvider'
import { useInViewport } from '../../hooks'
import { Heading } from '../Text'
import { Image } from '../Image'
import {
  getVariantBySelectedOption,
  formatMoney,
  optionMatchesVariant,
  productIsInquiryOnly,
} from '../../utils'
import { ProductSwatches } from './ProductSwatches'
import {
  ProductInfo,
  ImageWrapper,
  ProductThumb,
  ProductThumbnailSwatchesWrapper,
} from './styled'
import { TagBadges } from './TagBadges'

const { useRef, useState, useEffect, useMemo } = React

interface ProductThumbnailProps {
  product: ShopifyProduct
  image?: RichImage | null
  hidePrice?: boolean
  displayTags?: boolean
}

const uniqueImages = (
  variants: ShopifySourceProductVariant[],
): ShopifySourceImage[] =>
  variants.reduce<ShopifySourceImage[]>((acc, variant) => {
    const { image } = variant
    if (!image) return acc
    if (acc.find((i) => i?.originalSrc === image.originalSrc)) {
      return acc
    }
    return [...acc, image]
  }, [])

export const ProductThumbnail = ({
  image,
  hidePrice,
  displayTags,
  product,
}: ProductThumbnailProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { sendProductImpression, sendProductClick } = useAnalytics()
  const { isInViewOnce } = useInViewport(containerRef)
  const { getProductSwatchOptions } = useShopData()
  const [variants] = unwindEdges(product?.sourceData?.variants)
  const [currentVariant, setCurrentVariant] = useState(variants[0])
  const inquiryOnly = productIsInquiryOnly(product)
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

  const handleClick = () => {
    sendProductClick({ product, variant: currentVariant })
  }
  const allImages = useMemo(() => uniqueImages(variants), [variants])
  useEffect(() => {
    if (!isInViewOnce) return
    sendProductImpression({ product, variant: currentVariant })
  }, [isInViewOnce, currentVariant])

  const { minVariantPrice, maxVariantPrice } =
    product.sourceData.priceRange || {}
  const as = `/products/${product.handle}`
  const hoverImage = productImages.length >= 2 ? productImages[1] : undefined
  const swatchOptions = getProductSwatchOptions(product)
  const swatchOption = swatchOptions.length ? swatchOptions[0] : undefined

  const onSwatchHover =
    (option: SwatchOption, value: SwatchOptionValue) => () => {
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
    <ProductThumb ref={containerRef}>
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
            {hidePrice || inquiryOnly ? null : minVariantPrice &&
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
              <ProductThumbnailSwatchesWrapper>
                <ProductSwatches
                  option={swatchOption}
                  onSwatchHover={onSwatchHover}
                  isSwatchActive={isSwatchActive}
                />
              </ProductThumbnailSwatchesWrapper>
            ) : null}
          </ProductInfo>
        </a>
      </Link>
    </ProductThumb>
  )
}
