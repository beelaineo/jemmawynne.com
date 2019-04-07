import { Paginated } from './graphql'
import { Collection } from './collection'
import { ShopifyImage } from './media'

export type Money = string

interface SelectedOption {
	name: string
	value: string
}

export interface Variant {
	id: string
	availableForSale: boolean
	image: ShopifyImage
	price: string
	title: string
	selectedOptions?: SelectedOption[]
	weight?: number
	weightUnit?: string
}

interface ProductPriceRange {
	minVariantPrice: Money
	maxVariantPrice: Money
}

export interface Product {
	id: number
	handle: string
	title: string
	description: string
	productType?: string
	priceRange?: ProductPriceRange
	availableForSale?: boolean
	collections?: Collection[]
	images: Paginated<ShopifyImage>
	variants: Paginated<Variant>
	__typename: 'Product'
}
