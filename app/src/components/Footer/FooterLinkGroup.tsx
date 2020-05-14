import * as React from 'react'
import { LinkGroup as LinkGroupType } from '../../types'
import { DocumentLink } from '../DocumentLink'
import { Heading } from '../Text'
import { FooterLinkGroupWrapper, LinksWrapper } from './styled'

interface FooterLinkGroupProps {
  linkGroup: LinkGroupType
}

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
