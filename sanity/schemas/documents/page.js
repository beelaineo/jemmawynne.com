export const page = {
  title: 'Page',
  type: 'document',
  name: 'page',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      label: 'Page URL',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },
    {
      name: 'textAlign',
      title: 'Content Text Alignment',
      type: 'textAlign',
    },
    {
      name: 'content',
      label: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Header 2', value: 'h2' },
            { title: 'Header 3', value: 'h3' },
            { title: 'Normal', value: 'normal' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
          lists: [
            {
              title: 'Bullet',
              value: 'bullet',
            },
            {
              title: 'Numbered',
              value: 'number',
            },
          ],
        },
        {
          type: 'richImage',
        },
      ],
    },
  ],
}
