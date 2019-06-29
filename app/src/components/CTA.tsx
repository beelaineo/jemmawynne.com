import * as React from 'react'
import { Link } from 'react-router-dom'
import styled, { css, DefaultTheme } from 'styled-components'
import { Cta, PageLinkOrUrlLink, PageLink } from '../types/generated'

interface CTAProps {
	cta: Cta
}

interface WrapperProps {
	theme: DefaultTheme
	as: typeof Link | 'a'
	to?: string
	href?: string
	target?: string
	rel?: string
}

const Outer = styled.div`
	${({ theme }) => css`
		margin: ${theme.layout.spacing.half} 0;
	`}
`

const Wrapper = styled.div`
	${({ theme }: WrapperProps) => css`
		padding: ${theme.layout.spacing.single};
		border: 1px solid;
		color: inherit;
		display: inline;
		text-decoration: none;
	`}
`

const getPageLinkTo = (link: PageLink): string => {
	const { document } = link
	if (!document) return '/'

	switch (document.__typename) {
		case 'ShopifyCollection':
			return `/collections/${document.handle}`
		case 'ShopifyProduct':
			return `/products/${document.handle}`
		default:
			return `/${document.slug.current}`
	}
}

export const CTA = ({ cta }: CTAProps) => {
	const { label, link: linkArray } = cta
	if (!linkArray.length) return null
	const link = linkArray[0]
	switch (link.__typename) {
		case 'PageLink':
			return (
				<Outer>
					<Wrapper as={Link} to={getPageLinkTo(link)}>
						{label}
					</Wrapper>
				</Outer>
			)
		case 'UrlLink':
			return (
				<Outer>
					<Wrapper
						as="a"
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						{label}
					</Wrapper>
				</Outer>
			)
		default:
			return null
	}
}
