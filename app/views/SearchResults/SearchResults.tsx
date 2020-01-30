import * as React from 'react'
import { useSearch } from 'use-shopify'
import {
  ClearSearchButton,
  CurrentSearchTerm,
  SearchInputWrapper,
  SearchButton,
  Wrapper,
} from './styled'
import { Header2 } from '../../components/Text'
import { ItemGrid } from '../../components/ItemGrid'
import { Icon } from '../../components/Icon'
import { useLocation } from '../../providers/LocationProvider'

const { useState, useEffect } = React

interface SearchResultsProps {
  /* */
}

export const SearchResults = (props: SearchResultsProps) => {
  const {
    searchTerm,
    reset,
    loading,
    results,
    products,
    collections,
    search,
  } = useSearch()
  const [open, setOpen] = useState<boolean>(false)
  const [localSearchTerm, setLocalSearchTerm] = useState<string>('')
  const { location } = useLocation()
  /* Helpers */
  const close = () => {
    setOpen(false)
    reset()
  }
  /* Handlers */

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setLocalSearchTerm(e.target.value || '')
  }
  const clearSearch = () => reset()
  const doSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    search(localSearchTerm)
  }

  /** Effects */
  useEffect(() => {
    // Open the view on a new search
    if (!open && loading) setOpen(true)
  }, [loading])

  useEffect(() => {
    close()
  }, [location.pathname])

  if (!open) return null
  const allResults = [...collections, ...products]

  return (
    <Wrapper>
      <button onClick={close}>close</button>
      {loading === false && open && results.length === 0 ? (
        <SearchInputWrapper onSubmit={doSearch}>
          <input
            onChange={handleInputChange}
            value={localSearchTerm}
            type="text"
          />
          <SearchButton type="submit">
            <Icon icon="search" />
          </SearchButton>
        </SearchInputWrapper>
      ) : (
        <>
          <Header2 color="grays.6">
            Search Results for:{' '}
            <CurrentSearchTerm>
              {searchTerm}
              <ClearSearchButton onClick={clearSearch} />
            </CurrentSearchTerm>
          </Header2>
          {loading ? <p>Loading...</p> : <ItemGrid items={allResults} />}
        </>
      )}
    </Wrapper>
  )
}
