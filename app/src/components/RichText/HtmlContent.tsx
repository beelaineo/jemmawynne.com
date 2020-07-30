import * as React from 'react'
import { Box } from '@xstyled/styled-components'
import Link from 'next/link'
import HTMLParser from 'html-parser-lite'
import { getLinkFromHref } from '../../utils'
import { Heading, P, Ol, Ul, Li, Span } from '../Text'
import { decodeHTML } from './utils'

function cssToObj(css?: string): Record<string, string> {
  if (!css) return {}
  const obj = {}
  const s = css
    .toLowerCase()
    .replace(/-(.)/g, function (m, g) {
      return g.toUpperCase()
    })
    .replace(/;\s?$/g, '')
    .split(/:|;/g)
  for (let i = 0; i < s.length; i += 2) {
    obj[s[i].replace(/\s/g, '')] = s[i + 1].replace(/^\s+|\s+$/g, '')
  }
  return obj
}

const wrapBareText = (text?: string) =>
  text
    ? text
        .replace(/^(?!<)(.*)(<\/\w+>)?/gm, '<span>$1</span>')
        .replace('<span></span>', '')
    : ''

const internalUrlRegex = /^https?:\/\/(www.)?(localhost:3000|spinellikilcollin.com|spinellikilcollin.(good-idea.)?now.sh)(\/[\w|\/]+)?/

const parser = new HTMLParser()

const transform = (node, index) => {
  const styles = cssToObj(node?.attribs?.style ?? '')
  switch (node.tagName) {
    case 'document':
      return (
        <React.Fragment key={index}>
          {node.childNodes.map(transform)}
        </React.Fragment>
      )
    case 'text':
      return (
        <React.Fragment key={index}>
          {decodeHTML(node.textContent)}
        </React.Fragment>
      )
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return (
        <Heading style={styles} level={3} key={index}>
          {node.childNodes.map(transform)}
        </Heading>
      )
    case 'p':
    case 'span':
      if (node.parent) {
        return (
          <Span key={index} style={styles} weight={3}>
            {node.childNodes.map(transform)}
          </Span>
        )
      }
      return (
        <P key={index} style={styles} weight={3}>
          {node.childNodes.map(transform)}
        </P>
      )
    case 'ul':
      return (
        <Ul family="serif" key={index}>
          {node.childNodes.map(transform)}
        </Ul>
      )
    case 'ol':
      return (
        <Ol family="serif" key={index}>
          {node.childNodes.map(transform)}
        </Ol>
      )
    case 'li':
      return <Li key={index}>{node.childNodes.map(transform)}</Li>
    case 'em':
      return <em key={index}>{node.childNodes.map(transform)}</em>
    case 'strong':
      return <strong key={index}>{node.childNodes.map(transform)}</strong>
    case 'a':
      const href = node.attribs.href
      if (!href) return null

      const isInternal = internalUrlRegex.test(href)
      if (isInternal) {
        const { href: aHref, as } = getLinkFromHref(href)
        return (
          <Link key={index} href={aHref} as={as}>
            <a>{node.childNodes.map(transform)}</a>
          </Link>
        )
      }
      return (
        <a key={index} href={href} target="_blank" rel="noopener noreferrer">
          {node.childNodes.map(transform)}
        </a>
      )
    case 'div':
      return (
        <Box key={index} family="serif">
          {node.childNodes.map(transform)}
        </Box>
      )
    case 'meta':
      return null
    case 'br':
      return <br key={index} />
    default:
      console.warn('Did not parse node:', node)
      return (
        <Box key={index} family="serif">
          {node.childNodes.map(transform)}
        </Box>
      )
  }
}

interface HtmlContentProps {
  html?: string | null
}

export const HtmlContent = ({ html }: HtmlContentProps) => {
  if (!html) return null
  const parsed = parser.parse(wrapBareText(html))
  const transformed = transform(parsed, 'root')
  return <div>{transformed}</div>
}
