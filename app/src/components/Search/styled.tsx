import styled, { css } from '@xstyled/styled-components'
import { Input } from '../Forms/Fields/styled'
import { Button } from '../Button'

interface WithVisible {
  visible: boolean
}

export const Outer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    position: relative;
    z-index: ${theme.zIndices.nav - 10};
    height: 0px;
  `}
`

export const Wrapper = styled.div<WithVisible>`
  ${({ theme, visible }) => css`
    background-color: body.1;
    position: absolute;
    z-index: calc(${theme.zIndices.nav} - 1);
    top: 0px;
    left: 0;
    padding-top: 6;
    width: 100%;
    min-height: calc(100vh - 50px);
    overflow: scroll;
    text-align: center;
    opacity: ${visible ? 1 : 0};
    pointer-events: ${visible ? 'inherit' : 'none'};
    transition: 0.3s ease-out;
    transform: ${visible ? 'none' : 'translateY(-50px)'};
  `}
`

export const SearchInputWrapper = styled.div`
  ${({ theme }) => css`
    font-size: 3;
    position: relative;
    border-bottom: body.3;
  `}
`

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SearchHeader = styled.div`
  padding: 7;
`

export const CloseButton = styled(Button)`
  position: absolute;
  right: 7;
  top: 3;
`

export const Results = styled.div``

export const StyledSearchInput = styled(Input)`
  font-size: 1;
  border: none;
  text-align: center;
  border-bottom: 1px solid;
  border-color: body.4;
  margin-bottom: 3;
`
