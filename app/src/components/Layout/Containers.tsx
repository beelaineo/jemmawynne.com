import styled, { css } from 'styled-components'

export const Column = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: calc(${theme.sizes.xWide}px - ${theme.space[8]}px);
  `}
`
