import * as React from 'react'
import NextLink from 'next/link'
import { ShopifyProduct, ShopifyCollection, Page, Stockists } from '../types'
import { getDocumentLinkUrl, getDocumentLinkLabel } from '../utils/links'

interface LinkProps {
  document?: ShopifyProduct | Stockists | ShopifyCollection | Page | null
  children?: React.ReactNode
  label?: string
}

export const DocumentLink = ({ document, children, label }: LinkProps) => {
  if (!document) return null
  return (
    <NextLink href={getDocumentLinkUrl(document)}>
      <a>{children || label || getDocumentLinkLabel(document) || null}</a>
    </NextLink>
  )
}
