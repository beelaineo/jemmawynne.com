import * as React from 'react'
import styled, { css, DefaultTheme } from '@xstyled/styled-components'
import { Heading } from '../Text'
import Link from 'next/link'

interface WithAsAndTo {
  theme: DefaultTheme
  justify?: string
  as?: string | typeof Link
  to?: string
}

export const FigureWrapper = styled.div<WithAsAndTo>`
  ${({ justify }) => css`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: ${justify || 'center'};
    color: inherit;
    text-decoration: none;
  `}
`

export const ImageWrapper = styled.div`
  display: flex;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

interface CaptionProps {
  children: React.ReactNode
}

const CaptionWrapper = styled.figcaption`
  margin-top: 3;
  min-height: 2.35em;
  color: inherit;
  text-decoration: none;
`

export const Caption = ({ children }: CaptionProps) => (
  <CaptionWrapper>
    <Heading level={5}>{children}</Heading>
  </CaptionWrapper>
)
