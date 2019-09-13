import { blocksToPlainText } from '../utils'

export const imageTextBlock = {
	name: 'imageTextBlock',
	type: 'object',
	title: 'Image + Text Block',
	fields: [
		{
			name: 'body',
			title: 'Text',
			type: 'array',
			description: 'Tip: Use shift+return for a soft-wrapping line',
			of: [
				{
					type: 'block',
					styles: [
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
			name: 'ctaText',
			title: 'CTA Text',
			type: 'string',
		},
		{
			name: 'link',
			type: 'array',
			of: [{ type: 'pageLink' }, { type: 'externalLink' }],
		},
		// {
		// 	name: 'textPosition',
		// 	title: 'Text Position',
		// 	type: 'position',
		// },
		// {
		//   name: 'layout',
		//   type: 'string',
		//   title: 'Layout',
		//   options: {
		//     list: [
		//       { title: 'Normal', value: 'normal' },
		//       { title: 'Full Width', value: 'fullWidth' },
		//     ],
		//     layout: 'radio',
		//     direction: 'horizontal',
		//   },
		//   validation: (Rule) => Rule.required(),
		// },
		{
			name: 'backgroundImage',
			title: 'Background Image',
			type: 'backgroundImage',
		},
		{
			name: 'hoverImage',
			title: 'Hover Image',
			type: 'backgroundImage',
		},
	],
	preview: {
		select: {
			title: 'body',
			media: 'backgroundImage',
		},
		prepare: ({ title, media }) => {
			return {
				media,
				title: title && title.length ? blocksToPlainText(title) : '(no text)',
			}
		},
	},
}
