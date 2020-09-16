import * as React from 'react'
import {
  SearchState,
  SearchActions,
  useSearchReducer,
  SearchResult,
} from './reducer'
import { useSanityQuery } from '../../hooks'
import { searchQuery } from './query'
import { useMenu } from '../MenuProvider'

const { useEffect } = React

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
  const {
    startSearch,
    onSuccess,
    onError,
    openSearch: openSearchAction,
    ...publicActions
  } = actions
  const { query } = useSanityQuery<SearchResult>()

  const { closeMenu } = useMenu()

  useEffect(() => {
    if (state.open) closeMenu()
  }, [state.open])

  const search = async (newSearchTerm?: string): Promise<void> => {
    if (newSearchTerm) actions.setSearchTerm(newSearchTerm)
    const searchTerm = newSearchTerm || state.searchTerm
    if (!searchTerm.length) return

    startSearch()

    const term = searchTerm.replace(/\s/, '* ')
    const termSingular = term.replace(/s$/, '')
    const params = { searchTerm: term, searchTermSingular: termSingular }
    const results = await query(searchQuery, params)
    onSuccess(results || [])
  }

  const openSearch = () => {
    openSearchAction()
    closeMenu()
  }

  const value: SearchContextValue = {
    ...state,
    ...publicActions,
    openSearch,
    search,
  }

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}
