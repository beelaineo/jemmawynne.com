import * as React from 'react'
import styled, { css, DefaultTheme } from '@xstyled/styled-components'
import { SanityRichText } from '../../types'
import { Heading } from '../Text'
import { RichText } from '../RichText'
import { DocumentLinkProps, DocumentLink } from '../DocumentLink'

interface SectionWrapperProps {
  type?: string
  theme: DefaultTheme
}

export const SectionWrapper = styled.div<SectionWrapperProps>`
  ${({ theme, type }) => css`
    padding: 6 6 6;

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
  margin-top: 3;
  margin-bottom: 6;
`
const SubtitleWrapper = styled.div`
  margin: 0 auto;
  max-width: 600px;
`

interface SectionHeaderProps {
  title?: null | string
  subtitle?: null | string | SanityRichText
  linkToDocument?: DocumentLinkProps['document']
}

export const SectionHeader = ({
  title,
  subtitle,
  linkToDocument,
}: SectionHeaderProps) => {
  if (!title && !subtitle) return null

  return (
    <SectionHeaderWrapper>
      {title ? (
        <Heading level={4} family="sans" weight={4} textTransform="uppercase">
          {linkToDocument ? (
            <DocumentLink document={linkToDocument}>{title}</DocumentLink>
          ) : (
            title
          )}
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
