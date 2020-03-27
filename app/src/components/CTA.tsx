import * as React from 'react'
import { Heading } from './Text'
import styled from '@xstyled/styled-components'
import { DocumentLink } from './DocumentLink'
import { Cta } from '../types'

interface CTAProps {
  cta: Cta
}

const Wrapper = styled.div`
  margin: 3 0;
`

const Inner = styled.div`
  padding: 3;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  color: inherit;
  text-decoration: none;
  min-width: 240px;
`

export const CTA = ({ cta }: CTAProps) => {
  const { label, link } = cta
  if (!link || !link.document) return null
  return (
    <Wrapper>
      <DocumentLink document={link.document}>
        <Inner>
          <Heading
            level={7}
            my={0}
            textTransform="uppercase"
            weight={3}
            family="sans"
          >
            {label}
          </Heading>
        </Inner>
      </DocumentLink>
    </Wrapper>
  )
}
