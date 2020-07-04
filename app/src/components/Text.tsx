import * as React from 'react'
import styled, {
  css,
  DefaultTheme,
  Box,
  BoxProps,
} from '@xstyled/styled-components'

interface CustomTextProps extends BoxProps {
  theme: DefaultTheme
  fontSize: 1 | 2 | 3 | 4 | 5 | 6 | 7
  fontStyle?: string
  family?: string
  weight?: number
  color?: string
  htmlFor?: string
  level?: number
  textDecoration?: string
  style?: any
}

const getCustomTextStyles = ({
  family,
  color,
  fontStyle,
  textDecoration,
  weight,
}: CustomTextProps) => css`
  font-family: ${family};
  font-weight: ${weight};
  font-style: ${fontStyle};
  color: ${color};
  letter-spacing: ${family === 'sans' ? '0.25em' : '0.025em'};
  text-transform: ${family === 'sans' ? 'uppercase' : 'none'};
  text-decoration: ${textDecoration};
`

const createTextBase = (as: any) => styled(as)`
  ${(props: CustomTextProps) => css`
    ${getCustomTextStyles(props)}
    line-height: 1.4em;
    margin: 2 0 0.5em;

    &:last-child {
      margin-bottom: 0;
    }

    a {
      text-decoration: none;
    }

    strong {
      font-weight: 4;
    }

    em {
      font-style: italic;
    }
  `}
`

const TextBase = createTextBase(Box)

interface HeadingProps
  extends Omit<CustomTextProps, 'fontSize' | 'theme'>,
    BoxProps {
  children: React.ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7
  fontStyle?: string
  family?: string
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
      level={level}
      weight={weight || 4}
      htmlFor={htmlFor}
      {...rest}
    >
      {children}
    </TextBase>
  )
}

Heading.defaultProps = {
  family: 'serif',
}

type PProps = Omit<HeadingProps, 'level'>

export const P = ({ children, color, family, weight, htmlFor }: PProps) => {
  return (
    <TextBase
      as="p"
      fontSize={4}
      family={family}
      weight={weight || 2}
      color={color}
      htmlFor={htmlFor}
      lineHeight="1.4em"
    >
      {children}
    </TextBase>
  )
}

P.defaultProps = {
  family: 'body',
  weight: 2,
  color: 'body.9',
}

interface LabelProps {
  htmlFor: string
  children: string
}

const LabelBase = createTextBase('label')

export const Label = styled(LabelBase)`
  margin-bottom: 0;
  font-size: 5;
  letter-spacing: 0.25em;
`

Label.defaultProps = {
  fontSize: 4,
}

export const TextAnchor = styled.a``

export const BlockQuote = styled.blockquote``

const listStyles = css`
  margin: 3 0;
  padding-left: 5;
`

export const Ol = styled(createTextBase('ol'))`
  ${listStyles};
`

Ol.defaultProps = {
  fontSize: 4,
  family: 'body',
  weight: 2,
  color: 'body',
}

export const Ul = styled(createTextBase('ul'))`
  ${listStyles};
`

Ul.defaultProps = {
  fontSize: 4,
  family: 'body',
  weight: 2,
  color: 'body',
}

export const Li = styled(createTextBase('li'))`
  font-size: 4;
  margin: 0;
`

const SpanBase = styled.spanBox``

export const Span = styled(createTextBase(SpanBase))`
  font-size: inherit;

  &[role='button'] {
    cursor: pointer;
    text-decoration: underline;
  }
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
