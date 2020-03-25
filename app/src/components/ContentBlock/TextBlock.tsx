import * as React from 'react'
import styled, { css, Box } from '@xstyled/styled-components'
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

const TextContainer = styled.div`
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  line-height: 1.2;
`

export interface TextBlockProps {
  content: TextBlockType
}

export const TextBlock = ({ content }: TextBlockProps) => {
  const { header, bodyRaw, cta, textAlign } = content

  return (
    <TextBlockWrapper textAlign={textAlign}>
      <Heading level={5} mb={5} family="sans">
        {header}
      </Heading>
      <TextContainer>
        {bodyRaw ? <RichText body={bodyRaw} /> : null}
        {cta ? (
          <Box mt={5}>
            <CTA cta={cta} />
          </Box>
        ) : null}
      </TextContainer>
    </TextBlockWrapper>
  )
}
