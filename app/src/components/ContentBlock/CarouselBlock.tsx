import * as React from 'react'
import { Carousel } from '../../types'
import { Placeholder } from '../Placeholder'
import { CarouselBlockStyled, Square } from '../Layout/Containers'
import { Header2, Header5 } from '../Text'
import { FlexContainer, FlexSix } from '../Layout/Flex'

interface CarouselBlockProps {
  carousel: Carousel
}

/**
 * Carousel Block
 *
 * When given props.collection, uses items from that collection
 * to populate a carousel.
 *
 * Otherwise, uses props.items for the carousel
 */

export const CarouselBlock = (props: CarouselBlockProps) => {
  let { title } = props.carousel

  // mocking the data
  let counter = 0
  let allImages = []
  while (counter < 6) {
    allImages.push(
      <FlexSix margin="double">
        <Square></Square>
        <Header5 align="center">Product Name</Header5>
      </FlexSix>,
    )
    counter++
  }
  return (
    <CarouselBlockStyled>
      <Header2>{title}</Header2>
      <FlexContainer margin="double" marginVertical="triple">
        {allImages}
      </FlexContainer>
    </CarouselBlockStyled>
  )
}
