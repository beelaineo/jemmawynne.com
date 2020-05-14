import * as React from 'react'
import { Box } from '@xstyled/styled-components'
import {
  RichPageLink as RichPageLinkType,
  SubMenu as SubMenuType,
} from '../../types'
import {
  SubMenuWrapper,
  SubMenuTitle,
  SubMenuTitles,
  SubMenuContent,
  SubMenuContentSection,
  SubMenuItemWrapper,
  ImageWrapper,
  ImageLinkWrapper,
} from './styled'
import { LinkGroup } from '../../components/LinkGroup'
import { Image } from '../../components/Image'
import { DocumentLink } from '../../components/DocumentLink'
import { Heading } from '../../components/Text'
import { getDocumentLinkImage } from '../../utils/links'

const { useState } = React

interface ImageLinkProps {
  link: RichPageLinkType
}

export const ImageLink = ({ link }: ImageLinkProps) => {
  const { image: customImage, hoverImage } = link
  const image = customImage ?? getDocumentLinkImage(link.document)
  const linkTitle = link.title || link?.document?.title || null

  return (
    <ImageLinkWrapper>
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
    </ImageLinkWrapper>
  )
}

interface SubMenuProps {
  submenu: SubMenuType
  active: boolean
}

export const SubMenu = ({ submenu, active }: SubMenuProps) => {
  const { columns } = submenu
  if (!columns || columns.length === 0) return null
  const firstColumn = columns[0]
  if (!firstColumn) return null
  const [activeSection, setActiveSectionValue] = useState(firstColumn._key)
  const setActiveSection = (key: string | null | undefined) => () =>
    setActiveSectionValue(key)

  if (!activeSection) return null
  if (!columns) return null

  return (
    <SubMenuWrapper>
      <SubMenuTitles>
        {columns.map((column) =>
          column ? (
            <SubMenuTitle
              active={column._key === activeSection}
              key={column._key || 'some-key'}
            >
              <Heading level={3} family="serif">
                <span onMouseEnter={setActiveSection(column._key)}>
                  {column.title}
                </span>
              </Heading>
            </SubMenuTitle>
          ) : null,
        )}
      </SubMenuTitles>
      <SubMenuContent>
        {columns.map((column) =>
          column ? (
            <SubMenuContentSection
              active={column._key === activeSection}
              key={column._key || 'some-key'}
              aria-hidden={!(column._key === activeSection)}
            >
              {column.links
                ? column.links.map((link) =>
                    link ? (
                      link.__typename === 'RichPageLink' ? (
                        <SubMenuItemWrapper key={link._key || 'some-key'}>
                          <ImageLink link={link} />
                        </SubMenuItemWrapper>
                      ) : link.__typename === 'LinkGroup' ? (
                        <SubMenuItemWrapper key={link._key || 'some-key'}>
                          <LinkGroup linkGroup={link} />
                        </SubMenuItemWrapper>
                      ) : null
                    ) : null,
                  )
                : null}
              {column.images
                ? column.images.map((image, index) =>
                    image ? (
                      <ImageWrapper key={image._key || 'some-key'}>
                        <Image
                          image={image}
                          ratio={
                            column.images && index === column.images.length - 1
                              ? undefined
                              : 1
                          }
                        />
                      </ImageWrapper>
                    ) : null,
                  )
                : null}
            </SubMenuContentSection>
          ) : null,
        )}
      </SubMenuContent>
    </SubMenuWrapper>
  )
  return null
}
