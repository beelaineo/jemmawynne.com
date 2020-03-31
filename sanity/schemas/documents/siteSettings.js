export const announcement = {
  name: 'announcement',
  title: 'Announcement',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'cta',
    },
  ],
}

export const banner = {
  name: 'banner',
  title: 'Announcement Banner',
  type: 'object',
  fields: [
    {
      name: 'dismissable',
      title: 'Dismissable',
      description:
        'Turn this on to allow users to dismiss the notification header',
      type: 'boolean',
    },
    {
      name: 'announcements',
      title: 'Announcements',
      type: 'array',
      of: [{ type: 'announcement' }],
    },
  ],
}

export const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fieldsets: [
    { name: 'announcement', title: 'Announcement Banner' },
    { name: 'footer', title: 'Footer' },
  ],
  fields: [
    {
      name: 'banner',
      title: 'Announcement Banner',
      type: 'banner',
      fieldset: 'announcement',
    },
    {
      title: 'About Text',
      name: 'about',
      fieldset: 'footer',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
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
      title: 'Links',
      name: 'linkGroups',
      type: 'array',
      fieldset: 'footer',
      of: [{ type: 'linkGroup' }],
    },
  ],
  preview: {
    select: {},
    prepare: () => ({
      title: 'Site Settings',
    }),
  },
}
