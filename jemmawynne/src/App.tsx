import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'
// import { Homepage } from 'Views/Homepage'
import { Homepage, Navigation, ProductListing, ProductDetail } from './views'
import { GraphQLClient, ClientContext } from 'graphql-hooks'
import memCache from 'graphql-hooks-memcache'
import { GlobalStyles } from './theme/global'

const client = new GraphQLClient({
	url: 'https://kame-case.myshopify.com/api/graphql',
	headers: {
		'X-Shopify-Storefront-Access-Token': '29f169ddd673015f96eb6865593e9369',
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
				<React.Fragment>
					<GlobalStyles />
					<Navigation />
					<Switch>
						<Route exact path="/" component={Homepage} />
						<Route exact path="/test" component={Homepage} />
						<Route exact path="/collections/a" component={ProductListing} />
						<Route exact path="/products/:handle" component={ProductDetail} />
					</Switch>
				</React.Fragment>
			</BrowserRouter>
		</ClientContext.Provider>
	)
}
