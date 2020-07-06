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
  ],
}
