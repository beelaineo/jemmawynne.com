import * as React from 'react'
import styled, { css } from 'styled-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCheckout } from 'use-shopify'
import { useSettings } from '../providers/SettingsProvider'
import { CartSidebar, CloseButton, CartNav } from 'Components/Cart'
import { unwindEdges } from '../utils/graphql'
import { Checkout } from './Cart/Checkout'
import { Button } from './ProductDetail/styled'
import { FaShoppingCart, FaTimes } from 'react-icons/fa'

const Logo = styled.img`
	width: 300px;
`

export const Nav = styled.nav`
	position: relative;
	z-index: 9999;
	${({ theme }) => css`
		padding: ${theme.layout.spacing.single};
		display: flex;
		justify-content: space-between;
		font-family: ${theme.font.family.sans};
	`}
`

export const Navigation = () => {
	const { loading, checkout } = useCheckout()
	const { ready, collections } = useSettings()
	const lineItems = checkout ? unwindEdges(checkout.lineItems)[0] : []

	// Create a flyout for the cart
	const [open, setOpen] = useState(false)

	const toggleFlyout = () => {
		setOpen(!open)
	}

	return (
		<Nav>
			<Logo src="/static/images/Logo_Small.svg" alt="Jemma Wynne Logo" />
			<div>
				{collections.map((collection) => (
					<Link key={collection.id} to={`/collections/${collection.handle}`}>
						{collection.title}
					</Link>
				))}
			</div>{' '}
			<CartNav>
				{loading ? (
					<Button background="dark" color="light" disabled>
						loading
					</Button>
				) : (
					<Button background="dark" color="light" weight="light" onClick={toggleFlyout}>
						{lineItems.length} <FaShoppingCart />
					</Button>
				)}
			</CartNav>
			<CartSidebar open={open}>
				<CloseButton onClick={toggleFlyout}>
					<FaTimes />
				</CloseButton>
				<Checkout />
			</CartSidebar>
		</Nav>
	)
}
