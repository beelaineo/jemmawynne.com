import * as React from 'react'
import {
  SearchState,
  SearchActions,
  useSearchReducer,
  SearchResult,
} from './reducer'
import { useSanityQuery } from '../../hooks'
import { searchQuery } from './query'

type SearchContextValue = SearchState &
  Pick<
    SearchActions,
    'reset' | 'openSearch' | 'closeSearch' | 'setSearchTerm'
  > & {
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
  const { startSearch, onSuccess, onError, ...publicActions } = actions
  const { query } = useSanityQuery()

  const search = async (newSearchTerm?: string): Promise<void> => {
    if (newSearchTerm) actions.setSearchTerm(newSearchTerm)
    const searchTerm = newSearchTerm || state.searchTerm
    if (!searchTerm.length) return

    startSearch()

    const term = searchTerm.replace(/\s/, '* ')
    const termSingular = term.replace(/s$/, '')
    const params = { searchTerm: term, searchTermSingular: termSingular }
    const results = await query<SearchResult[]>(searchQuery, params)
    console.log({ results })
    onSuccess(results || [])
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
