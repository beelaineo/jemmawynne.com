import * as React from 'react'
import { Link } from 'react-router-dom'
import { Image as ImageType } from '../../Types'
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
        <Caption family="sans" weight="semi">
          {caption}
        </Caption>
      ) : null}
    </FigureWrapper>
  )
}
