import sanityClient from 'part:@sanity/base/client'
import { path } from 'ramda'

const client = sanityClient.withConfig({ apiVersion: '2022-06-22' })

export const getReferencedDocument = async (ref) => client.getDocument(ref)

export const blocksToPlainText = (blocks, lineBreaks = false) =>
  blocks
    ? blocks
        .map((b) =>
          b._type !== 'block' || !b.children
            ? ''
            : b.children.map((child) => child.text).join(' '),
        )
        .join(lineBreaks ? '\n\n' : ' ')
    : undefined

export const getImageThumbnail = async (image) => {
  if (!image || !image.asset) return undefined
  const doc = await getReferencedDocument(image.asset._ref)
  return `${doc.url}?w=100&fit=max`
}

export const getShopifyThumbnail = (item) => {
  switch (item.sourceData.__typename) {
    case 'Product':
      return path(['sourceData', 'images', 'edges', '0', 'node', 'w100'], item)
    case 'Collection':
      return path(['sourceData', 'image', 'w100'], item)
    default:
      throw new Error(
        `Cannot get thumbnail for type "${item.sourceData.__typename}"`,
      )
  }
}

export const getPageLinkThumbnail = async (pageLink) => {
  if (!pageLink || !pageLink.document || !pageLink.document._ref)
    return undefined
  const doc = await getReferencedDocument(pageLink.document._ref)
  if (!doc) return undefined
  if (doc._type === 'shopifyProduct' || doc._type === 'shopifyCollection')
    return getShopifyThumbnail(doc)
  return undefined
}

export const getTypeText = (doc) => {
  if (!doc) return ''
  if (doc._type === 'shopifyProduct') return 'Product'
  if (doc._type === 'shopifyCollection') return 'Collection'
  if (doc._type === 'page') return 'Page'
  if (doc._type === 'pressPage') return 'Press Page'
  if (doc._type === 'stockists') return 'Stockists'
  return ''
}
