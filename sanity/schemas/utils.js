import client from 'part:@sanity/base/client'
import { path } from 'ramda'

export const getReferencedDocument = async (ref) => client.getDocument(ref)

export const blocksToPlainText = (blocks, lineBreaks = false) =>
	blocks
		? blocks
				.map((b) =>
					b._type !== 'block' || !b.children
						? ''
						: b.children.map((child) => child.text).join(' '),
				)
				.join(lineBreaks ? '\n\n' : ' ')
		: undefined

export const getImageThumbnail = async (image) => {
	if (!image) return undefined
	const doc = await getReferencedDocument(image.asset._ref)
	return `${doc.url}?w=100&fit=max`
}

export const getShopifyThumbnail = (item) => {
	switch (item.sourceData.__typename) {
		case 'Product':
			return path(['sourceData', 'images', 'edges', '0', 'node', 'w100'], item)
		case 'Collection':
			return path(['sourceData', 'image', 'w100'], item)
		default:
			throw new Error(
				`Cannot get thumbnail for type "${item.sourceData.__typename}"`,
			)
	}
}
