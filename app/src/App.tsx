import * as React from 'react'
import { Switch, Route } from 'react-router'
import { Homepage, ProductListing, ProductDetail, Navigation, Checkout } from './views'
import { Providers } from './providers/AllProviders'

/**
 * App
 *
 * - Global Components
 * - Routes
 */

export const App = () => {
	return (
		<Providers>
			<Navigation />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/collections/:handle" component={ProductListing} />
				<Route exact path="/products/:handle" component={ProductDetail} />
				<Route exact path="/checkout" component={Checkout} />
			</Switch>
		</Providers>
	)
}
