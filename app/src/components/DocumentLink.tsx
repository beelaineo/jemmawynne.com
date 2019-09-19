import * as React from 'react'
import { Link as RrLink } from 'react-router-dom'
import { ShopifyProduct, ShopifyCollection, Page } from '../types/generated'
// import { getDocumentLinkUrl, getDocumentLinkLabel } from '../utils/links'

type SanityDocument = ShopifyProduct | ShopifyCollection | Page
interface LinkProps {
  document: ShopifyProduct | ShopifyCollection | Page
  children?: React.ReactNode
  label?: string
}

const linkStyles = {
  textDecoration: 'none',
  color: 'inherit',
}

export const getDocumentLinkLabel = (document: SanityDocument): string | void =>
  document.title

export const getDocumentLinkUrl = (document: SanityDocument): string => {
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
export const DocumentLink = ({ document, children, label }: LinkProps) => {
  if (!document) return null
  return (
    <RrLink style={linkStyles} to={getDocumentLinkUrl(document)}>
      {children || label || getDocumentLinkLabel(document) || null}
    </RrLink>
  )
}
