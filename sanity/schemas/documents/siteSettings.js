export const banner = {
  name: 'banner',
  title: 'Announcement Banner',
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

export const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fieldsets: [{ name: 'footer', title: 'Footer' }],
  fields: [
    {
      name: 'banner',
      title: 'Announcement Banner',
      type: 'banner',
    },
    {
      name: 'links',
      fieldset: 'footer',
      title: 'Page Links',
      type: 'array',
      of: [{ type: 'internalLink' }, { type: 'externalLink' }],
    },
    {
      name: 'mailerTitle',
      fieldset: 'footer',
      title: 'Mailing List Title',
      type: 'string',
    },
    {
      name: 'mailerSubtitle',
      fieldset: 'footer',
      title: 'Mailing List Subtitle',
      type: 'string',
    },
  ],
  preview: {
    select: {},
    prepare: () => ({
      title: 'Site Settings',
    }),
  },
}
