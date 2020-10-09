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
      title: 'Images',
      name: 'images',
      type: 'array',
      validation: (Rule) => Rule.max(6),
      of: [
        {
          type: 'richImage',
        },
      ],
    },
  ],
}
