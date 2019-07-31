export const Menu = {
	title: 'Navigation Menu',
	name: 'menu',
	type: 'document',
	fields: [
		{
			name: 'menuItems',
			title: 'Menu Items',
			type: 'array',
			of: [
				{
					type: 'menuLink',
				},
				{
					type: 'subMenu',
					name: 'subMenu',
				},
			],
		},
	],
	preview: {
		select: {},
		prepare: () => ({
			title: 'Nav menu',
		}),
	},
}
