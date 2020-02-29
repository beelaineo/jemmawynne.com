import styled, { css, DefaultTheme } from 'styled-components'

interface WithOpen {
  theme: DefaultTheme
  open: boolean
}

export const ToggleButton = styled.button`
  ${({ theme }) => css`
    font-size: ${theme.font.size.h6};
    font-weight: ${theme.font.weight.semi};
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${(props) => props.theme.color.grays[0]};
  `}
`

export const Inner = styled.div`
  ${({ theme, open }: WithOpen) => css`
    display: ${open ? 'block' : 'none'};
    padding: ${theme.layout.spacing.single} 0;
  `}
`

export const Span = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    position: relative;
    top: -1.5px;
    margin-left: ${theme.layout.spacing.half};
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.layout.spacing.single};
    margin: ${theme.layout.spacing.singleHalf} 0;
    border-top: 2px solid ${theme.color.light};
    border-bottom: 2px solid ${theme.color.light};
  `}
`
