export const collection = {
  fieldsets: [{ name: 'related', title: 'Related Menu' }],
  fields: [
    { name: 'sourceData', hidden: true },
    { name: 'hero', type: 'hero' },
    {
      name: 'disableMenu',
      fieldset: 'related',
      type: 'boolean',
      title: 'Disable Side Menu',
    },
    {
      name: 'collectionBlocks',
      description: 'Insert blocks of content between products',
      type: 'array',
      of: [{ type: 'collectionBlock' }],
    },
    {
      name: 'relatedCollectionsTitle',
      type: 'string',
      title: 'Related Collections menu title (optional)',
      fieldset: 'related',
    },
    {
      name: 'relatedCollections',
      fieldset: 'related',
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
    {
      name: 'seo',
      type: 'seo',
      description:
        'Custom SEO settings. By default, the collection description and image will be used.',
    },
  ],
}
