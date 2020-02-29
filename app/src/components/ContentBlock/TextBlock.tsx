import * as React from 'react'
import styled, { css } from 'styled-components'
import { TextBlock as TextBlockType } from '../../types'
import { Heading } from '../Text'
import { RichText } from '../RichText'
import { CTA } from '../CTA'

interface TextBlockWrapperProps {
  textAlign?: null | string
}

const TextBlockWrapper = styled.div`
  ${({ textAlign }: TextBlockWrapperProps) => css`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    text-align: ${textAlign || 'inherit'};
  `}
`

export interface TextBlockProps {
  content: TextBlockType
}

export const TextBlock = ({ content }: TextBlockProps) => {
  const { header, bodyRaw, cta, textAlign } = content

  return (
    <TextBlockWrapper textAlign={textAlign}>
      <Heading level={2} family="serif">
        {header}
      </Heading>
      {bodyRaw ? <RichText body={bodyRaw} /> : null}
      {cta ? <CTA cta={cta} /> : null}
    </TextBlockWrapper>
  )
}
