import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { LinkGroup as LinkGroupType } from '../types'
import { DocumentLink } from './DocumentLink'
import { Heading } from './Text'

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
      <Heading family="sans" color="body.6" weight={3} level={6}>
        {title}
      </Heading>
      <LinksWrapper>
        {links && links.length
          ? links.map((menuLink) =>
              menuLink &&
              menuLink.document &&
              // @ts-ignore
              menuLink.document?.archived !== true ? (
                <Heading
                  family="sans"
                  level={7}
                  mb="1em"
                  weight={3}
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
