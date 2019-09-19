import * as React from 'react'
import { LinkGroup as LinkGroupType } from '../../types/generated'
import { DocumentLink } from '../../components/DocumentLink'
import { Header5, Header6 } from '../../components/Text'

interface LinkGroupProps {
  linkGroup: LinkGroupType
}

export const LinkGroup = ({ linkGroup }: LinkGroupProps) => {
  const { title, links } = linkGroup
  return (
    <div>
      <Header5>{title}</Header5>
      {links && links.length
        ? links.map((menuLink) =>
            menuLink.document ? (
              <Header5 weight="normal" key={menuLink._key}>
                <DocumentLink document={menuLink.document} />
              </Header5>
            ) : null,
          )
        : null}
    </div>
  )
}
