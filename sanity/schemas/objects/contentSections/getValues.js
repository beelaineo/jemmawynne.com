import {
	getReferencedDocument,
	blocksToPlainText,
	getImageThumbnail,
} from '../../utils'

const getTextBlockValues = async (item) => {
	const doc =
		item.cta &&
		item.cta.link &&
		item.cta.link.length >= 1 &&
		item.cta.link[0].document
			? await getReferencedDocument(item.cta.link[0].document._ref)
			: {}
	const subtitle =
		item.body && item.body.length ? blocksToPlainText(item.body) : undefined
	return {
		subtitle,
		title: item.title || doc.title,
	}
}

const getImageBlockValues = async (item) => {
	const src = item.images ? await getImageThumbnail(item.images[0]) : undefined

	const title =
		item.title || item.caption || (item.images && item.images.length)
			? item.images[0].altText
			: `${item.images.length}`
	const subtitle = title === item.caption ? undefined : item.caption
	return {
		title,
		subtitle,
		src,
	}
}

export const getBlockValues = (item) => {
	switch (item._type) {
		case 'textBlock':
			return getTextBlockValues(item)
		case 'imageBlock':
			return getImageBlockValues(item)
		default:
			throw new Error(
				`There is no value getter function for type "${item._type}"`,
			)
	}
}
