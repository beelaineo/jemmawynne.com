import * as React from 'react'
import * as BlockContent from '@sanity/block-content-to-react'
import * as Text from '../Text'
import { SanityRichText } from '../../types'

interface CustomSerializerConfig {
  blockWrapper: React.ComponentType
}

const serializers = ({ blockWrapper: Wrapper }: CustomSerializerConfig) => ({
  list: (props) => {
    if (props.type === 'number') return <Text.Ol {...props} />
    return <Text.Ul {...props} />
  },
  listItem: (props) => <Text.Li {...props} />,
  block: (props): React.ReactNode => {
    /* If a custom block wrapper was passed in, use it instead.
     * This allows us to change a default P tag into a different size/style */

    if (Wrapper) return <Wrapper {...props} />

    const style = props.node.style || 'normal'
    // if (props.node._type === 'image') return <SanityImage image={props.node} />
    // if (props.node._type === 'videoEmbed') return <VideoEmbed video={props.node} />
    if (
      !props.children.length ||
      (props.children.length === 1 && props.children[0] === '')
    )
      return null

    switch (style) {
      case 'h1':
        return <Text.Header1 family="serif" {...props} />
      case 'h2':
        return <Text.Header2 family="serif" {...props} />
      case 'h3':
        return <Text.Header3 family="serif" {...props} />
      case 'h4':
        return <Text.Header4 family="serif" {...props} />
      case 'h5':
        return <Text.Header5 family="serif" {...props} />
      case 'h6':
        return <Text.Header6 family="serif" {...props} />
      case 'blockquote':
        return <Text.BlockQuote {...props} />
      case 'normal':
        return <Text.P {...props} />
      default:
        return <Text.P {...props} />
    }
  },
})

interface RichTextProps {
  body?: SanityRichText | null
  blockWrapper?: React.ComponentType
}

export const RichText = ({ body, blockWrapper }: RichTextProps) =>
  body ? (
    <BlockContent blocks={body} serializers={serializers({ blockWrapper })} />
  ) : null