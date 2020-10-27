export const seo = {
  title: 'SEO & Accessibility',
  name: 'seo',
  type: 'object',
  fields: [
    {
      title: 'SEO: Page Title',
      name: 'title',
      type: 'string',
      description: 'title for the browser window',
    },
    {
      title: 'Meta Title',
      name: 'metaTitle',
      type: 'string',
      description: 'title for search results',
    },
    {
      title: 'SEO: Description',
      name: 'description',
      type: 'text',
      description:
        'This is the description that will appear underneath the preview link when shared in Facebook. It should be less than 200 characters',
    },
    {
      title: 'SEO: Image',
      name: 'image',
      type: 'image',
      description: 'Best dimensions: 1200 x 600px',
    },
    {
      title: 'Keywords',
      name: 'keywords',
      type: 'string',
      description: 'Comma-separated SEO keywords',
    },
  ],
}
