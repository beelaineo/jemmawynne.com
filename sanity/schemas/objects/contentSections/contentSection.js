import * as React from 'react'
import { BlockPreview } from './BlockPreview'
import { getImageThumbnail } from '../../utils'
import { getBlockValues } from './getValues'

const noop = () => {}

const getPreviewValues = async (values) => {
	const { items, layout, backgroundImage } = values

	const [blockValues, bgImageUrl] = await Promise.all([
		items && items.length ? getBlockValues(items[0]) : noop,
		getImageThumbnail(backgroundImage),
	])

	const info = [
		layout === 'carousel' ? '🎠Carousel' : null,
		items && items.length
			? `📝${items.length} item${items.length === 1 ? '' : 's'}`
			: null,
	].filter(Boolean)

	const titles = [blockValues.title, blockValues.subtitle, null, null].filter(
		(i) => i !== undefined,
	)

	const [title, subtitle] = titles
	return {
		title,
		subtitles: [subtitle, info.length ? info.join('  ') : undefined].filter(
			Boolean,
		),
		src: bgImageUrl || blockValues.src,
	}
}

export const contentSection = {
	name: 'contentSection',
	type: 'object',
	title: 'Content Block',
	fields: [
		{
			name: 'items',
			title: 'Content',
			type: 'array',
			of: [{ type: 'textBlock' }, { type: 'imageBlock' }],
			validation: (Rule) => Rule.required().min(1),
		},
		{
			name: 'layout',
			title: 'Layout',
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
			title: 'Background Image',
			options: {
				required: false,
				hotspot: true,
			},
		},
		{
			name: 'backgroundColor',
			type: 'colorPicker',
			title: 'Background Color',
		},
		{
			name: 'textColor',
			type: 'colorPicker',
			title: 'Text Color',
		},
		{
			name: 'textAlign',
			type: 'string',
			title: 'Text Alignment',
			options: {
				list: [
					{ title: 'Left', value: 'left' },
					{ title: 'Center (default)', value: 'center' },
					{ title: 'Right', value: 'right' },
				],
				layout: 'radio',
			},
		},
		{
			name: 'alignItems',
			type: 'string',
			title: 'Block Alignment',
			options: {
				list: [
					{ title: 'Left', value: 'left' },
					{ title: 'Center (default)', value: 'center' },
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
