import * as React from 'react'
import { SearchForm, SearchInputWrapper, StyledSearchInput } from './styled'
import { Button } from '../Button'
import { useSearch } from '../../providers/SearchProvider'

const { useRef, useEffect } = React

export const SearchInput = () => {
  const { open, loading, search, searchTerm, setSearchTerm } = useSearch()

  const inputRef = useRef<HTMLInputElement>(null)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    search()
  }

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus()
  }, [open])

  return (
    <SearchInputWrapper>
      <SearchForm disabled={loading} onSubmit={handleSubmit}>
        <StyledSearchInput
          name="searchTerm"
          value={searchTerm}
          onChange={setSearchTerm}
          ref={inputRef}
        />
        <Button level={1} disabled={loading} type="submit">
          Search
        </Button>
      </SearchForm>
    </SearchInputWrapper>
  )
}
