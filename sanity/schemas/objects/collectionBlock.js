export const collectionBlock = {
  name: 'collectionBlock',
  title: 'Collection Block',
  type: 'object',
  fields: [
    {
      name: 'position',
      title: 'Position',
      description:
        'Use this number to insert the block before a product in the grid',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'format',
      title: 'Format',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          {
            value: 'square',
            title: 'Square',
          },
          { value: 'wide', title: 'Wide' },
          { value: 'tall', title: 'Tall' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Text',
      type: 'array',
      description: 'Tip: Use shift+return for a soft-wrapping line',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Header 2', value: 'h2' },
            { title: 'Header 3', value: 'h3' },
            { title: 'Header 4', value: 'h4' },
            { title: 'Normal', value: 'normal' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
    },
    {
      name: 'textPosition',
      title: 'Text position',
      type: 'position',
    },
    {
      name: 'textColor',
      title: 'Text color',
      type: 'colorPicker',
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'richImage',
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'colorPicker',
    },
  ],
  preview: {
    select: {
      position: 'position',
      format: 'format',
      backgroundImage: 'backgroundImage',
    },
    prepare: ({ position, backgroundImage, format }) => {
      return {
        title: `${position} - ${format}`,
        media: backgroundImage ? backgroundImage.asset : undefined,
      }
    },
  },
}
