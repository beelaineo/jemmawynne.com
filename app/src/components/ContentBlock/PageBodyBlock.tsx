import * as React from 'react'
import {
  PageBlock as PageBlockType,
  RichTextBlock as RichTextBlockType,
  CarouselOrCollectionGridOrHeroOrImageTextSectionOrPageBlockOrRichTextBlock,
  Maybe,
} from '../../types'
import { CarouselBlock } from './CarouselBlock'
import { ImageTextSection } from './ImageTextSection'
import { HeroBlock } from './HeroBlock'
import { CollectionGridBlock } from './CollectionGridBlock'
import { Image } from '../Image'
import { Heading } from '../Text'
import { RichText } from '../RichText'
import { definitely } from '../../utils'
import {
  PageTextInner,
  PageBlockInner,
  PageBlockBackground,
  PageImage,
  PageBlockWrapper,
  PageText,
} from './styled'
import styled, { css } from '@xstyled/styled-components'

interface RichTextBlockProps {
  block: RichTextBlockType
}

interface ColumnProps {
  textAlign?: Maybe<string> | null
}

const Column = styled.div<ColumnProps>`
  ${({ textAlign }) => css`
    margin: 5 auto;
    max-width: medium;
    text-align: ${textAlign ? textAlign : 'left'};
  `}
`

const RichTextBlock = ({ block }: RichTextBlockProps) => {
  const { textAlign } = block
  return (
    <Column textAlign={textAlign}>
      <RichText body={block.bodyRaw} />
    </Column>
  )
}

interface PageBlockProps {
  block: PageBlockType
  previousBlock?: CarouselOrCollectionGridOrHeroOrImageTextSectionOrPageBlockOrRichTextBlock
}

const hasShift = (
  block?: CarouselOrCollectionGridOrHeroOrImageTextSectionOrPageBlockOrRichTextBlock,
): boolean => {
  if (!block) return false
  if (
    block.__typename === 'PageBlock' &&
    block?.layoutOptions === 'shiftBackgroundColorDown'
  ) {
    return true
  }
  if (block.__typename !== 'PageBlock') return false
  if (!block.content) return false
  return (
    block.content.length === 1 &&
    definitely(block.content)[0].__typename === 'RichImage'
  )
}

export const PageBlock = ({ block, previousBlock }: PageBlockProps) => {
  const { alignment, backgroundColor, content } = block
  const shiftBackgroundColorDown = hasShift(block)
  const shiftContentDown = Boolean(block?.layoutOptions === 'shiftContentDown')
  const padTop = hasShift(previousBlock)
  const innerBlocks = definitely(content)
  const isAlone =
    innerBlocks.length === 1 && innerBlocks[0].__typename === 'PageText'
  return (
    <PageBlockWrapper
      padTop={padTop}
      isAlone={isAlone}
      shiftContentDown={shiftContentDown}
    >
      <PageBlockBackground
        backgroundColor={backgroundColor}
        shiftBackgroundColorDown={shiftBackgroundColorDown}
      />
      <PageBlockInner alignment={alignment}>
        {innerBlocks.map((c) =>
          c.__typename === 'PageText' ? (
            <PageText isAlone={isAlone} key={c._key || 'some-key'}>
              {c.heading ? (
                <Heading level={5} mb={5} family="sans">
                  {c.heading}
                </Heading>
              ) : null}
              <PageTextInner isAlone={isAlone}>
                <RichText body={c.bodyRaw} />
              </PageTextInner>
            </PageText>
          ) : c.__typename === 'RichImage' ? (
            <PageImage key={c._key || 'some-key'}>
              <Image image={c} />
            </PageImage>
          ) : null,
        )}
      </PageBlockInner>
    </PageBlockWrapper>
  )
}

interface PageBodyBlockProps {
  block: CarouselOrCollectionGridOrHeroOrImageTextSectionOrPageBlockOrRichTextBlock
  previousBlock?: CarouselOrCollectionGridOrHeroOrImageTextSectionOrPageBlockOrRichTextBlock
}

export const PageBodyBlock = ({ block, previousBlock }: PageBodyBlockProps) => {
  if (!block?.__typename) return null

  switch (block.__typename) {
    case 'Carousel':
      return <CarouselBlock content={block} />
    case 'Hero':
      return <HeroBlock hero={block} />
    case 'PageBlock':
      return <PageBlock block={block} previousBlock={previousBlock} />
    case 'RichTextBlock':
      return <RichTextBlock block={block} />
    case 'ImageTextSection':
      return <ImageTextSection content={block} />
    case 'CollectionGrid':
      return <CollectionGridBlock content={block} />
    default:
      // @ts-ignore
      throw new Error(`Block type "${block.__typename}" is not valid`)
  }
}
