import * as React from 'react'
import * as baseParse from 'html-react-parser'
import * as Text from '../Text'
import { domToReact, HTMLReactParserOptions } from 'html-react-parser'

type ParseFn = (
  html: string,
  options: HTMLReactParserOptions,
) => React.ReactNode

const parse = (baseParse as unknown) as ParseFn

interface HtmlContentProps {
  /* */
  content: string
}

const defaultOptions = {
  replace: (node) => {
    if (node.type !== 'tag') return undefined
    const { name, children } = node
    switch (name) {
      case 'ul':
        return <Text.Ul>{domToReact(children, defaultOptions)}</Text.Ul>
      case 'ol':
        return <Text.Ol>{domToReact(children, defaultOptions)}</Text.Ol>
      case 'li':
        return <Text.Li>{domToReact(children, defaultOptions)}</Text.Li>
      case 'h1':
        return (
          <Text.Header1>{domToReact(children, defaultOptions)}</Text.Header1>
        )
      case 'h2':
        return (
          <Text.Header2>{domToReact(children, defaultOptions)}</Text.Header2>
        )
      case 'h3':
        return (
          <Text.Header3>{domToReact(children, defaultOptions)}</Text.Header3>
        )
      case 'h4':
        return (
          <Text.Header4>{domToReact(children, defaultOptions)}</Text.Header4>
        )
      case 'h5':
        return (
          <Text.Header5>{domToReact(children, defaultOptions)}</Text.Header5>
        )
      case 'h6':
        return (
          <Text.Header6>{domToReact(children, defaultOptions)}</Text.Header6>
        )
      case 'p':
        return <Text.P>{domToReact(children, defaultOptions)}</Text.P>
      case 'blockquote':
        return (
          <Text.BlockQuote>
            {domToReact(children, defaultOptions)}
          </Text.BlockQuote>
        )
      default:
        return undefined
    }
  },
}

export const HtmlContent = ({ content }: HtmlContentProps) => (
  <>{parse(content, defaultOptions)}</>
)
