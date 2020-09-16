export const instagram = {
  name: 'instagramSettings',
  type: 'object',
  fields: [
    {
      title: 'Handle',
      name: 'handle',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: "Don't include the @",
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Images',
      name: 'images',
      type: 'array',
      validation: (Rule) => Rule.max(5),
      of: [
        {
          type: 'richImage',
        },
      ],
    },
  ],
}
