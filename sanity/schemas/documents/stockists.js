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
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
    },
    {
      name: 'us',
      title: 'United States',
      type: 'array',
      of: [{ type: 'stockist' }],
    },

    {
      name: 'international',
      title: 'International',
      type: 'array',
      of: [{ type: 'stockist' }],
    },

    {
      name: 'online',
      title: 'Online',
      type: 'array',
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
