import { TextBlockPreview } from './TextBlockPreview'

export const contentItem = {
	name: 'textBlock',
	label: 'Text Block',
	type: 'object',
	fields: [
		{
			name: 'title',
			label: 'Title',
			type: 'string',
		},
		{
			name: 'body',
			label: 'Text',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [
						{ title: 'Normal', value: 'normal' },
						{ title: 'Header5', value: 'h5' },
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
			name: 'cta',
			title: 'Link / CTA',
			type: 'pageLink',
		},
	],
	preview: {
		select: {
			title: 'title',
			body: 'body',
			cta: 'cta',
		},
		component: TextBlockPreview,
	},
}
