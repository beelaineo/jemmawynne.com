import * as React from 'react'
import client from 'part:@sanity/base/client'
import { path } from 'ramda'
// import styled from 'styled-components'
// import { FaParagraph } from 'react-icons/fa'

/**
 * PageLinkPreview
 */

const getProductImage = (product) => {
	const images = path(['sourceData', 'images'], product)

	return images && images.length ? images[0].w100 : undefined
}

const getLinkInfo = async (link) => {
	if (link._type === 'externalLink') {
		return {
			linkTitle: link.url,
			subtitle: 'External Link',
		}
	}
	const linkedPage = await client.getDocument(link._ref)
	const { title } = linkedPage
	switch (linkedPage._type) {
		case 'shopifyProduct':
			return {
				title,
				subtitle: 'Product',
				imageSrc: getProductImage(linkedPage),
			}
		case 'shopifyCollection':
			return {
				title,
				subtitle: 'Collection',
				imageSrc: linkedPage.sourceData.image.w100,
			}
		default:
			throw new Error(`Page type ${linkedPage._type} is not (yet) supported`)
	}
}

const wrapperStyles = {
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'center',
}

const imagePreviewStyles = {
	width: '40px',
	height: '40px',
	objectFit: 'cover',
	margin: '0px 10px 0px 5px',
	backgroundColor: 'lightGray',
}

const textWrapperStyles = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
}

const titleStyles = {
	margin: 0,
}

const subtitleStyles = {
	color: 'lightGray',
	fontWeight: 'normal',
	margin: '0',
}

class PageLinkPreview extends React.Component {
	state = {
		imageSrc: undefined,
		title: '',
		subtitle: undefined,
	}

	componentDidMount() {
		this.fetchValues()
	}

	componentWillReceiveProps(nextProps) {
		this.fetchValues(nextProps)
	}

	fetchValues = async (props = this.props) => {
		if (!props || !props.value || !props.value.returnValue) return
		const { link, label } = props.value.returnValue

		if (!link || !link.length) {
			this.setState({ title: label, ready: true })
			return
		}

		const { title, subtitle, imageSrc } = await getLinkInfo(link[0])
		this.setState({ ready: true, imageSrc, title: label || title, subtitle })
	}

	render() {
		const { imageSrc, title, subtitle, ready } = this.state
		if (!ready) return null
		return (
			<div style={wrapperStyles}>
				<span role="img" aria-label="Links to:">
					🔗
				</span>
				{imageSrc && <img src={imageSrc} style={imagePreviewStyles} alt="" />}
				<div style={textWrapperStyles}>
					<p style={titleStyles}>{title}</p>
					{subtitle && <h5 style={subtitleStyles}>{subtitle}</h5>}
				</div>
			</div>
		)
	}
}

export const pageLink = {
	title: 'Link Block',
	name: 'pageLink',
	description: 'Link to a Page, Product, or Collection',
	type: 'reference',
	to: [{ type: 'shopifyProduct' }, { type: 'shopifyCollection' }],
	preview: {
		// select: {
		// 	link: 'link',
		// 	image: 'image',
		// 	images: 'images',
		// 	label: 'label',
		// },
		// // prepare: (prepared) => {
		// 	const { link, label, images } = prepared
		// 	return { link, label, image: images && images[0] }
		// },
		component: PageLinkPreview,
	},
}
