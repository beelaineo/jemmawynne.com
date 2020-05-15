import {
  ShopifyProduct,
  ProductInfo,
  SanityRichText,
  ProductInfoBlock,
  Image,
} from '../../types'
import { definitely } from '../../utils'

interface SwatchOptionValue {
  label: string
  image: Image
}

export interface SwatchOption {
  name: string
  values: SwatchOptionValue[]
}

export const createGetSwatchOptions = (productInfo?: ProductInfo) => (
  product: ShopifyProduct,
): SwatchOption[] => {
  if (!productInfo) return []
  const swatches = definitely(productInfo?.swatches)
  const options = definitely(product?.sourceData?.options)

  if (!swatches.length || !options.length) return []

  const getImage = (name: string): Image | undefined => {
    const match = swatches.find((sw) => sw.colorName === name)
    return match?.swatchImage || undefined
  }

  const matches = definitely(
    options
      .filter(({ values }) =>
        definitely(values).every((value) =>
          swatches.find((sw) => sw?.colorName === value),
        ),
      )
      .map(({ name, values }) => {
        const valuesWithSwatches = definitely(
          definitely(values).map((value) => {
            const image = getImage(value)
            if (!image) return null
            return {
              label: value,
              image,
            }
          }),
        )

        if (!name) return null
        if (!valuesWithSwatches.every((sw) => Boolean(sw?.image))) return null

        return {
          name,
          values: valuesWithSwatches,
        }
      }),
  )
  return matches
}

// export const getSwatchImages = ({ values }: ShopifyProductOption): Image[] =>
//   definitely(values)
//     .map(({ swatch }) => swatch)
//     .reduce<Image[]>((acc, o) => (o ? [...acc, o] : acc), [])

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

  const allBlocks = [...globalBlocks, ...tagBlocks, ...typeBlocks]
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
