import * as React from 'react'
import { Carousel as CarouselType } from '../../types'
import { SectionHeader, SectionWrapper } from './Shared'
import { Carousel } from '../Carousel'
import { Placeholder } from '../Placeholder'
import { CarouselBlockStyled, Square } from '../Layout/Containers'
import { Header2, Header5 } from '../Text'
import { FlexContainer, FlexSix } from '../Layout/Flex'

interface CarouselBlockProps {
  carousel: CarouselType
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
  console.log(props)
  const { title, collection, items } = props.carousel
  console.log

  return (
    <SectionWrapper>
      <SectionHeader title={title} />
      <Carousel>
        {collection ? (
          <p>Collection carousel</p>
        ) : items ? (
          <p>Items</p>
        ) : // items.map((item) => {
        //   return null
        // })
        null}
      </Carousel>
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
