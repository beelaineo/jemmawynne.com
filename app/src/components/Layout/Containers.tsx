import styled, { css, DefaultTheme } from 'styled-components'

export const Column = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: calc(
      ${theme.layout.columns.xWide} - ${theme.layout.spacing.quadruple}
    );
  `}
`
