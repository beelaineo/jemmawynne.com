import * as React from 'react'
import * as BlockContent from '@sanity/block-content-to-react'
import * as Text from '../Text'

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

    switch (style) {
      case 'h1':
        return <Text.Header1 {...props} />
      case 'h2':
        return <Text.Header2 {...props} />
      case 'h3':
        return <Text.Header3 {...props} />
      case 'h4':
        return <Text.Header4 {...props} />
      case 'h5':
        return <Text.Header5 {...props} />
      case 'h6':
        return <Text.Header6 {...props} />
      case 'blockquote':
        return <Text.BlockQuote {...props} />
      case 'normal':
        return <Text.P {...props} />
      default:
        return <Text.P {...props} />
    }
  },
  // marks: {
  // 	link: ({ mark, children }: Mark) => {
  // 		const hostname = typeof window !== 'undefined' ? window.location.hostname : 'hikawa.studio'
  // 		const parsed = parseUrl(mark.href)
  // 		const isExternal = parsed && parsed.origin && parsed.origin.match(hostname) === null
  // 		if (isExternal || !parsed) {
  // 			return (
  // 				<TextAnchor href={mark.href} target={isExternal ? '_blank' : ''} rel="noopener noreferrer">
  // 					{children}
  // 				</TextAnchor>
  // 			)
  // 		}
  // 		return <Link to={`${parsed.pathname}${parsed.search}`}>{children}</Link>
  // 	},
  // },
})

interface RichTextProps {
  body: { [key: string]: any }
  blockWrapper?: React.ComponentType
}

export const RichText = ({ body, blockWrapper }: RichTextProps) => (
  <BlockContent blocks={body} serializers={serializers({ blockWrapper })} />
)
