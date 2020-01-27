import * as React from 'react'
import { Location } from 'history'

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

const location = { location: 'dummy' }

export const LocationProvider = ({ children }: LocationProviderProps) => (
  // @ts-ignore
  <LocationContext.Provider value={{ location }}>
    {children}
  </LocationContext.Provider>
)
