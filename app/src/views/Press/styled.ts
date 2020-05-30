import styled, { css } from '@xstyled/styled-components'
import { Button } from '../../components/Button'

export const FilterButtons = styled.div`
  display: flex;
  justify-content: center;

  & > button {
    margin: 0 2;
  }
`

interface WithActive {
  active: boolean
}

export const FilterButton = styled(Button)<WithActive>`
  ${({ active }) => css`
    border-bottom-color: ${active ? 'currentColor' : 'transparent'};
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
