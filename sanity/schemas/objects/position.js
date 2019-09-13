export const position = {
	name: 'position',
	label: 'Position',
	type: 'string',
	options: {
		list: [
			{ title: '↖️ Top Left', value: 'top-left' },
			{ title: '⬆️ Top Center', value: 'top-center' },
			{ title: '↗️Top Right', value: 'top-right' },
			{ title: '⬅️ Middle Left', value: 'middle-left' },
			{ title: '⏺ Middle Center', value: 'middle-center' },
			{ title: '➡️Middle Right', value: 'middle-right' },
			{ title: '↙️Bottom Left', value: 'bottom-left' },
			{ title: '⬇️ Bottom Center', value: 'bottom-center' },
			{ title: '↘️ Bottom Right', value: 'bottom-right' },
		],
	},
	validation: (Rule) => Rule.required(),
}
