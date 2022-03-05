import * as React from 'react'
import { SubmenuSectionList as SubmenuSectionListType } from '../../types'
import { definitely } from '../../utils'
import { DocumentLink } from '../DocumentLink'
import { Image } from '../Image'
import { Heading } from '../Text'
import {
  SubmenuSectionLinksWrapper,
  SubmenuSectionListImagesWrapper,
  SubmenuSectionListImageWrapper,
} from './styled'

interface SubmenuSectionListProps {
  section: SubmenuSectionListType
}

const { useState } = React

export const SubmenuSectionList: React.FC<SubmenuSectionListProps> = ({
  section,
}) => {
  const { title } = section
  const links = definitely(section.links)
  const firstLink = links ? links[0] : null
  const firstLinkKey = firstLink ? firstLink._key : null

  const [currentLink, setCurrentLink] = useState<string | null>(
    firstLinkKey || null,
  )

  const handleHover = (key: string) => () => setCurrentLink(key)

  const image = links.find((l) => l._key === currentLink)?.image
  console.log({ links, currentLink, image })
  return (
    <>
      <SubmenuSectionLinksWrapper>
        <Heading family="sans" color="body.6" weight={3} level={6}>
          {title}
        </Heading>

        <SubmenuSectionLinksWrapper>
          {links.map((menuLink) =>
            menuLink &&
            menuLink?.link?.document &&
            menuLink._key &&
            'archived' in menuLink.link.document &&
            menuLink.link.document?.archived !== true ? (
              <Heading
                family="sans"
                level={7}
                fontSize={7}
                mb="1em"
                weight={4}
                key={menuLink._key || 'some-key'}
                // @ts-ignore
                onMouseEnter={handleHover(menuLink._key)}
              >
                <DocumentLink
                  label={menuLink.link.label}
                  document={menuLink.link.document}
                />
              </Heading>
            ) : null,
          )}
        </SubmenuSectionLinksWrapper>
      </SubmenuSectionLinksWrapper>
      <SubmenuSectionListImagesWrapper>
        {links.map(({ _key, image }) => (
          <SubmenuSectionListImageWrapper active={_key === currentLink}>
            {image ? <Image image={image} ratio={0.4} /> : null}
          </SubmenuSectionListImageWrapper>
        ))}
      </SubmenuSectionListImagesWrapper>
    </>
  )
}
