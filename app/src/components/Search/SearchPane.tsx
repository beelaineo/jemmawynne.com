import * as React from 'react'
import { Column } from '../Layout'
import { Heading } from '../Text'
import { ItemGrid } from '../ItemGrid'
import { useSearch } from '../../providers/SearchProvider'
import { SearchInput } from './SearchInput'
import { Outer, CloseButton, SearchHeader, Results, Wrapper } from './styled'

const { useEffect } = React

export const SearchPane = () => {
  const {
    searchTerm,
    open,
    openSearch,
    loading,
    errorMessage,
    searchResults,
    reset,
    search,
    closeSearch,
  } = useSearch()
  console.log(open, searchTerm)

  /* Handlers */

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    search()
  }

  const close = () => {
    closeSearch()
    reset()
  }

  /** Effects */
  useEffect(() => {
    // Open the view on a new search
    if (!open && loading) openSearch()
  }, [loading])

  const countMessage = searchResults
    ? `Found ${searchResults.length} result${
        searchResults.length === 1 ? '' : 's'
      }`
    : ''

  return (
    <Outer>
      <Wrapper aria-hidden={!open} visible={open}>
        <CloseButton level={3} onClick={close}>
          close
        </CloseButton>

        <SearchHeader>
          <Column width="medium">
            <SearchInput searchTerm={searchTerm} handleSubmit={handleSubmit} />
          </Column>
        </SearchHeader>
        {searchResults === undefined ? null : (
          <Results>
            {loading ? (
              <p>Loading..</p>
            ) : errorMessage ? (
              <Heading level={3}>Sorry, an error occurred.</Heading>
            ) : searchResults.length === 0 ? (
              <Heading level={2}>Sorry, there were no search results.</Heading>
            ) : (
              <>
                <Heading level={5}>{countMessage}</Heading>
                <ItemGrid items={searchResults} />
              </>
            )}
          </Results>
        )}
      </Wrapper>
    </Outer>
  )
}
