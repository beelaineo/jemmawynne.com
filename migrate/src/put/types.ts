/**
 * Product
 */
declare enum ProductPublishedScope {
	WEB = 'web',
	GLOBAL = 'global',
}
declare enum ProductVariantWeightUnit {
	GRAMS = 'g',
	KILOGRAMS = 'kg',
	OUNCES = 'oz',
	POUNDS = 'lb',
}
declare type ProductVariant = {
	barcode: string
	compare_at_price: number
	created_at: Date
	fulfillment_service: string
	grams: number
	weight: number
	weight_unit: ProductVariantWeightUnit
	id: number
	inventory_management: string
	inventory_policy: string
	inventory_quantity: number
	option1: string
	position: number
	price: number
	product_id: number
	requires_shipping: boolean
	sku: string
	taxable: boolean
	title: string
	updated_at: Date
}
declare type ShopifyProductImagesImage = {
	src: string
}
declare type ShopifyProductMetafield = {
	key: string
	value: string
	value_type?: string
	namespace?: string
}
declare type ShopifyProduct = {
	body_html: string
	created_at: Date
	handle: string
	id: string
	images: ShopifyProductImagesImage[]
	options: string[]
	product_type: string
	metafields: ShopifyProductMetafield[]
	published_at: Date
	published_scope: ProductPublishedScope
	tags: string
	template_suffix: string
	title: string
	metafields_global_title_tag: string
	metafields_global_description_tag: string
	updated_at: Date
	variants: ProductVariant[]
	vendor: string
}
declare type ShopifyProductEndpointsCountParams = {
	vendor?: string
	product_type?: string
	collection_id?: number
	created_at_min?: Date
	created_at_max?: Date
	updated_at_min?: Date
	updated_at_max?: Date
	published_at_min?: Date
	published_at_max?: Date
	published_status?: 'published' | 'unpublished' | 'any'
}
declare type ShopifyProductsEndpointsCreateParams = any
declare type ShopifyProductEndpointsGetParams = any
declare type ShopifyProductEndpointsListParams = any
declare type ShopifyProductEndpointsUpdateParams = {
	product: any
}
interface ShopifyProductEndpoints {
	count(params?: ShopifyProductEndpointsCountParams): number
	create(params: ShopifyProductsEndpointsCreateParams): any
	delete(id: string): void
	get(
		id: string,
		params?: ShopifyProductEndpointsGetParams,
	): { products: ShopifyProduct[] }
	list(params?: ShopifyProductEndpointsListParams): ShopifyProduct[]
	update(
		id: string,
		params?: ShopifyProductEndpointsUpdateParams,
	): { product: ShopifyProduct }
}

/**
 * ScriptTag
 */
declare enum ShopifyScriptTagEvent {
	ONLOAD = 'onload',
}
declare enum ShopifyScriptTagDisplayScope {
	ONLINE_STORE = 'online_store',
	ORDER_STATUS = 'order_status',
	ALL = 'all',
}
declare type ShopifyScriptTag = {
	created_at: string
	event: ShopifyScriptTagEvent
	id: number
	src: string
	display_scope: ShopifyScriptTagDisplayScope
	updated_at: Date
}
interface ShopifyScriptTagEndpoints {
	count(params: {}): number
	create(params: {}): any
	delete(id: number): any
	get(id: number, params?: {}): any[]
	list(params?: {}): any
	update(id: number, params?: {}): any
}

/**
 * Order
 */
declare type ShopifyOrder = any
interface ShopifyOrderEndpoints {
	cancel(id: number, params: any): any
	close(id: number)
	count(params?: any): any
	create(params: any): any
	delete(id: number): any
	get(id: number, params?: any): any
	list(params?: any): any
	open(id: number): any
	update(id: number, params?: any): any
}

/**
 * Main module actions and subsequent endpoints
 */
declare interface ShopifyActions {
	apiPermission: any
	applicationCharge: any
	applicationCredit: any
	article: any
	asset: any
	blog: any
	carrierService: any
	checkout: any
	collect: any
	collectionListing: any
	comment: any
	country: any
	customCollection: any
	customer: any
	customerAddress: any
	customerSavedSearch: any
	discountCode: any
	draftOrder: any
	event: any
	fulfillment: any
	fulfillmentEvent: any
	fulfillmentService: any
	giftCard: any
	location: any
	marketingEvent: any
	metafield: any
	order: ShopifyOrderEndpoints
	orderRisk: any
	page: any
	payment: any
	policy: any
	priceRule: any
	product: ShopifyProductEndpoints
	productImage: any
	productListing: any
	productVariant: any
	province: any
	recurringApplicationCharge: any
	redirect: any
	refund: any
	report: any
	resourceFallback: any
	scriptTag: ShopifyScriptTagEndpoints
	shippingZone: any
	shop: any
	smartCollection: any
	storefrontAccessToken: any
	theme: any
	transaction: any
	usageCharge: any
	user: any
	webhook: any
}

/**
 * Shopify module instance
 */
declare type ShopifyInstanceParams = {
	apiKey?: string // required for private apps
	password?: string // required for private apps
	shopName: string // required for public apps
	accessToken?: string // required for public apps
	autoLimit?: boolean
	timeout?: number
}
export declare type Shopify = (params: ShopifyInstanceParams) => ShopifyActions
