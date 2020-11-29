import * as React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled, { css } from '@xstyled/styled-components'
import { Heading } from '../components/Text'

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - ${theme.navHeight} - 80px);
    background-color: body.2;
  `}
`

export const NotFound = () => (
  <>
    <Head>
      <meta name="robots" content="noindex" />
    </Head>

    <Wrapper>
      <Heading fontStyle="italic" level={1}>
        Page not found
      </Heading>
      <Heading level={3}>
        <Link href="/">
          <a>Return to the homepage</a>
        </Link>
      </Heading>
    </Wrapper>
  </>
)
