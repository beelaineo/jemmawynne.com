import * as React from 'react'

interface RichTextProps {
	body: { [key: string]: any }
}

export const RichText = (props: RichTextProps) => {
	return <div>(rich text..)</div>
}
