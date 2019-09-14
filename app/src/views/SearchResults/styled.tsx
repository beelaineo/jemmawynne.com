import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.grays[9]};
    position: fixed;
    z-index: calc(${theme.layout.z.navigation} - 1);
    top: ${theme.layout.navHeight};
    padding-top: ${theme.layout.spacing.triple};
    left: 0;
    width: 100%;
    height: calc(100vh - ${theme.layout.navHeight});
    overflow: scroll;
    text-align: center;
  `}
`

export const CurrentSearchTerm = styled.span`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.color.grays[1]};
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
    font-size: ${theme.font.size.h3};
    position: relative;
    border-bottom: ${theme.color.grays[3]};

    input {
      background-color: none;
      font-size: inherit;
    }
  `}
`

export const SearchButton = styled.button`
  pointer: cursor;
`
