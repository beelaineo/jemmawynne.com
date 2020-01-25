import * as React from 'react'
import styled, { css, DefaultTheme } from 'styled-components'
import { SanityRichText } from '../../types'
import { Header2, Header4 } from '../Text'
import { RichText } from '../RichText'

interface SectionWrapperProps {
  type: string
  theme: DefaultTheme
}

export const SectionWrapper = styled.div`
  ${({ theme, type }: SectionWrapperProps) => css`
    padding: calc(${theme.layout.spacing.triple} * 2)
      ${theme.layout.spacing.triple};

    ${type === 'carousel'
      ? css`
          display: flex;
          flex-direction: column;
          min-height: 520px;
        `
      : ''}

    &:nth-of-type(2) {
      background-color: ${theme.color.grays[9]};
    }
  `}
`

const SectionHeaderWrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin-bottom: ${theme.layout.spacing.single};
  `}
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
  console.log(title)
  return (
    <SectionHeaderWrapper>
      {title ? (
        <Header2 family="sans" weight="semi" transform="uppercase">
          {title}
        </Header2>
      ) : null}
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
