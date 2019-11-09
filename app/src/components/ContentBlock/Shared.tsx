import * as React from 'react'
import styled, { css } from 'styled-components'
import { SanityRichText } from '../../types'
import { Header2, Header4 } from '../Text'
import { RichText } from '../RichText'

export const SectionWrapper = styled.div`
  ${({ theme }) => css`
    padding: calc(${theme.layout.spacing.triple} * 2)
      ${theme.layout.spacing.triple};

    &:nth-of-type(2) {
      background-color: ${theme.color.grays[9]};
    }
  `}
`

const SectionHeaderWrapper = styled.div`
  text-align: center;
`
const SubtitleWrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
`

interface SectionHeaderProps {
  title?: null | string
  subtitle?: null | string | SanityRichText
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  if (!title && !subtitle) return null
  return (
    <SectionHeaderWrapper>
      {title ? <Header2>{title}</Header2> : null}
      {subtitle ? (
        <SubtitleWrapper>
          {typeof subtitle === 'string' ? (
            <Header4>{subtitle}</Header4>
          ) : (
            <RichText body={subtitle} />
          )}
        </SubtitleWrapper>
      ) : null}
    </SectionHeaderWrapper>
  )
}
