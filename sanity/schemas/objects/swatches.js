export const swatch = {
  type: 'object',
  name: 'swatch',
  title: 'Swatch',
  fields: [
    {
      title: 'Color Name',
      name: 'colorName',
      description: 'This must match the name of the option in Shopify',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Swatch Image',
      name: 'swatchImage',
      description: 'Recommended ratio: square',
      type: 'image',
      validation: (Rule) => Rule.required(),
    },
  ],
}
