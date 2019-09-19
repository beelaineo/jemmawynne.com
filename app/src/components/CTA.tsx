import * as React from 'react'
import { Link } from 'react-router-dom'
import styled, { css, DefaultTheme } from 'styled-components'
import { DocumentLink } from './DocumentLink'
import { Cta } from '../types/generated'

interface CTAProps {
  cta: Cta
}

const Outer = styled.div`
  ${({ theme }) => css`
    margin: ${theme.layout.spacing.half} 0;
  `}
`

const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.layout.spacing.single};
    border: 1px solid;
    color: inherit;
    display: inline;
    text-decoration: none;
  `}
`

export const CTA = ({ cta }: CTAProps) => {
  const { label, link } = cta
  if (!link || !link.document) return null
  return (
    <Outer>
      <DocumentLink document={link.document}>
        <Wrapper>{label}</Wrapper>
      </DocumentLink>
    </Outer>
  )
}
