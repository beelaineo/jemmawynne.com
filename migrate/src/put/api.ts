const path = require('path')
import { Shopify } from './types'
const Shopify: Shopify = require('shopify-api-node')

require('dotenv').config({
  path: path.resolve(__dirname, '..', '.env'),
})

// @ts-ignore
export const newStore = new Shopify({
  shopName: 'jemma-wynne',
  apiKey: process.env.SHOPIFY_ADMIN_KEY,
  password: process.env.SHOPIFY_ADMIN_PASSWORD,
  timeout: 60000 * 5,
})
