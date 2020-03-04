import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { Page } from '../types'
import { Column, TextHeader } from '../components/Layout'
import { HeroBlock } from '../components/ContentBlock'
import { Heading } from '../components/Text'
import { RichText } from '../components/RichText'

interface MainProps {
  textAlign?: string | null
}

const Main = styled.div`
  ${({ textAlign }: MainProps) => css`
    margin: 8 0;
    padding: 0 5;
    text-align: ${textAlign ? textAlign : 'left'};

    h1,
    h2,
    h3 {
      margin-top: 1em;

      &:first-child {
        margin-top: 0;
      }
    }
  `}
`

interface StaticPageProps {
  page: Page
}

export const StaticPage = ({ page }: StaticPageProps) => {
  const { hero, textAlign, contentRaw, title } = page
  return (
    <>
      {hero ? (
        <HeroBlock hero={hero} />
      ) : (
        <TextHeader>
          {title ? <Heading level={1}>{title}</Heading> : null}
        </TextHeader>
      )}
      <Main textAlign={textAlign}>
        <Column center width="wide">
          <RichText body={contentRaw} />
        </Column>
      </Main>
    </>
  )
}
