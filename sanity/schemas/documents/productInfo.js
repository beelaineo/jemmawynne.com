export const tagBadge = {
  name: 'tagBadge',
  title: 'Tag Badge',
  type: 'object',
  fields: [
    {
      name: 'tag',
      type: 'string',
      title: 'Tag',
      description: 'The tag to match from Shopify',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
      description: '(optional) An alternate label to display in the badge',
    },
  ],
  preview: {
    select: {
      tag: 'tag',
      label: 'label',
    },
    prepare: ({ tag, label }) => ({
      title: label || tag,
    }),
  },
}

export const productInfo = {
  title: 'Product Page Settings',
  type: 'document',
  name: 'productInfo',
  description: 'description',
  fieldsets: [
    {
      name: 'tagBadges',
      title: 'Tag Badges',
    },
    {
      name: 'globalAccordions',
      title: 'By Type',
    },
    {
      name: 'byType',
      title: 'Accordions By Type',
    },
    {
      name: 'byTag',
      title: 'Accordions By Tag',
    },
  ],
  fields: [
    {
      name: 'tagBadgeHelpText',
      type: 'helpText',
      fieldset: 'tagBadges',
      description:
        'Use these fields to create badges that appear on product thumbnails',
    },
    {
      name: 'tagBadges',
      type: 'array',
      fieldset: 'tagBadges',
      of: [{ type: 'tagBadge' }],
    },

    {
      name: 'helpText',
      type: 'helpText',
      fieldset: 'globalAccordions',
      description:
        "Use these fields to add snippets of descriptions to all or some projects. For instance, you could add a 'Shipping and Returns' block on all items, and a 'Ring Sizing Guide' block to all Rings. These blocks will be displayed in accordion-dropdowns below the main product information. You can also add info blocks to individual items on their page here in the CMS.",
    },
    {
      name: 'globalBlocks',
      label: 'Global Blocks',
      fieldset: 'globalAccordions',
      description: 'These blocks will appear on every product',
      type: 'array',
      of: [{ type: 'productInfoBlock' }],
    },
    {
      name: 'byTypeHelpText',
      type: 'helpText',
      fieldset: 'byType',
      description:
        'Use these fields to add snippets of descriptions to all products of different types',
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
    {
      name: 'swatches',
      type: 'array',
      of: [{ type: 'swatch' }],
    },
  ],
  preview: {
    select: {},
    prepare: () => ({
      title: 'Product Info Blocks',
    }),
  },
}
