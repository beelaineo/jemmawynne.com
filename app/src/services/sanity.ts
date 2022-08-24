import createSanityClient from '@sanity/client'
import { withTypenames } from '../utils'
import { config } from '../config'

const { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_READ_TOKEN } = config

if (!SANITY_PROJECT_ID)
  throw new Error('You must include a SANITY_PROJECT_ID variable')
if (!SANITY_DATASET)
  throw new Error('You must include a SANITY_DATASET variable')
if (!SANITY_READ_TOKEN)
  throw new Error('You must include a SANITY_READ_TOKEN variable')

const isBrowser = typeof window !== 'undefined'

export const sanityClient = createSanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  token: SANITY_READ_TOKEN, // or leave blank to be anonymous user
  useCdn: isBrowser ? true : false, // `false` if you want to ensure fresh data
  useProjectHostname: true,
  apiVersion: '2021-03-24',
})

export const sanityQuery = async <R>(
  query: string,
  params?: Record<string, any>,
): Promise<R> => {
  const results = await sanityClient.fetch<R>(query, params || {})
  // @ts-ignore
  return withTypenames<R>(results)
}
