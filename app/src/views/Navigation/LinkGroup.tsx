import * as React from 'react'
import { LinkGroup as LinkGroupType } from '../../types'
import { DocumentLink } from '../../components/DocumentLink'
import { Heading } from '../../components/Text'

interface LinkGroupProps {
  linkGroup: LinkGroupType
}

export const LinkGroup = ({ linkGroup }: LinkGroupProps) => {
  const { title, links } = linkGroup
  return (
    <div>
      <Heading level={5}>{title}</Heading>
      {links && links.length
        ? links.map((menuLink) =>
            menuLink && menuLink.document ? (
              <Heading level={5} key={menuLink._key || 'some-key'}>
                <DocumentLink document={menuLink.document} />
              </Heading>
            ) : null,
          )
        : null}
    </div>
  )
}
