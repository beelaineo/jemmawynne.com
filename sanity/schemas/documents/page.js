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
	],
}
