import * as React from 'react'
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
  <Wrapper>
    <Heading fontStyle="italic" level={1}>
      Page not found
    </Heading>
  </Wrapper>
)
