import * as React from 'react'
import NextLink from 'next/link'
import {
  ShopifyProduct,
  ShopifyCollection,
  PressPage,
  Page,
  Stockists,
} from '../types'
import { getDocumentLinkUrl, getDocumentLinkLabel } from '../utils/links'

export interface DocumentLinkProps {
  document?:
    | ShopifyProduct
    | Stockists
    | ShopifyCollection
    | PressPage
    | Page
    | null
  children?: React.ReactNode
  label?: string | null
}

export const DocumentLink = ({
  document,
  children,
  label,
}: DocumentLinkProps) => {
  if (!document) return null
  const { as, href } = getDocumentLinkUrl(document)
  return (
    <NextLink as={as} href={href}>
      <a>{children || label || getDocumentLinkLabel(document) || null}</a>
    </NextLink>
  )
}
