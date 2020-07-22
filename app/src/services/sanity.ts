import createSanityClient from '@sanity/client'
import { withTypenames } from '../utils'

const SANITY_PROJECT_ID = process.env.SANITY_PROJECT_ID
const SANITY_DATASET = process.env.SANITY_DATASET
const SANITY_READ_TOKEN = process.env.SANITY_READ_TOKEN

if (!SANITY_PROJECT_ID)
  throw new Error('You must include a SANITY_PROJECT_ID variable')
if (!SANITY_DATASET)
  throw new Error('You must include a SANITY_DATASET variable')

export const sanityClient = createSanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  token: SANITY_READ_TOKEN, // or leave blank to be anonymous user
  useCdn: true, // `false` if you want to ensure fresh data
  useProjectHostname: true,
})

export const sanityQuery = async <R>(
  query: string,
  params?: Record<string, any>,
): Promise<R> => {
  const results = await sanityClient.fetch<R>(query, params || {})
  // @ts-ignore
  return withTypenames<R>(results)
}
