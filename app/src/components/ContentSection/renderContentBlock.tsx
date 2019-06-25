import * as React from 'react'
import { ImageBlock } from './ImageBlock'
import { TextBlock } from './TextBlock'
import { ImageBlockOrTextBlock } from '../../types/generated'

export const renderTextBlock = (block?: ImageBlockOrTextBlock) => {
	if (!block) return null
	switch (block.__typename) {
		case 'TextBlock':
			return <TextBlock block={block} />
		case 'ImageBlock':
			return <ImageBlock block={block} />
		default:
			// @ts-ignore
			throw new Error(`There is no block for type ${block.__typename}`)
	}
}
