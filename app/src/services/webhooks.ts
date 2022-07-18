import { createNextWebhooks } from '@sane-shopify/server'
import dotEnv from 'dotenv'
import Sentry from './sentry'
import { config } from '../config'

const {
  SANITY_PROJECT_ID,
  SANITY_DATASET,
  SANITY_AUTH_TOKEN,
  SHOPIFY_SHOP_NAME,
  SHOPIFY_STOREFRONT_TOKEN,
} = config

const projectId = SANITY_PROJECT_ID
const dataset = SANITY_DATASET
const authToken = SANITY_AUTH_TOKEN
const shopName = SHOPIFY_SHOP_NAME
const accessToken = SHOPIFY_STOREFRONT_TOKEN

if (!projectId) throw new Error('You must provide a sanity project ID')
if (!dataset) throw new Error('You must provide a sanity dataset')
if (!authToken) throw new Error('You must provide a sanity auth token')
if (!shopName) throw new Error('You must provide a shopify shop name')
if (!accessToken) throw new Error('You must provide a shopify access token')

const handleError = (err: Error) => {
  Sentry.captureException(err)
}

const webhooksConfig = {
  secrets: {
    sanity: {
      projectId,
      dataset,
      authToken,
    },
    shopify: {
      shopName,
      accessToken,
    },
  },
  onError: handleError,
}

export const webhooks = createNextWebhooks(webhooksConfig)
