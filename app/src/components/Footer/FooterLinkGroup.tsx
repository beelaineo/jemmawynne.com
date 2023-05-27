import * as React from 'react'
import { LinkGroup as LinkGroupType } from '../../types'
import { DocumentLink } from '../DocumentLink'
import { Heading } from '../Text'
import { FooterLinkGroupWrapper, LinksWrapper } from './styled'
import { definitely } from '../../utils'

interface FooterLinkGroupProps {
  linkGroup: LinkGroupType
}

export const FooterLinkGroup = ({ linkGroup }: FooterLinkGroupProps) => {
  const { title, links } = linkGroup
  return (
    <FooterLinkGroupWrapper>
      <Heading
        family="sans"
        // @ts-ignore
        color="body.4"
        weight={4}
        level={5}
      >
        {title}
      </Heading>
      <LinksWrapper>
        {definitely(links).map((menuLink) =>
          menuLink.document &&
          // @ts-ignore
          menuLink.document?.archived !== true ? (
            <Heading
              family="serif"
              level={4}
              weight={2}
              key={menuLink._key || 'some-key'}
            >
              <DocumentLink document={menuLink.document} />
            </Heading>
          ) : null,
        )}
      </LinksWrapper>
    </FooterLinkGroupWrapper>
  )
}
