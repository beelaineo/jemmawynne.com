import * as React from 'react'
import { Box } from '@xstyled/styled-components'
import { CtaOrSubMenu, InternalLink } from '../../types'
import { DocumentLink } from '../../components/DocumentLink'
import { Heading } from '../../components/Text'
import { definitely, getDocumentLinkLabel } from '../../utils'
import {
  NavHeaderMobile,
  NavPageLinkWrapper,
  NavHeaderWrapper,
  PlusWrapper,
} from './styled'

const { useState } = React

interface NavPageLinkProps {
  document: InternalLink['document']
  small?: boolean
  borders?: boolean
  align?: string
}

export const NavPageLink = ({
  document,
  small,
  align,
  borders,
}: NavPageLinkProps) => (
  <DocumentLink document={document}>
    <NavPageLinkWrapper borders={borders} align={align} small={small}>
      <Heading
        family={small ? 'sans' : 'serif'}
        fontWeight={3}
        m={0}
        level={small ? 6 : 2}
      >
        {getDocumentLinkLabel(document) || null}
      </Heading>
    </NavPageLinkWrapper>
  </DocumentLink>
)

interface SubMenuAccordionProps {
  title: string
  children: React.ReactNode
  onClick: () => void
  active: boolean
  indent?: boolean
  borders?: boolean
}

export const SubMenuAccordion = ({
  title,
  onClick,
  active,
  children,
  indent,
  borders,
}: SubMenuAccordionProps) => {
  return (
    <NavHeaderWrapper borders={borders}>
      <NavHeaderMobile borders={borders} onClick={onClick}>
        <Heading
          family="serif"
          fontWeight={3}
          m={0}
          ml={indent ? 5 : 0}
          level={2}
        >
          {title}
        </Heading>
        <PlusWrapper active={active} />
      </NavHeaderMobile>
      {active ? children : null}
    </NavHeaderWrapper>
  )
}

interface TabletSubMenuProps {
  menuItem: CtaOrSubMenu
  active: boolean
  openSubMenu: (key: string) => () => void
}

export const TabletSubMenu = ({
  menuItem,
  active,
  openSubMenu,
}: TabletSubMenuProps) => {
  const [activeInnerMenuKey, setActiveInnerMenuKey] = useState<string | void>(
    undefined,
  )

  if (!menuItem._key) {
    throw new Error('Menu item was not provided with a key')
  }

  const openInnerMenu = (key: string) => () => {
    if (key === activeInnerMenuKey) {
      setActiveInnerMenuKey(undefined)
    } else {
      setActiveInnerMenuKey(key)
    }
  }

  switch (menuItem.__typename) {
    case 'SubMenu':
      if (!menuItem.title) {
        throw new Error('Menu item was not provided with a title')
      }

      return (
        <SubMenuAccordion
          active={active}
          onClick={openSubMenu(menuItem._key)}
          title={menuItem.title}
          borders
        >
          <Box mt={5}>
            {definitely(menuItem.columns).map((column) => {
              if (!column.title) {
                throw new Error('Menu subcolumn was not provided with a title')
              }

              if (!column._key) {
                throw new Error('Menu item was not provided with a title')
              }

              const innerActive = activeInnerMenuKey === column._key
              return (
                <SubMenuAccordion
                  key={column._key}
                  active={innerActive}
                  onClick={openInnerMenu(column._key)}
                  title={column.title}
                  indent
                >
                  <Box mb={4}>
                    {definitely(column.links).map((link) => {
                      switch (link.__typename) {
                        case 'RichPageLink':
                          return (
                            <NavPageLink
                              small
                              key={link._key || 'some-key'}
                              document={link.document}
                              borders
                            />
                          )
                        case 'LinkGroup':
                          return (
                            <React.Fragment key={link._key || 'some-key'}>
                              {definitely(link.links).map((linkGroupLink) => (
                                <NavPageLink
                                  small
                                  key={linkGroupLink._key || 'some-key'}
                                  document={linkGroupLink.document}
                                  borders
                                />
                              ))}
                            </React.Fragment>
                          )

                        default:
                          return null
                      }
                    })}
                  </Box>
                </SubMenuAccordion>
              )
            })}
          </Box>
        </SubMenuAccordion>
      )
    case 'Cta':
      if (!menuItem?.link?.document) return null
      return (
        <NavHeaderWrapper key={menuItem._key}>
          <NavHeaderMobile borders>
            <NavPageLink document={menuItem.link.document} />
          </NavHeaderMobile>
        </NavHeaderWrapper>
      )
    default:
      throw new Error(
        // @ts-ignore
        `There is no component for menu item of type "${menuItem.__typename}"`,
      )
  }
}
