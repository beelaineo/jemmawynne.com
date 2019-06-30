import * as React from 'react'
import { ImageBlock as ImageBlockType } from '../../types/generated'
import { ImageBlockWrapper } from './styled'
import { Image } from '../Image'

export interface ImageBlockProps {
	block: ImageBlockType
}

export const ImageBlock = ({ block }: ImageBlockProps) => {
	return (
		<ImageBlockWrapper>
			<Image image={block.images[0]} />
		</ImageBlockWrapper>
	)
}
