import * as React from 'react'
import { MenuLink as MenuLinkType } from '../../types/generated'
import { NavHeaderWrapper, NavHeader } from './styled'
import { Link } from '../../components/Link'

interface MenuLinkProps {
	menuLink: MenuLinkType
}

export const MenuLink = ({ menuLink }: MenuLinkProps) => {
	const { label, link } = menuLink
	return (
		<NavHeaderWrapper>
			<NavHeader transform="uppercase">
				<Link link={link[0]}>{label}</Link>
			</NavHeader>
		</NavHeaderWrapper>
	)
}
