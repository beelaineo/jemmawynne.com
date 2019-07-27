import * as React from 'react'
import { path } from 'ramda'
import { MenuLink as MenuLinkType } from '../../types/generated'
import { NavHeaderWrapper, NavHeader } from './styled'
import { Link } from '../../components/Link'

interface MenuLinkProps {
	menuLink: MenuLinkType
}

export const MenuLink = ({ menuLink }: MenuLinkProps) => {
	const { label, link } = menuLink
	const pageTitle = path(['document', 'title'], link)
	return (
		<NavHeaderWrapper>
			<NavHeader transform="uppercase">
				<Link link={link}>{pageTitle}</Link>
			</NavHeader>
		</NavHeaderWrapper>
	)
}
