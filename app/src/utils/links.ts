import { PageLink } from '../types/generated'
import { path } from 'ramda'

export const getPageLinkLabel = (link: PageLink): string | void =>
  path(['document', 'title'], link)

export const getPageLinkUrl = (link: PageLink): string => {
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
    default:
      throw new Error(
        // @ts-ignore
        `Unable do create a link URL for type "${document.__typename}"`,
      )
  }
}
