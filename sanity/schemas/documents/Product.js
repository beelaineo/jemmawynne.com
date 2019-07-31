import { createProductDocument } from '@sane-shopify/sanity-plugin'

export const Product = createProductDocument({
	fields: [
		{
			title: 'Info Blocks',
			name: 'infoBlocks',
			type: 'array',
			description:
				'Info blocks here will appear as accordion-dropdowns, below the product description. You can also add content blocks to multiple items in the "Product Info" section of the CMS.',
			of: [{ type: 'productInfoBlock' }],
		},
	],
})
