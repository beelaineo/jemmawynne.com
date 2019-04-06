import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './theme/global'
import { Switch, Route } from 'react-router'
import { Homepage } from 'Views/Homepage'

/**
 * App
 *
 * - Top-level Providers
 * - Global Components
 * - Routes
 */

export const App = () => {
	return (
		<BrowserRouter>
			<React.Fragment>
				<GlobalStyles />
				<Switch>
					<Route path="/" component={Homepage} />
				</Switch>
				<div>hello!</div>
			</React.Fragment>
		</BrowserRouter>
	)
}
