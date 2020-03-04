import styled, { css, DefaultTheme } from '@xstyled/styled-components'

interface ColumnProps {
  theme: DefaultTheme
  width: string
  center?: boolean
}

export const Column = styled.div`
  ${({ width, center }: ColumnProps) => css`
    margin: ${center ? '0 auto' : 0};
    max-width: ${width};
  `}
`

export const TextHeader = styled.div`
  padding: 6;
  background-color: body.3;
  box-shadow: 0 -9px 9px -6px rgba(0, 0, 0, 0.2) inset;
  display: flex;
  justify-content: center;
  align-items: center;
`
