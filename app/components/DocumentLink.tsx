import * as React from 'react'
import { Link as RrLink } from 'react-router-dom'
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
    <RrLink style={linkStyles} to={getDocumentLinkUrl(document)}>
      {children || label || getDocumentLinkLabel(document) || null}
    </RrLink>
  )
}
