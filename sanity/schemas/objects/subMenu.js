import { IoIosListBox } from 'react-icons/io'

export const linkGroup = {
	title: 'Link Group',
	name: 'linkGroup',
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
}

export const subMenu = {
	title: 'Dropdown Menu',
	name: 'subMenu',
	type: 'object',
	icon: IoIosListBox,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Columns',
			name: 'columns',
			type: 'array',
			of: [{ type: 'linkGroup' }, { type: 'imageBlock' }],
		},
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare: ({ title }) => ({
			title: `Menu: ${title}`,
		}),
	},
}
