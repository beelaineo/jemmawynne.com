import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'
import Head from 'next/head'
import { ApolloClient } from 'apollo-client'
import { SearchResults, Navigation } from '../src/views'
import { Footer } from '../src/components/Footer'
import { Providers } from '../src/providers/AllProviders'
import { withApollo } from '../src/graphql'

interface AppProps {
  Component: React.ComponentType
  pageProps: any
  router: any
  apollo: ApolloClient<any>
}

const Main = styled.main`
  ${({ theme }) => css`
    ${theme.mediaQueries.tablet} {
      padding-top: 42px;
    }
  `}
`

const App = (props: AppProps) => {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <link rel="stylesheet" href="/static/fonts/fonts.css" />
      </Head>
      <Providers>
        <Navigation />
        <Main>
          <SearchResults />
          <Component {...pageProps} />
          <Footer />
        </Main>
      </Providers>
    </>
  )
}

export default withApollo()(App)
