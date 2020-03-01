import * as React from 'react'
import styled from 'styled-components'
import { Carousel as CarouselType } from '../../types'
import { SectionHeader, SectionWrapper } from './Shared'
import { CollectionCarousel, ItemsCarousel } from '../Carousel'

interface CarouselBlockProps {
  content: Omit<CarouselType, '__typename'>
}

const CarouselWrapper = styled.div`
  height: 30vw;
`

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
      <CarouselWrapper>
        {collection ? (
          <CollectionCarousel collection={collection} />
        ) : items ? (
          <ItemsCarousel items={items} />
        ) : null}
      </CarouselWrapper>
    </SectionWrapper>
  )
}
