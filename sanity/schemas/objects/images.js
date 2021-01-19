export const richImage = {
  name: 'richImage',
  type: 'image',
  title: 'Image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      options: {
        isHighlighted: false,
      },
    },
    {
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      description:
        'A short description of the image. Helps with accessibility and SEO. Defaults to the caption if not defined.',
      options: {
        isHighlighted: false,
      },
    },
  ],
  validation: (Rule) => {
    const { options } = Rule._typeDef
    if (options.required) return Rule.required()
    return Rule.custom(() => true)
  },
}
