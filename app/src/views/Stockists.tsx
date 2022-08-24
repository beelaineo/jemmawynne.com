import * as React from 'react'
import styled, { css, x } from '@xstyled/styled-components'
import {
  Maybe,
  Stockist as StockistType,
  Stockists as StockistsType,
} from '../types'
import { Heading } from '../components/Text'
import { ContentBlock } from '../components/ContentBlock'
import { TextHeader } from '../components/Layout'
import { SEO } from '../components/SEO'
import { definitely } from '../utils'

interface StockistProps {
  stockists?: Maybe<StockistType>[]
}

const SectionWrapper = styled.div`
  margin-bottom: 10;
`

const StockistListWrapper = styled.div`
  ${({ theme }) => css`
    margin: 5 auto;
    padding: 0 4;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 50px;
    grid-column-gap: 30px;
    max-width: 900px;
    ${theme.mediaQueries.tablet} {
      max-width: 600px;
      grid-template-columns: 1fr 1fr;
    }

    ${theme.mediaQueries.mobile} {
      max-width: initial;
      grid-template-columns: 1fr;
    }
  `}
`

const StockistWrapper = styled.div`
  text-align: center;
`

const StockistList = ({ stockists }: StockistProps) =>
  stockists ? (
    <StockistListWrapper>
      {definitely(stockists).map((stockist) => {
        const { _key, name, location, website, phone } = stockist
        return (
          <StockistWrapper key={_key || 'some-key'}>
            {name ? (
              <Heading level={5} mb={0} family="sans">
                {name}
              </Heading>
            ) : null}
            {location ? (
              <Heading weight={2} mb={0} level={4}>
                {location}
              </Heading>
            ) : null}
            {website ? (
              <Heading weight={2} mb={0} level={4}>
                <a href={website} target="_blank" rel="noopener noreferrer">
                  {website.replace(/^https?:\/\//, '')}
                </a>
              </Heading>
            ) : null}
            {phone ? (
              <Heading mt={0} weight={2} mb={0} level={4}>
                <a href={`tel:${phone}`}>{phone}</a>
              </Heading>
            ) : null}
          </StockistWrapper>
        )
      })}
    </StockistListWrapper>
  ) : null

interface StockistsProps {
  stockists: StockistsType
}

export const Stockists = ({ stockists }: StockistsProps) => {
  const {
    content,
    us,
    seo,
    international,
    online,
    showUs,
    showIntl,
    showOnline,
  } = stockists

  const defaultSeo = {
    title: 'Stockists',
  }

  return (
    <>
      <SEO seo={seo} defaultSeo={defaultSeo} path="stockists" />
      {definitely(content).map((c) => (
        <ContentBlock key={c._key || 'some-key'} content={c} />
      ))}
      <x.div pb={7}>
        <TextHeader>
          <Heading weight={1} level={1}>
            Where to Buy
          </Heading>
        </TextHeader>
        <x.div maxWidth="wide" my={0} mx={'auto'}>
          {us && us.length && showUs ? (
            <SectionWrapper>
              <Heading level={1} fontWeight={1} textAlign="center">
                United States
              </Heading>
              <StockistList stockists={us} />
            </SectionWrapper>
          ) : null}
          {international && international.length && showIntl ? (
            <SectionWrapper>
              <Heading level={1} fontWeight={1} textAlign="center">
                International
              </Heading>
              <StockistList stockists={international} />
            </SectionWrapper>
          ) : null}
          {online && online.length && showOnline ? (
            <SectionWrapper>
              <Heading level={1} fontWeight={1} textAlign="center">
                Online
              </Heading>
              <StockistList stockists={online} />
            </SectionWrapper>
          ) : null}
        </x.div>
      </x.div>
    </>
  )
}
