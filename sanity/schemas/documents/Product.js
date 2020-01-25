import {
  createProductVariantFields,
  createProductDocument,
} from '@sane-shopify/sanity-plugin'

export const productVariant = createProductVariantFields({})

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
    // {
    // 	title: 'Content Blocks (Bottom)',
    // 	name: 'contentBlocksAfter',
    // 	description:
    // 		'These blocks will appear below the product description, and above the Related Items carousel.',
    // 	type: 'array',
    // 	of: [{ type: 'contentSection' }],
    // },
    {
      title: 'Related Products',
      name: 'related',
      type: 'carousel',
    },
  ],
})
