import styled, { css } from '@xstyled/styled-components'

interface ButtonProps {
  level?: 1 | 2 | 3
  disabled?: boolean
}

export const Button = styled.button`
  ${({ level, disabled }: ButtonProps) => css`
    width: 100%;
    pointer-events: ${disabled ? 'none' : 'auto'};
    opacity: ${disabled ? 0.5 : 1};
    font-family: sans;
    text-transform: uppercase;
    height: 42px;
    padding: 0 3;
    font-size: 4;
    font-weight: 3;
    transition: 0.2s;
    ${level === undefined || level === 1
      ? css`
          color: body.1;
          background-color: body.9;
        `
      : css`
          color: body.9;
          background-color: transparent;
          border: 1px solid;
        `}
  `}
`
