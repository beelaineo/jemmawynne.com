import * as React from 'react'
import { ImageBlock as ImageBlockType } from '../../types/generated'
import { ImageBlockWrapper } from './styled'

export interface ImageBlockProps {
	block: ImageBlockType
}

export const ImageBlock = ({ block }: ImageBlockProps) => {
	console.log('image block')
	console.log(block)
	return <ImageBlockWrapper>(image block)</ImageBlockWrapper>
}
