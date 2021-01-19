export const collection = {
  fieldsets: [
    {
      name: 'sideMenu',
      title: 'Side Menu',
      description: 'Customize the side menu',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'customContent',
      title: 'Custom Content',
      description: 'Insert custom content throughout the collection grid',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    { name: 'sourceData', hidden: true },
    { name: 'hero', type: 'hero' },
    {
      name: 'disableMenu',
      fieldset: 'sideMenu',
      type: 'boolean',
      title: 'Disable Side Menu',
    },
    {
      name: 'relatedCollectionsTitle',
      type: 'string',
      title: 'Custom menu title(optional)',
      fieldset: 'sideMenu',
    },
    {
      name: 'relatedCollections',
      title: 'Custom collections',
      description:
        'Create a custom list of collections to display in the side menu. Leave this list empty to use the default menu.',
      fieldset: 'sideMenu',
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
      name: 'collectionBlocks',
      fieldset: 'customContent',
      type: 'array',
      of: [{ type: 'collectionBlock' }],
    },

    {
      name: 'seo',
      type: 'seo',
      description:
        'Custom SEO settings. By default, the collection description and image will be used.',
    },
  ],
}
