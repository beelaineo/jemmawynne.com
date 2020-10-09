export const stockist = {
  name: 'stockist',
  title: 'Stockist',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'text',
      rows: 2,
      placeholder: 'New York, New York',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
    },

    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'location',
    },
  },
}

export const stockists = {
  title: 'Stockists',
  name: 'stockists',
  type: 'document',
  fieldsets: [
    {
      title: 'USA',
      name: 'us',
      options: { collapsible: true, collapsed: false },
    },
    {
      title: 'International',
      name: 'international',
      options: { collapsible: true, collapsed: false },
    },
    {
      title: 'Online',
      name: 'online',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
    },
    {
      name: 'content',
      label: 'Content',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'carousel' },
        { type: 'imageTextSection' },
      ],
    },
    {
      name: 'showUs',
      title: 'Show US stockists',
      type: 'boolean',
      fieldset: 'us',
    },

    {
      name: 'us',
      title: 'United States',
      fieldset: 'us',
      type: 'array',
      of: [{ type: 'stockist' }],
    },
    {
      name: 'showIntl',
      title: 'Show International stockists',
      type: 'boolean',
      fieldset: 'international',
    },

    {
      name: 'international',
      title: 'International',
      fieldset: 'international',
      type: 'array',
      of: [{ type: 'stockist' }],
    },
    {
      name: 'showOnline',
      title: 'Show Online stockists',
      type: 'boolean',
      fieldset: 'online',
    },

    {
      name: 'online',
      title: 'Online',
      type: 'array',
      fieldset: 'online',
      of: [{ type: 'stockist' }],
    },
  ],

  preview: {
    select: {},
    prepare: () => ({
      title: 'Stockists',
    }),
  },
}
