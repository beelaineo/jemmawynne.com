import { link } from './linkWorkaround'

export const cta = {
	name: 'cta',
	title: 'CTA Button',
	type: 'object',
	fields: [
		{
			name: 'label',
			type: 'string',
			label: 'Label',
			validation: (Rule) => Rule.required().max(25),
		},

		{
			...link,
			name: 'link',
			options: {
				required: true,
			},
		},
	],
}
