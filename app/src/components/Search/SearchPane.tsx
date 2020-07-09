import * as React from 'react'
import { useRouter } from 'next/router'
import { Column } from '../Layout'
import { Heading } from '../Text'
import { ItemGrid } from '../ItemGrid'
import { Button } from '../Button'
import { useLockScroll } from '../LockScroll'
import { useSearch } from '../../providers/SearchProvider'
import { SearchInput } from './SearchInput'
import {
  Outer,
  CloseButton,
  SearchHeader,
  Results,
  ResultsInner,
  Wrapper,
} from './styled'
import { Footer } from '../Footer'

const { useEffect } = React

export const SearchPane = () => {
  const {
    open,
    loading,
    errorMessage,
    searchResults,
    openSearch,
    reset,
    closeSearch,
  } = useSearch()
  const { lockScroll, unlockScroll } = useLockScroll()
  const { asPath } = useRouter()

  /* Handlers */

  const close = () => {
    closeSearch()
    reset()
  }

  useEffect(() => {
    closeSearch()
  }, [asPath])

  useEffect(() => {
    if (open) {
      lockScroll()
    } else {
      unlockScroll()
    }
  }, [open])

  /** Effects */
  useEffect(() => {
    // Open the view on a new search
    // This could happen if the search is triggered from outside of
    // this component
    if (!open && loading) openSearch()
  }, [loading])

  const countMessage = searchResults
    ? `Found ${searchResults.length} result${
        searchResults.length === 1 ? '' : 's'
      }`
    : undefined

  return (
    <Outer>
      <Wrapper aria-hidden={!open} visible={open}>
        <CloseButton level={3} onClick={close}>
          close
        </CloseButton>

        <SearchHeader>
          <Column maxWidth="medium">
            <SearchInput />
          </Column>
        </SearchHeader>
        {searchResults === undefined ? null : (
          <Results>
            <ResultsInner>
              {loading ? (
                <p>Loading..</p>
              ) : errorMessage ? (
                <Heading level={3}>Sorry, an error occurred.</Heading>
              ) : searchResults.length === 0 ? (
                <Heading weight={1} level={2}>
                  Sorry, there were no search results.
                </Heading>
              ) : (
                <>
                  {countMessage ? (
                    <Heading
                      mt={3}
                      mb={0}
                      fontStyle="italic"
                      weight={1}
                      level={5}
                    >
                      {countMessage}
                    </Heading>
                  ) : null}

                  <ItemGrid items={searchResults} />
                  <Button onClick={close} level={3}>
                    Close
                  </Button>
                </>
              )}
            </ResultsInner>
          </Results>
        )}
        <Footer />
      </Wrapper>
    </Outer>
  )
}
