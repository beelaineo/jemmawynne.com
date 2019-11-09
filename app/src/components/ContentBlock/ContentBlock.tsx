import * as React from 'react'
import {
  Hero,
  ImageTextSection as ImageTextSectionType,
  Carousel,
} from '../../types'
import { HeroBlock } from './HeroBlock'
import { CarouselBlock } from './CarouselBlock'
import { ImageTextSection } from './ImageTextSection'

interface ContentBlockProps {
  content: ImageTextSectionType | Hero | Carousel
}

/**
 * determines the format of the content block and renders the appropriate component
 */

export const ContentBlock = ({ content }: ContentBlockProps) => {
  switch (content.__typename) {
    case 'ImageTextSection':
      return (
        //
        <ImageTextSection content={content} />
      )
    case 'Hero':
      return (
        //
        <HeroBlock hero={content} />
      )
    case 'Carousel':
      return (
        //
        <CarouselBlock carousel={content} />
      )
    default:
      // @ts-ignore
      console.warn(`No content block for type "${content.__typename}"`)
      return null
  }
}
