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
