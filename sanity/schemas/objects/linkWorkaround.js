/**
 * For now, arrays cannot be exported as top-level types
 * for the GraphQL Api. Import this and implement it manually
 */

// export const link = {
// 	title: 'Link',
// 	description: 'Link to a Page, Product, Collection or URL',
// 	type: 'array',
// 	of: [{ type: 'pageLink' }, { name: 'urlLink', type: 'urlLink' }],
// 	validation: (Rule) => {
// 		const { options } = Rule._typeDef
// 		if (options && options.required) return Rule.required().max(1)
// 		return Rule.max(1)
// 	},
// }
