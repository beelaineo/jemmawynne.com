import * as React from 'react'
import { ImageBlock as ImageBlockType } from '../../types/generated'

export interface ImageBlockProps {
	block: ImageBlockType
}

export const ImageBlock = ({ block }: ImageBlockProps) => {
	console.log('image block')
	console.log(block)
	return <div>...</div>
}
