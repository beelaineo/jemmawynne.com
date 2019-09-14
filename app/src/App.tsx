import * as React from 'react'
import { Switch, Route } from 'react-router'
import {
  Homepage,
  SearchResults,
  ProductListing,
  ProductDetail,
  Navigation,
} from './views'
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
      <SearchResults />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/collections/:handle" component={ProductListing} />
        <Route exact path="/products/:handle" component={ProductDetail} />
      </Switch>
    </Providers>
  )
}
