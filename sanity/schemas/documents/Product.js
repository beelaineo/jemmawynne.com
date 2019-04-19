const Product = {
	title: 'Products',
	name: 'shopifyProduct',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			readOnly: true,
			type: 'string'
		},
		{
			title: 'Banner',
			name: 'hero',
			type: 'object',
			fields: [
				{
					title: 'Images',
					name: 'images',
					type: 'array',
					of: [
						{
							type: 'image',
							options: {
								hotspot: true,
							},
						},
					],
					validation: Rule => Rule.required().max(2),
				},
			],
		},

	],
	preview: {
		select: {
			shopifyItem: 'shopifyItem',
			title: 'title',
		},
		prepare: ({ shopifyItem, title }) => ({
			title: shopifyItem ? title || shopifyItem.title : title,
		}),
	},
}

export default Product
