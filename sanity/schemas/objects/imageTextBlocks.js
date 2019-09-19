import { blocksToPlainText } from '../utils'

export const textBlock = {
  name: 'textBlock',
  type: 'object',
  title: 'Text Block',
  fields: [
    {
      name: 'header',
      title: 'Header',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      description: 'Tip: Use shift+return for a soft-wrapping line',
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
    { name: 'cta', type: 'cta' },
  ],
}

export const imageBlock = {
  name: 'imageBlock',
  type: 'object',
  title: 'Image Block',
  fields: [
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'imageWithAltText',
    },
    {
      name: 'hoverImage',
      title: 'Hover Image',
      type: 'imageWithAltText',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'array',
      description: 'Tip: Use shift+return for a soft-wrapping line',
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

    { name: 'cta', type: 'cta' },
    // {
    //   name: 'ctaText',
    //   title: 'CTA Text',
    //   type: 'string',
    // },
    // {
    //   name: 'link',
    //   type: 'array',
    //   of: [{ type: 'internalLink' }, { type: 'externalLink' }],
    // },
  ],
  // validation: (Rule) => {
  //   console.log(Rule)
  //   return Rule.required()
  //   return undefined
  // },
  preview: {
    select: {
      caption: 'caption',
      media: 'backgroundImage',
    },
    prepare: ({ caption, media }) => {
      return {
        media,
        title:
          caption && caption.length ? blocksToPlainText(caption) : '(no text)',
      }
    },
  },
}
