import * as React from 'react'
import { Image as ImageType } from '../../types'
import { Heading } from '../Text'
import { FigureWrapper, ImageWrapper, Caption } from './styled'
import { Image } from '../Image'

interface FigureProps {
  image: ImageType
  imageRatio?: number
  caption: string | void
  justify?: string
  /* */
}

export const Figure = ({
  image,
  imageRatio,
  caption,
  justify,
}: FigureProps) => {
  console.warn('<Figure> is deprecated')
  return (
    <FigureWrapper justify={justify}>
      <ImageWrapper>
        <Image image={image} ratio={imageRatio} />
      </ImageWrapper>
      {caption ? (
        <Heading level={5} family="sans" weight={4}>
          {caption}
        </Heading>
      ) : null}
    </FigureWrapper>
  )
}
