import {
  ShopifyProduct,
  ShopifyCollection,
  ShopifySourceImage,
  Page,
} from '../types/generated'

type Document = ShopifyProduct | ShopifyCollection | Page

export const getDocumentLinkImage = (
  // document?: PageOrShopifyCollectionOrShopifyProduct,
  document?: Document | null,
): ShopifySourceImage | void | null => {
  if (!document) return undefined
  switch (document.__typename) {
    case 'ShopifyCollection':
      return document?.sourceData?.image
    case 'ShopifyProduct':
      const imageEdges = document?.sourceData?.images?.edges
      if (!imageEdges || imageEdges.length === 0 || imageEdges[0] === null) {
        return undefined
      }
      return imageEdges[0].node
    case 'Page':
      return undefined
    default:
      // @ts-ignore
      throw new Error(`Cannot get image for type "${document.__typename}"`)
  }
}

export const getDocumentLinkLabel = (
  document?: Document | null,
): string | void => (document ? document.title ?? undefined : undefined)

export const getDocumentLinkUrl = (document?: Document): string => {
  if (!document) throw new Error('This link is missing a document')
  switch (document.__typename) {
    case 'ShopifyCollection':
      return `/collections/${document.handle}`
    case 'ShopifyProduct':
      return `/products/${document.handle}`
    case 'Page':
      if (!document.slug || !document.slug.current) {
        throw new Error('This page does not have a slug')
      }
      return `/${document.slug.current}`
    default:
      throw new Error(
        // @ts-ignore
        `Unable do create a link URL for type "${document.__typename}"`,
      )
  }
}
