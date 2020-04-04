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
  const { as, href } = getDocumentLinkUrl(document)
  return (
    <NextLink as={as} href={href}>
      <a>{children || label || getDocumentLinkLabel(document) || null}</a>
    </NextLink>
  )
}
