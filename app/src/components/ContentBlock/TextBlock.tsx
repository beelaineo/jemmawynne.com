import * as React from 'react'
import styled, { css } from 'styled-components'
import { TextBlock as TextBlockType } from '../../types/generated'
import { Header2 } from '../Text'
import { RichText } from '../RichText'
import { CTA } from '../CTA'

const TextBlockWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`

export interface TextBlockProps {
  content: TextBlockType
}

export const TextBlock = ({ content }: TextBlockProps) => {
  const { header, bodyRaw, cta } = content
  return (
    <TextBlockWrapper>
      <Header2>{header}</Header2>
      {bodyRaw ? <RichText body={bodyRaw} /> : null}
      {cta ? <CTA cta={cta} /> : null}
    </TextBlockWrapper>
  )
}
