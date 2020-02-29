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
import { ThemeProvider } from 'styled-components'
import { ShopifyProvider } from 'use-shopify'
import { createClient, Provider as UrqlProvider } from 'urql'
import { theme, GlobalStyles } from '../theme'
import { ShopDataProvider } from './ShopDataProvider'
import { LocationProvider } from './LocationProvider'
import { SANITY_GRAPHQL_URL } from '../config'

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

const isServer = typeof window !== 'object' || process.browser

const ssrCache = ssrExchange({ isClient: !isServer })

export const client = createClient({
  url: SANITY_GRAPHQL_URL,
  exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  fetch,
})

function urqlQuery<Response>(
  query: string | DocumentNode,
  variables: object,
): Promise<Response> {
  return new Promise((resolve) => {
    const request = createRequest(query, variables)

    pipe(
      client.executeQuery(request),
      // @ts-ignore TODO What's up with that? Well, soon urql will have an actual API for this
      subscribe(resolve),
    )
  })
}

export const Providers = ({ children }: Props) => {
  return (
    <UrqlProvider value={client}>
      <ShopifyProvider
        // @ts-ignore
        query={urqlQuery}
      >
        <ShopDataProvider>
          <ThemeProvider theme={theme}>
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
