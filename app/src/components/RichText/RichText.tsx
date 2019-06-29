import * as React from 'react'
import BlockContent from '@sanity/block-content-to-react'

interface RichTextProps {
	body: { [key: string]: any }
}

export const RichText = ({ body }: RichTextProps) => {
	return <BlockContent blocks={body} />
}
