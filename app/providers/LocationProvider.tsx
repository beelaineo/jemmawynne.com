import * as React from 'react'
import { Location } from 'history'
import { Route } from 'react-router-dom'

interface LocationContextValue {
  location: Location
}

const LocationContext = React.createContext<LocationContextValue | undefined>(
  undefined,
)

export const LocationConsumer = LocationContext.Consumer

export const useLocation = () => {
  const ctx = React.useContext(LocationContext)
  if (!ctx) throw new Error('useLocationContext must be used within a Location')
  return ctx
}

interface LocationProviderProps {
  children: React.ReactNode
}

export const LocationProvider = ({ children }: LocationProviderProps) => (
  <Route
    render={({ location }) => (
      <LocationContext.Provider value={{ location }}>
        {children}
      </LocationContext.Provider>
    )}
  />
)
