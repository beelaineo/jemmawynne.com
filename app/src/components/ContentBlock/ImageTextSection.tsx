import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { ImageTextSection as ImageTextSectionType } from '../../types'
import { SectionHeader, SectionWrapper } from './Shared'
import { ImageTextBlock } from './ImageTextBlock'
import { definitely } from '../../utils'

const BlocksWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    padding: 0 5;

    ${theme.mediaQueries.tablet} {
      flex-direction: column;
      padding: 0;

      & > * + * {
        margin-left: 0;
        margin-top: 3;
      }
    }
  `}
`

const BlockWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 30%;
  min-height: 45vw;
  margin-bottom: 5;

  &:nth-child(3n + 2),
  &:nth-child(3n + 3) {
    margin-left: 5;
  }
`

interface ImageTextSectionProps {
  content: ImageTextSectionType
}

export const ImageTextSection = ({ content }: ImageTextSectionProps) => {
  const { title, subtitleRaw } = content
  return (
    <SectionWrapper>
      <SectionHeader title={title} subtitle={subtitleRaw} />
      {content.blocks ? (
        <BlocksWrapper>
          {definitely(content.blocks).map((block) => (
            <BlockWrapper key={block._key || 'some-key'}>
              <ImageTextBlock block={block} />
            </BlockWrapper>
          ))}
        </BlocksWrapper>
      ) : null}
    </SectionWrapper>
  )
}
