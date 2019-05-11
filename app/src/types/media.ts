export interface ShopifyImage {
	id: string
	originalSrc: string
	altText?: string
	transformedSrc?: string
	__typename: 'Image'
}

export interface SanityImage {
	_type: string
	_ref: string
	_key: string
	__typename: 'SanityImage'
	altText?: string
	id: string
	url: string
	metadata?: {
		dimensions: {
			width: number
			height: number
			ratio?: number
		}
	}
}
