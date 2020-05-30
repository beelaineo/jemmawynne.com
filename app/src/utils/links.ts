import {
  ShopifyProduct,
  ShopifyCollection,
  ShopifySourceImage,
  RichPageLink,
  InternalLink,
  ExternalLink,
  Stockists,
  Page,
} from '../types'

type Document = ShopifyProduct | ShopifyCollection | Page | Stockists

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

interface LinkInfo {
  href: string
  as?: string
}

export const getDocumentLinkUrl = (document?: Document): LinkInfo => {
  if (!document) throw new Error('This link is missing a document')
  switch (document.__typename) {
    case 'PressPage':
      return { href: '/press' }
    case 'Stockists':
      return { href: '/stockists' }
    case 'ShopifyCollection':
      return {
        href: '/collections/[collectionSlug]',
        as: `/collections/${document.handle}`,
      }
    case 'ShopifyProduct':
      return {
        href: '/products/[productSlug]',
        as: `/products/${document.handle}`,
      }
    case 'Page':
      if (!document.slug || !document.slug.current) {
        throw new Error('This page does not have a slug')
      }
      return {
        href: '/[pageSlug]',
        as: `/${document.slug.current}`,
      }

    default:
      throw new Error(
        // @ts-ignore
        `Unable to create a link URL for type "${document.__typename}"`,
      )
  }
}

type LinkType = RichPageLink | ExternalLink | InternalLink

export const getPageLinkLabel = (link: LinkType): string | void =>
  link.__typename === 'InternalLink' &&
  link.document &&
  link.document.__typename === 'Stockists'
    ? 'Stockists'
    : link.__typename === 'ExternalLink'
    ? undefined
    : link?.document?.title || undefined

export const getPageLinkUrl = (link: LinkType): string | void => {
  // If it is an external link, return the URL
  if (link.__typename === 'ExternalLink') {
    return link.url ? link.url : undefined
  }
  // Otherwise, it is either a RichPageLink or InternalLink,
  // both of which will have a 'document'
  const { document } = link
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
    case 'Stockists':
      return '/stockists'
    default:
      throw new Error(
        // @ts-ignore
        `Unable to create a link URL for type "${document.__typename}"`,
      )
  }
}

export const getLinkFromHref = (href: string): LinkInfo => {
  const { pathname } = new URL(href)
  if (/\/products\/\w+/.test(pathname)) {
    return { href: '/products/[productSlug]', as: pathname }
  }
  if (/\/collections\/\w+/.test(pathname)) {
    return { href: '/collections/[collectionSlug]', as: pathname }
  }
  return { href: '/[pageSlug]', as: pathname }
}
