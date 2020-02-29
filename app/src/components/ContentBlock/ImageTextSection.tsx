import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { ImageTextSection as ImageTextSectionType } from '../../types'
import { SectionHeader, SectionWrapper } from './Shared'
import { ImageBlock } from './ImageBlock'
import { TextBlock } from './TextBlock'

const BlocksWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 5;

    & > * + * {
      margin-left: 5;
    }
  `}
`

const BlockWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 45%;
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
          {content.blocks.map((block, index) => {
            if (!block) return null
            const key = block._key || index
            switch (block.__typename) {
              case 'ImageBlock':
                return (
                  <BlockWrapper key={key}>
                    <ImageBlock content={block} />
                  </BlockWrapper>
                )
              case 'TextBlock':
                return (
                  <BlockWrapper key={key}>
                    <TextBlock content={block} />
                  </BlockWrapper>
                )
              default:
                throw new Error(
                  // @ts-ignore
                  `There is no content block for type "${block.__typename}"`,
                )
            }
          })}
        </BlocksWrapper>
      ) : null}
    </SectionWrapper>
  )
}
