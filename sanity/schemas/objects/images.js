export const richImage = {
  name: 'richImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description:
        'A short description of the image. Helps with accessibility and SEO',
      options: {
        isHighlighted: true,
      },
    },
  ],
  validation: (Rule) => {
    const { options } = Rule._typeDef
    if (options.required) return Rule.required()
    return Rule.custom(() => true)
  },
}
