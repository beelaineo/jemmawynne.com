import * as React from 'react'
import { Link as RrLink } from 'react-router-dom'
import { PageLinkOrUrlLink } from '../types/generated'
import { getPageLinkUrl, getPageLinkLabel } from '../utils/links'

interface LinkProps {
	link: PageLinkOrUrlLink
	children?: React.ReactNode
	label?: string
}

const linkStyles = {
	textDecoration: 'none',
	color: 'inherit',
}

export const Link = ({ link, children, label }: LinkProps) => {
	switch (link.__typename) {
		case 'UrlLink':
			return (
				<a
					href={link.url}
					target={link.newTab ? '_blank' : ''}
					rel={link.newTab ? 'noopener noreferrer' : ''}
					style={linkStyles}
				>
					{children}
				</a>
			)
		case 'PageLink':
			if (!link.document) {
				throw new Error('This PageLink does not have a document')
			}
			return (
				<RrLink style={linkStyles} to={getPageLinkUrl(link)}>
					{children || label || getPageLinkLabel(link)}
				</RrLink>
			)
		default:
			// @ts-ignore
			throw new Error(`Cannot create link for type "${link.__typename}"`)
	}
}
