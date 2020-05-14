import * as React from 'react'
import { Box } from '@xstyled/styled-components'
import { CtaOrSubMenu } from '../../types'
import { TabletSubMenu } from './TabletSubMenu'
import { TabletInner, NavSection } from './styled'

interface TabletNav {
  open: boolean
  ready: boolean
  menuItems: CtaOrSubMenu[]
  currentSubMenuKey: string | void
  openSubMenu: (key: string | undefined) => () => void
}

export const TabletNav = ({
  open,
  ready,
  openSubMenu,
  currentSubMenuKey,
  menuItems,
}: TabletNav) => {
  return (
    <TabletInner open={open}>
      <NavSection ready={ready}>
        {menuItems.map((menuItem) => {
          if (!menuItem || !menuItem._key) return null
          const { _key } = menuItem
          const active = _key === currentSubMenuKey
          return (
            <TabletSubMenu
              key={_key}
              menuItem={menuItem}
              active={active}
              openSubMenu={openSubMenu}
            />
          )
        })}
      </NavSection>
    </TabletInner>
  )
}
