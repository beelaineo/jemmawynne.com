import * as React from 'react'
import NextLink from 'next/Link'
import { PageLink as PageLinkType } from '../types'
import { getPageLinkUrl, getPageLinkLabel } from '../utils/links'

interface LinkProps {
  link: PageLinkType
  children?: React.ReactNode
  label?: string
}

const linkStyles = {
  textDecoration: 'none',
  color: 'inherit',
}

export const PageLink = ({ link, children, label }: LinkProps) => {
  if (!link) return null
  switch (link.__typename) {
    case 'PageLink':
      if (!link.document) {
        throw new Error('This PageLink does not have a document')
      }
      return (
        <NextLink href={getPageLinkUrl(link)}>
          <span style={linkStyles}>
            {children || label || getPageLinkLabel(link) || null}
          </span>
        </NextLink>
      )
    default:
      // @ts-ignore
      throw new Error(`Cannot create link for type "${link.__typename}"`)
  }
}
