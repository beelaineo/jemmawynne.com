import * as React from 'react'
import { SearchState, SearchActions, useSearchReducer } from './reducer'
import { useSanityQuery } from '../../hooks'
import { searchQuery } from './searchQuery'

type SearchContextValue = Omit<SearchState & SearchActions, 'startSearch'> & {
  search: (searchTerm?: string) => Promise<void>
}

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
  const { startSearch, ...publicActions } = actions
  const { query } = useSanityQuery()

  const search = async (newSearchTerm?: string): Promise<void> => {
    if (newSearchTerm) actions.setSearchTerm(newSearchTerm)
    const searchTerm = newSearchTerm || state.searchTerm
    if (!searchTerm.length) return

    startSearch()

    const params = { searchTerm: searchTerm.replace(/\s/, '* ') }
    console.log(params)
    const result = await query(searchQuery, params)
    console.log(result)
  }

  const value: SearchContextValue = {
    ...state,
    ...publicActions,
    search,
  }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}
