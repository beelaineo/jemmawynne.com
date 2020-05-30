import * as React from 'react'
import styled, { css, Box } from '@xstyled/styled-components'
import {
  Maybe,
  Stockist as StockistType,
  Stockists as StockistsType,
} from '../types'
import { Heading } from '../components/Text'
import { TextHeader, Column } from '../components/Layout'

interface StockistProps {
  stockists?: Maybe<StockistType>[]
}

const SectionWrapper = styled.div`
  margin-top: 7;
`

const StockistListWrapper = styled.div`
  ${({ theme }) => css`
    margin: 5 auto;
    padding: 0 4;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 30px;
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
      {stockists.map((stockist) => {
        if (!stockist) return null

        const { _key, name, location, website, phone } = stockist

        return (
          <StockistWrapper key={_key || 'some-key'}>
            {name ? (
              <Heading level={4} mb={0} family="sans">
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
              <Heading weight={2} mb={0} level={4}>
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
  const { us, international, online } = stockists
  return (
    <Box pb={7}>
      <TextHeader>
        <Heading level={1}>Stockists</Heading>
      </TextHeader>
      <Column maxWidth="wide">
        {us && us.length ? (
          <SectionWrapper>
            <Heading level={2} textAlign="center">
              United States
            </Heading>
            <StockistList stockists={us} />
          </SectionWrapper>
        ) : null}
        {international && international.length ? (
          <SectionWrapper>
            <Heading level={2} textAlign="center">
              International
            </Heading>
            <StockistList stockists={international} />
          </SectionWrapper>
        ) : null}
        {online && online.length ? (
          <SectionWrapper>
            <Heading level={2} textAlign="center">
              Online
            </Heading>
            <StockistList stockists={online} />
          </SectionWrapper>
        ) : null}
      </Column>
    </Box>
  )
}
