/**
 * For now, arrays cannot be exported as top-level types
 * for the GraphQL Api. Import this and implement it manually
 */

export const link = {
	title: 'Link',
	description: 'Link to a Page or URL',
	type: 'array',
	of: [{ type: 'pageLink' }, { name: 'urlLink', type: 'urlLink' }],
	validation: (Rule) => {
		const { options } = Rule._typeDef
		if (options && options.required) return Rule.required()
		return Rule.custom(() => true)
	},
}
