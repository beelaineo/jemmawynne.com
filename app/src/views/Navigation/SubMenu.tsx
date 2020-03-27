import * as React from 'react'
import { Box } from '@xstyled/styled-components'
import { RichPageLink, SubMenu as SubMenuType } from '../../types'
import { SubMenuColumns } from './styled'
import { LinkGroup } from './LinkGroup'
import { Image } from '../../components/Image'
import { DocumentLink } from '../../components/DocumentLink'
import { Heading } from '../../components/Text'
import { getDocumentLinkImage } from '../../utils/links'

interface ImageLinkProps {
  link: RichPageLink
}

export const ImageLink = ({ link }: ImageLinkProps) => {
  const { image: customImage, hoverImage } = link
  const image = customImage ?? getDocumentLinkImage(link.document)
  const linkTitle = link.title || link?.document?.title || null

  return (
    <DocumentLink document={link.document}>
      <Image hoverImage={hoverImage} image={image} ratio={1} />
      <Box mt={2} textAlign="center">
        <Heading
          family="sans"
          weight={3}
          textAlign="center"
          level={7}
          textTransform="uppercase"
        >
          {linkTitle}
        </Heading>
      </Box>
    </DocumentLink>
  )
}

interface SubMenuProps {
  submenu: SubMenuType
  active: boolean
}

export const SubMenu = ({ submenu, active }: SubMenuProps) => {
  const { columns } = submenu
  if (!columns) return null
  return (
    <SubMenuColumns active={active}>
      {columns.map((col) => {
        if (!col) return null
        switch (col.__typename) {
          case 'RichPageLink':
            return <ImageLink key={col._key || 'some-key'} link={col} />
          case 'LinkGroup':
            return <LinkGroup key={col._key || 'some-key'} linkGroup={col} />
          default:
            throw new Error(
              // @ts-ignore
              `Cannot create a column for type "${col.__typename}"`,
            )
        }
      })}
    </SubMenuColumns>
  )
}
