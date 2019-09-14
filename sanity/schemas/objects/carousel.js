export const carousel = {
	name: 'carousel',
	title: 'Carousel',
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
			name: 'collection',
			label: 'Collection',
			type: 'pageLink',
			description:
				'Create a carousel from a collection. If a collection is used, items linked to below be ignored.',
		},
		{
			name: 'items',
			label: 'Carousel Items',
			type: 'array',
			of: [{ type: 'pageLink' }],
		},
	],
}
