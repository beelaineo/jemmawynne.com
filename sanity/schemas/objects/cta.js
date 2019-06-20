export const cta = {
	name: 'cta',
	label: 'CTA Button',
	type: 'object',
	fields: [
		{
			name: 'label',
			type: 'string',
			label: 'Label',
			validation: (Rule) => Rule.required().max(25),
		},

		{
			name: 'link',
			type: 'array',
			label: 'Link',
			of: [{ type: 'pageLink' }],
			validation: (Rule) => Rule.required().max(1),
		},
	],
}
