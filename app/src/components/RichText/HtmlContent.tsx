import * as React from 'react'
import { Box } from '@xstyled/styled-components'
import Link from 'next/link'
import ReactHtmlParser, { TransformFunction } from 'react-html-parser'
import { getLinkFromHref } from '../../utils'
import { Heading, P, Ol, Ul, Li, Span } from '../Text'

const css2obj = (css: string): object => {
  const r = /(?<=^|;)\s*([^:]+)\s*:\s*([^;]+)\s*/g,
    o = {}
  css.replace(r, (m, p, v) => (o[p] = v))
  return o
}

const wrapBareText = (text: string) =>
  text
    .replace(/^(?!<)(.*)(<\/\w+>)?/gm, '<span>$1</span>')
    .replace('<span></span>', '')

const internalUrlRegex = /^https?:\/\/(www.)?(localhost:3000|spinellikilcollin.com|spinellikilcollin.(good-idea.)?now.sh)(\/[\w|\/]+)?/

const transform: TransformFunction = (node, index) => {
  const styles = css2obj(node?.attribs?.style ?? '')
  switch (node.type) {
    case 'text':
      return <React.Fragment key={index}>{node.data}</React.Fragment>
    case 'tag':
      if (!node.children || node.children.length === 0) return null
      switch (node.name) {
        case 'h1':
        case 'h2':
        case 'h3':
        case 'h4':
        case 'h5':
        case 'h6':
          return (
            <Heading style={styles} level={3} key={index}>
              {node.children.map(transform)}
            </Heading>
          )
        case 'p':
        case 'span':
          if (node.parent) {
            return (
              <Span key={index} style={styles} weight={3}>
                {node.children.map(transform)}
              </Span>
            )
          }
          return (
            <P key={index} style={styles} weight={3}>
              {node.children.map(transform)}
            </P>
          )
        case 'ul':
          return (
            <Ul family="serif" key={index}>
              {node.children.map(transform)}
            </Ul>
          )
        case 'ol':
          return (
            <Ol family="serif" key={index}>
              {node.children.map(transform)}
            </Ol>
          )
        case 'li':
          return <Li key={index}>{node.children.map(transform)}</Li>
        case 'em':
          return <em key={index}>{node.children.map(transform)}</em>
        case 'strong':
          return <strong key={index}>{node.children.map(transform)}</strong>
        case 'a':
          const href = node.attribs.href
          if (!href) return null

          const isInternal = internalUrlRegex.test(href)
          if (isInternal) {
            const { href: aHref, as } = getLinkFromHref(href)
            return (
              <Link key={index} href={aHref} as={as}>
                <a>{node.children.map(transform)}</a>
              </Link>
            )
          }
          return (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {node.children.map(transform)}
            </a>
          )
        case 'div':
          return <Box family="serif">{node.children.map(transform)}</Box>
        default:
          console.warn('Did not parse node:', node)
          return <Box family="serif">{node.children.map(transform)}</Box>
      }
    default:
      return null
  }
}

export const parseHTML = (htmlString?: string | null): React.ReactNode => {
  if (!htmlString) return null
  return ReactHtmlParser(wrapBareText(htmlString), {
    transform,
  })
}

interface HtmlContentProps {
  html?: string | null
}

export const HtmlContent = ({ html }: HtmlContentProps) => {
  if (!html) return null
  return <div>{parseHTML(html)}</div>
}
