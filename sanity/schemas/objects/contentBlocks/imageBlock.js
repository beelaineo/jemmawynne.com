import * as React from 'react'
import { BlockPreview } from './BlockPreview'
import { link } from '../linkWorkaround'
import {
	getImageThumbnail,
	getReferencedDocument,
	getShopifyThumbnail,
} from '../../utils'

const noop = () => undefined

const getPreviewValues = async (props) => {
	const { title, caption, images, link } = props
	const titles = [title, caption].filter(Boolean)

	const [imageUrl, linkedDoc] = await Promise.all([
		images && images.length ? getImageThumbnail(images[0]) : noop(),
		link && link._ref ? getReferencedDocument(link._ref) : noop(),
	])

	const shopifyThumbnail =
		linkedDoc &&
		(linkedDoc._type === 'shopifyProduct' ||
			linkedDoc._type === 'shopifyCollection')
			? getShopifyThumbnail(linkedDoc)
			: undefined
	const subtitle = titles.length >= 2 ? titles[1] : undefined

	const info = [linkedDoc ? `🔗${linkedDoc.title}` : null].filter(Boolean)

	return {
		title: titles[0],
		subtitles: [subtitle, info.length ? info.join(' ') : undefined].filter(
			Boolean,
		),
		src: imageUrl || shopifyThumbnail,
	}
	//
}
export const imageBlock = {
	name: 'imageBlock',
	title: 'Image Block',
	type: 'object',
	fields: [
		{
			name: 'images',
			label: 'Images',
			type: 'array',
			of: [{ type: 'imageWithAltText' }],
			validation: (Rule) => {
				// TODO return error when CTA does not link to product or collection
				return Rule.required().max(2)
			},
			description:
				'Defaults to product or collection image if empty. Add a second image for a hover effect',
		},
		{
			name: 'title',
			type: 'string',
			label: 'Title',
			description: 'Defaults to product or collection title if empty',
		},
		{
			name: 'caption',
			type: 'string',
			label: 'Caption',
			validation: (Rule) => Rule.max(150),
		},
		{
			...link,
			name: 'link',
		},
	],
	preview: {
		select: {
			images: 'images',
			title: 'title',
			caption: 'caption',
			link: 'link',
		},
		component: (props) => (
			<BlockPreview {...props} getPreviewValues={getPreviewValues} />
		),
	},
}
