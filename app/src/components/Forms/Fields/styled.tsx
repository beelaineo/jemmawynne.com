import styled, { css } from '@xstyled/styled-components'
import { Label as BaseLabel } from '../../Text'

interface FieldWrapperProps {
  noBorder?: boolean
}

export const FieldWrapper = styled.div`
  ${({ noBorder }: FieldWrapperProps) => css`
    ${noBorder
      ? ``
      : css`
          color: body.8;
          font-family: serif;
          font-size: 4;
        `}
    text-align: left;
    background-color: transparent;
    & + & {
      margin-top: 3;
    }

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      margin-top: 2;
    }
  `}
`

interface LabelProps {
  required?: boolean
}
export const Label = styled.label<LabelProps>`
  ${({ required }) => css`
    margin-bottom: 0;
    font-size: 5;
    letter-spacing: 0.25em;
    position: relative;
    display: inline-block;
    font-family: sans;
    color: body.6;
    text-transform: uppercase;
    margin-bottom: 2;
    font-size: 6;
    font-weight: 3;

    a {
      color: higlight.0;
      text-decoration: underline;
    }

    ${required
      ? css`
          &:after {
            content: '*';
            color: currentColor;
            margin-left: 0.2em;
          }
        `
      : ''}
  `}
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  ${({ color, theme }) => css`
    padding: 2;
    height: 50px;
    width: 100%;
    display: block;
    border: 1px solid;
    border-color: body.8;
    font-size: 4;
    font-family: serif;
    background-color: transparent;
    letter-spacing: 0.06em;
    color: ${color ? theme.colors[color] : theme.colors.body[8]};
    &::placeholder {
      color: body.6;
    }

    & + ${Label} {
      margin-top: 1;
    }
  `}
`

export const SelectElement = styled.select`
  ${({ theme }) => css`
    height: 32px;
    width: 100%;
    border: 1px solid;
    border-color: body.5;
    border-radius: 0;
    transition: 0.2s;
    font-size: 1rem;
    cursor: pointer;
    background: none;
    padding: 0 5 0 3;
    font-family: serif;
    appearance: none;
    -webkit-border-radius: 0px;
    color: body.6;
    font-size: 4;

    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%);
    background-position: calc(100% - 14px) 50%, calc(100% - 10px) 50%;
    background-size: 5px 5px, 5px 5px, 1px 1.5em;
    background-repeat: no-repeat;

    option {
      color: body.7;
      font-family: serif;
    }
  `}
`
