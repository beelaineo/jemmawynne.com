import * as React from 'react'
import { Carousel as CarouselType } from '../../types'
import { SectionHeader, SectionWrapper } from './Shared'
import { CollectionCarousel, ItemsCarousel } from '../Carousel'

interface CarouselBlockProps {
  content: Omit<CarouselType, '__typename'>
}

/**
 * Carousel Block
 *
 * When given props.collection, uses items from that collection
 * to populate a carousel.
 *
 * Otherwise, uses props.items for the carousel
 */

export const CarouselBlock = ({ content }: CarouselBlockProps) => {
  const { title, collection, items } = content
  return (
    <SectionWrapper type="carousel">
      <SectionHeader title={title} />
      <div>
        {collection ? (
          <CollectionCarousel collection={collection} />
        ) : items ? (
          <ItemsCarousel items={items} />
        ) : null}
      </div>
    </SectionWrapper>
  )
}
