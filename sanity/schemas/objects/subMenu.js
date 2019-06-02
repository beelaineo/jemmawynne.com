export const subMenu = {
	title: 'Dropdown Menu',
	name: 'subMenu',
	type: 'object',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Link Group',
			name: 'menuGroup',
			type: 'object',
			fields: [
				{
					title: 'Group Title',
					name: 'title',
					type: 'string',
				},
				{
					title: 'Links',
					name: 'links',
					type: 'array',
					validation: (Rule) => Rule.required().max(12),
					of: [{ type: 'pageLink' }],
				},
			],
		},
	],
}
