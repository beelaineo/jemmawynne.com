import * as React from 'react'
import styled, { css } from 'styled-components'
import { ShopifyImage, SanityImage } from '../../types'

export const ImageWrapper = styled.img`
	${({ theme }) => css`
		display: block;
	`}
`

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
	return <ImageWrapper src={src} alt={altText} />
}
