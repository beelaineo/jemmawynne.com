import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'
import { SANITY_GRAPHQL_URL } from '../config'
import introspectionQueryResultData from '../../fragmentTypes-sanity.json'

let globalApolloClient = null

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})

/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 */
const createApolloClient = (initialState = {}) => {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      // uri: SANITY_GRAPHQL_URL,
      uri: `${SANITY_GRAPHQL_URL}x`,
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      fetch,
    }),
    cache: new InMemoryCache({ fragmentMatcher }).restore(initialState),
  })
}

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {Object} initialState
 */
const initApolloClient = (initialState = {}) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return createApolloClient(initialState)
  }

  // Reuse client on the client-side
  if (!globalApolloClient) {
    // @ts-ignore
    globalApolloClient = createApolloClient(initialState)
  }

  return globalApolloClient
}

/**
 * Creates and provides the apolloContext
 * to a next.js PageTree. Use it by wrapping
 * your PageComponent via HOC pattern.
 */
export const withApollo = ({ ssr = true } = {}) => (PageComponent) => {
  // @ts-ignore
  const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
    const client = apolloClient || initApolloClient(apolloState)
    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    )
  }

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName =
      PageComponent.displayName || PageComponent.name || 'Component'

    WithApollo.displayName = `withApollo(${displayName})`
  }

  if (ssr || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async (ctx) => {
      const { AppTree } = ctx
      const inAppContext = Boolean(ctx.ctx)

      if (ctx.apolloClient) {
        throw new Error('Multiple instances of withApollo found.')
      }

      // Initialize ApolloClient
      const apolloClient = initApolloClient()

      // Add apolloClient to NextPageContext & NextAppContext
      // This allows us to consume the apolloClient inside our
      // custom `getInitialProps({ apolloClient })`.
      ctx.apolloClient = apolloClient
      if (inAppContext) {
        ctx.ctx.apolloClient = apolloClient
      }

      // Run wrapped getInitialProps methods
      let pageProps = {}
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx)
      } else if (inAppContext) {
        pageProps = await App.getInitialProps(ctx)
      }

      // Only on the server:
      if (typeof window === 'undefined') {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (ctx.res && ctx.res.finished) {
          return pageProps
        }

        // Only if ssr is enabled
        if (ssr) {
          try {
            // Run all GraphQL queries
            const { getDataFromTree } = await import('@apollo/react-ssr')

            // Since AppComponents and PageComponents have different context types
            // we need to modify their props a little.
            let props
            if (inAppContext) {
              props = { ...pageProps, apolloClient }
            } else {
              props = { pageProps: { ...pageProps, apolloClient } }
            }

            // Takes React AppTree, determine which queries are needed to render,
            // then fetche them all.
            await getDataFromTree(<AppTree {...props} />)
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error('Error while running `getDataFromTree`', error)
          }

          // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually
          Head.rewind()
        }
      }

      // Extract query data from the Apollo store
      // @ts-ignore
      const apolloState = apolloClient.cache.extract()

      return {
        ...pageProps,
        apolloState,
      }
    }
  }

  return WithApollo
}
