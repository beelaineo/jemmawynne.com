import { ProductInfo, ProductInfoBlock } from '../../types/generated'

export function getInfoBlocksByType(
  type: string,
  productInfoBlocks: ProductInfo,
): ProductInfoBlock[] {
  const {
    globalBlocks,
    ringBlocks,
    earringBlocks,
    braceletBlocks,
    necklaceBlocks,
  } = productInfoBlocks
  const byType =
    type === 'Rings'
      ? ringBlocks || []
      : type === 'Earrings'
      ? earringBlocks || []
      : type === 'Bracelets'
      ? braceletBlocks || []
      : type === 'Necklaces'
      ? necklaceBlocks || []
      : []

  const global = globalBlocks || []
  return [...global, ...byType]
}

export function getInfoBlocksByTag(
  productTags: string[],
  productInfoBlocks: ProductInfo,
): ProductInfoBlock[] {
  if (!productTags) return []
  const { blocksByTag } = productInfoBlocks
  return blocksByTag
    .filter(({ tag, infoBlocks }) => {
      /* Get matching tags */
      if (!tag || !infoBlocks) return false
      return productTags.includes(tag)
    })
    .map(({ infoBlocks }) => infoBlocks)
    .reduce((acc, current) => [...acc, ...current], [])
}
