export const homepage = {
	title: 'Homepage',
	type: 'document',
	name: 'homepage',
	fields: [
		{
			name: 'contentBlocks',
			label: 'Content Blocks',
			type: 'array',
			of: [{ type: 'contentBlock' }],
		},
	],
	preview: {
		select: {},
		prepare: () => ({
			title: 'Homepage',
		}),
	},
}
