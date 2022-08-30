import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'
import * as BlockContent from '@sanity/block-content-to-react'
import { Span, Heading, P, BlockQuote, Li, Ul, Ol } from '../Text'
import { Image } from '../Image'

interface CustomSerializerConfig {
  blockWrapper?: React.ComponentType
}

const RichImageWrapper = styled.div`
  ${({ theme }) => css`
    margin: 8 0;
    max-width: 250px;
    img {
      display: block;
    }

    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: -48px;
    }
    ${theme.mediaQueries.tablet} {
      &:last-child {
        margin-bottom: 0;
      }
    }
  `}
`

const RichTextWrapper = styled.div`
  ${({ theme }) => css`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 2.5em;
      margin-bottom: 1em;
      &:first-child {
        margin-top: 0;
      }
    }
    a {
      text-decoration: underline;
      color: inherit;
    }
  `}
`

/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
const serializers = ({ blockWrapper: Wrapper }: CustomSerializerConfig) => ({
  list: (props) => {
    if (props.type === 'number') return <Ol {...props} />
    return <Ul {...props} />
  },
  marks: {
    thin: ({ children }) => <Span weight={100}>{children}</Span>,
    light: ({ children }) => <Span weight={200}>{children}</Span>,
    book: ({ children }) => <Span weight={300}>{children}</Span>,
    regular: ({ children }) => <Span weight={400}>{children}</Span>,
    bold: ({ children }) => <Span weight={700}>{children}</Span>,
  },

  listItem: (props) => <Li {...props} />,
  block: (props): React.ReactNode => {
    /* If a custom block wrapper was passed in, use it instead.
     * This allows us to change a default P tag into a different size/style */

    if (Wrapper) return <Wrapper {...props} />

    const style = props.node.style || 'normal'
    if (/image|richImage/.test(props.node._type)) {
      return (
        <RichImageWrapper key={props.node._key || 'some-key'}>
          <Image image={props.node} />
        </RichImageWrapper>
      )
    }
    // if (props.node._type === 'videoEmbed') return <VideoEmbed video={props.node} />

    switch (style) {
      case 'ul':
        console.log('Ul props', props)
        return <Ul {...props} />
      case 'ol':
        return <Ol {...props} />
      case 'li':
        return <Li family="serif" {...props} />
      case 'h1':
        return <Heading level={1} weight={1} {...props} />
      case 'h2':
        return <Heading level={2} weight={1} {...props} />
      case 'h3':
        return <Heading level={3} weight={1} {...props} />
      case 'h4':
        return <Heading level={4} family="sans" {...props} />
      case 'h5':
        return <Heading level={5} family="sans" {...props} />
      case 'h6':
        return <Heading level={7} family="sans" {...props} />
      case 'blockquote':
        return <BlockQuote {...props} />
      case 'normal':
        return <P {...props} />
      default:
        return <P {...props} />
    }
  },
})

interface RichTextProps {
  body?: { [key: string]: any } | null
  blockWrapper?: React.ComponentType
}

export const RichText = ({ body, blockWrapper }: RichTextProps) =>
  body ? (
    <RichTextWrapper>
      <BlockContent blocks={body} serializers={serializers({ blockWrapper })} />
    </RichTextWrapper>
  ) : null
