export const cta = {
	name: 'cta',
	title: 'CTA Button',
	type: 'object',
	fields: [
		{
			name: 'label',
			type: 'string',
			label: 'Label',
			// validation: (Rule) => Rule.required().max(25),
		},

		{
			type: 'pageLink',
			name: 'link',
			options: {
				required: true,
			},
		},
	],
}
