export const cta = {
  name: 'cta',
  title: 'CTA Button',
  type: 'object',
  fields: [
    {
      name: 'label',
      type: 'string',
      label: 'Label',
    },
    {
      type: 'internalLink',
      name: 'link',
      options: {
        required: true,
      },
    },
  ],
}
