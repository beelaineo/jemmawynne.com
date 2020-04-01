export const collection = {
  fields: [
    { name: 'sourceData', hidden: true },
    { name: 'hero', type: 'hero' },
    {
      name: 'relatedCollections',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'shopifyCollection' } }],
    },
  ],
}
