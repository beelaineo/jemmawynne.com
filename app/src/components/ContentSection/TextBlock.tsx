import * as React from 'react'
import { TextBlock as TextBlockType } from '../../types/generated'

export interface TextBlockProps {
	block: TextBlockType
}

export const TextBlock = ({ block }: TextBlockProps) => {
	console.log(block)
	return <div>...</div>
}
