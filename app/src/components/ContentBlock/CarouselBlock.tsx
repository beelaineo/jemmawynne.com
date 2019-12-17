import * as React from 'react'
import { Carousel as CarouselType } from '../../types'
import { SectionHeader, SectionWrapper } from './Shared'
import { CollectionCarousel, Carousel } from '../Carousel'

interface CarouselBlockProps {
  content: CarouselType
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
  console.log(content)
  const { title, collection, items } = content
  return (
    <SectionWrapper type="carousel">
      <SectionHeader title={title} />
      {collection ? (
        <CollectionCarousel collection={collection} />
      ) : (
        <Carousel>
          <p>Items</p>
        </Carousel>
      )}
    </SectionWrapper>
  )

  // mocking the data
  // let counter = 0
  // let allImages = []
  // while (counter < 6) {
  //   allImages.push(
  //     <FlexSix margin="double">
  //       <Square></Square>
  //       <Header5 align="center">Product Name</Header5>
  //     </FlexSix>,
  //   )
  //   counter++
  // }
  // return (
  //   <CarouselBlockStyled>
  //     <Header2>{title}</Header2>
  //     <FlexContainer margin="double" marginVertical="triple">
  //       {allImages}
  //     </FlexContainer>
  //   </CarouselBlockStyled>
  // )
}
