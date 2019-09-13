import * as React from 'react'
import { SubMenu as SubMenuType } from '../../types/generated'
import { SubMenuColumns } from './styled'
import { ImageBlock } from '../../components/ContentSection/ImageBlock'
import { LinkGroup } from './LinkGroup'

const { useEffect, useRef } = React

interface SubMenuProps {
  submenu: SubMenuType
  active: boolean
}

export const SubMenu = ({ submenu, active, justify }: SubMenuProps) => {
  const { title, columns } = submenu
  return (
    <SubMenuColumns active={active}>
      {columns.map((col) => {
        switch (col.__typename) {
          case 'ImageBlock':
            return <ImageBlock justify={justify} key={col._key} block={col} />
          case 'LinkGroup':
            return <LinkGroup key={col._key} linkGroup={col} />
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
