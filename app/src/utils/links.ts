import { ShopifyProduct, ShopifyCollection, Page } from '../types/generated'

type Document = ShopifyProduct | ShopifyCollection | Page

export const getDocumentLinkLabel = (
  document: Document,
): string | void | null => document.title

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
