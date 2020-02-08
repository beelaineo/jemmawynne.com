export const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fieldSets: [{ name: 'footer', title: 'Footer' }],
  fields: [
    {
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',
      of: [{ type: 'cta' }],
    },
  ],

  preview: {
    select: {},
    prepare: () => ({
      title: 'Site Settings',
    }),
  },
}
