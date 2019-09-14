import styled, { css, DefaultTheme } from 'styled-components'

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.color.grays[1]};
    border: 1px solid;
    padding: ${theme.layout.spacing.single};
  `}
`

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.layout.spacing.single};
    color: black;
  `}
`
