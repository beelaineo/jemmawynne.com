import { unwindEdges } from '@good-idea/unwind-edges'
import {
  ShopifyProduct,
  ProductInfo,
  SanityRichText,
  ProductInfoBlock,
  ShopifySourceProductOption,
  Image,
  SwatchOption,
  TagBadge,
} from '../../types'
import { definitely } from '../../utils'
import { useMemo } from 'react'

export const createGetOptionSwatches = (productInfo?: ProductInfo) => (
  option: ShopifySourceProductOption,
): SwatchOption | null => {
  const swatches = definitely(productInfo?.swatches)
  const { values } = option
  const hasImages = definitely(values).every((value) =>
    swatches.find((sw) => sw?.colorName === value),
  )
  if (!hasImages) return null

  const getImage = (name: string): Image | undefined => {
    const match = swatches.find((sw) => sw.colorName === name)
    return match?.swatchImage || undefined
  }

  const valuesWithSwatches = definitely(
    definitely(values).map((value) => {
      const image = getImage(value)
      if (!image) return null
      return {
        value,
        label: value,
        image,
      }
    }),
  )

  if (!option.name) return null
  if (!valuesWithSwatches.every((sw) => Boolean(sw?.image))) return null

  return {
    name: option.name,
    values: valuesWithSwatches,
  }
}

export const createGetSwatchOptions = (productInfo?: ProductInfo) => (
  product: ShopifyProduct,
): SwatchOption[] => {
  if (!productInfo) return []
  const swatches = definitely(productInfo?.swatches)
  const options = definitely(product?.sourceData?.options)

  if (!swatches.length || !options.length) return []

  const getOptionSwatches = createGetOptionSwatches(productInfo)

  const matches = definitely(options.map(getOptionSwatches))
  return matches
}

export interface DefinitelyProductInfo {
  __typename: 'ProductInfoBlock'
  _key: string
  _type: string
  title: string
  bodyRaw?: SanityRichText
}

export const createGetProductInfoBlocks = (productInfo?: ProductInfo) => (
  product: ShopifyProduct,
): DefinitelyProductInfo[] => {
  if (!productInfo) return []
  const {
    globalBlocks: sourceGlobalBlocks,
    ringBlocks,
    earringBlocks,
    braceletBlocks,
    necklaceBlocks,
    blocksByTag,
    blocksByCollection,
  } = productInfo
  const globalBlocks = sourceGlobalBlocks ? definitely(sourceGlobalBlocks) : []
  const sourceTags = product?.sourceData?.tags
  const productType = product?.sourceData?.productType
  const productTags = sourceTags
    ? sourceTags.map((t) => (t ? t.toLowerCase() : ''))
    : []

  const tagBlocks =
    blocksByTag && productTags
      ? blocksByTag.reduce<ProductInfoBlock[]>((acc, current) => {
          if (!current) return acc
          if (current.tag && productTags.includes(current.tag.toLowerCase())) {
            const { infoBlocks } = current
            if (infoBlocks) {
              const infos = definitely(infoBlocks)
              return [...acc, ...infos]
            }
          }
          return acc
        }, [])
      : []

  const typeBlocks = productType
    ? productType === 'Earring'
      ? earringBlocks || []
      : productType === 'Ring'
      ? ringBlocks || []
      : productType === 'Necklace'
      ? necklaceBlocks || []
      : productType === 'Bracelet'
      ? braceletBlocks || []
      : []
    : []

  const productCollectionIds = definitely(
    product.collections
      ? definitely(product.collections).map((c) => c.shopifyId)
      : unwindEdges(product?.sourceData?.collections)[0].map((c) => c.id),
  )

  const collectionBlocks = blocksByCollection
    ? blocksByCollection
        .filter((collectionBlock) => {
          const collections = definitely(collectionBlock?.collections)
          if (!collections) return false
          return collections.some(
            (c) => c.shopifyId && productCollectionIds.includes(c.shopifyId),
          )
        })
        .reduce<ProductInfoBlock[]>((prevBlocks, cBlock) => {
          if (!cBlock) return prevBlocks
          return [...prevBlocks, ...definitely(cBlock.infoBlocks)]
        }, [])
    : []

  const allBlocks = [
    ...globalBlocks,
    ...tagBlocks,
    ...typeBlocks,
    ...collectionBlocks,
  ]

  const filteredBlocks = allBlocks.reduce<DefinitelyProductInfo[]>(
    (acc, block) => {
      if (!block) return acc
      const { _key, _type, title, bodyRaw, __typename } = block
      if (_key && _type && title && bodyRaw) {
        return [...acc, { __typename, _key, _type, title, bodyRaw }]
      }
      return acc
    },
    [],
  )
  return filteredBlocks
}

export const createGetTagBadges = (productInfo?: ProductInfo) => (
  product: ShopifyProduct,
): TagBadge[] => {
  if (!productInfo) return []
  const allTagBadges = definitely(productInfo?.tagBadges) ?? []
  const productTags = definitely(product?.sourceData?.tags)

  const matches = useMemo(
    () =>
      definitely(
        allTagBadges.filter((tb) =>
          productTags.find(
            (tag) => tb.tag && tb.tag.toLowerCase() === tag.toLowerCase(),
          ),
        ),
      ),
    [allTagBadges, productTags],
  )
  return matches
}
