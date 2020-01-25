import * as React from 'react'
import { Link as RrLink } from 'react-router-dom'
import { PageLink as PageLinkType } from '../types/generated'
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
        <RrLink style={linkStyles} to={getPageLinkUrl(link)}>
          {children || label || getPageLinkLabel(link) || null}
        </RrLink>
      )
    default:
      // @ts-ignore
      throw new Error(`Cannot create link for type "${link.__typename}"`)
  }
}
