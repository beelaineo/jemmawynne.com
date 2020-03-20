import styled, { css } from '@xstyled/styled-components'

interface ButtonProps {
  level?: 1 | 2 | 3
  disabled?: boolean
}

export const Button = styled.button`
  ${({ level, disabled }: ButtonProps) => css`
    pointer-events: ${disabled ? 'none' : 'auto'};
    opacity: ${disabled ? 0.3 : 1};
    transition: 0.2s;
    font-family: sans;
    display: flex;
    justify-content: center;
    align-items: center;
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
      : level === 2
      ? css`
          color: body.9;
          background-color: transparent;
          border: 1px solid;
        `
      : css`
          color: body.6;
          border: none;
          font-size: 5;
          font-weight: 2;
          height: auto;
          padding: 0;
          text-decoration: underline;
          text-transform: initial;
        `}
  `}
`
