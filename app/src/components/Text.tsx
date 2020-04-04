import * as React from 'react'
import styled, {
  css,
  DefaultTheme,
  Box,
  BoxProps,
} from '@xstyled/styled-components'

interface CustomTextProps {
  theme: DefaultTheme
  fontSize: 1 | 2 | 3 | 4 | 5 | 6 | 7
  fontStyle?: string
  family?: 'mono' | 'sans' | 'serif'
  weight?: number
  color?: string
  htmlFor?: string
  textDecoration?: string
}

const createTextBase = (as: any) => styled(as)`
  ${({
    family,
    fontStyle,
    weight,
    fontSize,
    textDecoration,
  }: CustomTextProps) => css`
    font-size: ${fontSize};
    font-family: ${family};
    font-weight: ${weight};
    font-style: ${fontStyle};
    letter-spacing: ${family === 'sans' ? '0.25em' : '0.06em'};
    text-decoration: ${textDecoration};
    margin: 0 0 0.5em;

    &:last-child {
      margin-bottom: 0;
    }
  `}
`

const TextBase = styled(Box)`
  ${({
    family,
    weight,
    fontStyle,
    textDecoration,
    fontSize,
  }: CustomTextProps) => css`
    font-size: ${fontSize};
    font-family: ${family};
    font-weight: ${weight};
    font-style: ${fontStyle};
    text-decoration: ${textDecoration};
    letter-spacing: ${family === 'sans' ? '0.25em' : '0.06em'};
    text-transform: ${family === 'sans' ? 'uppercase' : ''};

    margin: 0 0 0.5em;

    &:last-child {
      margin-bottom: 0;
    }
  `}
`

interface HeadingProps extends BoxProps {
  children: React.ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7
  fontStyle?: string
  family?: 'mono' | 'sans' | 'serif'
  weight?: number
  color?: string
  htmlFor?: string
  as?: any
  textDecoration?: string
}

const hTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h6']

export const Heading = ({
  children,
  level,
  weight,
  as,
  htmlFor,
  ...rest
}: HeadingProps) => {
  if (level < 1 || level > 7) throw new Error('Heading level must be 1-7')
  const tag = as ? as : hTags[level - 1]
  return (
    <TextBase
      as={tag}
      fontSize={level}
      weight={weight || 500}
      htmlFor={htmlFor}
      {...rest}
    >
      {children}
    </TextBase>
  )
}

Heading.defaultProps = {
  family: 'serif',
  weight: 3,
}

type PProps = Omit<HeadingProps, 'level'>

export const P = ({ children, color, family, weight, htmlFor }: PProps) => {
  return (
    <TextBase
      as="p"
      fontSize={4}
      family={family}
      weight={weight || 400}
      color={color}
      htmlFor={htmlFor}
    >
      {children}
    </TextBase>
  )
}

P.defaultProps = {
  family: 'body',
  weight: 400,
  color: 'body',
}

interface LabelProps {
  htmlFor: string
  children: string
}

const LabelBase = createTextBase('label')

export const Label = styled(LabelBase)`
  display: block;
  font-size: 4;
  margin: 0 0 2;
`

export const TextAnchor = styled.a``

export const BlockQuote = styled.blockquote``

const listStyles = css`
  margin: 3 0;
  padding-left: 2em;
`

export const Ol = styled.ol`
  ${listStyles};
`

export const Ul = styled.ul`
  ${listStyles};
`
const LiBase = createTextBase('li')

export const Li = styled(LiBase)`
  font-size: 4;
  margin: 0;
`

export const Input = styled.input`
  border: 1px solid;
  border-color: body.4;
  font-family: serif;
  font-size: 4;
  width: 100%;
  height: 32px;
  padding: 0 3;
  letter-spacing: 0.06em;

  &:focus {
    border-color: body.6;
  }

  &::placeholder {
    letter-spacing: 0.06em;
  }
`
