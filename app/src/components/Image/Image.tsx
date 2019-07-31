import * as React from 'react'
import { ShopifyImage, SanityImage } from '../../types'

interface ImageProps {
	image: ShopifyImage | SanityImage
	ratio?: number
	// TODO sizes
}

interface ImageDetails {
	src: string
	altText?: string
	// TODO srcSet
	// TODO srcSetWebP
	// TODO dimensions: Dimensions
	// TODO fileType: fileType
}

const parseImage = (image: ShopifyImage | SanityImage): null | ImageDetails => {
	switch (image.__typename) {
		case 'Image':
			return { src: image.originalSrc, altText: image.altText }
		case 'ImageWithAltText':
			if (!image.asset) return null
			return {
				src: image.asset.url,
				// TODO get alt text if present
			}
		default:
			// @ts-ignore
			throw new Error(`Image type "${image.__typename}" is not supported`)
	}
}

export const Image = ({ image }: ImageProps) => {
	if (!image) return null
	const parsed = parseImage(image)
	if (!parsed) return null
	const { src, altText } = parsed
	return <img src={src} alt={altText} />
}
