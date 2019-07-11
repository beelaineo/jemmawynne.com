import * as React from 'react'
import { BlockPreview } from './BlockPreview'
import { blocksToPlainText, getReferencedDocument } from '../../utils'

const getPreviewValues = async (values) => {
	const { title, body, cta } = values

	const bodyText = blocksToPlainText(body)
	const linkedDoc =
		cta && cta.link && cta.link.document
			? await getReferencedDocument(cta.link.document._ref)
			: undefined
	const urlLink = cta && cta.link.length && cta.link.url
	console.log(cta)

	const info = [
		title,
		bodyText,
		linkedDoc ? `🔗${linkedDoc.title}` : null,
		urlLink ? `🔗${urlLink}` : null,
	].filter(Boolean)

	const [previewTitle, ...subtitles] = info

	return {
		title: previewTitle || 'Untitled Block',
		subtitles: [subtitles.length ? subtitles.join(' ') : undefined],
	}
}

export const contentItem = {
	name: 'textBlock',
	title: 'Text Block',
	type: 'object',
	fields: [
		{
			name: 'title',
			label: 'Title',
			type: 'string',
		},
		{
			name: 'body',
			label: 'Text',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [
						{ title: 'Normal', value: 'normal' },
						{ title: 'Header5', value: 'h5' },
					],
					marks: {
						decorators: [
							{ title: 'Strong', value: 'strong' },
							{ title: 'Emphasis', value: 'em' },
						],
					},
				},
			],
		},

		{
			name: 'cta',
			title: 'Link / CTA',
			type: 'cta',
		},
	],
	preview: {
		select: {
			title: 'title',
			body: 'body',
			cta: 'cta',
		},
		component: (props) => (
			<BlockPreview {...props} getPreviewValues={getPreviewValues} />
		),
	},
}
