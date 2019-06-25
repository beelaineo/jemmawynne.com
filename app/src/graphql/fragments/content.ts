import { sanityImageFragment } from './media'

export const linkFragment = /* GraphQL */ `
	fragment LinkFragment on PageLinkOrUrlLink {
		... on PageLink {
			_key
			_type
			document {
				... on Page {
					_type
				}
			}
		}
		... on UrlLink {
			_key
			_type
			url
			newTab
		}
	}
`

export const textBlockFragment = /* GraphQL */ `
	fragment TextBlockFragment on TextBlock {
		title
		bodyRaw
		cta {
			label
			link {
				...LinkFragment
			}
		}
	}
	${linkFragment}
`

export const imageBlockFragment = /* GraphQL */ `
	fragment ImageBlockFragment on ImageBlock {
		_key
		_type
		title
		caption
		link {
			...LinkFragment
		}
		images {
			...SanityImageFragment
		}
	}
	${sanityImageFragment}
	${linkFragment}
`

export const contentSectionFragment = /* GraphQL */ `
	fragment ContentSectionFragment on ContentSection {
		_key
		_type
		layout
		backgroundColor
		textColor
		textAlign
		items {
			... on ImageBlock {
				...ImageBlockFragment
			}
			... on TextBlock {
				...TextBlockFragment
			}
		}
		backgroundImage {
			...SanityImageFragment
		}
	}
	${sanityImageFragment}
	${imageBlockFragment}
	${textBlockFragment}
`
