import styled, { css } from '@xstyled/styled-components'

export const FilterButtons = styled.div`
  display: flex;
  justify-content: center;

  & > button {
    margin: 0 2;
  }
`

interface WithActive {
  isActive: boolean
}

export const FilterButton = styled.button<WithActive>`
  ${({ isActive }) => css`
    font-size: 6;
    font-weight: 3;
    font-family: sans;
    color: body.5;
    text-transform: uppercase;
    letter-spacing: 0.25em;
    padding: 0 0 1 1;
    border-bottom: 2px solid;
    border-bottom-color: ${isActive ? 'currentColor' : 'transparent'};
    transition: 0.2s;
  `}
`

export const PressItemsContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    padding: 6 0;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3;

    ${theme.mediaQueries.tablet} {
      grid-template-columns: 1fr 1fr;
    }

    ${theme.mediaQueries.mobile} {
      grid-template-columns: 100%;
    }
  `}
`

export const PressItemContainer = styled.div`
  text-align: center;
`
