export const pressItem = {
  type: 'document',
  name: 'pressItem',
  title: 'Press Item',
  fields: [
    {
      name: 'publishDate',
      type: 'date',
      title: 'Date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {
        direction: 'horizontal',
        layout: 'radio',
        list: [
          { value: 'editorial', title: 'Editorial' },
          { value: 'celebrity', title: 'Celebrity' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'link',
      type: 'externalLink',
      title: 'External Link',
    },
    {
      name: 'image',
      type: 'richImage',
      title: 'Image',
      validation: (Rule) => Rule.required(),
    },
  ],
  orderings: [
    {
      title: 'Publish Date, Newest First',
      name: 'publishDateDesc',
      by: [{ field: 'publishDate', direction: 'desc' }],
    },
    {
      title: 'Publish Date, Oldest First',
      name: 'publishDateAsc',
      by: [{ field: 'publishDate', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishDate',
      media: 'image',
    },
  },
}

// export const pressPage = {
//   type: 'document',
//   name: 'pressPage',
//   title: 'Press',
//   fields: [
//     {
//       title: 'Title',
//       type: 'string',
//       name: 'title',
//     },
//     {
//       name: 'hero',
//       type: 'hero',
//       title: 'Hero',
//     },
//   ],
// }
