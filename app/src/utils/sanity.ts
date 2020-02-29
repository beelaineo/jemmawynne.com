import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'caazz4uw',
  dataset: 'production',
  useCdn: process.env.NODE_ENV === 'production',
})
