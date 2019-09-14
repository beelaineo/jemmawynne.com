export const imageTextSection = {
	name: 'imageTextSection',
	title: 'Text & Images',
	type: 'object',
	fields: [
		{
			name: 'title',
			label: 'Title',
			type: 'string',
		},
		{
			name: 'subtitle',
			label: 'Subtitle',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [{ title: 'Normal', value: 'normal' }],
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
			name: 'blocks',
			title: 'Content Blocks',
			type: 'array',
			of: [{ type: 'imageTextBlock' }],
			validation: (Rule) => Rule.max(3),
		},
	],
}
