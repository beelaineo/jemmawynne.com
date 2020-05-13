export const collectionInfo = {
  title: 'Collection Page Settings',
  type: 'document',
  name: 'collectionInfo',
  description: 'description',
  fields: [
    {
      name: 'helpText',
      type: 'helpText',
      description:
        'Add a default set of collections for a side menu here. You can add a different set to the individual collection page. If nothing is defined there, it will fall back to these links.',
    },
    {
      name: 'relatedCollections',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'shopifyCollection' },
          options: {
            filter: 'archived != true',
          },
        },
      ],
    },
  ],
  preview: {
    select: {},
    prepare: () => ({
      title: 'Product Info Blocks',
    }),
  },
}
