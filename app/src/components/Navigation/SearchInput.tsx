import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { useSearch } from '../../providers/SearchProvider'
import { Icon } from '../Icon'
import { useViewportSize } from '../../utils'

const { useState, useEffect, useRef } = React

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-right: 3;
    align-items: center;
    ${theme.mediaQueries.mobile} {
      margin-right: 0;
    }
  `}
`

interface WithVisible {
  visible: boolean
}

const Form = styled.form<WithVisible>`
  ${({ theme }) => css`
    position: relative;
    margin-right: 2;
    padding-bottom: 3px;
    transition: 0.3s cubic-bezier(0.17, 0.67, 0.42, 1);
    display: flex;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      right: 0;
      height: 1px;
      background-color: body.7;
      transition: 0.3s cubic-bezier(0.17, 0.67, 0.42, 1);
    }

    ${theme.mediaQueries.mobile} {
      padding-bottom: 0;
      &:after {
        display: none;
      }
    }
  `}
`

const SearchButton = styled.button`
  ${({ theme }) => css`
    min-width: 16px;
    height: 16px;
    margin-right: 2;
    font-size: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    transform: translateY(2px);

    ${theme.mediaQueries.tablet} {
      transform: none;
      min-width: 18px;
      height: 18px;
    }
  `}
`

const Input = styled.input`
  ${({ theme }) => css`
    border-color: body.9;
    font-size: 4;
    max-width: 120px;
    padding: 0 1;
    height: 100%;
    text-align: left;
    font-family: serif;
    font-weight: 2;
    font-style: italic;

    &::placeholder {
      font-family: serif;
      font-weight: 4;
      font-style: italic;
    }

    ${theme.mediaQueries.mobile} {
      display: none;
    }
  `}
`

export const SearchInput = () => {
  const { width: viewportWidth } = useViewportSize()
  const { search, searchTerm, openSearch, setSearchTerm } = useSearch()
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    if (viewportWidth && viewportWidth <= 650) {
      openSearch()
    } else if (!focused && !searchTerm) {
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
        <SearchButton onClick={handleClick}>
          <Icon icon="search" />
        </SearchButton>
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search"
          onChange={handleChange}
          value={searchTerm}
        />
      </Form>
    </Wrapper>
  )
}
