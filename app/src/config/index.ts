import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const {
  SANITY_PROJECT_ID,
  SANITY_DATASET,
  SANITY_AUTH_TOKEN,
  SANITY_READ_TOKEN,
  SANITY_GRAPHQL_URL,
  SENTRY_DSN,
  KLAVIYO_LIST_ID,
  KLAVIYO_API_KEY,
} = publicRuntimeConfig

if (!SANITY_PROJECT_ID)
  throw new Error('You must include a SANITY_PROJECT_ID variable')
if (!SANITY_DATASET)
  throw new Error('You must include a SANITY_DATASET variable')
if (!SANITY_AUTH_TOKEN)
  throw new Error('You must include a SANITY_AUTH_TOKEN variable')
if (!SANITY_READ_TOKEN)
  throw new Error('You must include a SANITY_READ_TOKEN variable')
if (!SANITY_GRAPHQL_URL)
  throw new Error('You must include a SANITY_GRAPHQL_URL variable')
if (!SENTRY_DSN) throw new Error('You must provide a sentry DSN')
if (!KLAVIYO_LIST_ID)
  throw new Error('You must include a KLAVIYO_LIST_ID variable')
if (!KLAVIYO_API_KEY)
  throw new Error('You must include a KLAVIYO_API_KEY variable')

const SHOPIFY_SHOP_NAME = 'jemma-wynne'
const SHOPIFY_STOREFRONT_TOKEN = '969193ad0bbcaf8485a301bffa9d1058'
const SHOPIFY_STOREFRONT_URL = 'https://jemma-wynne.myshopify.com/api/graphql'
const FB_PRODUCT_CATALOG_ID = 'TODO'

export const config = {
  SANITY_PROJECT_ID,
  SANITY_DATASET,
  SANITY_AUTH_TOKEN,
  SANITY_READ_TOKEN,
  SANITY_GRAPHQL_URL,
  SENTRY_DSN,
  KLAVIYO_LIST_ID,
  KLAVIYO_API_KEY,
  SHOPIFY_STOREFRONT_TOKEN,
  SHOPIFY_STOREFRONT_URL,
  SHOPIFY_SHOP_NAME,
  FB_PRODUCT_CATALOG_ID,
}
