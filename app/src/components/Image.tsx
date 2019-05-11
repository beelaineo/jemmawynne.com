import * as React from 'react'
import { Image as ImageType } from '../types'

interface ImageProps {
	image: ImageType
}

export const Image = ({ image }: ImageProps) => <img src={image.originalSrc} alt={image.altText} />
