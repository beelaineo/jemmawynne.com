import * as React from 'react'
import { Box } from '@xstyled/styled-components'
import { Carousel as CarouselType } from '../../types'
import { SectionHeader, SectionWrapper } from './Shared'
import { CollectionCarousel, ItemsCarousel } from '../Carousel'
import { CTA } from '../CTA'

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
  const { title, collection, items, cta } = content
  return (
    <SectionWrapper type="carousel">
      <SectionHeader title={title} linkToDocument={collection} />
      <div>
        {collection ? (
          <CollectionCarousel collection={collection} />
        ) : items ? (
          <ItemsCarousel items={items} />
        ) : null}
      </div>
      {cta ? (
        <Box mt={8} mb={5} mx="auto">
          <CTA cta={cta} level={2} />
        </Box>
      ) : null}
    </SectionWrapper>
  )
}
