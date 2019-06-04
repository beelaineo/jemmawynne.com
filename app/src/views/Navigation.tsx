import * as React from 'react'
import styled, { css } from 'styled-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCheckout } from 'use-shopify'
import { useSettings } from '../providers/SettingsProvider'
import { Placeholder } from 'Components/Placeholder'
import { CartSidebar, CloseButton } from 'Components/Cart'
import { unwindEdges } from '../utils/graphql'
import { Checkout } from './Cart/Checkout'

const Logo = styled.img`
	width: 300px;
`

export const Nav = styled.nav`
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
	const [flyout, toggleFlyout] = useState('closed')

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
			<Placeholder>
				{loading ? (
					<Link disabled>loading</Link>
				) : (
					<button onClick={() => (flyout === 'closed' ? toggleFlyout('open') : toggleFlyout('closed'))}>
						{lineItems.length} items in your cart
					</button>
				)}
			</Placeholder>
			<Placeholder>
				<CartSidebar open={`${flyout}`}>
					<CloseButton onClick={() => (flyout === 'closed' ? toggleFlyout('open') : toggleFlyout('closed'))}>X</CloseButton>
					<Checkout />
				</CartSidebar>
			</Placeholder>
		</Nav>
	)
}
