import * as React from 'react'
import { Link } from 'react-router-dom'
import { ImageBlock as ImageBlockType } from '../../types/generated'
import { ImageBlockWrapper, ImageWrapper } from './styled'
import { Image } from '../Image'
import { getPageLinkUrl, getPageLinkLabel } from '../../utils/links'

export interface ImageBlockProps {
	block: ImageBlockType
}

export const ImageBlock = ({ block }: ImageBlockProps) => {
	if (!block.images || !block.images.length) return null
	const caption = block.caption || getPageLinkLabel(block.link)
	const linkTo = block.link ? getPageLinkUrl(block.link) : null

	const wrapperAs = linkTo ? Link : 'div'
	return (
		<ImageBlockWrapper as={wrapperAs} to={linkTo}>
			<ImageWrapper>
				<Image image={block.images[0]} />
			</ImageWrapper>
			<p>{caption}</p>
		</ImageBlockWrapper>
	)
}
