import * as React from 'react'
import { x } from '@xstyled/styled-components'
import Link from 'next/link'
import HTMLParser from 'html-parser-lite'
import { getLinkFromHref } from '../../utils'
import { Heading, Span } from '../Text'
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

const internalUrlRegex =
  /^https?:\/\/(www.)?(localhost:3000|jemmawynne.com|jemmawynne.(good-idea.)?now.sh)(\/[\w|\/]+)?/

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
          <Span key={index} style={styles}>
            {node.childNodes.map(transform)}
          </Span>
        )
      }
      return (
        <x.p
          key={index}
          style={styles}
          fontFamily={'body'}
          fontWeight={2}
          letterSpacing={'0.025em'}
        >
          {node.childNodes.map(transform)}
        </x.p>
      )
    case 'ul':
      return (
        <x.ul
          fontWeight="200"
          fontFamily="serif"
          lineHeight={'1.4em'}
          key={index}
        >
          {node.childNodes.map(transform)}
        </x.ul>
      )
    case 'ol':
      return (
        <x.ol fontFamily="serif" key={index}>
          {node.childNodes.map(transform)}
        </x.ol>
      )
    case 'li':
      return <x.li key={index}>{node.childNodes.map(transform)}</x.li>
    case 'em':
      return <em key={index}>{node.childNodes.map(transform)}</em>
    case 'strong':
      return <strong key={index}>{node.childNodes.map(transform)}</strong>
    case 'a':
      const href = node?.attribs?.href
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
        <x.div key={index} fontFamily="serif">
          {node.childNodes.map(transform)}
        </x.div>
      )
    case 'meta':
      return null
    case 'br':
      return <br key={index} />
    default:
      console.warn('Did not parse node:', node)
      return (
        <x.div key={index} fontFamily="serif">
          {node.childNodes.map(transform)}
        </x.div>
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
  console.log('html', html)
  return <x.div>{transformed}</x.div>
}
