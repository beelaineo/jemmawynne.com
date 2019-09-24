import * as React from 'react'
import styled, { css } from 'styled-components'
import { ImageTextSection as ImageTextSectionType } from '../../types/generated'
import { SectionHeader } from './SectionHeader'
import { ImageBlock } from './ImageBlock'
import { TextBlock } from './TextBlock'

const BlocksWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: center;
    padding: ${theme.layout.spacing.double};

    & > * + * {
      margin-left: ${theme.layout.spacing.double};
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
    <>
      <SectionHeader title={title} subtitle={subtitleRaw} />
      {content.blocks ? (
        <BlocksWrapper>
          {content.blocks.map((block, index) => {
            if (!block) return null
            switch (block.__typename) {
              case 'ImageBlock':
                return (
                  <BlockWrapper key={block._key || index}>
                    <ImageBlock content={block} />
                  </BlockWrapper>
                )
              case 'TextBlock':
                return (
                  <BlockWrapper>
                    <TextBlock key={block._key || index} content={block} />
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
    </>
  )
}
