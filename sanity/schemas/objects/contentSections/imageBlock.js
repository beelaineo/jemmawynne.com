import * as React from 'react'
import { BlockPreview } from './BlockPreview'
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
		link && link.document && link.document._ref
			? getReferencedDocument(link.document._ref)
			: noop(),
	])

	const shopifyThumbnail =
		linkedDoc &&
		(linkedDoc._type === 'shopifyProduct' ||
			linkedDoc._type === 'shopifyCollection')
			? getShopifyThumbnail(linkedDoc)
			: undefined
	const subtitle = titles.length >= 2 ? titles[1] : undefined

	const info = [
		title,
		linkedDoc ? `🔗${linkedDoc.title}` : null,
		caption,
	].filter(Boolean)
	const [previewTitle, ...subtitles] = info

	return {
		title: previewTitle,
		subtitles: [subtitles.length ? subtitles.join(' ') : undefined].filter(
			Boolean,
		),
		src: imageUrl || shopifyThumbnail,
	}
	//
}
export const imageBlock = {
	name: 'imageBlock',
	title: 'Image/Link',
	type: 'object',
	fields: [
		{
			name: 'images',
			label: 'Images',
			type: 'array',
			of: [{ type: 'imageWithAltText' }],
			validation: (Rule) => {
				// TODO return error when CTA does not link to product or collection
				return Rule.max(2)
			},
			description:
				"If no images are added, and if this content links to a product or collection, that item's first image will be used. Add a second image for a hover effect.",
		},
		{
			name: 'title',
			type: 'string',
			label: 'Title',
			description:
				"If emtpy, and if this content links to a page, product, or collection, that item's title will be used.",
		},
		{
			name: 'caption',
			type: 'string',
			label: 'Caption',
			validation: (Rule) => Rule.max(150),
		},
		{
			name: 'link',
			type: 'pageLink',
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
