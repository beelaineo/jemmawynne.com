import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { LinkGroup as LinkGroupType } from '../../types'
import { DocumentLink } from '../DocumentLink'
import { Heading } from '../Text'

interface FooterLinkGroupProps {
  linkGroup: LinkGroupType
}

const FooterLinkGroupWrapper = styled.div`
  ${({ theme }) => css`
    ${theme.mediaQueries.tablet} {
      width: 100%;
    }
  `}
`

const LinksWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 3;
    ${theme.mediaQueries.tablet} {
      margin-top: 2;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 10px;
    }
  `}
`

export const FooterLinkGroup = ({ linkGroup }: FooterLinkGroupProps) => {
  const { title, links } = linkGroup
  return (
    <FooterLinkGroupWrapper>
      <Heading family="sans" color="body.6" weight={3} level={5}>
        {title}
      </Heading>
      <LinksWrapper>
        {links && links.length
          ? links.map((menuLink) =>
              menuLink && menuLink.document ? (
                <Heading
                  family="serif"
                  level={4}
                  weight={2}
                  key={menuLink._key || 'some-key'}
                >
                  <DocumentLink document={menuLink.document} />
                </Heading>
              ) : null,
            )
          : null}
      </LinksWrapper>
    </FooterLinkGroupWrapper>
  )
}
