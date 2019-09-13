export const homepage = {
	title: 'Homepage',
	type: 'document',
	name: 'homepage',
	fields: [
		{
			name: 'content',
			label: 'Content',
			type: 'array',
			of: [
				{ type: 'hero' },
				{ type: 'carousel' },
				{ type: 'imageTextSection' },
			],
		},
		{
			name: 'contentSections',
			label: 'Content Blocks',
			type: 'array',
			of: [{ type: 'contentSection' }],
		},
	],
	preview: {
		select: {},
		prepare: () => ({
			title: 'Homepage',
		}),
	},
}
