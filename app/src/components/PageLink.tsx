import * as React from 'react'
import NextLink from 'next/link'
import { RichPageLink, ExternalLink, InternalLink } from '../types'
import { getPageLinkUrl, getPageLinkLabel } from '../utils/links'

interface LinkProps {
  link?: RichPageLink | ExternalLink | InternalLink | null
  children?: React.ReactNode
  label?: string
  render?: (label: string | void) => React.ReactNode
}

const linkStyles = {
  textDecoration: 'none',
  color: 'inherit',
  cursor: 'pointer',
}

// Returns a link to an external or internal page.
// If there are no children, it will wrap a Label inferred
// by the linked page, or by a label passed in as a prop

export const PageLink = ({ link, children, render, label }: LinkProps) => {
  // if no link, just return the children un-wrapped
  if (!link) return <>{children}</>

  const linkTo = getPageLinkUrl(link)
  if (!linkTo) {
    console.warn('Could not make a link', { link })
    return null
  }

  const isExternal = linkTo.startsWith('http')

  const inner = () => {
    const inferredLabel = getPageLinkLabel(link)
    if (children) return children
    if (render) return render(label || inferredLabel)
    if (label) return label
    if (inferredLabel) return inferredLabel
    return null
  }

  if (isExternal) {
    return (
      <a href={linkTo} rel="noopener noreferrer" target="_blank">
        {inner()}
      </a>
    )
  }

  return (
    <NextLink href={linkTo}>
      <a style={linkStyles}>{inner()}</a>
    </NextLink>
  )
}
