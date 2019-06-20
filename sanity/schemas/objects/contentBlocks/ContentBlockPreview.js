import * as React from 'react'
import { getReferencedDocument } from '../../utils'
import {
	wrapperStyles,
	imageStyles,
	textWrapperStyles,
	titleStyles,
	subtitleStyles,
} from './styles'

export class ContentBlockPreview extends React.Component {
	state = {
		title: '',
		src: undefined,
		subtitle: undefined,
	}

	componentDidMount() {
		this.fetchValues()
	}

	componentWillReceiveProps(nextProps) {
		this.fetchValues(nextProps)
	}

	fetchValues = async (props = this.props) => {
		if (!props || !props.value) return
		const { items, layout } = props.value

		const links = items.reduce((acc, item) => {
			if (item.cta && item.cta._type === 'pageLink') return [...acc, item.cta]
			return acc
		}, [])

		const subtitles = [
			layout === 'carousel' ? '🎠 Carousel' : null,
			links && links.length ? `🔗 ${links.length} links` : null,
		].filter(Boolean)

		const firstItem = items.length ? items[0] : {}
		console.log(firstItem)
		const firstItemDoc =
			firstItem.cta && firstItem.cta.link
				? await getReferencedDocument(firstItem.cta.link[0]._ref)
				: {}
		const title =
			firstItem.title || firstItemDoc.title || '(You must add at least 1 item)'
		console.log(firstItemDoc)
		// const image = getItemImage(items)

		this.setState({
			title,
			subtitle: subtitles.length ? subtitles.join(' ') : undefined,
		})
	}

	render() {
		const { src, title, subtitle } = this.state
		return (
			<div style={wrapperStyles}>
				{src && <img style={imageStyles} src={src} alt={title} />}
				<div style={textWrapperStyles}>
					<p style={titleStyles}>{title}</p>
					{subtitle && <h5 style={subtitleStyles}>{subtitle}</h5>}
				</div>
			</div>
		)
	}
}
