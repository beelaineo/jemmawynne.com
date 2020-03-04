import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { Page } from '../types'
import { Column } from '../components/Layout'
import { HeroBlock } from '../components/ContentBlock'
import { Heading } from '../components/Text'
import { RichText } from '../components/RichText'

const TextHeader = styled.div`
  padding: 6;
  background-color: body.3;
  box-shadow: 0 -9px 9px -6px rgba(0, 0, 0, 0.2) inset;
  display: flex;
  justify-content: center;
  align-items: center;
`

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
