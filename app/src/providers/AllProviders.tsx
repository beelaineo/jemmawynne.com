import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ShopifyProvider, createUrqlQueries } from 'use-shopify'
import { createClient, Provider as UrqlProvider } from 'urql'
import { SHOPIFY_STOREFRONT_TOKEN } from '../config'
import { theme, GlobalStyles } from '../theme'
import { SettingsProvider } from './SettingsProvider'

/**
 * App
 *
 * - Top-level Providers
 * - Global Components
 * - Routes
 */

interface Props {
	children: React.ReactNode
}

const client = createClient({
	// url: 'http://localhost:4000',
	url: 'https://jemmawynne-api.good-idea.now.sh',
})

const queries = createUrqlQueries(client)

export const Providers = ({ children }: Props) => {
	return (
		<UrqlProvider value={client}>
			<ShopifyProvider queries={queries}>
				<SettingsProvider>
					<ThemeProvider theme={theme}>
						<BrowserRouter>
							<GlobalStyles />
							{children}
						</BrowserRouter>
					</ThemeProvider>
				</SettingsProvider>
			</ShopifyProvider>
		</UrqlProvider>
	)
}
