import * as React from 'react'
import { useAnnouncement } from '../../providers/AnnouncementProvider'
import { CtaOrSubMenu } from '../../types'
import { TabletSubMenu } from './TabletSubMenu'
import { TabletInner, NavSection } from './styled'

interface TabletNavProps {
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
}: TabletNavProps) => {
  const { open: announcementOpen } = useAnnouncement()
  return (
    <TabletInner announcementOpen={announcementOpen} open={open}>
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
