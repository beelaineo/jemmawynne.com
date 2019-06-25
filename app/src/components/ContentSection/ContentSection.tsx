import * as React from 'react'
import { ContentSection as ContentSectionType } from '../../types'
import { CarouselSection } from './CarouselSection'
import { NormalSection } from './NormalSection'
import { Wrapper } from './styled'
import { Image } from '../Image'

interface ContentSectionProps {
	block: ContentSectionType
}

export const ContentSection = (props: ContentSectionProps) => {
	const { block } = props
	const BlockForType =
		block.layout === 'carousel' ? CarouselSection : NormalSection
	return (
		<Wrapper block={block}>
			{block.backgroundImage ? <Image image={block.backgroundImage} /> : null}
			<BlockForType block={block} />
		</Wrapper>
	)
}
