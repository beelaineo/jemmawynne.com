import * as React from 'react'
import { getReferencedDocument, blocksToPlainText } from '../../utils'
import {
	wrapperStyles,
	imageStyles,
	textWrapperStyles,
	titleStyles,
	subtitleStyles,
} from './styles'

export class TextBlockPreview extends React.Component {
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
		const { title, body, cta } = props.value
		console.log('* * * * ')

		console.log(props)
		console.log(title, body, cta)
		const bodyText = blocksToPlainText(body)
		console.log(bodyText)
		if (cta && cta.link && cta.link.length) console.log(cta.link[0])
		const linkedItem =
			cta && cta.link && cta.link.length
				? await getReferencedDocument(cta.link[0]._ref)
				: {}

		console.log(linkedItem)
		const inferredTitle = title || linkedItem.title || undefined

		this.setState({
			title: inferredTitle || bodyText || undefined,
			subtitle: inferredTitle ? bodyText || undefined : undefined,
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
