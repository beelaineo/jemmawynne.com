export const productInfo = {
  title: 'Product Info',
  type: 'document',
  name: 'productInfo',
  description: 'description',
  fieldsets: [
    {
      name: 'byType',
      title: 'By Type',
    },
    {
      name: 'byTag',
      title: 'By Tag',
    },
  ],
  fields: [
    {
      name: 'helpText',
      type: 'helpText',
      description:
        "Use these fields to add snippets of descriptions to all or some projects. For instance, you could add a 'Shipping and Returns' block on all items, and a 'Ring Sizing Guide' block to all Rings. These blocks will be displayed in accordion-dropdowns below the main product information. You can also add info blocks to individual items on their page here in the CMS.",
    },
    {
      name: 'globalBlocks',
      label: 'Global Blocks',
      description: 'These blocks will appear on every product',
      type: 'array',
      of: [{ type: 'productInfoBlock' }],
    },
    {
      name: 'ringBlocks',
      label: 'Ring Blocks',
      description:
        "These blocks will appear on products marked with the 'Rings' type in Shopify",
      type: 'array',
      of: [{ type: 'productInfoBlock' }],
      fieldset: 'byType',
    },
    {
      name: 'earringBlocks',
      label: 'Earring Blocks',
      description:
        "These blocks will appear on products marked with the 'Earrings' type in Shopify",
      type: 'array',
      of: [{ type: 'productInfoBlock' }],

      fieldset: 'byType',
    },
    {
      name: 'braceletBlocks',
      label: 'Bracelet Blocks',
      description:
        "These blocks will appear on products marked with the 'Bracelets' type in Shopify",
      type: 'array',
      of: [{ type: 'productInfoBlock' }],
      fieldset: 'byType',
    },
    {
      name: 'necklaceBlocks',
      label: 'Necklace Blocks',
      description:
        "These blocks will appear on products marked with the 'Necklaces' type in Shopify",
      type: 'array',
      of: [{ type: 'productInfoBlock' }],
      fieldset: 'byType',
    },
    {
      name: 'byTagHelpText',
      type: 'helpText',
      description:
        'Use these fields to add blocks to items with particular tags in Shopify. For instance, a "Customization" block for anything tagged with "Custom" in Shopify.',
      fieldset: 'byTag',
    },
    {
      name: 'blocksByTag',
      type: 'array',
      of: [{ type: 'productInfoBlocksByTag' }],
      fieldset: 'byTag',
    },
  ],
  preview: {
    select: {},
    prepare: () => ({
      title: 'Product Info Blocks',
    }),
  },
}
