export const homepage = {
	title: 'Homepage',
	type: 'document',
	name: 'homepage',
	fields: [
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
