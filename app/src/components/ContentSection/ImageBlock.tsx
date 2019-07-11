import * as React from 'react'
import { ImageBlock as ImageBlockType } from '../../types/generated'
import { ImageBlockWrapper, ImageWrapper } from './styled'
import { Image } from '../Image'

export interface ImageBlockProps {
	block: ImageBlockType
}

export const ImageBlock = ({ block }: ImageBlockProps) => {
	console.log(block)
	if (!block.images || !block.images.length) return null
	return (
		<ImageBlockWrapper>
			<ImageWrapper>
				<Image image={block.images[0]} />
			</ImageWrapper>
			<p>(caption)</p>
		</ImageBlockWrapper>
	)
}
