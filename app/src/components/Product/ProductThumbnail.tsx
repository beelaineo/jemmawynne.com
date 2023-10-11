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
import { Heading, StrikeThrough } from '../Text'
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
  ProductPrice,
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
  const [price, setPrice] = useState(variants[0].priceV2)
  const [compareAtPrice, setCompareAtPrice] = useState(
    variants[0].compareAtPriceV2,
  )
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

  useEffect(() => {
    setPrice(currentVariant.priceV2)
    setCompareAtPrice(currentVariant.compareAtPriceV2)
  }, [currentVariant])

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
            <ProductPrice>
              {hidePrice || inquiryOnly ? null : compareAtPrice &&
                compareAtPrice.amount ? (
                <Heading
                  mt={2}
                  // @ts-ignore
                  color="body.6"
                  level={5}
                  fontStyle="italic"
                >
                  <StrikeThrough>{formatMoney(compareAtPrice)}</StrikeThrough>
                </Heading>
              ) : null}
              {hidePrice || inquiryOnly ? null : price && price.amount ? (
                <Heading
                  mt={2}
                  // @ts-ignore
                  color="body.6"
                  level={5}
                  fontStyle="italic"
                >
                  {formatMoney(price)}
                </Heading>
              ) : null}
            </ProductPrice>
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
