import * as React from 'react'
import Link from 'next/link'
import { Heading } from './Text'
import styled, { css } from 'styled-components'
import { DocumentLink } from './DocumentLink'
import { Cta } from '../types'

interface CTAProps {
  cta: Cta
}

const Wrapper = styled.div`
  display: inline-block;
  margin: 3 0;
  padding: 3;
  border: 1px solid;
  color: inherit;
  text-decoration: none;
`

export const CTA = ({ cta }: CTAProps) => {
  const { label, link } = cta
  if (!link || !link.document) return null
  return (
    <DocumentLink document={link.document}>
      <Wrapper>
        <Heading level={4} family="serif">
          {label}
        </Heading>
      </Wrapper>
    </DocumentLink>
  )
}
