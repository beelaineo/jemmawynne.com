import * as React from 'react'
import { x } from '@xstyled/styled-components'
import {
  SubmenuSection as SubmenuSectionType,
  RichPageLink as RichPageLinkType,
} from '../../types'
import { SubMenuItemWrapper, ImageLinkWrapper } from './styled'
import { LinkGroup } from '../../components/LinkGroup'
import { Image } from '../../components/Image'
import { DocumentLink } from '../../components/DocumentLink'
import { Heading } from '../../components/Text'
import { getDocumentLinkImage } from '../../utils/links'
import { definitely } from '../../utils'

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
        <div>
          <Image
            displayCaption={false}
            hoverImage={hoverImage}
            image={image}
            ratio={1}
          />
          <x.div mt={2} textAlign="center">
            <Heading
              family="sans"
              weight={4}
              textAlign="center"
              level={7}
              textTransform="uppercase"
            >
              {linkTitle}
            </Heading>
          </x.div>
        </div>
      </DocumentLink>
    </ImageLinkWrapper>
  )
}

interface SubmenuSectionProps {
  section: SubmenuSectionType
}

export const SubmenuSection: React.FC<SubmenuSectionProps> = ({ section }) => {
  const links = definitely(section.links)
  return (
    <>
      {links.map((link) =>
        link.__typename === 'RichPageLink' &&
        // @ts-ignore
        link?.document?.archived !== true ? (
          <SubMenuItemWrapper type="image" key={link._key || 'some-key'}>
            <ImageLink link={link} />
          </SubMenuItemWrapper>
        ) : link.__typename === 'LinkGroup' ? (
          <SubMenuItemWrapper type="linkGroup" key={link._key || 'some-key'}>
            <LinkGroup linkGroup={link} />
          </SubMenuItemWrapper>
        ) : null,
      )}
    </>
  )
}
