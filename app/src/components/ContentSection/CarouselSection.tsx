import * as React from 'react'
import { ContentSection } from '../../types'
import { Wrapper } from './styled'
import { renderContentBlock } from './renderContentBlock'

interface CarouselSectionProps {
	section: ContentSection
}

export const CarouselSection = ({ section }: CarouselSectionProps) => {
	const { items } = section
	return (
		<React.Fragment>
			{items ? items.map(renderContentBlock) : null}
		</React.Fragment>
	)
}
