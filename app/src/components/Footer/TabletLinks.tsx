import * as React from 'react'
import { LinkGroup } from '../../types'
import { FooterLinkGroupWrapperTablet } from './styled'
import { SubMenuAccordion, NavPageLink } from '../Navigation'
import { definitely } from '../../utils'

const { useState } = React

interface TabletLinksProps {
  linkGroups: LinkGroup[]
  /* */
}

export const TabletLinks = ({ linkGroups }: TabletLinksProps) => {
  const [currentGroupKey, setCurrentGroupKey] = useState<string | undefined>(
    undefined,
  )
  if (!linkGroups.length) return null

  const openGroup = (_key: string | undefined) => () => {
    if (_key === currentGroupKey) {
      setCurrentGroupKey(undefined)
    } else {
      setCurrentGroupKey(_key)
    }
  }
  return (
    <FooterLinkGroupWrapperTablet>
      {linkGroups.map((linkGroup) => {
        if (!linkGroup._key) {
          throw new Error('Linkgroup was not provided with a _key')
        }
        if (!linkGroup.title) {
          throw new Error('Linkgroup was not provided with a _key')
        }
        if (!linkGroup.links || !linkGroup.links.length) return null

        const { _key, title, links } = linkGroup
        const active = _key === currentGroupKey
        return (
          <SubMenuAccordion
            key={_key}
            onClick={openGroup(_key)}
            active={active}
            title={title}
            borders={false}
          >
            {definitely(links).map((link) => (
              <NavPageLink
                key={link._key || 'some-key'}
                document={link.document}
                borders={false}
                align="left"
                small
              />
            ))}
          </SubMenuAccordion>
        )
      })}
    </FooterLinkGroupWrapperTablet>
  )
}
