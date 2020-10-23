import * as React from 'react'
import styled, { css, DefaultTheme } from '@xstyled/styled-components'
import { SanityRichText } from '../../types'
import { Heading } from '../Text'
import { RichText } from '../RichText'

interface SectionWrapperProps {
  type?: string
  theme: DefaultTheme
}

export const SectionWrapper = styled.div`
  ${({ theme, type }: SectionWrapperProps) => css`
    padding: 4 6 6;

    ${type === 'carousel'
      ? css`
          display: flex;
          flex-direction: column;
        `
      : ''}

    ${theme.mediaQueries.mobile} {
      padding: 4 3 3;
    }
  `}
`

const SectionHeaderWrapper = styled.div`
  text-align: center;
  margin-top: 6;
  margin-bottom: 6;
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
      {title ? (
        <Heading level={4} family="sans" weight={4} textTransform="uppercase">
          {title}
        </Heading>
      ) : null}
      {subtitle ? (
        <SubtitleWrapper>
          {typeof subtitle === 'string' ? (
            <Heading level={4}>{subtitle}</Heading>
          ) : (
            <RichText body={subtitle} />
          )}
        </SubtitleWrapper>
      ) : null}
    </SectionHeaderWrapper>
  )
}
