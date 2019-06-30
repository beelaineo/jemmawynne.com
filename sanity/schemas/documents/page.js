export const page = {
	title: 'Page',
	type: 'document',
	name: 'page',
	fields: [
		{
			name: 'title',
			label: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'slug',
			label: 'Page URL',
			type: 'slug',
			source: 'title',
			validation: (Rule) => Rule.required(),
		},
	],
}
