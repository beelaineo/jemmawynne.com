export const productInfoBlock = {
  title: 'Product Information',
  type: 'object',
  name: 'productInfoBlock',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'body',
      label: 'Text',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
    },
  ],
}

const tagRegex = /^[\w\s-]+$/

export const productInfoBlocksByTag = {
  title: 'Product Information (by tag)',
  type: 'object',
  name: 'productInfoBlocksByTag',
  fields: [
    {
      title: 'Tag',
      name: 'tag',
      description: 'Tag to match from Shopify.',
      type: 'string',
      validation: (Rule) =>
        Rule.required().custom((value) => {
          const passes = tagRegex.test(value)
          if (passes) return true
          return 'Tags may only contain letters, numbers, and spaces'
        }),
    },
    {
      title: 'Info Blocks',
      name: 'infoBlocks',
      type: 'array',
      of: [{ type: 'productInfoBlock' }],
    },
  ],
}
