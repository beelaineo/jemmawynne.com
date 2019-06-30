import * as React from 'react'
import { BlockPreview } from './BlockPreview'
import { blocksToPlainText, getReferencedDocument } from '../../utils'

const getPreviewValues = async (values) => {
	const { title, body, cta } = values

	const bodyText = blocksToPlainText(body)
	const titles = [title, bodyText].filter(Boolean)
	const linkedDoc =
		cta && cta.link.length && cta.link[0].document
			? await getReferencedDocument(cta.link[0].document._ref)
			: undefined
	const urlLink = cta && cta.link.length && cta.link[0].url

	const info = [
		linkedDoc ? `🔗${linkedDoc.title}` : null,
		urlLink ? `🔗${urlLink}` : null,
	].filter(Boolean)

	return {
		title: titles.length ? titles[0] : 'Untitled Block',
		subtitles: [titles.length >= 2 ? titles[1] : undefined, ...info].filter(
			Boolean,
		),
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
