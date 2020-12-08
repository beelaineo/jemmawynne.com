import { GiClick } from 'react-icons/gi'

export const cta = {
  name: 'cta',
  title: 'CTA Button',
  type: 'object',
  icon: GiClick,
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
