import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ShopifyProvider } from 'use-shopify'
import { theme, GlobalStyles } from '../theme'
import { SettingsProvider } from './SettingsProvider'
import { SHOPIFY_STOREFRONT_TOKEN } from '../config'

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

export const Providers = ({ children }: Props) => {
	return (
		<ShopifyProvider storefrontName="jemmawynne" storefrontAccessToken={SHOPIFY_STOREFRONT_TOKEN}>
			<SettingsProvider>
				<ThemeProvider theme={theme}>
					<BrowserRouter>
						<GlobalStyles />
						{children}
					</BrowserRouter>
				</ThemeProvider>
			</SettingsProvider>
		</ShopifyProvider>
	)
}
