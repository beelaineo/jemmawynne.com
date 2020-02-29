import * as React from 'react'
import * as BlockContent from '@sanity/block-content-to-react'
import { Heading, P, BlockQuote, Li, Ul, Ol } from '../Text'

interface CustomSerializerConfig {
  blockWrapper?: React.ComponentType
}

/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
const serializers = ({ blockWrapper: Wrapper }: CustomSerializerConfig) => ({
  list: (props) => {
    if (props.type === 'number') return <Ol {...props} />
    return <Ul {...props} />
  },
  listItem: (props) => <Li {...props} />,
  block: (props): React.ReactNode => {
    /* If a custom block wrapper was passed in, use it instead.
     * This allows us to change a default P tag into a different size/style */

    if (Wrapper) return <Wrapper {...props} />

    const style = props.node.style || 'normal'
    // if (props.node._type === 'image') return <SanityImage image={props.node} />
    // if (props.node._type === 'videoEmbed') return <VideoEmbed video={props.node} />

    switch (style) {
      case 'h1':
        return <Heading level={1} {...props} />
      case 'h2':
        return <Heading level={2} {...props} />
      case 'h3':
        return <Heading level={3} {...props} />
      case 'h4':
        return <Heading level={4} {...props} />
      case 'h5':
        return <Heading level={5} {...props} />
      case 'h6':
        return <Heading level={6} {...props} />
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
    <BlockContent blocks={body} serializers={serializers({ blockWrapper })} />
  ) : null
