import * as React from 'react'
import { Client, createRequest } from 'urql'
import { DocumentNode } from 'graphql'
import { pipe, subscribe } from 'wonka'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ShopifyProvider } from 'use-shopify'
import { createClient, Provider as UrqlProvider } from 'urql'
import { SHOPIFY_STOREFRONT_TOKEN } from '../config'
import { theme, GlobalStyles } from '../theme'
import { ShopDataProvider } from './ShopDataProvider'

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

const client = createClient({
  url: '/.netlify/functions/graphql',
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
            <BrowserRouter>
              <GlobalStyles />
              {children}
            </BrowserRouter>
          </ThemeProvider>
        </ShopDataProvider>
      </ShopifyProvider>
    </UrqlProvider>
  )
}
