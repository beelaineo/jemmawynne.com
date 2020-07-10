import * as React from 'react'
import { Heading } from './Text'
import styled, { css } from '@xstyled/styled-components'
import { DocumentLink } from './DocumentLink'
import { Cta } from '../types'

interface CTAProps {
  cta: Cta
  level?: number
}

interface WithLevel {
  level?: number
}

const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: 3 0;
    ${theme.mediaQueries.tablet} {
      margin: 1 0;
    }
  `}
`

const Inner = styled.div<WithLevel>`
  ${({ level }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: inherit;
    text-decoration: none;
    position: relative;

    ${level === undefined || level === 1
      ? css`
          padding: 3;
          border: 1px solid;
          min-width: 240px;
        `
      : level === 2
      ? css`
          padding: 0 0 1 0;

          &:after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: calc(100% - 2px);
            height: 1px;
            background-color: currentColor;
          }
        `
      : ''}
  `}
`

export const CTA = ({ cta, level }: CTAProps) => {
  const { label, link } = cta
  if (!link || !link.document) return null
  return (
    <Wrapper>
      <DocumentLink document={link.document}>
        <Inner level={level}>
          <Heading
            level={7}
            my={0}
            textTransform="uppercase"
            weight={4}
            family="sans"
          >
            {label}
          </Heading>
        </Inner>
      </DocumentLink>
    </Wrapper>
  )
}
