import * as React from 'react'
import styled, { css } from 'styled-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCheckout } from 'use-shopify'
import { FaShoppingCart, FaTimes } from 'react-icons/fa'
import { useSettings } from '../../providers/SettingsProvider'
import { CartSidebar, CloseButton, CartNav } from 'Components/Cart'
import { unwindEdges } from '../../utils/graphql'
import { Checkout } from '../Cart/Checkout'
import { Button } from '../ProductDetail/styled'
import { MenuLinkOrSubMenu } from '../../types/generated'
import { Wrapper, Inner, NavSection, Logo } from './styled'
import { MenuLink } from './MenuLink'
import { SubMenu } from './SubMenu'
import { SubMenuPane } from './SubMenuPane'

const renderMenuItem = (item: MenuLinkOrSubMenu) => {
	switch (item.__typename) {
		case 'MenuLink':
			return <MenuLink key={item._key} menuLink={item} />
		case 'SubMenu':
			return <SubMenu key={item._key} subMenu={item} />
		default:
			throw new Error(
				// @ts-ignore
				`There is no component for item type "${item.__typename}"`,
			)
	}
}

export const Navigation = () => {
	const { loading, checkout } = useCheckout()
	const { ready, menu } = useSettings()
	const lineItems = checkout ? unwindEdges(checkout.lineItems)[0] : []

	// Create a flyout for the cart
	const [open, setOpen] = useState(false)

	const toggleFlyout = () => {
		setOpen(!open)
	}

	const menuItems = menu ? menu.menuItems : []
	const subMenus = menuItems.filter((mi) => mi.__typename === 'SubMenu')

	console.log(menuItems)
	return (
		<Wrapper>
			<Inner>
				<NavSection ready={ready}>{menuItems.map(renderMenuItem)}</NavSection>
				<Logo src="/static/images/Logo_Large_Black.svg" />
				<NavSection ready={ready}>a</NavSection>
			</Inner>
		</Wrapper>
	)
}

// {subMenus.map((subMenu) => (
// 	<SubMenuPane
// 		key={subMenu._key}
// 		{...activeMenuProps}
// 		// @ts-ignore
// 		subMenu={subMenu}
// 	/>
// ))}
