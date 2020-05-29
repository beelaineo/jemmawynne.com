import styled, { css } from '@xstyled/styled-components'

interface ButtonProps {
  level?: 1 | 2 | 3 | 4
  disabled?: boolean
}

export const Button = styled.buttonBox`
  ${({ level, disabled }: ButtonProps) => css`
    pointer-events: ${disabled ? 'none' : 'auto'};
    opacity: ${disabled ? 0.3 : 1};
    transition: 0.2s;
    font-family: sans;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    height: 54px;
    padding: 0 3;
    font-size: 6;
    font-weight: 2;
    letter-spacing: 0.25em;
    transition: 0.2s;
    width: 100%;
    background-color: transparent;

    ${level === undefined || level === 1
      ? css`
          color: body.9;
          border: 1px solid;
          font-weight: 3;
        `
      : level === 2
      ? css`
          color: body.9;
          border: 1px solid;
        `
      : level === 3
      ? css`
          color: body.5;
          border: none;
          font-size: 6;
          font-weight: 3;
          display: inline;
          width: auto;
          height: auto;
          padding: 0;
          margin: 3 0;
          text-transform: uppercase;
        `
      : level === 4
      ? css`
          padding: 0 0 1 1;
          border-bottom: 1px solid;
          font-size: 7;
          width: auto;
          height: auto;
        `
      : ''}
  `}
`
