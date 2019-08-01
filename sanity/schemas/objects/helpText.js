import * as React from 'react'
import { MdInfo } from 'react-icons/md'

const wrapperStyles = {
	display: 'grid',
	padding: '10px',
	backgroundColor: '#eee4d2',
	gridTemplateColumns: '1em 1fr',
	gridGap: '0.6em',
}

const iconStyles = {
	fontSize: '22px',
	width: '1em',
	height: '1em',
}

const pStyles = {
	flexGrow: '1',
	margin: 0,
	// margin: '0 0 0 0.6em',
}

const Hidden = (props) => {
	const { description } = props.type
	if (!description) return null
	return (
		<div style={wrapperStyles}>
			<MdInfo style={iconStyles} />
			<p style={pStyles}>{description}</p>
		</div>
	)
}

export const helpText = {
	title: 'Hidden Input',
	type: 'string',
	inputComponent: Hidden,
	name: 'helpText',
	// fields: [
	// 	{
	// 		name: 'nothing',
	// 		type: 'string',
	// 		readonly: true,
	// 		hidden: true,
	// 		inputComponent: Hidden,
	// 	},
	// ],
	preview: {
		select: {
			nothing: 'nothing',
		},
		prepare: (p) => p,
		component: (props) => <Hidden {...props} />,
	},
}
