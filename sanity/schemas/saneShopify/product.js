export const product = {
  fields: [
    {
      title: 'Info Blocks',
      name: 'infoBlocks',
      type: 'array',
      description:
        'Info blocks here will appear as accordion-dropdowns, below the product description. You can also add content blocks to multiple items in the "Product Info" section of the CMS.',
      of: [{ type: 'productInfoBlock' }],
    },
    {
      title: 'Related Products',
      name: 'related',
      type: 'carousel',
    },
    {
      name: 'seo',
      type: 'seo',
      description:
        'Custom SEO settings. By default, the product description and image will be used.',
    },
  ],
}
