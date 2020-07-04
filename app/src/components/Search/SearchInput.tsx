import * as React from 'react'
import { SearchForm, SearchInputWrapper, StyledSearchInput } from './styled'
import { Button } from '../Button'
import { useSearch } from '../../providers/SearchProvider'

export const SearchInput = () => {
  const { loading, search, searchTerm, setSearchTerm } = useSearch()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    search()
  }
  return (
    <SearchInputWrapper>
      <SearchForm disabled={loading} onSubmit={handleSubmit}>
        <StyledSearchInput
          name="searchTerm"
          value={searchTerm}
          onChange={setSearchTerm}
        />
        <Button level={1} disabled={loading} type="submit">
          Search
        </Button>
      </SearchForm>
    </SearchInputWrapper>
  )
}
