import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { LinkGroup as LinkGroupType } from '../../types'
import { DocumentLink } from '../../components/DocumentLink'
import { Heading } from '../../components/Text'

interface LinkGroupProps {
  linkGroup: LinkGroupType
}

const LinkGroupWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.mediaQueries.tablet} {
      width: 100%;
    }
  `}
`

const LinksWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.mediaQueries.tablet} {
      margin-top: 2;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 10px;
    }
  `}
`

export const LinkGroup = ({ linkGroup }: LinkGroupProps) => {
  const { title, links } = linkGroup
  return (
    <LinkGroupWrapper>
      <Heading family="sans" color="body.6" weight={2} level={5}>
        {title}
      </Heading>
      <LinksWrapper>
        {links && links.length
          ? links.map((menuLink) =>
              menuLink && menuLink.document ? (
                <Heading
                  family="sans"
                  level={5}
                  weight={2}
                  key={menuLink._key || 'some-key'}
                >
                  <DocumentLink document={menuLink.document} />
                </Heading>
              ) : null,
            )
          : null}
      </LinksWrapper>
    </LinkGroupWrapper>
  )
}
