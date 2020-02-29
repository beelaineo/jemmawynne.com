import * as React from 'react'
import * as baseParse from 'html-react-parser'
import { domToReact, HTMLReactParserOptions } from 'html-react-parser'
import { Ul, Ol, Li, Heading, P, BlockQuote } from '../Text'

type ParseFn = (
  html: string,
  options: HTMLReactParserOptions,
) => React.ReactNode

const parse = (baseParse as unknown) as ParseFn

const defaultOptions = {
  replace: (node) => {
    if (node.type !== 'tag') return undefined
    const { name, children } = node
    switch (name) {
      case 'ul':
        return <Ul>{domToReact(children, defaultOptions)}</Ul>
      case 'ol':
        return <Ol>{domToReact(children, defaultOptions)}</Ol>
      case 'li':
        return <Li>{domToReact(children, defaultOptions)}</Li>
      case 'h1':
        return (
          <Heading level={1}>{domToReact(children, defaultOptions)}</Heading>
        )
      case 'h2':
        return (
          <Heading level={2}>{domToReact(children, defaultOptions)}</Heading>
        )
      case 'h3':
        return (
          <Heading level={3}>{domToReact(children, defaultOptions)}</Heading>
        )
      case 'h4':
        return (
          <Heading level={4}>{domToReact(children, defaultOptions)}</Heading>
        )
      case 'h5':
        return (
          <Heading level={5}>{domToReact(children, defaultOptions)}</Heading>
        )
      case 'h6':
        return (
          <Heading level={6}>{domToReact(children, defaultOptions)}</Heading>
        )
      case 'p':
        return <P>{domToReact(children, defaultOptions)}</P>
      case 'blockquote':
        return <BlockQuote>{domToReact(children, defaultOptions)}</BlockQuote>
      default:
        return undefined
    }
  },
}

interface HtmlContentProps {
  content?: string | null
}
export const HtmlContent = ({ content }: HtmlContentProps) =>
  content ? <>{parse(content, defaultOptions)}</> : null
