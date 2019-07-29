import * as React from 'react'
import { ImageBlock } from './ImageBlock'
import { TextBlock } from './TextBlock'
import { ImageBlockOrTextBlock } from '../../types/generated'

export const renderContentBlock = (block?: ImageBlockOrTextBlock) => {
	if (!block) return null
	switch (block.__typename) {
		case 'TextBlock':
			return <TextBlock key={block._key} block={block} />
		case 'ImageBlock':
			return <ImageBlock key={block._key} block={block} />
		default:
			// @ts-ignore
			throw new Error(`There is no block for type ${block.__typename}`)
	}
}
