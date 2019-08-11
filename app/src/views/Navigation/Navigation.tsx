import * as React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { useState, useReducer } from 'react'
import { PageLink } from 'Components/PageLink'
import { path } from 'ramda'
import { useCheckout } from 'use-shopify'
import { useSettings } from '../../providers/SettingsProvider'
import { CartSidebar, CloseButton, CartNav } from '../../components/Cart'
import { unwindEdges } from '../../utils/graphql'
import { Checkout } from '../Cart/Checkout'
import { Button } from '../ProductDetail/styled'
import { MenuLinkOrSubMenu } from '../../types/generated'
import { SubMenu } from './SubMenu'
import {
	Wrapper,
	Inner,
	NavSection,
	NavHeader,
	NavHeaderWrapper,
	SubmenuPane,
	Logo,
} from './styled'

interface MenuProps {
	activeMenu: null | string
	openMenu: (menuKey: null | string) => () => void
	closeMenu: () => void
}

interface NavState {
	cartOpen: boolean
	menuOpen: boolean
	currentSubmenuKey: string | void
}

const OPEN_SUBMENU = 'OPEN_SUBMENU'
const OPEN_CART = 'OPEN_CART'
const CLOSE_CART = 'CLOSE_CART'
const CLOSE_MENU = 'CLOSE_MENU'

interface Action {
	type:
		| typeof OPEN_SUBMENU
		| typeof OPEN_CART
		| typeof CLOSE_MENU
		| typeof CLOSE_CART
	[key: string]: any
}

function navReducer(currentState: NavState, action: Action): NavState {
	switch (action.type) {
		case OPEN_SUBMENU:
			return {
				...currentState,
				currentSubmenuKey: action.menuKey,
				menuOpen: true,
			}
		case CLOSE_MENU:
			return {
				...currentState,
				menuOpen: false,
			}

		case OPEN_CART:
			return {
				...currentState,
				cartOpen: true,
			}
		case CLOSE_CART:
			return {
				...currentState,
				cartOpen: false,
			}
		default:
			throw new Error(`"${action.type}" is not a valid action type`)
	}
}

export const Navigation = () => {
	/* State from Providers */
	const { loading, checkout } = useCheckout()
	const { ready, menu } = useSettings()

	/* State */
	const [{ cartOpen, menuOpen, currentSubmenuKey }, dispatch] = useReducer(
		navReducer,
		{
			cartOpen: false,
			menuOpen: false,
			currentSubmenuKey: undefined,
		},
	)

	/* Handlers */
	const openCart = () => dispatch({ type: OPEN_CART })
	const closeCart = () => dispatch({ type: CLOSE_CART })

	const openMenu = (menuKey: string) => () =>
		dispatch({ type: OPEN_SUBMENU, menuKey })
	const closeMenu = () => dispatch({ type: CLOSE_MENU })

	/* Parsing */
	const menuItems = menu ? menu.menuItems : []
	const submenus = menuItems.filter((mi) => mi.__typename === 'SubMenu')
	const lineItems = checkout ? unwindEdges(checkout.lineItems)[0] : []
	const cartCount = loading ? null : lineItems.length || null

	return (
		<Wrapper>
			<Inner>
				<NavSection ready={ready}>
					{menuItems.map((menuItem) =>
						menuItem.__typename === 'SubMenu' ? (
							<NavHeaderWrapper
								key={menuItem._key}
								onMouseEnter={openMenu(menuItem._key)}
							>
								<NavHeader transform="uppercase">{menuItem.title}</NavHeader>
							</NavHeaderWrapper>
						) : (
							<NavHeaderWrapper key={menuItem._key} onMouseEnter={closeMenu}>
								<NavHeader transform="uppercase">
									<PageLink link={menuItem.link} />
								</NavHeader>
							</NavHeaderWrapper>
						),
					)}
				</NavSection>

				<Link to="/">
					<Logo src="/static/images/Logo_Large_Black.svg" />
				</Link>
				<NavSection ready={ready} align="right">
					<NavHeaderWrapper>
						<NavHeader as="button" onClick={openCart}>
							Cart {cartCount}{' '}
							{cartCount >= 0 && cartCount <= 1
								? 'item'
								: cartCount > 1
								? 'items'
								: ''}
						</NavHeader>
					</NavHeaderWrapper>
				</NavSection>
				<SubmenuPane open={menuOpen} onMouseLeave={closeMenu}>
					{submenus.map((submenu) =>
						submenu.__typename === 'SubMenu' ? (
							<SubMenu
								key={submenu._key}
								submenu={submenu}
								active={currentSubmenuKey === submenu._key}
								justify="start"
							/>
						) : null,
					)}
				</SubmenuPane>
			</Inner>
			<CartSidebar open={cartOpen}>
				<CloseButton onClick={closeCart}>close</CloseButton>
				<Checkout />
			</CartSidebar>
		</Wrapper>
	)
}
