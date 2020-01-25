import * as React from 'react'
import { ContentSection as ContentSectionType } from '../../types'
import { CarouselSection } from './CarouselSection'
import { NormalSection } from './NormalSection'
import { Wrapper, Inner } from './styled'
import { Image } from '../Image'

interface ContentSectionProps {
  section: ContentSectionType
}

export const ContentSection = (props: ContentSectionProps) => {
  const { section } = props
  const BlockForType =
    section.layout === 'carousel' ? CarouselSection : NormalSection
  return (
    <Wrapper section={section}>
      {section.backgroundImage ? (
        <Image image={section.backgroundImage} />
      ) : null}
      <Inner section={section}>
        <BlockForType section={section} />
      </Inner>
    </Wrapper>
  )
}
