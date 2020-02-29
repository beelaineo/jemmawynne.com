import * as React from 'react'
import fetch from 'isomorphic-unfetch'
import {
  createRequest,
  ssrExchange,
  dedupExchange,
  cacheExchange,
  fetchExchange,
} from 'urql'
import { DocumentNode } from 'graphql'
import { pipe, subscribe } from 'wonka'
import { ThemeProvider } from '@xstyled/styled-components'
import { ShopifyProvider } from 'use-shopify'
import { createClient, Provider as UrqlProvider } from 'urql'
import { defaultTheme, GlobalStyles } from '../theme'
import { ShopDataProvider } from './ShopDataProvider'
import { LocationProvider } from './LocationProvider'
import {
  SHOPIFY_STOREFRONT_URL,
  SHOPIFY_STOREFRONT_TOKEN,
  SANITY_GRAPHQL_URL,
} from '../config'

/**
 * App
 *
 * - Top-level Providers
 * - Global Components
 * - Routes
 */

interface Props {
  children: React.ReactNode
}

// @ts-ignore
const isServer = typeof window !== 'object' || Boolean(process?.browser)

const ssrCache = ssrExchange({ isClient: !isServer })

export const client = createClient({
  url: SANITY_GRAPHQL_URL,
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  fetch,
})

async function shopifyQuery<Response>(
  query: string | DocumentNode,
  variables: object,
): Promise<Response> {
  const queryString =
    typeof query === 'string'
      ? query
      : //
        // @ts-ignore
        deduplicateFragments(query.loc.source.body)
  const result = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query: queryString, variables }),
  }).then((r) => r.json())
  return result
}

export const Providers = ({ children }: Props) => {
  return (
    <UrqlProvider value={client}>
      <ShopifyProvider query={shopifyQuery}>
        <ShopDataProvider>
          <ThemeProvider theme={defaultTheme}>
            <LocationProvider>
              <GlobalStyles />
              {children}
            </LocationProvider>
          </ThemeProvider>
        </ShopDataProvider>
      </ShopifyProvider>
    </UrqlProvider>
  )
}
