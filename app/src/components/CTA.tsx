import * as React from 'react'
import { Link } from 'react-router-dom'
import styled, { css, DefaultTheme } from 'styled-components'
import { Cta, PageLinkOrUrlLink, PageLink } from '../types/generated'
import { getPageLinkUrl } from '../utils/links'

interface CTAProps {
  cta: Cta
}

interface WrapperProps {
  theme: DefaultTheme
  as: typeof Link | 'a'
  to?: string
  href?: string
  target?: string
  rel?: string
}

const Outer = styled.div`
  ${({ theme }) => css`
    margin: ${theme.layout.spacing.half} 0;
  `}
`

const Wrapper = styled.div`
  ${({ theme }: WrapperProps) => css`
    padding: ${theme.layout.spacing.single};
    border: 1px solid;
    color: inherit;
    display: inline;
    text-decoration: none;
  `}
`

const getPageLinkTo = (link: PageLink): string => {
  const { document } = link
  if (!document) return '/'

  switch (document.__typename) {
    case 'ShopifyCollection':
      return `/collections/${document.handle}`
    case 'ShopifyProduct':
      return `/products/${document.handle}`
    default:
      return `/${document.slug.current}`
  }
}

export const CTA = ({ cta }: CTAProps) => {
  const { label, link } = cta
  if (!link) return null
  return (
    <Outer>
      <Wrapper as={Link} to={getPageLinkUrl(link)}>
        {label}
      </Wrapper>
    </Outer>
  )
}
