import * as React from 'react'
import styled, { css } from 'styled-components'
import { useSearch } from 'use-shopify'

const Input = styled.input`
  ${({ theme }) => css`
    border: 1px solid ${theme.color.grays[9]};
  `}
`

export const SearchInput = () => {
  const { search, searchTerm, setSearchTerm } = useSearch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = e.target.value
    setSearchTerm(newTerm)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    search()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Search"
        type="text"
        onChange={handleChange}
        value={searchTerm}
      />
    </form>
  )
}
