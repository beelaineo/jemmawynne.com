import { sanityImageFragment } from './media'

export const linkFragmentInline = /* GraphQL */ `
		... on PageLink {
			_key
			_type
			document {
				... on Page {
					_type
					_key
          slug {
            current
          }
				}
				... on ShopifyProduct {
					_key
					_type
					title
					handle
				}
				... on ShopifyCollection {
					_key
					_type
					title
					handle
				}
			}
		}
		... on UrlLink {
			_key
			_type
			url
			newTab
		}
`

export const linkFragment = /* GraphQL */ `
	fragment LinkFragment on PageLinkOrUrlLink {
    ${linkFragmentInline}
	}
`

export const textBlockFragment = /* GraphQL */ `
	fragment TextBlockFragment on TextBlock {
		_key
		_type
		title
		bodyRaw
		cta {
			label
			link {
        ${linkFragmentInline}
			}
		}
	}
`

export const imageBlockFragment = /* GraphQL */ `
	fragment ImageBlockFragment on ImageBlock {
		_key
		_type
		title
		caption
		link {
      ${linkFragmentInline}
		}
		images {
			...SanityImageFragment
		}
	}
	${sanityImageFragment}
`

export const contentSectionFragment = /* GraphQL */ `
	fragment ContentSectionFragment on ContentSection {
		_key
		_type
		layout
		backgroundColor
		textColor
		textAlign
		alignItems
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
