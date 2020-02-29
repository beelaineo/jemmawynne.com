import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: body.9;
    position: fixed;
    z-index: calc(${theme.zIndices.nav} - 1);
    top: 50px;
    padding-top: 6;
    left: 0;
    width: 100%;
    height: calc(100vh - 50px);
    overflow: scroll;
    text-align: center;
  `}
`

export const CurrentSearchTerm = styled.span`
  ${({ theme }) => css`
    position: relative;
    color: body.1;
  `}
`

export const ClearSearchButton = styled.button`
  width: 10px;
  height: 10px;
  backround-color: pink;
  cursor: pointer;
  position: absolute;
  bottom: calc(100% - 5px);
  left: 100%;
`

export const SearchInputWrapper = styled.form`
  ${({ theme }) => css`
    font-size: 3;
    position: relative;
    border-bottom: body.3;

    input {
      background-color: none;
      font-size: inherit;
    }
  `}
`
