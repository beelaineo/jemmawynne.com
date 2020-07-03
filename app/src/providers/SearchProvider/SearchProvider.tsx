import * as React from 'react'
import { SearchState, SearchActions, useSearchReducer } from './reducer'

type SearchContextValue = SearchState & SearchActions

const SearchContext = React.createContext<SearchContextValue | undefined>(
  undefined,
)

export const SearchConsumer = SearchContext.Consumer

export const useSearch = () => {
  const ctx = React.useContext(SearchContext)
  if (!ctx)
    throw new Error('useSearchContext must be used within a SearchProvider')
  return ctx
}

interface SearchProps {
  children: React.ReactNode
}

export const SearchProvider = ({ children }: SearchProps) => {
  const { state, actions } = useSearchReducer()

  const value: SearchContextValue = {
    ...state,
    ...actions,
  }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}
