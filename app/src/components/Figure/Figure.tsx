import * as React from 'react'
import { Link } from 'react-router-dom'
import { Image as ImageType } from '../../Types'
import { FigureWrapper, ImageWrapper, Caption } from './styled'
import { Image } from '../Image'

interface FigureProps {
	image: ImageType
	imageRatio?: number
	linkTo?: string
	caption?: string
	/* */
}

export const Figure = ({ image, imageRatio, linkTo, caption }: FigureProps) => {
	const wrapperAs = linkTo ? Link : undefined

	return (
		<FigureWrapper as={wrapperAs} to={linkTo}>
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
