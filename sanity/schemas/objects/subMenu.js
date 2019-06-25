import * as React from 'react'
import { groupBy, prop } from 'ramda'
import { IoIosListBox } from 'react-icons/io'
import { BlockPreview } from './contentSections/BlockPreview'
import { link } from './linkWorkaround'
import { getReferencedDocument, getShopifyThumbnail } from '../utils'

const getPreviewValues = async ({ label, link: previewLink }) => {
	if (!previewLink.length || !previewLink[0].document)
		return { title: 'Missing Link' }
	const linkedDoc = await getReferencedDocument(previewLink[0].document._ref)

	const shopifyThumbnail =
		linkedDoc &&
		(linkedDoc._type === 'shopifyProduct' ||
			linkedDoc._type === 'shopifyCollection')
			? getShopifyThumbnail(linkedDoc)
			: undefined

	return {
		title: label || linkedDoc.title,
		subtitles: [linkedDoc ? `🔗${linkedDoc.title}` : null].filter(Boolean),
		src: shopifyThumbnail,
	}
}

export const MenuLink = {
	name: 'menuLink',
	type: 'object',
	title: 'Nav Link',
	fields: [
		{
			title: 'Label',
			name: 'label',
			type: 'string',
		},
		{
			...link,
			name: 'link',
		},
	],
	preview: {
		select: {
			link: 'link',
			label: 'label',
		},
		prepare: (val) => val,
		component: (props) => (
			<BlockPreview {...props} getPreviewValues={getPreviewValues} />
		),
	},
}

export const linkGroup = {
	title: 'Link Group',
	name: 'linkGroup',
	type: 'object',
	fields: [
		{
			title: 'Group Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Links',
			name: 'links',
			type: 'array',
			validation: (Rule) => Rule.required().max(12),
			of: [{ type: 'menuLink' }],
		},
	],
}

export const subMenu = {
	title: 'Dropdown Menu',
	name: 'subMenu',
	type: 'object',
	icon: IoIosListBox,
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Columns',
			name: 'columns',
			type: 'array',
			of: [{ type: 'linkGroup' }, { type: 'imageBlock' }],
		},
	],
	preview: {
		select: {
			title: 'title',
			columns: 'columns',
		},
		prepare: ({ title, columns }) => {
			const { linkGroup: linkGroups, imageBlock: imageBlocks } = groupBy(
				prop('_type'),
				columns || {},
			)

			const subtitle = [
				linkGroups && linkGroups.length
					? `${linkGroups.length} Link Group${
							linkGroups.length === 1 ? '' : 's'
					  }`
					: undefined,
				imageBlocks && imageBlocks.length
					? `${imageBlocks.length} Image Link${
							imageBlocks.length === 1 ? '' : 's'
					  }`
					: undefined,
			]
				.filter(Boolean)
				.join(' | ')
			return {
				title,
				subtitle,
			}
		},
	},
}
