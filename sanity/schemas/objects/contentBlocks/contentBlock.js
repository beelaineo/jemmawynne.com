import * as React from 'react'
import { BlockPreview } from './BlockPreview'
import { getImageThumbnail } from '../../utils'
import { getBlockValues } from './getValues'

const getPreviewValues = async (values) => {
	const { items, layout, backgroundImage } = values

	const [blockValues, bgImageUrl] = await Promise.all([
		getBlockValues(items[0]),
		getImageThumbnail(backgroundImage),
	])

	const links = items.map((item) => item.link).filter(Boolean)

	const info = [
		layout === 'carousel' ? '🎠Carousel' : null,
		links && links.length
			? `🔗${links.length} linked item${links.length === 1 ? '' : 's'}`
			: null,
	].filter(Boolean)

	return {
		title: blockValues.title,
		subtitles: [
			blockValues.subtitle,
			info.length ? info.join('  ') : undefined,
		].filter(Boolean),
		src: bgImageUrl || blockValues.src,
	}
}

export const contentBlock = {
	name: 'contentBlock',
	type: 'object',
	title: 'Content Block',
	fields: [
		{
			name: 'items',
			label: 'Content',
			type: 'array',
			of: [{ type: 'textBlock' }, { type: 'imageBlock' }],
			validation: (Rule) => Rule.required().min(1),
		},
		{
			name: 'layout',
			label: 'Block Type',
			type: 'string',
			options: {
				list: [
					{ title: 'Normal', value: 'normal' },
					{ title: 'Carousel', value: 'carousel' },
				],
				layout: 'radio',
				default: 'normal',
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'backgroundImage',
			type: 'imageWithAltText',
			label: 'Background Image',
			options: {
				required: false,
				hotspot: true,
			},
		},
		{
			name: 'backgroundColor',
			type: 'colorPicker',
			label: 'Background Color',
		},
		{
			name: 'textColor',
			type: 'colorPicker',
			label: 'Text Color',
		},
		{
			name: 'textAlign',
			type: 'string',
			label: 'Text Alignment',
			options: {
				list: [
					{ title: 'Left', value: 'left' },
					{ title: 'Center', value: 'center' },
					{ title: 'Right', value: 'right' },
				],
				layout: 'radio',
			},
		},
	],
	preview: {
		select: {
			items: 'items',
			layout: 'layout',
			backgroundImage: 'backgroundImage',
		},
		component: (props) => (
			<BlockPreview {...props} getPreviewValues={getPreviewValues} />
		),
	},
}
