import * as React from 'react'
import { SubMenu as SubMenuType } from '../../types'
import { SubMenuColumns } from './styled'
import { RichPageLink } from '../../components/RichPageLink'
import { LinkGroup } from './LinkGroup'

interface SubMenuProps {
  submenu: SubMenuType
  active: boolean
}

export const SubMenu = ({ submenu, active }: SubMenuProps) => {
  const { columns } = submenu
  return (
    <SubMenuColumns active={active}>
      {columns.map((col) => {
        switch (col.__typename) {
          case 'RichPageLink':
            return (
              //
              <RichPageLink key={col._key} link={col} />
            )
          case 'LinkGroup':
            return (
              //
              <LinkGroup key={col._key} linkGroup={col} />
            )
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
