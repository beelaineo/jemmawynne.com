import * as React from 'react'
import styled, { css } from 'styled-components'
import { useSearch } from 'use-shopify'

const { useEffect, useState } = React

const Input = styled.input`
  ${({ theme }) => css`
    border: 1px solid;
    border-color: body.9;
  `}
`

export const SearchInput = () => {
  const { search, searchTerm } = useSearch()
  const [localSearchTerm, setLocalSearchTerm] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = e.target.value
    setLocalSearchTerm(newTerm)
  }

  /* Effects */

  useEffect(() => {
    if (searchTerm === '') setLocalSearchTerm(searchTerm)
  }, [searchTerm])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    search(localSearchTerm)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Search"
        type="text"
        onChange={handleChange}
        value={localSearchTerm}
      />
    </form>
  )
}
