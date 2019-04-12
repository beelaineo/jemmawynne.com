import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'
// import { Homepage } from 'Views/Homepage'
import { Homepage, ProductListing, ProductDetail, Navigation, Checkout } from './views'
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import memCache from 'graphql-hooks-memcache'
import { ShopifyProvider } from './providers/Shopify'
import { GlobalStyles } from './theme/global'

/* Global var provided by webpack */
declare var SHOPIFY_STOREFRONT_TOKEN: string

const client = new GraphQLClient({
	url: 'https://jemmawynne.myshopify.com/api/graphql',
	headers: {
		'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN,
	},
	cache: memCache(),
})

/**
 * App
 *
 * - Top-level Providers
 * - Global Components
 * - Routes
 */

export const App = () => {
	return (
		<ClientContext.Provider value={client}>
			<BrowserRouter>
				<ShopifyProvider>
					<GlobalStyles />
					<Navigation />
					<Switch>
						<Route exact path="/" component={Homepage} />
						<Route exact path="/test" component={Homepage} />
						<Route exact path="/collections/a" component={ProductListing} />
						<Route exact path="/products/:handle" component={ProductDetail} />
						<Route exact path="/checkout" component={Checkout} />
					</Switch>
				</ShopifyProvider>
			</BrowserRouter>
		</ClientContext.Provider>
	)
}
