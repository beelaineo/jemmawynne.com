import * as React from 'react'
import { Link } from 'react-router-dom'
import { Header4 } from './Text'
import styled, { css } from 'styled-components'
import { DocumentLink } from './DocumentLink'
import { Cta } from '../types'

interface CTAProps {
  cta: Cta
}

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    margin: ${theme.layout.spacing.single} 0;
    padding: ${theme.layout.spacing.single};
    border: 1px solid;
    color: inherit;
    text-decoration: none;
  `}
`

export const CTA = ({ cta }: CTAProps) => {
  const { label, link } = cta
  if (!link || !link.document) return null
  return (
    <DocumentLink document={link.document}>
      <Wrapper>
        <Header4 family="serif">{label}</Header4>
      </Wrapper>
    </DocumentLink>
  )
}
