export const announcement = {
  name: 'announcement',
  title: 'Announcement',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      hidden: true,
    },
    { name: 'body', title: 'Text', type: 'array', of: [{ type: 'block' }] },
    {
      name: 'cta',
      title: 'CTA',
      type: 'cta',
    },
  ],
  preview: {
    select: {
      title: 'body',
    },
  },
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
    { name: 'instagram', title: 'Instagram' },
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
      title: 'Instagram Settings',
      type: 'instagramSettings',
      name: 'instagramSettings',
      fieldset: 'instagram',
    },
    {
      title: 'Links',
      name: 'linkGroups',
      type: 'array',
      fieldset: 'footer',
      of: [{ type: 'linkGroup' }],
    },
    {
      name: 'seo',
      title: 'Default SEO',
      description:
        'These SEO settings will be used as fallbacks for any pages that do not have custom information.',
      type: 'seo',
    },
  ],
  preview: {
    select: {},
    prepare: () => ({
      title: 'Site Settings',
    }),
  },
}
