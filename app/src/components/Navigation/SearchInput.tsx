import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { useSearch } from '../../providers/SearchProvider'
import { Icon } from '../Icon'

const { useState, useEffect, useRef } = React

const Wrapper = styled.div`
  display: flex;
  margin-right: 3;
  align-items: center;
`

interface WithVisible {
  visible: boolean
}

const Form = styled.form<WithVisible>`
  ${({ visible }) => css`
    position: relative;
    margin-right: 2;
    opacity: ${visible ? 1 : 0};
    pointer-events: ${visible ? 'inherit' : 'none'};
    padding-bottom: 3px;
    transition: 0.3s cubic-bezier(0.17, 0.67, 0.42, 1);

    &:after {
      content: '';
      position: absolute;
      width: ${visible ? '100%' : 0};
      bottom: 0;
      right: 0;
      height: 1px;
      background-color: body.7;
      transition: 0.3s cubic-bezier(0.17, 0.67, 0.42, 1);
    }
  `}
`

const SearchButton = styled.button`
  min-width: 18px;
  height: 18px;
  font-size: 2;
  min-width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -1px;
  font-size: 16px;
`

const Input = styled.input`
  border-color: body.9;
  font-family: sans;
  font-size: 5;
  max-width: 120px;
  padding: 0 1;
  height: 100%;
  text-align: center;
`

export const SearchInput = () => {
  const { search, searchTerm, setSearchTerm } = useSearch()
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    if (!focused && !searchTerm) {
      setFocused(true)
    } else {
      search()
    }
  }

  const visible = Boolean(focused || (searchTerm && searchTerm.length))

  const blur = (e: any) => {
    const isWithinWrapper = Boolean(e.target.contains(wrapperRef.current))
    if (!isWithinWrapper) setFocused(false)
  }

  useEffect(() => {
    if (Boolean(searchTerm || focused)) {
      window.addEventListener('click', blur)
      return () => window.removeEventListener('click', blur)
    }
  }, [visible])

  useEffect(() => {
    if (focused && inputRef.current) inputRef.current.focus()
  }, [focused])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTerm = e.target.value
    setSearchTerm(newTerm)
  }

  /* Effects */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    search(searchTerm)
  }

  return (
    <Wrapper ref={wrapperRef}>
      <Form visible={visible} onSubmit={handleSubmit}>
        <Input
          ref={inputRef}
          type="text"
          onChange={handleChange}
          value={searchTerm}
        />
      </Form>
      <SearchButton onClick={handleClick}>
        <Icon icon="search" />
      </SearchButton>
    </Wrapper>
  )
}
