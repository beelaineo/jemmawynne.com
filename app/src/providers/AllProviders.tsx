import * as React from 'react'
import fetch from 'isomorphic-unfetch'
import { DocumentNode } from 'graphql'
import { ThemeProvider } from '@xstyled/styled-components'
import { ShopifyProvider } from 'use-shopify'
import { defaultTheme, GlobalStyles } from '../theme'
import { ShopDataProvider } from './ShopDataProvider'
import { MenuProvider } from './MenuProvider'
import { useError } from './ErrorProvider'
import { SHOPIFY_STOREFRONT_URL, SHOPIFY_STOREFRONT_TOKEN } from '../config'
import { ShopDataResponse } from '../graphql'

/**
 * App
 *
 * - Top-level Providers
 * - Global Components
 * - Routes
 */

interface Props {
  children: React.ReactNode
  shopData: ShopDataResponse
}

const deduplicateFragments = (queryString?: string) =>
  queryString
    ? queryString
        .split(/\n\s+\n/)
        .map((group) => group.replace(/^([\n\s])+/, '').replace(/\n+$/, ''))
        .reduce<string[]>((acc, current) => {
          if (acc.includes(current)) return acc
          return [...acc, current]
        }, [])
        .join('\n\n')
    : ''

type ErrorHandler = (err: Error) => void

const shopifyQuery = (handleError: ErrorHandler) => {
  return async function <Response>(
    query: string | DocumentNode,
    variables: object,
  ): Promise<Response> {
    const queryString =
      typeof query === 'string'
        ? query
        : deduplicateFragments(query?.loc?.source.body)
    const result = await fetch(SHOPIFY_STOREFRONT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
      },
      body: JSON.stringify({ query: queryString, variables }),
    })
      .then((r) => r.json())
      .catch((err) => handleError(err))
    return result
  }
}

export const Providers = ({ children, shopData }: Props) => {
  const { handleError } = useError()
  return (
    <ShopifyProvider query={shopifyQuery(handleError)}>
      <ShopDataProvider shopData={shopData}>
        <ThemeProvider theme={defaultTheme}>
          <MenuProvider>
            <GlobalStyles />
            {children}
          </MenuProvider>
        </ThemeProvider>
      </ShopDataProvider>
    </ShopifyProvider>
  )
}
