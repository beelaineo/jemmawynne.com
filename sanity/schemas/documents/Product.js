import { createProductDocument } from '@sane-shopify/sanity-plugin'

export const Product = createProductDocument({
	fields: [
		{
			title: 'Content Blocks (before details)',
			description:
				'These blocks will appear above the product description and images',
			name: 'contentBlocksBefore',
			type: 'array',
			of: [{ type: 'contentSection' }],
		},
		{
			title: 'Info Blocks',
			name: 'infoBlocks',
			type: 'array',
			description:
				'Info blocks here will appear as accordion-dropdowns, below the product description. You can also add content blocks to multiple items in the "Product Info" section of the CMS.',
			of: [{ type: 'productInfoBlock' }],
		},
		{
			title: 'Content Blocks (Bottom)',
			name: 'contentBlocksAfter',
			description:
				'These blocks will appear below the product description, and above the Related Items carousel.',
			type: 'array',
			of: [{ type: 'contentSection' }],
		},
		{
			title: 'Related Products & Collections',
			name: 'related',
			description:
				"(coming soon) Use these fields to create a customized 'related products' carousel. If this section is empty, contents from a related collection will be shown instead.",
			type: 'helpText',
		},
	],
})
