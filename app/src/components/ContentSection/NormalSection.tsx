import * as React from 'react'
import { ContentSection } from '../../types'
import { Wrapper } from './styled'
import { ImageBlock } from './ImageBlock'
import { TextBlock } from './TextBlock'

interface NormalSectionProps {
	block: ContentSection
}

export const NormalSection = ({ block }: NormalSectionProps) => {
	console.log(block.items)
	const { items } = block

	console.log(items)
	return null
	// return <React.Fragment>{items ? items.map((item) => item.)}</React.Fragment>
}
