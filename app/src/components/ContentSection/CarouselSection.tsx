import * as React from 'react'
import { Carousel } from '../Carousel'
import { ContentSection } from '../../types'
import { Wrapper } from './styled'
import { renderContentBlock } from './renderContentBlock'

interface CarouselSectionProps {
  section: ContentSection
}

export const CarouselSection = ({ section }: CarouselSectionProps) => {
  const { items } = section
  return <Carousel>{items ? items.map(renderContentBlock) : null}</Carousel>
}
