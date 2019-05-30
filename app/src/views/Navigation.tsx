import * as React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { useCheckout } from 'use-shopify'
import { useSettings } from '../providers/SettingsProvider'
import { Placeholder } from 'Components/Placeholder'
import { unwindEdges } from '../utils/graphql'

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
	const { checkout } = useCheckout()
	const { ready, collections } = useSettings()
	const lineItems = checkout ? unwindEdges(checkout.lineItems)[0] : []
	if (!ready) return null
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
				<Link to="/checkout">{lineItems.length} items in your cart</Link>
			</Placeholder>
		</Nav>
	)
}
