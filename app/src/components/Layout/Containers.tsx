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
