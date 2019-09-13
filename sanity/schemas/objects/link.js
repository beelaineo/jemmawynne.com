import * as React from 'react'
import { BlockPreview } from './contentSections/BlockPreview'
import { getReferencedDocument, getShopifyThumbnail } from '../utils'

const getPreviewValues = async (values) => {
	const { document } = values

	if (!document || !document._ref) {
		return { title: '(empty)' }
	}
	const doc = await getReferencedDocument(document._ref)
	const src =
		doc && (doc._type === 'shopifyProduct' || doc._type === 'shopifyCollection')
			? getShopifyThumbnail(doc)
			: undefined
	return {
		src,
		title: doc.title,
	}
}

export const externalLink = {
	title: 'External Link',
	type: 'object',
	name: 'externalLink',
	icon: () => (
		<span role="img" aria-label="Link" style={{ fontSize: '3em' }}>
			🔗
		</span>
	),
	fields: [
		{
			name: 'url',
			type: 'url',
			title: 'URL',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'newTab',
			type: 'boolean',
			title: 'Open in New Tab',
		},
	],
	preview: {
		select: {
			url: 'url',
			newTab: 'newTab',
		},
		prepare: ({ url, newTab }) => {
			return {
				title: url,
				subtitle: newTab ? '⧉ Opens in new tab' : undefined,
			}
		},
	},
}
export const pageLink = {
	title: 'Page, Product, or Collection',
	description: 'Link to a Page, Product, or Collection',
	name: 'pageLink',
	type: 'object',
	fields: [
		{
			name: 'document',
			title: 'Linked Page',
			type: 'reference',
			to: [
				{ type: 'shopifyProduct' },
				{ type: 'shopifyCollection' },
				{ type: 'page' },
			],
		},
	],
	preview: {
		select: {
			document: 'document',
		},
		component: (props) => (
			<BlockPreview {...props} getPreviewValues={getPreviewValues} />
		),
	},
}
