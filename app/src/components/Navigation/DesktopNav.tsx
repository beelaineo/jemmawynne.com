import * as React from 'react'
import { CtaOrSubMenu } from '../../types'
import { DocumentLink } from '../../components/DocumentLink'
import { Heading } from '../../components/Text'
import { getDocumentLinkLabel } from '../../utils'
import { SubMenu } from './SubMenu'
import {
  DesktopInner,
  NavSection,
  NavHeader,
  NavHeaderWrapper,
  SubmenuPane,
} from './styled'

interface DesktopNavProps {
  ready: boolean
  closeSubMenu: () => void
  menuItems: CtaOrSubMenu[]
  currentSubMenuKey: string | void
  openSubMenu: (key: string | undefined) => () => void
  subMenus: CtaOrSubMenu[]
  subMenuOpen: boolean
}

export const DesktopNav = ({
  ready,
  openSubMenu,
  currentSubMenuKey,
  closeSubMenu,
  menuItems,
  subMenus,
  subMenuOpen,
}: DesktopNavProps) => {
  return (
    <DesktopInner onMouseLeave={closeSubMenu}>
      <NavSection ready={ready}>
        {menuItems.map((menuItem) => {
          if (!menuItem || !menuItem._key) return null
          const { _key } = menuItem
          switch (menuItem.__typename) {
            case 'SubMenu':
              return (
                <NavHeaderWrapper key={_key}>
                  <NavHeader onMouseEnter={openSubMenu(_key)}>
                    <Heading
                      textTransform="uppercase"
                      family="sans"
                      fontWeight={4}
                      level={6}
                    >
                      {menuItem.title}
                    </Heading>
                  </NavHeader>
                </NavHeaderWrapper>
              )
            case 'Cta':
              return (
                <NavHeaderWrapper key={_key}>
                  <NavHeader onMouseEnter={openSubMenu(undefined)}>
                    <DocumentLink document={menuItem?.link?.document}>
                      <Heading
                        textTransform="uppercase"
                        family="sans"
                        level={6}
                        fontWeight={4}
                      >
                        {getDocumentLinkLabel(menuItem?.link?.document) || null}
                      </Heading>
                    </DocumentLink>
                  </NavHeader>
                </NavHeaderWrapper>
              )
            default:
              throw new Error(
                // @ts-ignore
                `There is no component for menu item of type "${menuItem.__typename}"`,
              )
          }
        })}
      </NavSection>
      <SubmenuPane open={Boolean(subMenuOpen && currentSubMenuKey)}>
        {subMenus.map((subMenu) =>
          subMenu && subMenu._key && subMenu.__typename === 'SubMenu' ? (
            <SubMenu
              key={subMenu._key || 'some-key'}
              submenu={subMenu}
              active={currentSubMenuKey === subMenu._key}
            />
          ) : null,
        )}
      </SubmenuPane>
    </DesktopInner>
  )
}
