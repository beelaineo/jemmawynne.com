export const Menu = {
	title: 'Navigation Menu',
	name: 'menu',
	type: 'document',
	fields: [
		{
			title: 'Menu Items',
			name: 'items',
			type: 'array',
			of: [
				{
					type: 'pageLink',
				},
				{
					type: 'subMenu',
				},
			],
		},
	],
}
