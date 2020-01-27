import * as React from 'react'
import NextLink from 'next/Link'
import { ShopifyProduct, ShopifyCollection, Page } from '../types'
import { getDocumentLinkUrl, getDocumentLinkLabel } from '../utils/links'

interface LinkProps {
  document?: ShopifyProduct | ShopifyCollection | Page | null
  children?: React.ReactNode
  label?: string
}

const linkStyles = {
  textDecoration: 'none',
  color: 'inherit',
}

export const DocumentLink = ({ document, children, label }: LinkProps) => {
  if (!document) return null
  return (
    <NextLink href={getDocumentLinkUrl(document)}>
      <span style={linkStyles}>
        {children || label || getDocumentLinkLabel(document) || null}
      </span>
    </NextLink>
  )
}
