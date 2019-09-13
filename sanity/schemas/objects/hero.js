import { blocksToPlainText } from '../utils'

export const hero = {
	name: 'hero',
	title: 'Hero',
	type: 'object',
	fields: [
		{
			name: 'body',
			title: 'Text',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [
						{ title: 'Header 2', value: 'h2' },
						{ title: 'Header 3', value: 'h3' },
						{ title: 'Normal', value: 'normal' },
					],
					marks: {
						decorators: [
							{ title: 'Strong', value: 'strong' },
							{ title: 'Emphasis', value: 'em' },
						],
					},
				},
			],
		},
		{
			name: 'textPosition',
			title: 'Text Position',
			type: 'position',
		},
		{
			name: 'image',
			title: 'Background Image',
			type: 'backgroundImage',
		},
		{
			name: 'mobileImage',
			title: 'Background Image (mobile)',
			type: 'backgroundImage',
		},
		{
			name: 'textPositionMobile',
			title: 'Text Position (Mobile)',
			type: 'position',
		},
	],
	preview: {
		select: {
			title: 'body',
			media: 'image',
		},
		prepare: ({ title, media }) => {
			return {
				media,
				title: title && title.length ? blocksToPlainText(title) : '(no text)',
			}
		},
	},
}
