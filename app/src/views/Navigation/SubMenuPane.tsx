import * as React from 'react'
import { SubMenu as SubMenuType } from '../../types/generated'
import { NavHeader, SubMenuWrapper, SubMenuColumns } from './styled'

const { useEffect, useRef } = React

interface SubMenuProps {
	subMenu: SubMenuType
	/* */
}

export const SubMenuPane = ({ subMenu }: SubMenuProps) => {
	console.log('submenu', subMenu, activeSubmenu)
	const { title } = subMenu
	return (
		<SubMenuWrapper open={subMenu._key === activeSubmenu}>
			<SubMenuColumns>
				<p>p</p>
				<p>p</p>
				<p>p</p>
				<p>p</p>
			</SubMenuColumns>
		</SubMenuWrapper>
	)
}
