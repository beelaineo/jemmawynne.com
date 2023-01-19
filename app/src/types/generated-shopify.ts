export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: Date
  Decimal: any
  HTML: any
  JSON: { [key: string]: any }
  Money: any
  URL: any
}

/**
 * A version of the API, as defined by [Shopify API versioning](https://shopify.dev/api/usage/versioning).
 * Versions are commonly referred to by their handle (for example, `2021-10`).
 *
 */
export interface StorefrontApiApiVersion {
  __typename: 'ApiVersion'
  /** The human-readable name of the version. */
  displayName: Scalars['String']
  /** The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle. */
  handle: Scalars['String']
  /** Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/api/usage/versioning). */
  supported: Scalars['Boolean']
}

/** Details about the gift card used on the checkout. */
export interface StorefrontApiAppliedGiftCard extends StorefrontApiNode {
  __typename: 'AppliedGiftCard'
  /**
   * The amount that was taken from the gift card by applying it.
   * @deprecated Use `amountUsedV2` instead.
   */
  amountUsed: Scalars['Money']
  /** The amount that was taken from the gift card by applying it. */
  amountUsedV2: StorefrontApiMoneyV2
  /**
   * The amount left on the gift card.
   * @deprecated Use `balanceV2` instead.
   */
  balance: Scalars['Money']
  /** The amount left on the gift card. */
  balanceV2: StorefrontApiMoneyV2
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The last characters of the gift card. */
  lastCharacters: Scalars['String']
  /** The amount that was applied to the checkout in its currency. */
  presentmentAmountUsed: StorefrontApiMoneyV2
}

/** An article in an online store blog. */
export interface StorefrontApiArticle
  extends StorefrontApiHasMetafields,
    StorefrontApiNode,
    StorefrontApiOnlineStorePublishable {
  __typename: 'Article'
  /**
   * The article's author.
   * @deprecated Use `authorV2` instead.
   */
  author: StorefrontApiArticleAuthor
  /** The article's author. */
  authorV2?: Maybe<StorefrontApiArticleAuthor>
  /** The blog that the article belongs to. */
  blog: StorefrontApiBlog
  /** List of comments posted on the article. */
  comments: StorefrontApiCommentConnection
  /** Stripped content of the article, single line with HTML tags removed. */
  content: Scalars['String']
  /** The content of the article, complete with HTML formatting. */
  contentHtml: Scalars['HTML']
  /** Stripped excerpt of the article, single line with HTML tags removed. */
  excerpt?: Maybe<Scalars['String']>
  /** The excerpt of the article, complete with HTML formatting. */
  excerptHtml?: Maybe<Scalars['HTML']>
  /**
   * A human-friendly unique string for the Article automatically generated from its title.
   *
   */
  handle: Scalars['String']
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The image associated with the article. */
  image?: Maybe<StorefrontApiImage>
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<StorefrontApiMetafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: StorefrontApiMetafieldConnection
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>
  /** The date and time when the article was published. */
  publishedAt: Scalars['DateTime']
  /** The article’s SEO information. */
  seo?: Maybe<StorefrontApiSeo>
  /** A categorization that a article can be tagged with. */
  tags: Array<Scalars['String']>
  /** The article’s name. */
  title: Scalars['String']
  /**
   * The url pointing to the article accessible from the web.
   * @deprecated Use `onlineStoreUrl` instead.
   */
  url: Scalars['URL']
}

/** An article in an online store blog. */
export type StorefrontApiArticleCommentsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** An article in an online store blog. */
export type StorefrontApiArticleContentArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>
}

/** An article in an online store blog. */
export type StorefrontApiArticleExcerptArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>
}

/** An article in an online store blog. */
export type StorefrontApiArticleImageArgs = {
  crop?: InputMaybe<StorefrontApiCropRegion>
  maxHeight?: InputMaybe<Scalars['Int']>
  maxWidth?: InputMaybe<Scalars['Int']>
  scale?: InputMaybe<Scalars['Int']>
}

/** An article in an online store blog. */
export type StorefrontApiArticleMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** An article in an online store blog. */
export type StorefrontApiArticleMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** The author of an article. */
export interface StorefrontApiArticleAuthor {
  __typename: 'ArticleAuthor'
  /** The author's bio. */
  bio?: Maybe<Scalars['String']>
  /** The author’s email. */
  email: Scalars['String']
  /** The author's first name. */
  firstName: Scalars['String']
  /** The author's last name. */
  lastName: Scalars['String']
  /** The author's full name. */
  name: Scalars['String']
}

/**
 * An auto-generated type for paginating through multiple Articles.
 *
 */
export interface StorefrontApiArticleConnection {
  __typename: 'ArticleConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiArticleEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one Article and a cursor during pagination.
 *
 */
export interface StorefrontApiArticleEdge {
  __typename: 'ArticleEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ArticleEdge. */
  node: StorefrontApiArticle
}

/** The set of valid sort keys for the Article query. */
export enum StorefrontApiArticleSortKeys {
  /** Sort by the `author` value. */
  Author = 'AUTHOR',
  /** Sort by the `blog_title` value. */
  BlogTitle = 'BLOG_TITLE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `published_at` value. */
  PublishedAt = 'PUBLISHED_AT',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
}

/** Represents a generic custom attribute. */
export interface StorefrontApiAttribute {
  __typename: 'Attribute'
  /** Key or name of the attribute. */
  key: Scalars['String']
  /** Value of the attribute. */
  value?: Maybe<Scalars['String']>
}

/** Specifies the input fields required for an attribute. */
export type StorefrontApiAttributeInput = {
  /** Key or name of the attribute. */
  key: Scalars['String']
  /** Value of the attribute. */
  value: Scalars['String']
}

/**
 * Automatic discount applications capture the intentions of a discount that was automatically applied.
 *
 */
export interface StorefrontApiAutomaticDiscountApplication
  extends StorefrontApiDiscountApplication {
  __typename: 'AutomaticDiscountApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: StorefrontApiDiscountApplicationAllocationMethod
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: StorefrontApiDiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: StorefrontApiDiscountApplicationTargetType
  /** The title of the application. */
  title: Scalars['String']
  /** The value of the discount application. */
  value: StorefrontApiPricingValue
}

/** A collection of available shipping rates for a checkout. */
export interface StorefrontApiAvailableShippingRates {
  __typename: 'AvailableShippingRates'
  /**
   * Whether or not the shipping rates are ready.
   * The `shippingRates` field is `null` when this value is `false`.
   * This field should be polled until its value becomes `true`.
   *
   */
  ready: Scalars['Boolean']
  /** The fetched shipping rates. `null` until the `ready` field is `true`. */
  shippingRates?: Maybe<Array<StorefrontApiShippingRate>>
}

/** An online store blog. */
export interface StorefrontApiBlog
  extends StorefrontApiHasMetafields,
    StorefrontApiNode,
    StorefrontApiOnlineStorePublishable {
  __typename: 'Blog'
  /** Find an article by its handle. */
  articleByHandle?: Maybe<StorefrontApiArticle>
  /** List of the blog's articles. */
  articles: StorefrontApiArticleConnection
  /** The authors who have contributed to the blog. */
  authors: Array<StorefrontApiArticleAuthor>
  /**
   * A human-friendly unique string for the Blog automatically generated from its title.
   *
   */
  handle: Scalars['String']
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<StorefrontApiMetafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: StorefrontApiMetafieldConnection
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>
  /** The blog's SEO information. */
  seo?: Maybe<StorefrontApiSeo>
  /** The blogs’s title. */
  title: Scalars['String']
  /**
   * The url pointing to the blog accessible from the web.
   * @deprecated Use `onlineStoreUrl` instead.
   */
  url: Scalars['URL']
}

/** An online store blog. */
export type StorefrontApiBlogArticleByHandleArgs = {
  handle: Scalars['String']
}

/** An online store blog. */
export type StorefrontApiBlogArticlesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<StorefrontApiArticleSortKeys>
}

/** An online store blog. */
export type StorefrontApiBlogMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** An online store blog. */
export type StorefrontApiBlogMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * An auto-generated type for paginating through multiple Blogs.
 *
 */
export interface StorefrontApiBlogConnection {
  __typename: 'BlogConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiBlogEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one Blog and a cursor during pagination.
 *
 */
export interface StorefrontApiBlogEdge {
  __typename: 'BlogEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of BlogEdge. */
  node: StorefrontApiBlog
}

/** The set of valid sort keys for the Blog query. */
export enum StorefrontApiBlogSortKeys {
  /** Sort by the `handle` value. */
  Handle = 'HANDLE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
}

/** Card brand, such as Visa or Mastercard, which can be used for payments. */
export enum StorefrontApiCardBrand {
  /** American Express. */
  AmericanExpress = 'AMERICAN_EXPRESS',
  /** Diners Club. */
  DinersClub = 'DINERS_CLUB',
  /** Discover. */
  Discover = 'DISCOVER',
  /** JCB. */
  Jcb = 'JCB',
  /** Mastercard. */
  Mastercard = 'MASTERCARD',
  /** Visa. */
  Visa = 'VISA',
}

/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
export interface StorefrontApiCart extends StorefrontApiNode {
  __typename: 'Cart'
  /** The attributes associated with the cart. Attributes are represented as key-value pairs. */
  attributes: Array<StorefrontApiAttribute>
  /** Information about the buyer that is interacting with the cart. */
  buyerIdentity: StorefrontApiCartBuyerIdentity
  /** The URL of the checkout for the cart. */
  checkoutUrl: Scalars['URL']
  /** The date and time when the cart was created. */
  createdAt: Scalars['DateTime']
  /**
   * The case-insensitive discount codes that the customer added at checkout.
   *
   */
  discountCodes: Array<StorefrontApiCartDiscountCode>
  /**
   * The estimated costs that the buyer will pay at checkout.
   * The estimated costs are subject to change and changes will be reflected at checkout.
   * The `estimatedCost` field uses the `buyerIdentity` field to determine
   * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).
   *
   * @deprecated Use `cost` instead.
   */
  estimatedCost: StorefrontApiCartEstimatedCost
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** A list of lines containing information about the items the customer intends to purchase. */
  lines: StorefrontApiCartLineConnection
  /** A note that is associated with the cart. For example, the note can be a personalized message to the buyer. */
  note?: Maybe<Scalars['String']>
  /** The date and time when the cart was updated. */
  updatedAt: Scalars['DateTime']
}

/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
export type StorefrontApiCartLinesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** Return type for `cartAttributesUpdate` mutation. */
export interface StorefrontApiCartAttributesUpdatePayload {
  __typename: 'CartAttributesUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<StorefrontApiCart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<StorefrontApiCartUserError>
}

/** The discounts automatically applied to the cart line based on prerequisites that have been met. */
export interface StorefrontApiCartAutomaticDiscountAllocation
  extends StorefrontApiCartDiscountAllocation {
  __typename: 'CartAutomaticDiscountAllocation'
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: StorefrontApiMoneyV2
  /** The title of the allocated discount. */
  title: Scalars['String']
}

/** Represents information about the buyer that is interacting with the cart. */
export interface StorefrontApiCartBuyerIdentity {
  __typename: 'CartBuyerIdentity'
  /** The country where the buyer is located. */
  countryCode?: Maybe<StorefrontApiCountryCode>
  /** The customer account associated with the cart. */
  customer?: Maybe<StorefrontApiCustomer>
  /** The email address of the buyer that is interacting with the cart. */
  email?: Maybe<Scalars['String']>
  /** The phone number of the buyer that is interacting with the cart. */
  phone?: Maybe<Scalars['String']>
}

/**
 * Specifies the input fields to update the buyer information associated with a cart.
 * Buyer identity is used to determine
 * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * and should match the customer's shipping address.
 *
 */
export type StorefrontApiCartBuyerIdentityInput = {
  /** The country where the buyer is located. */
  countryCode?: InputMaybe<StorefrontApiCountryCode>
  /** The access token used to identify the customer associated with the cart. */
  customerAccessToken?: InputMaybe<Scalars['String']>
  /** The email address of the buyer that is interacting with the cart. */
  email?: InputMaybe<Scalars['String']>
  /** The phone number of the buyer that is interacting with the cart. */
  phone?: InputMaybe<Scalars['String']>
}

/** Return type for `cartBuyerIdentityUpdate` mutation. */
export interface StorefrontApiCartBuyerIdentityUpdatePayload {
  __typename: 'CartBuyerIdentityUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<StorefrontApiCart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<StorefrontApiCartUserError>
}

/** The discount that has been applied to the cart line using a discount code. */
export interface StorefrontApiCartCodeDiscountAllocation
  extends StorefrontApiCartDiscountAllocation {
  __typename: 'CartCodeDiscountAllocation'
  /** The code used to apply the discount. */
  code: Scalars['String']
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: StorefrontApiMoneyV2
}

/** Return type for `cartCreate` mutation. */
export interface StorefrontApiCartCreatePayload {
  __typename: 'CartCreatePayload'
  /** The new cart. */
  cart?: Maybe<StorefrontApiCart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<StorefrontApiCartUserError>
}

/** The discounts that have been applied to the cart line. */
export type StorefrontApiCartDiscountAllocation = {
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: StorefrontApiMoneyV2
}

/** The discount codes applied to the cart. */
export interface StorefrontApiCartDiscountCode {
  __typename: 'CartDiscountCode'
  /** Whether the discount code is applicable to the cart's current contents. */
  applicable: Scalars['Boolean']
  /** The code for the discount. */
  code: Scalars['String']
}

/** Return type for `cartDiscountCodesUpdate` mutation. */
export interface StorefrontApiCartDiscountCodesUpdatePayload {
  __typename: 'CartDiscountCodesUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<StorefrontApiCart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<StorefrontApiCartUserError>
}

/** Possible error codes that can be returned by `CartUserError`. */
export enum StorefrontApiCartErrorCode {
  /** The input value is invalid. */
  Invalid = 'INVALID',
  /** Merchandise line was not found in cart. */
  InvalidMerchandiseLine = 'INVALID_MERCHANDISE_LINE',
  /** The input value should be less than the maximum value allowed. */
  LessThan = 'LESS_THAN',
  /** Missing discount code. */
  MissingDiscountCode = 'MISSING_DISCOUNT_CODE',
  /** Missing note. */
  MissingNote = 'MISSING_NOTE',
}

/**
 * The estimated costs that the buyer will pay at checkout.
 * The estimated cost uses
 * [`CartBuyerIdentity`](https://shopify.dev/api/storefront/reference/cart/cartbuyeridentity)
 * to determine
 * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).
 *
 */
export interface StorefrontApiCartEstimatedCost {
  __typename: 'CartEstimatedCost'
  /** The estimated amount, before taxes and discounts, for the customer to pay. */
  subtotalAmount: StorefrontApiMoneyV2
  /** The estimated total amount for the customer to pay. */
  totalAmount: StorefrontApiMoneyV2
  /** The estimated duty amount for the customer to pay at checkout. */
  totalDutyAmount?: Maybe<StorefrontApiMoneyV2>
  /** The estimated tax amount for the customer to pay at checkout. */
  totalTaxAmount?: Maybe<StorefrontApiMoneyV2>
}

/** Specifies the input fields to create a cart. */
export type StorefrontApiCartInput = {
  /** An array of key-value pairs that contains additional information about the cart. */
  attributes?: InputMaybe<Array<StorefrontApiAttributeInput>>
  /**
   * The customer associated with the cart. Used to determine [international pricing]
   * (https://shopify.dev/custom-storefronts/internationalization/international-pricing).
   * Buyer identity should match the customer's shipping address.
   *
   */
  buyerIdentity?: InputMaybe<StorefrontApiCartBuyerIdentityInput>
  /**
   * The case-insensitive discount codes that the customer added at checkout.
   *
   */
  discountCodes?: InputMaybe<Array<Scalars['String']>>
  /** A list of merchandise lines to add to the cart. */
  lines?: InputMaybe<Array<StorefrontApiCartLineInput>>
  /** A note that is associated with the cart. For example, the note can be a personalized message to the buyer. */
  note?: InputMaybe<Scalars['String']>
}

/** Represents information about the merchandise in the cart. */
export interface StorefrontApiCartLine extends StorefrontApiNode {
  __typename: 'CartLine'
  /** The attributes associated with the cart line. Attributes are represented as key-value pairs. */
  attributes: Array<StorefrontApiAttribute>
  /** The discounts that have been applied to the cart line. */
  discountAllocations: Array<StorefrontApiCartDiscountAllocation>
  /**
   * The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout.
   * @deprecated Use `cost` instead.
   */
  estimatedCost: StorefrontApiCartLineEstimatedCost
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The merchandise that the buyer intends to purchase. */
  merchandise: StorefrontApiMerchandise
  /** The quantity of the merchandise that the customer intends to purchase. */
  quantity: Scalars['Int']
  /** The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased. */
  sellingPlanAllocation?: Maybe<StorefrontApiSellingPlanAllocation>
}

/**
 * An auto-generated type for paginating through multiple CartLines.
 *
 */
export interface StorefrontApiCartLineConnection {
  __typename: 'CartLineConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiCartLineEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one CartLine and a cursor during pagination.
 *
 */
export interface StorefrontApiCartLineEdge {
  __typename: 'CartLineEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CartLineEdge. */
  node: StorefrontApiCartLine
}

/** The estimated cost of the merchandise line that the buyer will pay at checkout. */
export interface StorefrontApiCartLineEstimatedCost {
  __typename: 'CartLineEstimatedCost'
  /** The estimated cost of the merchandise line before discounts. */
  subtotalAmount: StorefrontApiMoneyV2
  /** The estimated total cost of the merchandise line. */
  totalAmount: StorefrontApiMoneyV2
}

/** Specifies the input fields to create a merchandise line on a cart. */
export type StorefrontApiCartLineInput = {
  /** An array of key-value pairs that contains additional information about the merchandise line. */
  attributes?: InputMaybe<Array<StorefrontApiAttributeInput>>
  /** The identifier of the merchandise that the buyer intends to purchase. */
  merchandiseId: Scalars['ID']
  /** The quantity of the merchandise. */
  quantity?: InputMaybe<Scalars['Int']>
  /** The identifier of the selling plan that the merchandise is being purchased with. */
  sellingPlanId?: InputMaybe<Scalars['ID']>
}

/** Specifies the input fields to update a line item on a cart. */
export type StorefrontApiCartLineUpdateInput = {
  /** An array of key-value pairs that contains additional information about the merchandise line. */
  attributes?: InputMaybe<Array<StorefrontApiAttributeInput>>
  /** The identifier of the merchandise line. */
  id: Scalars['ID']
  /** The identifier of the merchandise for the line item. */
  merchandiseId?: InputMaybe<Scalars['ID']>
  /** The quantity of the line item. */
  quantity?: InputMaybe<Scalars['Int']>
  /** The identifier of the selling plan that the merchandise is being purchased with. */
  sellingPlanId?: InputMaybe<Scalars['ID']>
}

/** Return type for `cartLinesAdd` mutation. */
export interface StorefrontApiCartLinesAddPayload {
  __typename: 'CartLinesAddPayload'
  /** The updated cart. */
  cart?: Maybe<StorefrontApiCart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<StorefrontApiCartUserError>
}

/** Return type for `cartLinesRemove` mutation. */
export interface StorefrontApiCartLinesRemovePayload {
  __typename: 'CartLinesRemovePayload'
  /** The updated cart. */
  cart?: Maybe<StorefrontApiCart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<StorefrontApiCartUserError>
}

/** Return type for `cartLinesUpdate` mutation. */
export interface StorefrontApiCartLinesUpdatePayload {
  __typename: 'CartLinesUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<StorefrontApiCart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<StorefrontApiCartUserError>
}

/** Return type for `cartNoteUpdate` mutation. */
export interface StorefrontApiCartNoteUpdatePayload {
  __typename: 'CartNoteUpdatePayload'
  /** The updated cart. */
  cart?: Maybe<StorefrontApiCart>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<StorefrontApiCartUserError>
}

/** Represents an error that happens during execution of a cart mutation. */
export interface StorefrontApiCartUserError
  extends StorefrontApiDisplayableError {
  __typename: 'CartUserError'
  /** The error code. */
  code?: Maybe<StorefrontApiCartErrorCode>
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** A container for all the information required to checkout items and pay. */
export interface StorefrontApiCheckout extends StorefrontApiNode {
  __typename: 'Checkout'
  /** The gift cards used on the checkout. */
  appliedGiftCards: Array<StorefrontApiAppliedGiftCard>
  /**
   * The available shipping rates for this Checkout.
   * Should only be used when checkout `requiresShipping` is `true` and
   * the shipping address is valid.
   *
   */
  availableShippingRates?: Maybe<StorefrontApiAvailableShippingRates>
  /** The identity of the customer associated with the checkout. */
  buyerIdentity: StorefrontApiCheckoutBuyerIdentity
  /** The date and time when the checkout was completed. */
  completedAt?: Maybe<Scalars['DateTime']>
  /** The date and time when the checkout was created. */
  createdAt: Scalars['DateTime']
  /** The currency code for the checkout. */
  currencyCode: StorefrontApiCurrencyCode
  /** A list of extra information that is added to the checkout. */
  customAttributes: Array<StorefrontApiAttribute>
  /**
   * The customer associated with the checkout.
   * @deprecated This field will always return null. If you have an authentication token for the customer, you can use the `customer` field on the query root to retrieve it.
   */
  customer?: Maybe<StorefrontApiCustomer>
  /** Discounts that have been applied on the checkout. */
  discountApplications: StorefrontApiDiscountApplicationConnection
  /** The email attached to this checkout. */
  email?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** A list of line item objects, each one containing information about an item in the checkout. */
  lineItems: StorefrontApiCheckoutLineItemConnection
  /** The sum of all the prices of all the items in the checkout. Duties, taxes, shipping and discounts excluded. */
  lineItemsSubtotalPrice: StorefrontApiMoneyV2
  /** The note associated with the checkout. */
  note?: Maybe<Scalars['String']>
  /** The resulting order from a paid checkout. */
  order?: Maybe<StorefrontApiOrder>
  /** The Order Status Page for this Checkout, null when checkout is not completed. */
  orderStatusUrl?: Maybe<Scalars['URL']>
  /**
   * The amount left to be paid. This is equal to the cost of the line items, taxes and shipping minus discounts and gift cards.
   * @deprecated Use `paymentDueV2` instead.
   */
  paymentDue: Scalars['Money']
  /** The amount left to be paid. This is equal to the cost of the line items, duties, taxes, and shipping, minus discounts and gift cards. */
  paymentDueV2: StorefrontApiMoneyV2
  /**
   * Whether or not the Checkout is ready and can be completed. Checkouts may
   * have asynchronous operations that can take time to finish. If you want
   * to complete a checkout or ensure all the fields are populated and up to
   * date, polling is required until the value is true.
   *
   */
  ready: Scalars['Boolean']
  /** States whether or not the fulfillment requires shipping. */
  requiresShipping: Scalars['Boolean']
  /** The shipping address to where the line items will be shipped. */
  shippingAddress?: Maybe<StorefrontApiMailingAddress>
  /**
   * The discounts that have been allocated onto the shipping line by discount applications.
   *
   */
  shippingDiscountAllocations: Array<StorefrontApiDiscountAllocation>
  /** Once a shipping rate is selected by the customer it is transitioned to a `shipping_line` object. */
  shippingLine?: Maybe<StorefrontApiShippingRate>
  /**
   * Price of the checkout before shipping and taxes.
   * @deprecated Use `subtotalPriceV2` instead.
   */
  subtotalPrice: Scalars['Money']
  /** The price at checkout before duties, shipping, and taxes. */
  subtotalPriceV2: StorefrontApiMoneyV2
  /** Whether the checkout is tax exempt. */
  taxExempt: Scalars['Boolean']
  /** Whether taxes are included in the line item and shipping line prices. */
  taxesIncluded: Scalars['Boolean']
  /** The sum of all the duties applied to the line items in the checkout. */
  totalDuties?: Maybe<StorefrontApiMoneyV2>
  /**
   * The sum of all the prices of all the items in the checkout, taxes and discounts included.
   * @deprecated Use `totalPriceV2` instead.
   */
  totalPrice: Scalars['Money']
  /** The sum of all the prices of all the items in the checkout, including duties, taxes, and discounts. */
  totalPriceV2: StorefrontApiMoneyV2
  /**
   * The sum of all the taxes applied to the line items and shipping lines in the checkout.
   * @deprecated Use `totalTaxV2` instead.
   */
  totalTax: Scalars['Money']
  /** The sum of all the taxes applied to the line items and shipping lines in the checkout. */
  totalTaxV2: StorefrontApiMoneyV2
  /** The date and time when the checkout was last updated. */
  updatedAt: Scalars['DateTime']
  /** The url pointing to the checkout accessible from the web. */
  webUrl: Scalars['URL']
}

/** A container for all the information required to checkout items and pay. */
export type StorefrontApiCheckoutDiscountApplicationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A container for all the information required to checkout items and pay. */
export type StorefrontApiCheckoutLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** Specifies the fields required to update a checkout's attributes. */
export type StorefrontApiCheckoutAttributesUpdateInput = {
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of the addresses is still done at completion time. Defaults to `false` with
   * each operation.
   *
   */
  allowPartialAddresses?: InputMaybe<Scalars['Boolean']>
  /** A list of extra information that is added to the checkout. */
  customAttributes?: InputMaybe<Array<StorefrontApiAttributeInput>>
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: InputMaybe<Scalars['String']>
}

/** Return type for `checkoutAttributesUpdate` mutation. */
export interface StorefrontApiCheckoutAttributesUpdatePayload {
  __typename: 'CheckoutAttributesUpdatePayload'
  /** The updated checkout object. */
  checkout: StorefrontApiCheckout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Specifies the fields required to update a checkout's attributes. */
export type StorefrontApiCheckoutAttributesUpdateV2Input = {
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of the addresses is still done at completion time. Defaults to `false` with
   * each operation.
   *
   */
  allowPartialAddresses?: InputMaybe<Scalars['Boolean']>
  /** A list of extra information that is added to the checkout. */
  customAttributes?: InputMaybe<Array<StorefrontApiAttributeInput>>
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: InputMaybe<Scalars['String']>
}

/** Return type for `checkoutAttributesUpdateV2` mutation. */
export interface StorefrontApiCheckoutAttributesUpdateV2Payload {
  __typename: 'CheckoutAttributesUpdateV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** The identity of the customer associated with the checkout. */
export interface StorefrontApiCheckoutBuyerIdentity {
  __typename: 'CheckoutBuyerIdentity'
  /** The country code for the checkout. For example, `CA`. */
  countryCode?: Maybe<StorefrontApiCountryCode>
}

/** Specifies the identity of the customer associated with the checkout. */
export type StorefrontApiCheckoutBuyerIdentityInput = {
  /**
   * The country code of one of the shop's
   * [enabled countries](https://help.shopify.com/en/manual/payments/shopify-payments/multi-currency/setup).
   * For example, `CA`. Including this field creates a checkout in the specified country's currency.
   *
   */
  countryCode: StorefrontApiCountryCode
}

/** Return type for `checkoutCompleteFree` mutation. */
export interface StorefrontApiCheckoutCompleteFreePayload {
  __typename: 'CheckoutCompleteFreePayload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutCompleteWithCreditCard` mutation. */
export interface StorefrontApiCheckoutCompleteWithCreditCardPayload {
  __typename: 'CheckoutCompleteWithCreditCardPayload'
  /** The checkout on which the payment was applied. */
  checkout: StorefrontApiCheckout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<StorefrontApiPayment>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutCompleteWithCreditCardV2` mutation. */
export interface StorefrontApiCheckoutCompleteWithCreditCardV2Payload {
  __typename: 'CheckoutCompleteWithCreditCardV2Payload'
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<StorefrontApiPayment>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutCompleteWithTokenizedPayment` mutation. */
export interface StorefrontApiCheckoutCompleteWithTokenizedPaymentPayload {
  __typename: 'CheckoutCompleteWithTokenizedPaymentPayload'
  /** The checkout on which the payment was applied. */
  checkout: StorefrontApiCheckout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<StorefrontApiPayment>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutCompleteWithTokenizedPaymentV2` mutation. */
export interface StorefrontApiCheckoutCompleteWithTokenizedPaymentV2Payload {
  __typename: 'CheckoutCompleteWithTokenizedPaymentV2Payload'
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<StorefrontApiPayment>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutCompleteWithTokenizedPaymentV3` mutation. */
export interface StorefrontApiCheckoutCompleteWithTokenizedPaymentV3Payload {
  __typename: 'CheckoutCompleteWithTokenizedPaymentV3Payload'
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<StorefrontApiPayment>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Specifies the fields required to create a checkout. */
export type StorefrontApiCheckoutCreateInput = {
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of addresses is still done at completion time. Defaults to `null`.
   *
   */
  allowPartialAddresses?: InputMaybe<Scalars['Boolean']>
  /** The identity of the customer associated with the checkout. */
  buyerIdentity?: InputMaybe<StorefrontApiCheckoutBuyerIdentityInput>
  /** A list of extra information that is added to the checkout. */
  customAttributes?: InputMaybe<Array<StorefrontApiAttributeInput>>
  /** The email with which the customer wants to checkout. */
  email?: InputMaybe<Scalars['String']>
  /** A list of line item objects, each one containing information about an item in the checkout. */
  lineItems?: InputMaybe<Array<StorefrontApiCheckoutLineItemInput>>
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: InputMaybe<Scalars['String']>
  /**
   * The three-letter currency code of one of the shop's enabled presentment currencies.
   * Including this field creates a checkout in the specified currency. By default, new
   * checkouts are created in the shop's primary currency.
   *  This argument is deprecated: Use the `buyerIdentity.countryCode` field instead.
   */
  presentmentCurrencyCode?: InputMaybe<StorefrontApiCurrencyCode>
  /** The shipping address to where the line items will be shipped. */
  shippingAddress?: InputMaybe<StorefrontApiMailingAddressInput>
}

/** Return type for `checkoutCreate` mutation. */
export interface StorefrontApiCheckoutCreatePayload {
  __typename: 'CheckoutCreatePayload'
  /** The new checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /** The checkout queue token. Available only to selected stores. */
  queueToken?: Maybe<Scalars['String']>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutCustomerAssociate` mutation. */
export interface StorefrontApiCheckoutCustomerAssociatePayload {
  __typename: 'CheckoutCustomerAssociatePayload'
  /** The updated checkout object. */
  checkout: StorefrontApiCheckout
  /** The associated customer object. */
  customer?: Maybe<StorefrontApiCustomer>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutCustomerAssociateV2` mutation. */
export interface StorefrontApiCheckoutCustomerAssociateV2Payload {
  __typename: 'CheckoutCustomerAssociateV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /** The associated customer object. */
  customer?: Maybe<StorefrontApiCustomer>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutCustomerDisassociate` mutation. */
export interface StorefrontApiCheckoutCustomerDisassociatePayload {
  __typename: 'CheckoutCustomerDisassociatePayload'
  /** The updated checkout object. */
  checkout: StorefrontApiCheckout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutCustomerDisassociateV2` mutation. */
export interface StorefrontApiCheckoutCustomerDisassociateV2Payload {
  __typename: 'CheckoutCustomerDisassociateV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutDiscountCodeApply` mutation. */
export interface StorefrontApiCheckoutDiscountCodeApplyPayload {
  __typename: 'CheckoutDiscountCodeApplyPayload'
  /** The updated checkout object. */
  checkout: StorefrontApiCheckout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutDiscountCodeApplyV2` mutation. */
export interface StorefrontApiCheckoutDiscountCodeApplyV2Payload {
  __typename: 'CheckoutDiscountCodeApplyV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutDiscountCodeRemove` mutation. */
export interface StorefrontApiCheckoutDiscountCodeRemovePayload {
  __typename: 'CheckoutDiscountCodeRemovePayload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutEmailUpdate` mutation. */
export interface StorefrontApiCheckoutEmailUpdatePayload {
  __typename: 'CheckoutEmailUpdatePayload'
  /** The checkout object with the updated email. */
  checkout: StorefrontApiCheckout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutEmailUpdateV2` mutation. */
export interface StorefrontApiCheckoutEmailUpdateV2Payload {
  __typename: 'CheckoutEmailUpdateV2Payload'
  /** The checkout object with the updated email. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Possible error codes that can be returned by `CheckoutUserError`. */
export enum StorefrontApiCheckoutErrorCode {
  /** Checkout is already completed. */
  AlreadyCompleted = 'ALREADY_COMPLETED',
  /** Input email contains an invalid domain name. */
  BadDomain = 'BAD_DOMAIN',
  /** The input value is blank. */
  Blank = 'BLANK',
  /** Cart does not meet discount requirements notice. */
  CartDoesNotMeetDiscountRequirementsNotice = 'CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE',
  /** Customer already used once per customer discount notice. */
  CustomerAlreadyUsedOncePerCustomerDiscountNotice = 'CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE',
  /** Discount already applied. */
  DiscountAlreadyApplied = 'DISCOUNT_ALREADY_APPLIED',
  /** Discount code isn't working right now. Please contact us for help. */
  DiscountCodeApplicationFailed = 'DISCOUNT_CODE_APPLICATION_FAILED',
  /** Discount disabled. */
  DiscountDisabled = 'DISCOUNT_DISABLED',
  /** Discount expired. */
  DiscountExpired = 'DISCOUNT_EXPIRED',
  /** Discount limit reached. */
  DiscountLimitReached = 'DISCOUNT_LIMIT_REACHED',
  /** Discount not found. */
  DiscountNotFound = 'DISCOUNT_NOT_FOUND',
  /** Checkout is already completed. */
  Empty = 'EMPTY',
  /** Queue token has expired. */
  ExpiredQueueToken = 'EXPIRED_QUEUE_TOKEN',
  /** Gift card has already been applied. */
  GiftCardAlreadyApplied = 'GIFT_CARD_ALREADY_APPLIED',
  /** Gift card code is invalid. */
  GiftCardCodeInvalid = 'GIFT_CARD_CODE_INVALID',
  /** Gift card currency does not match checkout currency. */
  GiftCardCurrencyMismatch = 'GIFT_CARD_CURRENCY_MISMATCH',
  /** Gift card has no funds left. */
  GiftCardDepleted = 'GIFT_CARD_DEPLETED',
  /** Gift card is disabled. */
  GiftCardDisabled = 'GIFT_CARD_DISABLED',
  /** Gift card is expired. */
  GiftCardExpired = 'GIFT_CARD_EXPIRED',
  /** Gift card was not found. */
  GiftCardNotFound = 'GIFT_CARD_NOT_FOUND',
  /** Gift card cannot be applied to a checkout that contains a gift card. */
  GiftCardUnusable = 'GIFT_CARD_UNUSABLE',
  /** The input value should be greater than or equal to the minimum value allowed. */
  GreaterThanOrEqualTo = 'GREATER_THAN_OR_EQUAL_TO',
  /** Higher value discount applied. */
  HigherValueDiscountApplied = 'HIGHER_VALUE_DISCOUNT_APPLIED',
  /** The input value is invalid. */
  Invalid = 'INVALID',
  /** Cannot specify country and presentment currency code. */
  InvalidCountryAndCurrency = 'INVALID_COUNTRY_AND_CURRENCY',
  /** Input Zip is invalid for country provided. */
  InvalidForCountry = 'INVALID_FOR_COUNTRY',
  /** Input Zip is invalid for country and province provided. */
  InvalidForCountryAndProvince = 'INVALID_FOR_COUNTRY_AND_PROVINCE',
  /** Invalid province in country. */
  InvalidProvinceInCountry = 'INVALID_PROVINCE_IN_COUNTRY',
  /** Queue token is invalid. */
  InvalidQueueToken = 'INVALID_QUEUE_TOKEN',
  /** Invalid region in country. */
  InvalidRegionInCountry = 'INVALID_REGION_IN_COUNTRY',
  /** Invalid state in country. */
  InvalidStateInCountry = 'INVALID_STATE_IN_COUNTRY',
  /** The input value should be less than the maximum value allowed. */
  LessThan = 'LESS_THAN',
  /** The input value should be less than or equal to the maximum value allowed. */
  LessThanOrEqualTo = 'LESS_THAN_OR_EQUAL_TO',
  /** Line item was not found in checkout. */
  LineItemNotFound = 'LINE_ITEM_NOT_FOUND',
  /** Checkout is locked. */
  Locked = 'LOCKED',
  /** Maximum number of discount codes limit reached. */
  MaximumDiscountCodeLimitReached = 'MAXIMUM_DISCOUNT_CODE_LIMIT_REACHED',
  /** Missing payment input. */
  MissingPaymentInput = 'MISSING_PAYMENT_INPUT',
  /** Not enough in stock. */
  NotEnoughInStock = 'NOT_ENOUGH_IN_STOCK',
  /** Input value is not supported. */
  NotSupported = 'NOT_SUPPORTED',
  /** The input value needs to be blank. */
  Present = 'PRESENT',
  /** Shipping rate expired. */
  ShippingRateExpired = 'SHIPPING_RATE_EXPIRED',
  /** Throttled during checkout. */
  ThrottledDuringCheckout = 'THROTTLED_DURING_CHECKOUT',
  /** The input value is too long. */
  TooLong = 'TOO_LONG',
  /** The amount of the payment does not match the value to be paid. */
  TotalPriceMismatch = 'TOTAL_PRICE_MISMATCH',
  /** Unable to apply discount. */
  UnableToApply = 'UNABLE_TO_APPLY',
}

/** Return type for `checkoutGiftCardApply` mutation. */
export interface StorefrontApiCheckoutGiftCardApplyPayload {
  __typename: 'CheckoutGiftCardApplyPayload'
  /** The updated checkout object. */
  checkout: StorefrontApiCheckout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutGiftCardRemove` mutation. */
export interface StorefrontApiCheckoutGiftCardRemovePayload {
  __typename: 'CheckoutGiftCardRemovePayload'
  /** The updated checkout object. */
  checkout: StorefrontApiCheckout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutGiftCardRemoveV2` mutation. */
export interface StorefrontApiCheckoutGiftCardRemoveV2Payload {
  __typename: 'CheckoutGiftCardRemoveV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutGiftCardsAppend` mutation. */
export interface StorefrontApiCheckoutGiftCardsAppendPayload {
  __typename: 'CheckoutGiftCardsAppendPayload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** A single line item in the checkout, grouped by variant and attributes. */
export interface StorefrontApiCheckoutLineItem extends StorefrontApiNode {
  __typename: 'CheckoutLineItem'
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes: Array<StorefrontApiAttribute>
  /** The discounts that have been allocated onto the checkout line item by discount applications. */
  discountAllocations: Array<StorefrontApiDiscountAllocation>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The quantity of the line item. */
  quantity: Scalars['Int']
  /** Title of the line item. Defaults to the product's title. */
  title: Scalars['String']
  /** Unit price of the line item. */
  unitPrice?: Maybe<StorefrontApiMoneyV2>
  /** Product variant of the line item. */
  variant?: Maybe<StorefrontApiProductVariant>
}

/**
 * An auto-generated type for paginating through multiple CheckoutLineItems.
 *
 */
export interface StorefrontApiCheckoutLineItemConnection {
  __typename: 'CheckoutLineItemConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiCheckoutLineItemEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one CheckoutLineItem and a cursor during pagination.
 *
 */
export interface StorefrontApiCheckoutLineItemEdge {
  __typename: 'CheckoutLineItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CheckoutLineItemEdge. */
  node: StorefrontApiCheckoutLineItem
}

/** Specifies the input fields to create a line item on a checkout. */
export type StorefrontApiCheckoutLineItemInput = {
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes?: InputMaybe<Array<StorefrontApiAttributeInput>>
  /** The quantity of the line item. */
  quantity: Scalars['Int']
  /** The identifier of the product variant for the line item. */
  variantId: Scalars['ID']
}

/** Specifies the input fields to update a line item on the checkout. */
export type StorefrontApiCheckoutLineItemUpdateInput = {
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes?: InputMaybe<Array<StorefrontApiAttributeInput>>
  /** The identifier of the line item. */
  id?: InputMaybe<Scalars['ID']>
  /** The quantity of the line item. */
  quantity?: InputMaybe<Scalars['Int']>
  /** The variant identifier of the line item. */
  variantId?: InputMaybe<Scalars['ID']>
}

/** Return type for `checkoutLineItemsAdd` mutation. */
export interface StorefrontApiCheckoutLineItemsAddPayload {
  __typename: 'CheckoutLineItemsAddPayload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutLineItemsRemove` mutation. */
export interface StorefrontApiCheckoutLineItemsRemovePayload {
  __typename: 'CheckoutLineItemsRemovePayload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutLineItemsReplace` mutation. */
export interface StorefrontApiCheckoutLineItemsReplacePayload {
  __typename: 'CheckoutLineItemsReplacePayload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<StorefrontApiCheckoutUserError>
}

/** Return type for `checkoutLineItemsUpdate` mutation. */
export interface StorefrontApiCheckoutLineItemsUpdatePayload {
  __typename: 'CheckoutLineItemsUpdatePayload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutShippingAddressUpdate` mutation. */
export interface StorefrontApiCheckoutShippingAddressUpdatePayload {
  __typename: 'CheckoutShippingAddressUpdatePayload'
  /** The updated checkout object. */
  checkout: StorefrontApiCheckout
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutShippingAddressUpdateV2` mutation. */
export interface StorefrontApiCheckoutShippingAddressUpdateV2Payload {
  __typename: 'CheckoutShippingAddressUpdateV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutShippingLineUpdate` mutation. */
export interface StorefrontApiCheckoutShippingLineUpdatePayload {
  __typename: 'CheckoutShippingLineUpdatePayload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** The list of errors that occurred from executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Represents an error that happens during execution of a checkout mutation. */
export interface StorefrontApiCheckoutUserError
  extends StorefrontApiDisplayableError {
  __typename: 'CheckoutUserError'
  /** The error code. */
  code?: Maybe<StorefrontApiCheckoutErrorCode>
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export interface StorefrontApiCollection
  extends StorefrontApiHasMetafields,
    StorefrontApiNode,
    StorefrontApiOnlineStorePublishable {
  __typename: 'Collection'
  /** Stripped description of the collection, single line with HTML tags removed. */
  description: Scalars['String']
  /** The description of the collection, complete with HTML formatting. */
  descriptionHtml: Scalars['HTML']
  /**
   * A human-friendly unique string for the collection automatically generated from its title.
   * Limit of 255 characters.
   *
   */
  handle: Scalars['String']
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** Image associated with the collection. */
  image?: Maybe<StorefrontApiImage>
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<StorefrontApiMetafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: StorefrontApiMetafieldConnection
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>
  /** List of products in the collection. */
  products: StorefrontApiProductConnection
  /** The collection’s name. Limit of 255 characters. */
  title: Scalars['String']
  /** The date and time when the collection was last modified. */
  updatedAt: Scalars['DateTime']
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type StorefrontApiCollectionDescriptionArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type StorefrontApiCollectionImageArgs = {
  crop?: InputMaybe<StorefrontApiCropRegion>
  maxHeight?: InputMaybe<Scalars['Int']>
  maxWidth?: InputMaybe<Scalars['Int']>
  scale?: InputMaybe<Scalars['Int']>
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type StorefrontApiCollectionMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type StorefrontApiCollectionMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. */
export type StorefrontApiCollectionProductsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  filters?: InputMaybe<Array<StorefrontApiProductFilter>>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<StorefrontApiProductCollectionSortKeys>
}

/**
 * An auto-generated type for paginating through multiple Collections.
 *
 */
export interface StorefrontApiCollectionConnection {
  __typename: 'CollectionConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiCollectionEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one Collection and a cursor during pagination.
 *
 */
export interface StorefrontApiCollectionEdge {
  __typename: 'CollectionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CollectionEdge. */
  node: StorefrontApiCollection
}

/** The set of valid sort keys for the Collection query. */
export enum StorefrontApiCollectionSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
}

/** A comment on an article. */
export interface StorefrontApiComment extends StorefrontApiNode {
  __typename: 'Comment'
  /** The comment’s author. */
  author: StorefrontApiCommentAuthor
  /** Stripped content of the comment, single line with HTML tags removed. */
  content: Scalars['String']
  /** The content of the comment, complete with HTML formatting. */
  contentHtml: Scalars['HTML']
  /** A globally-unique identifier. */
  id: Scalars['ID']
}

/** A comment on an article. */
export type StorefrontApiCommentContentArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>
}

/** The author of a comment. */
export interface StorefrontApiCommentAuthor {
  __typename: 'CommentAuthor'
  /** The author's email. */
  email: Scalars['String']
  /** The author’s name. */
  name: Scalars['String']
}

/**
 * An auto-generated type for paginating through multiple Comments.
 *
 */
export interface StorefrontApiCommentConnection {
  __typename: 'CommentConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiCommentEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one Comment and a cursor during pagination.
 *
 */
export interface StorefrontApiCommentEdge {
  __typename: 'CommentEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CommentEdge. */
  node: StorefrontApiComment
}

/** A country. */
export interface StorefrontApiCountry {
  __typename: 'Country'
  /** The currency of the country. */
  currency: StorefrontApiCurrency
  /** The ISO code of the country. */
  isoCode: StorefrontApiCountryCode
  /** The name of the country. */
  name: Scalars['String']
  /** The unit system used in the country. */
  unitSystem: StorefrontApiUnitSystem
}

/**
 * The code designating a country/region, which generally follows ISO 3166-1 alpha-2 guidelines.
 * If a territory doesn't have a country code value in the `CountryCode` enum, then it might be considered a subdivision
 * of another country. For example, the territories associated with Spain are represented by the country code `ES`,
 * and the territories associated with the United States of America are represented by the country code `US`.
 *
 */
export enum StorefrontApiCountryCode {
  /** Ascension Island. */
  Ac = 'AC',
  /** Andorra. */
  Ad = 'AD',
  /** United Arab Emirates. */
  Ae = 'AE',
  /** Afghanistan. */
  Af = 'AF',
  /** Antigua & Barbuda. */
  Ag = 'AG',
  /** Anguilla. */
  Ai = 'AI',
  /** Albania. */
  Al = 'AL',
  /** Armenia. */
  Am = 'AM',
  /** Netherlands Antilles. */
  An = 'AN',
  /** Angola. */
  Ao = 'AO',
  /** Argentina. */
  Ar = 'AR',
  /** Austria. */
  At = 'AT',
  /** Australia. */
  Au = 'AU',
  /** Aruba. */
  Aw = 'AW',
  /** Åland Islands. */
  Ax = 'AX',
  /** Azerbaijan. */
  Az = 'AZ',
  /** Bosnia & Herzegovina. */
  Ba = 'BA',
  /** Barbados. */
  Bb = 'BB',
  /** Bangladesh. */
  Bd = 'BD',
  /** Belgium. */
  Be = 'BE',
  /** Burkina Faso. */
  Bf = 'BF',
  /** Bulgaria. */
  Bg = 'BG',
  /** Bahrain. */
  Bh = 'BH',
  /** Burundi. */
  Bi = 'BI',
  /** Benin. */
  Bj = 'BJ',
  /** St. Barthélemy. */
  Bl = 'BL',
  /** Bermuda. */
  Bm = 'BM',
  /** Brunei. */
  Bn = 'BN',
  /** Bolivia. */
  Bo = 'BO',
  /** Caribbean Netherlands. */
  Bq = 'BQ',
  /** Brazil. */
  Br = 'BR',
  /** Bahamas. */
  Bs = 'BS',
  /** Bhutan. */
  Bt = 'BT',
  /** Bouvet Island. */
  Bv = 'BV',
  /** Botswana. */
  Bw = 'BW',
  /** Belarus. */
  By = 'BY',
  /** Belize. */
  Bz = 'BZ',
  /** Canada. */
  Ca = 'CA',
  /** Cocos (Keeling) Islands. */
  Cc = 'CC',
  /** Congo - Kinshasa. */
  Cd = 'CD',
  /** Central African Republic. */
  Cf = 'CF',
  /** Congo - Brazzaville. */
  Cg = 'CG',
  /** Switzerland. */
  Ch = 'CH',
  /** Côte d’Ivoire. */
  Ci = 'CI',
  /** Cook Islands. */
  Ck = 'CK',
  /** Chile. */
  Cl = 'CL',
  /** Cameroon. */
  Cm = 'CM',
  /** China. */
  Cn = 'CN',
  /** Colombia. */
  Co = 'CO',
  /** Costa Rica. */
  Cr = 'CR',
  /** Cuba. */
  Cu = 'CU',
  /** Cape Verde. */
  Cv = 'CV',
  /** Curaçao. */
  Cw = 'CW',
  /** Christmas Island. */
  Cx = 'CX',
  /** Cyprus. */
  Cy = 'CY',
  /** Czechia. */
  Cz = 'CZ',
  /** Germany. */
  De = 'DE',
  /** Djibouti. */
  Dj = 'DJ',
  /** Denmark. */
  Dk = 'DK',
  /** Dominica. */
  Dm = 'DM',
  /** Dominican Republic. */
  Do = 'DO',
  /** Algeria. */
  Dz = 'DZ',
  /** Ecuador. */
  Ec = 'EC',
  /** Estonia. */
  Ee = 'EE',
  /** Egypt. */
  Eg = 'EG',
  /** Western Sahara. */
  Eh = 'EH',
  /** Eritrea. */
  Er = 'ER',
  /** Spain. */
  Es = 'ES',
  /** Ethiopia. */
  Et = 'ET',
  /** Finland. */
  Fi = 'FI',
  /** Fiji. */
  Fj = 'FJ',
  /** Falkland Islands. */
  Fk = 'FK',
  /** Faroe Islands. */
  Fo = 'FO',
  /** France. */
  Fr = 'FR',
  /** Gabon. */
  Ga = 'GA',
  /** United Kingdom. */
  Gb = 'GB',
  /** Grenada. */
  Gd = 'GD',
  /** Georgia. */
  Ge = 'GE',
  /** French Guiana. */
  Gf = 'GF',
  /** Guernsey. */
  Gg = 'GG',
  /** Ghana. */
  Gh = 'GH',
  /** Gibraltar. */
  Gi = 'GI',
  /** Greenland. */
  Gl = 'GL',
  /** Gambia. */
  Gm = 'GM',
  /** Guinea. */
  Gn = 'GN',
  /** Guadeloupe. */
  Gp = 'GP',
  /** Equatorial Guinea. */
  Gq = 'GQ',
  /** Greece. */
  Gr = 'GR',
  /** South Georgia & South Sandwich Islands. */
  Gs = 'GS',
  /** Guatemala. */
  Gt = 'GT',
  /** Guinea-Bissau. */
  Gw = 'GW',
  /** Guyana. */
  Gy = 'GY',
  /** Hong Kong SAR. */
  Hk = 'HK',
  /** Heard & McDonald Islands. */
  Hm = 'HM',
  /** Honduras. */
  Hn = 'HN',
  /** Croatia. */
  Hr = 'HR',
  /** Haiti. */
  Ht = 'HT',
  /** Hungary. */
  Hu = 'HU',
  /** Indonesia. */
  Id = 'ID',
  /** Ireland. */
  Ie = 'IE',
  /** Israel. */
  Il = 'IL',
  /** Isle of Man. */
  Im = 'IM',
  /** India. */
  In = 'IN',
  /** British Indian Ocean Territory. */
  Io = 'IO',
  /** Iraq. */
  Iq = 'IQ',
  /** Iran. */
  Ir = 'IR',
  /** Iceland. */
  Is = 'IS',
  /** Italy. */
  It = 'IT',
  /** Jersey. */
  Je = 'JE',
  /** Jamaica. */
  Jm = 'JM',
  /** Jordan. */
  Jo = 'JO',
  /** Japan. */
  Jp = 'JP',
  /** Kenya. */
  Ke = 'KE',
  /** Kyrgyzstan. */
  Kg = 'KG',
  /** Cambodia. */
  Kh = 'KH',
  /** Kiribati. */
  Ki = 'KI',
  /** Comoros. */
  Km = 'KM',
  /** St. Kitts & Nevis. */
  Kn = 'KN',
  /** North Korea. */
  Kp = 'KP',
  /** South Korea. */
  Kr = 'KR',
  /** Kuwait. */
  Kw = 'KW',
  /** Cayman Islands. */
  Ky = 'KY',
  /** Kazakhstan. */
  Kz = 'KZ',
  /** Laos. */
  La = 'LA',
  /** Lebanon. */
  Lb = 'LB',
  /** St. Lucia. */
  Lc = 'LC',
  /** Liechtenstein. */
  Li = 'LI',
  /** Sri Lanka. */
  Lk = 'LK',
  /** Liberia. */
  Lr = 'LR',
  /** Lesotho. */
  Ls = 'LS',
  /** Lithuania. */
  Lt = 'LT',
  /** Luxembourg. */
  Lu = 'LU',
  /** Latvia. */
  Lv = 'LV',
  /** Libya. */
  Ly = 'LY',
  /** Morocco. */
  Ma = 'MA',
  /** Monaco. */
  Mc = 'MC',
  /** Moldova. */
  Md = 'MD',
  /** Montenegro. */
  Me = 'ME',
  /** St. Martin. */
  Mf = 'MF',
  /** Madagascar. */
  Mg = 'MG',
  /** North Macedonia. */
  Mk = 'MK',
  /** Mali. */
  Ml = 'ML',
  /** Myanmar (Burma). */
  Mm = 'MM',
  /** Mongolia. */
  Mn = 'MN',
  /** Macao SAR. */
  Mo = 'MO',
  /** Martinique. */
  Mq = 'MQ',
  /** Mauritania. */
  Mr = 'MR',
  /** Montserrat. */
  Ms = 'MS',
  /** Malta. */
  Mt = 'MT',
  /** Mauritius. */
  Mu = 'MU',
  /** Maldives. */
  Mv = 'MV',
  /** Malawi. */
  Mw = 'MW',
  /** Mexico. */
  Mx = 'MX',
  /** Malaysia. */
  My = 'MY',
  /** Mozambique. */
  Mz = 'MZ',
  /** Namibia. */
  Na = 'NA',
  /** New Caledonia. */
  Nc = 'NC',
  /** Niger. */
  Ne = 'NE',
  /** Norfolk Island. */
  Nf = 'NF',
  /** Nigeria. */
  Ng = 'NG',
  /** Nicaragua. */
  Ni = 'NI',
  /** Netherlands. */
  Nl = 'NL',
  /** Norway. */
  No = 'NO',
  /** Nepal. */
  Np = 'NP',
  /** Nauru. */
  Nr = 'NR',
  /** Niue. */
  Nu = 'NU',
  /** New Zealand. */
  Nz = 'NZ',
  /** Oman. */
  Om = 'OM',
  /** Panama. */
  Pa = 'PA',
  /** Peru. */
  Pe = 'PE',
  /** French Polynesia. */
  Pf = 'PF',
  /** Papua New Guinea. */
  Pg = 'PG',
  /** Philippines. */
  Ph = 'PH',
  /** Pakistan. */
  Pk = 'PK',
  /** Poland. */
  Pl = 'PL',
  /** St. Pierre & Miquelon. */
  Pm = 'PM',
  /** Pitcairn Islands. */
  Pn = 'PN',
  /** Palestinian Territories. */
  Ps = 'PS',
  /** Portugal. */
  Pt = 'PT',
  /** Paraguay. */
  Py = 'PY',
  /** Qatar. */
  Qa = 'QA',
  /** Réunion. */
  Re = 'RE',
  /** Romania. */
  Ro = 'RO',
  /** Serbia. */
  Rs = 'RS',
  /** Russia. */
  Ru = 'RU',
  /** Rwanda. */
  Rw = 'RW',
  /** Saudi Arabia. */
  Sa = 'SA',
  /** Solomon Islands. */
  Sb = 'SB',
  /** Seychelles. */
  Sc = 'SC',
  /** Sudan. */
  Sd = 'SD',
  /** Sweden. */
  Se = 'SE',
  /** Singapore. */
  Sg = 'SG',
  /** St. Helena. */
  Sh = 'SH',
  /** Slovenia. */
  Si = 'SI',
  /** Svalbard & Jan Mayen. */
  Sj = 'SJ',
  /** Slovakia. */
  Sk = 'SK',
  /** Sierra Leone. */
  Sl = 'SL',
  /** San Marino. */
  Sm = 'SM',
  /** Senegal. */
  Sn = 'SN',
  /** Somalia. */
  So = 'SO',
  /** Suriname. */
  Sr = 'SR',
  /** South Sudan. */
  Ss = 'SS',
  /** São Tomé & Príncipe. */
  St = 'ST',
  /** El Salvador. */
  Sv = 'SV',
  /** Sint Maarten. */
  Sx = 'SX',
  /** Syria. */
  Sy = 'SY',
  /** Eswatini. */
  Sz = 'SZ',
  /** Tristan da Cunha. */
  Ta = 'TA',
  /** Turks & Caicos Islands. */
  Tc = 'TC',
  /** Chad. */
  Td = 'TD',
  /** French Southern Territories. */
  Tf = 'TF',
  /** Togo. */
  Tg = 'TG',
  /** Thailand. */
  Th = 'TH',
  /** Tajikistan. */
  Tj = 'TJ',
  /** Tokelau. */
  Tk = 'TK',
  /** Timor-Leste. */
  Tl = 'TL',
  /** Turkmenistan. */
  Tm = 'TM',
  /** Tunisia. */
  Tn = 'TN',
  /** Tonga. */
  To = 'TO',
  /** Turkey. */
  Tr = 'TR',
  /** Trinidad & Tobago. */
  Tt = 'TT',
  /** Tuvalu. */
  Tv = 'TV',
  /** Taiwan. */
  Tw = 'TW',
  /** Tanzania. */
  Tz = 'TZ',
  /** Ukraine. */
  Ua = 'UA',
  /** Uganda. */
  Ug = 'UG',
  /** U.S. Outlying Islands. */
  Um = 'UM',
  /** United States. */
  Us = 'US',
  /** Uruguay. */
  Uy = 'UY',
  /** Uzbekistan. */
  Uz = 'UZ',
  /** Vatican City. */
  Va = 'VA',
  /** St. Vincent & Grenadines. */
  Vc = 'VC',
  /** Venezuela. */
  Ve = 'VE',
  /** British Virgin Islands. */
  Vg = 'VG',
  /** Vietnam. */
  Vn = 'VN',
  /** Vanuatu. */
  Vu = 'VU',
  /** Wallis & Futuna. */
  Wf = 'WF',
  /** Samoa. */
  Ws = 'WS',
  /** Kosovo. */
  Xk = 'XK',
  /** Yemen. */
  Ye = 'YE',
  /** Mayotte. */
  Yt = 'YT',
  /** South Africa. */
  Za = 'ZA',
  /** Zambia. */
  Zm = 'ZM',
  /** Zimbabwe. */
  Zw = 'ZW',
  /** Unknown Region. */
  Zz = 'ZZ',
}

/** Credit card information used for a payment. */
export interface StorefrontApiCreditCard {
  __typename: 'CreditCard'
  /** The brand of the credit card. */
  brand?: Maybe<Scalars['String']>
  /** The expiry month of the credit card. */
  expiryMonth?: Maybe<Scalars['Int']>
  /** The expiry year of the credit card. */
  expiryYear?: Maybe<Scalars['Int']>
  /** The credit card's BIN number. */
  firstDigits?: Maybe<Scalars['String']>
  /** The first name of the card holder. */
  firstName?: Maybe<Scalars['String']>
  /** The last 4 digits of the credit card. */
  lastDigits?: Maybe<Scalars['String']>
  /** The last name of the card holder. */
  lastName?: Maybe<Scalars['String']>
  /** The masked credit card number with only the last 4 digits displayed. */
  maskedNumber?: Maybe<Scalars['String']>
}

/**
 * Specifies the fields required to complete a checkout with
 * a Shopify vaulted credit card payment.
 *
 */
export type StorefrontApiCreditCardPaymentInput = {
  /** The amount of the payment. */
  amount: Scalars['Money']
  /** The billing address for the payment. */
  billingAddress: StorefrontApiMailingAddressInput
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String']
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>
  /** The ID returned by Shopify's Card Vault. */
  vaultId: Scalars['String']
}

/**
 * Specifies the fields required to complete a checkout with
 * a Shopify vaulted credit card payment.
 *
 */
export type StorefrontApiCreditCardPaymentInputV2 = {
  /** The billing address for the payment. */
  billingAddress: StorefrontApiMailingAddressInput
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String']
  /** The amount and currency of the payment. */
  paymentAmount: StorefrontApiMoneyInput
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>
  /** The ID returned by Shopify's Card Vault. */
  vaultId: Scalars['String']
}

/** The part of the image that should remain after cropping. */
export enum StorefrontApiCropRegion {
  /** Keep the bottom of the image. */
  Bottom = 'BOTTOM',
  /** Keep the center of the image. */
  Center = 'CENTER',
  /** Keep the left of the image. */
  Left = 'LEFT',
  /** Keep the right of the image. */
  Right = 'RIGHT',
  /** Keep the top of the image. */
  Top = 'TOP',
}

/** A currency. */
export interface StorefrontApiCurrency {
  __typename: 'Currency'
  /** The ISO code of the currency. */
  isoCode: StorefrontApiCurrencyCode
  /** The name of the currency. */
  name: Scalars['String']
  /** The symbol of the currency. */
  symbol: Scalars['String']
}

/**
 * The three-letter currency codes that represent the world currencies used in stores. These include standard ISO 4217 codes, legacy codes,
 * and non-standard codes.
 *
 */
export enum StorefrontApiCurrencyCode {
  /** United Arab Emirates Dirham (AED). */
  Aed = 'AED',
  /** Afghan Afghani (AFN). */
  Afn = 'AFN',
  /** Albanian Lek (ALL). */
  All = 'ALL',
  /** Armenian Dram (AMD). */
  Amd = 'AMD',
  /** Netherlands Antillean Guilder. */
  Ang = 'ANG',
  /** Angolan Kwanza (AOA). */
  Aoa = 'AOA',
  /** Argentine Pesos (ARS). */
  Ars = 'ARS',
  /** Australian Dollars (AUD). */
  Aud = 'AUD',
  /** Aruban Florin (AWG). */
  Awg = 'AWG',
  /** Azerbaijani Manat (AZN). */
  Azn = 'AZN',
  /** Bosnia and Herzegovina Convertible Mark (BAM). */
  Bam = 'BAM',
  /** Barbadian Dollar (BBD). */
  Bbd = 'BBD',
  /** Bangladesh Taka (BDT). */
  Bdt = 'BDT',
  /** Bulgarian Lev (BGN). */
  Bgn = 'BGN',
  /** Bahraini Dinar (BHD). */
  Bhd = 'BHD',
  /** Burundian Franc (BIF). */
  Bif = 'BIF',
  /** Bermudian Dollar (BMD). */
  Bmd = 'BMD',
  /** Brunei Dollar (BND). */
  Bnd = 'BND',
  /** Bolivian Boliviano (BOB). */
  Bob = 'BOB',
  /** Brazilian Real (BRL). */
  Brl = 'BRL',
  /** Bahamian Dollar (BSD). */
  Bsd = 'BSD',
  /** Bhutanese Ngultrum (BTN). */
  Btn = 'BTN',
  /** Botswana Pula (BWP). */
  Bwp = 'BWP',
  /** Belarusian Ruble (BYN). */
  Byn = 'BYN',
  /**
   * Belarusian Ruble (BYR).
   * @deprecated `BYR` is deprecated. Use `BYN` available from version `2021-01` onwards instead.
   */
  Byr = 'BYR',
  /** Belize Dollar (BZD). */
  Bzd = 'BZD',
  /** Canadian Dollars (CAD). */
  Cad = 'CAD',
  /** Congolese franc (CDF). */
  Cdf = 'CDF',
  /** Swiss Francs (CHF). */
  Chf = 'CHF',
  /** Chilean Peso (CLP). */
  Clp = 'CLP',
  /** Chinese Yuan Renminbi (CNY). */
  Cny = 'CNY',
  /** Colombian Peso (COP). */
  Cop = 'COP',
  /** Costa Rican Colones (CRC). */
  Crc = 'CRC',
  /** Cape Verdean escudo (CVE). */
  Cve = 'CVE',
  /** Czech Koruny (CZK). */
  Czk = 'CZK',
  /** Djiboutian Franc (DJF). */
  Djf = 'DJF',
  /** Danish Kroner (DKK). */
  Dkk = 'DKK',
  /** Dominican Peso (DOP). */
  Dop = 'DOP',
  /** Algerian Dinar (DZD). */
  Dzd = 'DZD',
  /** Egyptian Pound (EGP). */
  Egp = 'EGP',
  /** Eritrean Nakfa (ERN). */
  Ern = 'ERN',
  /** Ethiopian Birr (ETB). */
  Etb = 'ETB',
  /** Euro (EUR). */
  Eur = 'EUR',
  /** Fijian Dollars (FJD). */
  Fjd = 'FJD',
  /** Falkland Islands Pounds (FKP). */
  Fkp = 'FKP',
  /** United Kingdom Pounds (GBP). */
  Gbp = 'GBP',
  /** Georgian Lari (GEL). */
  Gel = 'GEL',
  /** Ghanaian Cedi (GHS). */
  Ghs = 'GHS',
  /** Gibraltar Pounds (GIP). */
  Gip = 'GIP',
  /** Gambian Dalasi (GMD). */
  Gmd = 'GMD',
  /** Guinean Franc (GNF). */
  Gnf = 'GNF',
  /** Guatemalan Quetzal (GTQ). */
  Gtq = 'GTQ',
  /** Guyanese Dollar (GYD). */
  Gyd = 'GYD',
  /** Hong Kong Dollars (HKD). */
  Hkd = 'HKD',
  /** Honduran Lempira (HNL). */
  Hnl = 'HNL',
  /** Croatian Kuna (HRK). */
  Hrk = 'HRK',
  /** Haitian Gourde (HTG). */
  Htg = 'HTG',
  /** Hungarian Forint (HUF). */
  Huf = 'HUF',
  /** Indonesian Rupiah (IDR). */
  Idr = 'IDR',
  /** Israeli New Shekel (NIS). */
  Ils = 'ILS',
  /** Indian Rupees (INR). */
  Inr = 'INR',
  /** Iraqi Dinar (IQD). */
  Iqd = 'IQD',
  /** Iranian Rial (IRR). */
  Irr = 'IRR',
  /** Icelandic Kronur (ISK). */
  Isk = 'ISK',
  /** Jersey Pound. */
  Jep = 'JEP',
  /** Jamaican Dollars (JMD). */
  Jmd = 'JMD',
  /** Jordanian Dinar (JOD). */
  Jod = 'JOD',
  /** Japanese Yen (JPY). */
  Jpy = 'JPY',
  /** Kenyan Shilling (KES). */
  Kes = 'KES',
  /** Kyrgyzstani Som (KGS). */
  Kgs = 'KGS',
  /** Cambodian Riel. */
  Khr = 'KHR',
  /** Kiribati Dollar (KID). */
  Kid = 'KID',
  /** Comorian Franc (KMF). */
  Kmf = 'KMF',
  /** South Korean Won (KRW). */
  Krw = 'KRW',
  /** Kuwaiti Dinar (KWD). */
  Kwd = 'KWD',
  /** Cayman Dollars (KYD). */
  Kyd = 'KYD',
  /** Kazakhstani Tenge (KZT). */
  Kzt = 'KZT',
  /** Laotian Kip (LAK). */
  Lak = 'LAK',
  /** Lebanese Pounds (LBP). */
  Lbp = 'LBP',
  /** Sri Lankan Rupees (LKR). */
  Lkr = 'LKR',
  /** Liberian Dollar (LRD). */
  Lrd = 'LRD',
  /** Lesotho Loti (LSL). */
  Lsl = 'LSL',
  /** Lithuanian Litai (LTL). */
  Ltl = 'LTL',
  /** Latvian Lati (LVL). */
  Lvl = 'LVL',
  /** Libyan Dinar (LYD). */
  Lyd = 'LYD',
  /** Moroccan Dirham. */
  Mad = 'MAD',
  /** Moldovan Leu (MDL). */
  Mdl = 'MDL',
  /** Malagasy Ariary (MGA). */
  Mga = 'MGA',
  /** Macedonia Denar (MKD). */
  Mkd = 'MKD',
  /** Burmese Kyat (MMK). */
  Mmk = 'MMK',
  /** Mongolian Tugrik. */
  Mnt = 'MNT',
  /** Macanese Pataca (MOP). */
  Mop = 'MOP',
  /** Mauritanian Ouguiya (MRU). */
  Mru = 'MRU',
  /** Mauritian Rupee (MUR). */
  Mur = 'MUR',
  /** Maldivian Rufiyaa (MVR). */
  Mvr = 'MVR',
  /** Malawian Kwacha (MWK). */
  Mwk = 'MWK',
  /** Mexican Pesos (MXN). */
  Mxn = 'MXN',
  /** Malaysian Ringgits (MYR). */
  Myr = 'MYR',
  /** Mozambican Metical. */
  Mzn = 'MZN',
  /** Namibian Dollar. */
  Nad = 'NAD',
  /** Nigerian Naira (NGN). */
  Ngn = 'NGN',
  /** Nicaraguan Córdoba (NIO). */
  Nio = 'NIO',
  /** Norwegian Kroner (NOK). */
  Nok = 'NOK',
  /** Nepalese Rupee (NPR). */
  Npr = 'NPR',
  /** New Zealand Dollars (NZD). */
  Nzd = 'NZD',
  /** Omani Rial (OMR). */
  Omr = 'OMR',
  /** Panamian Balboa (PAB). */
  Pab = 'PAB',
  /** Peruvian Nuevo Sol (PEN). */
  Pen = 'PEN',
  /** Papua New Guinean Kina (PGK). */
  Pgk = 'PGK',
  /** Philippine Peso (PHP). */
  Php = 'PHP',
  /** Pakistani Rupee (PKR). */
  Pkr = 'PKR',
  /** Polish Zlotych (PLN). */
  Pln = 'PLN',
  /** Paraguayan Guarani (PYG). */
  Pyg = 'PYG',
  /** Qatari Rial (QAR). */
  Qar = 'QAR',
  /** Romanian Lei (RON). */
  Ron = 'RON',
  /** Serbian dinar (RSD). */
  Rsd = 'RSD',
  /** Russian Rubles (RUB). */
  Rub = 'RUB',
  /** Rwandan Franc (RWF). */
  Rwf = 'RWF',
  /** Saudi Riyal (SAR). */
  Sar = 'SAR',
  /** Solomon Islands Dollar (SBD). */
  Sbd = 'SBD',
  /** Seychellois Rupee (SCR). */
  Scr = 'SCR',
  /** Sudanese Pound (SDG). */
  Sdg = 'SDG',
  /** Swedish Kronor (SEK). */
  Sek = 'SEK',
  /** Singapore Dollars (SGD). */
  Sgd = 'SGD',
  /** Saint Helena Pounds (SHP). */
  Shp = 'SHP',
  /** Sierra Leonean Leone (SLL). */
  Sll = 'SLL',
  /** Somali Shilling (SOS). */
  Sos = 'SOS',
  /** Surinamese Dollar (SRD). */
  Srd = 'SRD',
  /** South Sudanese Pound (SSP). */
  Ssp = 'SSP',
  /**
   * Sao Tome And Principe Dobra (STD).
   * @deprecated `STD` is deprecated. Use `STN` available from version `2022-07` onwards instead.
   */
  Std = 'STD',
  /** Syrian Pound (SYP). */
  Syp = 'SYP',
  /** Swazi Lilangeni (SZL). */
  Szl = 'SZL',
  /** Thai baht (THB). */
  Thb = 'THB',
  /** Tajikistani Somoni (TJS). */
  Tjs = 'TJS',
  /** Turkmenistani Manat (TMT). */
  Tmt = 'TMT',
  /** Tunisian Dinar (TND). */
  Tnd = 'TND',
  /** Tongan Pa'anga (TOP). */
  Top = 'TOP',
  /** Turkish Lira (TRY). */
  Try = 'TRY',
  /** Trinidad and Tobago Dollars (TTD). */
  Ttd = 'TTD',
  /** Taiwan Dollars (TWD). */
  Twd = 'TWD',
  /** Tanzanian Shilling (TZS). */
  Tzs = 'TZS',
  /** Ukrainian Hryvnia (UAH). */
  Uah = 'UAH',
  /** Ugandan Shilling (UGX). */
  Ugx = 'UGX',
  /** United States Dollars (USD). */
  Usd = 'USD',
  /** Uruguayan Pesos (UYU). */
  Uyu = 'UYU',
  /** Uzbekistan som (UZS). */
  Uzs = 'UZS',
  /**
   * Venezuelan Bolivares (VEF).
   * @deprecated `VEF` is deprecated. Use `VES` available from version `2020-10` onwards instead.
   */
  Vef = 'VEF',
  /** Venezuelan Bolivares (VES). */
  Ves = 'VES',
  /** Vietnamese đồng (VND). */
  Vnd = 'VND',
  /** Vanuatu Vatu (VUV). */
  Vuv = 'VUV',
  /** Samoan Tala (WST). */
  Wst = 'WST',
  /** Central African CFA Franc (XAF). */
  Xaf = 'XAF',
  /** East Caribbean Dollar (XCD). */
  Xcd = 'XCD',
  /** West African CFA franc (XOF). */
  Xof = 'XOF',
  /** CFP Franc (XPF). */
  Xpf = 'XPF',
  /** Unrecognized currency. */
  Xxx = 'XXX',
  /** Yemeni Rial (YER). */
  Yer = 'YER',
  /** South African Rand (ZAR). */
  Zar = 'ZAR',
  /** Zambian Kwacha (ZMW). */
  Zmw = 'ZMW',
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export interface StorefrontApiCustomer extends StorefrontApiHasMetafields {
  __typename: 'Customer'
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing: Scalars['Boolean']
  /** A list of addresses for the customer. */
  addresses: StorefrontApiMailingAddressConnection
  /** The date and time when the customer was created. */
  createdAt: Scalars['DateTime']
  /** The customer’s default address. */
  defaultAddress?: Maybe<StorefrontApiMailingAddress>
  /** The customer’s name, email or phone number. */
  displayName: Scalars['String']
  /** The customer’s email address. */
  email?: Maybe<Scalars['String']>
  /** The customer’s first name. */
  firstName?: Maybe<Scalars['String']>
  /** A unique identifier for the customer. */
  id: Scalars['ID']
  /** The customer's most recently updated, incomplete checkout. */
  lastIncompleteCheckout?: Maybe<StorefrontApiCheckout>
  /** The customer’s last name. */
  lastName?: Maybe<Scalars['String']>
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<StorefrontApiMetafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: StorefrontApiMetafieldConnection
  /** The orders associated with the customer. */
  orders: StorefrontApiOrderConnection
  /** The customer’s phone number. */
  phone?: Maybe<Scalars['String']>
  /**
   * A comma separated list of tags that have been added to the customer.
   * Additional access scope required: unauthenticated_read_customer_tags.
   *
   */
  tags: Array<Scalars['String']>
  /** The date and time when the customer information was updated. */
  updatedAt: Scalars['DateTime']
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type StorefrontApiCustomerAddressesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type StorefrontApiCustomerMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type StorefrontApiCustomerMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
export type StorefrontApiCustomerOrdersArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<StorefrontApiOrderSortKeys>
}

/** A CustomerAccessToken represents the unique token required to make modifications to the customer object. */
export interface StorefrontApiCustomerAccessToken {
  __typename: 'CustomerAccessToken'
  /** The customer’s access token. */
  accessToken: Scalars['String']
  /** The date and time when the customer access token expires. */
  expiresAt: Scalars['DateTime']
}

/** Specifies the input fields required to create a customer access token. */
export type StorefrontApiCustomerAccessTokenCreateInput = {
  /** The email associated to the customer. */
  email: Scalars['String']
  /** The login password to be used by the customer. */
  password: Scalars['String']
}

/** Return type for `customerAccessTokenCreate` mutation. */
export interface StorefrontApiCustomerAccessTokenCreatePayload {
  __typename: 'CustomerAccessTokenCreatePayload'
  /** The newly created customer access token object. */
  customerAccessToken?: Maybe<StorefrontApiCustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `customerAccessTokenCreateWithMultipass` mutation. */
export interface StorefrontApiCustomerAccessTokenCreateWithMultipassPayload {
  __typename: 'CustomerAccessTokenCreateWithMultipassPayload'
  /** An access token object associated with the customer. */
  customerAccessToken?: Maybe<StorefrontApiCustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
}

/** Return type for `customerAccessTokenDelete` mutation. */
export interface StorefrontApiCustomerAccessTokenDeletePayload {
  __typename: 'CustomerAccessTokenDeletePayload'
  /** The destroyed access token. */
  deletedAccessToken?: Maybe<Scalars['String']>
  /** ID of the destroyed customer access token. */
  deletedCustomerAccessTokenId?: Maybe<Scalars['String']>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `customerAccessTokenRenew` mutation. */
export interface StorefrontApiCustomerAccessTokenRenewPayload {
  __typename: 'CustomerAccessTokenRenewPayload'
  /** The renewed customer access token object. */
  customerAccessToken?: Maybe<StorefrontApiCustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `customerActivateByUrl` mutation. */
export interface StorefrontApiCustomerActivateByUrlPayload {
  __typename: 'CustomerActivateByUrlPayload'
  /** The customer that was activated. */
  customer?: Maybe<StorefrontApiCustomer>
  /** A new customer access token for the customer. */
  customerAccessToken?: Maybe<StorefrontApiCustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
}

/** Specifies the input fields required to activate a customer. */
export type StorefrontApiCustomerActivateInput = {
  /** The activation token required to activate the customer. */
  activationToken: Scalars['String']
  /** New password that will be set during activation. */
  password: Scalars['String']
}

/** Return type for `customerActivate` mutation. */
export interface StorefrontApiCustomerActivatePayload {
  __typename: 'CustomerActivatePayload'
  /** The customer object. */
  customer?: Maybe<StorefrontApiCustomer>
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<StorefrontApiCustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `customerAddressCreate` mutation. */
export interface StorefrontApiCustomerAddressCreatePayload {
  __typename: 'CustomerAddressCreatePayload'
  /** The new customer address object. */
  customerAddress?: Maybe<StorefrontApiMailingAddress>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `customerAddressDelete` mutation. */
export interface StorefrontApiCustomerAddressDeletePayload {
  __typename: 'CustomerAddressDeletePayload'
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /** ID of the deleted customer address. */
  deletedCustomerAddressId?: Maybe<Scalars['String']>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `customerAddressUpdate` mutation. */
export interface StorefrontApiCustomerAddressUpdatePayload {
  __typename: 'CustomerAddressUpdatePayload'
  /** The customer’s updated mailing address. */
  customerAddress?: Maybe<StorefrontApiMailingAddress>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** The fields required to create a new customer. */
export type StorefrontApiCustomerCreateInput = {
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: InputMaybe<Scalars['Boolean']>
  /** The customer’s email. */
  email: Scalars['String']
  /** The customer’s first name. */
  firstName?: InputMaybe<Scalars['String']>
  /** The customer’s last name. */
  lastName?: InputMaybe<Scalars['String']>
  /** The login password used by the customer. */
  password: Scalars['String']
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: InputMaybe<Scalars['String']>
}

/** Return type for `customerCreate` mutation. */
export interface StorefrontApiCustomerCreatePayload {
  __typename: 'CustomerCreatePayload'
  /** The created customer object. */
  customer?: Maybe<StorefrontApiCustomer>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `customerDefaultAddressUpdate` mutation. */
export interface StorefrontApiCustomerDefaultAddressUpdatePayload {
  __typename: 'CustomerDefaultAddressUpdatePayload'
  /** The updated customer object. */
  customer?: Maybe<StorefrontApiCustomer>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Possible error codes that can be returned by `CustomerUserError`. */
export enum StorefrontApiCustomerErrorCode {
  /** Customer already enabled. */
  AlreadyEnabled = 'ALREADY_ENABLED',
  /** Input email contains an invalid domain name. */
  BadDomain = 'BAD_DOMAIN',
  /** The input value is blank. */
  Blank = 'BLANK',
  /** Input contains HTML tags. */
  ContainsHtmlTags = 'CONTAINS_HTML_TAGS',
  /** Input contains URL. */
  ContainsUrl = 'CONTAINS_URL',
  /** Customer is disabled. */
  CustomerDisabled = 'CUSTOMER_DISABLED',
  /** The input value is invalid. */
  Invalid = 'INVALID',
  /** Multipass token is not valid. */
  InvalidMultipassRequest = 'INVALID_MULTIPASS_REQUEST',
  /** Address does not exist. */
  NotFound = 'NOT_FOUND',
  /** Input password starts or ends with whitespace. */
  PasswordStartsOrEndsWithWhitespace = 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE',
  /** The input value is already taken. */
  Taken = 'TAKEN',
  /** Invalid activation token. */
  TokenInvalid = 'TOKEN_INVALID',
  /** The input value is too long. */
  TooLong = 'TOO_LONG',
  /** The input value is too short. */
  TooShort = 'TOO_SHORT',
  /** Unidentified customer. */
  UnidentifiedCustomer = 'UNIDENTIFIED_CUSTOMER',
}

/** Return type for `customerRecover` mutation. */
export interface StorefrontApiCustomerRecoverPayload {
  __typename: 'CustomerRecoverPayload'
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `customerResetByUrl` mutation. */
export interface StorefrontApiCustomerResetByUrlPayload {
  __typename: 'CustomerResetByUrlPayload'
  /** The customer object which was reset. */
  customer?: Maybe<StorefrontApiCustomer>
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<StorefrontApiCustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Specifies the fields required to reset a customer’s password. */
export type StorefrontApiCustomerResetInput = {
  /** New password that will be set as part of the reset password process. */
  password: Scalars['String']
  /** The reset token required to reset the customer’s password. */
  resetToken: Scalars['String']
}

/** Return type for `customerReset` mutation. */
export interface StorefrontApiCustomerResetPayload {
  __typename: 'CustomerResetPayload'
  /** The customer object which was reset. */
  customer?: Maybe<StorefrontApiCustomer>
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<StorefrontApiCustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Specifies the fields required to update the Customer information. */
export type StorefrontApiCustomerUpdateInput = {
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: InputMaybe<Scalars['Boolean']>
  /** The customer’s email. */
  email?: InputMaybe<Scalars['String']>
  /** The customer’s first name. */
  firstName?: InputMaybe<Scalars['String']>
  /** The customer’s last name. */
  lastName?: InputMaybe<Scalars['String']>
  /** The login password used by the customer. */
  password?: InputMaybe<Scalars['String']>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_. To remove the phone number, specify `null`.
   *
   */
  phone?: InputMaybe<Scalars['String']>
}

/** Return type for `customerUpdate` mutation. */
export interface StorefrontApiCustomerUpdatePayload {
  __typename: 'CustomerUpdatePayload'
  /** The updated customer object. */
  customer?: Maybe<StorefrontApiCustomer>
  /**
   * The newly created customer access token. If the customer's password is updated, all previous access tokens
   * (including the one used to perform this mutation) become invalid, and a new token is generated.
   *
   */
  customerAccessToken?: Maybe<StorefrontApiCustomerAccessToken>
  /** The list of errors that occurred from executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /**
   * The list of errors that occurred from executing the mutation.
   * @deprecated Use `customerUserErrors` instead.
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Represents an error that happens during execution of a customer mutation. */
export interface StorefrontApiCustomerUserError
  extends StorefrontApiDisplayableError {
  __typename: 'CustomerUserError'
  /** The error code. */
  code?: Maybe<StorefrontApiCustomerErrorCode>
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
export enum StorefrontApiDigitalWallet {
  /** Android Pay. */
  AndroidPay = 'ANDROID_PAY',
  /** Apple Pay. */
  ApplePay = 'APPLE_PAY',
  /** Google Pay. */
  GooglePay = 'GOOGLE_PAY',
  /** Shopify Pay. */
  ShopifyPay = 'SHOPIFY_PAY',
}

/**
 * An amount discounting the line that has been allocated by a discount.
 *
 */
export interface StorefrontApiDiscountAllocation {
  __typename: 'DiscountAllocation'
  /** Amount of discount allocated. */
  allocatedAmount: StorefrontApiMoneyV2
  /** The discount this allocated amount originated from. */
  discountApplication: StorefrontApiDiscountApplication
}

/**
 * Discount applications capture the intentions of a discount source at
 * the time of application.
 *
 */
export type StorefrontApiDiscountApplication = {
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: StorefrontApiDiscountApplicationAllocationMethod
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: StorefrontApiDiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: StorefrontApiDiscountApplicationTargetType
  /** The value of the discount application. */
  value: StorefrontApiPricingValue
}

/** The method by which the discount's value is allocated onto its entitled lines. */
export enum StorefrontApiDiscountApplicationAllocationMethod {
  /** The value is spread across all entitled lines. */
  Across = 'ACROSS',
  /** The value is applied onto every entitled line. */
  Each = 'EACH',
  /**
   * The value is specifically applied onto a particular line.
   * @deprecated Use ACROSS instead.
   */
  One = 'ONE',
}

/**
 * An auto-generated type for paginating through multiple DiscountApplications.
 *
 */
export interface StorefrontApiDiscountApplicationConnection {
  __typename: 'DiscountApplicationConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiDiscountApplicationEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one DiscountApplication and a cursor during pagination.
 *
 */
export interface StorefrontApiDiscountApplicationEdge {
  __typename: 'DiscountApplicationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of DiscountApplicationEdge. */
  node: StorefrontApiDiscountApplication
}

/**
 * The lines on the order to which the discount is applied, of the type defined by
 * the discount application's `targetType`. For example, the value `ENTITLED`, combined with a `targetType` of
 * `LINE_ITEM`, applies the discount on all line items that are entitled to the discount.
 * The value `ALL`, combined with a `targetType` of `SHIPPING_LINE`, applies the discount on all shipping lines.
 *
 */
export enum StorefrontApiDiscountApplicationTargetSelection {
  /** The discount is allocated onto all the lines. */
  All = 'ALL',
  /** The discount is allocated onto only the lines that it's entitled for. */
  Entitled = 'ENTITLED',
  /** The discount is allocated onto explicitly chosen lines. */
  Explicit = 'EXPLICIT',
}

/**
 * The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards.
 *
 */
export enum StorefrontApiDiscountApplicationTargetType {
  /** The discount applies onto line items. */
  LineItem = 'LINE_ITEM',
  /** The discount applies onto shipping lines. */
  ShippingLine = 'SHIPPING_LINE',
}

/**
 * Discount code applications capture the intentions of a discount code at
 * the time that it is applied.
 *
 */
export interface StorefrontApiDiscountCodeApplication
  extends StorefrontApiDiscountApplication {
  __typename: 'DiscountCodeApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: StorefrontApiDiscountApplicationAllocationMethod
  /** Specifies whether the discount code was applied successfully. */
  applicable: Scalars['Boolean']
  /** The string identifying the discount code that was used at the time of application. */
  code: Scalars['String']
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: StorefrontApiDiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: StorefrontApiDiscountApplicationTargetType
  /** The value of the discount application. */
  value: StorefrontApiPricingValue
}

/** Represents an error in the input of a mutation. */
export type StorefrontApiDisplayableError = {
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** Represents a web address. */
export interface StorefrontApiDomain {
  __typename: 'Domain'
  /** The host name of the domain (eg: `example.com`). */
  host: Scalars['String']
  /** Whether SSL is enabled or not. */
  sslEnabled: Scalars['Boolean']
  /** The URL of the domain (eg: `https://example.com`). */
  url: Scalars['URL']
}

/** Represents a video hosted outside of Shopify. */
export interface StorefrontApiExternalVideo
  extends StorefrontApiMedia,
    StorefrontApiNode {
  __typename: 'ExternalVideo'
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>
  /**
   * The URL.
   * @deprecated Use `originUrl` instead.
   */
  embeddedUrl: Scalars['URL']
  /** The host of the external video. */
  host: StorefrontApiMediaHost
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The media content type. */
  mediaContentType: StorefrontApiMediaContentType
  /** The preview image for the media. */
  previewImage?: Maybe<StorefrontApiImage>
}

/** A filter that is supported on the parent field. */
export interface StorefrontApiFilter {
  __typename: 'Filter'
  /** A unique identifier. */
  id: Scalars['String']
  /** A human-friendly string for this filter. */
  label: Scalars['String']
  /** An enumeration that denotes the type of data this filter represents. */
  type: StorefrontApiFilterType
  /** The list of values for this filter. */
  values: Array<StorefrontApiFilterValue>
}

/**
 * The type of data that the filter group represents.
 *
 * For more information, refer to [Filter products in a collection with the Storefront API]
 * (https://shopify.dev/custom-storefronts/products-collections/filter-products).
 *
 */
export enum StorefrontApiFilterType {
  /** A list of selectable values. */
  List = 'LIST',
  /** A range of prices. */
  PriceRange = 'PRICE_RANGE',
}

/** A selectable value within a filter. */
export interface StorefrontApiFilterValue {
  __typename: 'FilterValue'
  /** The number of results that match this filter value. */
  count: Scalars['Int']
  /** A unique identifier. */
  id: Scalars['String']
  /**
   * An input object that can be used to filter by this value on the parent field.
   *
   * The value is provided as a helper for building dynamic filtering UI. For example, if you have a list of selected `FilterValue` objects, you can combine their respective `input` values to use in a subsequent query.
   *
   */
  input: Scalars['JSON']
  /** A human-friendly string for this filter value. */
  label: Scalars['String']
}

/** Represents a single fulfillment in an order. */
export interface StorefrontApiFulfillment {
  __typename: 'Fulfillment'
  /** List of the fulfillment's line items. */
  fulfillmentLineItems: StorefrontApiFulfillmentLineItemConnection
  /** The name of the tracking company. */
  trackingCompany?: Maybe<Scalars['String']>
  /**
   * Tracking information associated with the fulfillment,
   * such as the tracking number and tracking URL.
   *
   */
  trackingInfo: Array<StorefrontApiFulfillmentTrackingInfo>
}

/** Represents a single fulfillment in an order. */
export type StorefrontApiFulfillmentFulfillmentLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** Represents a single fulfillment in an order. */
export type StorefrontApiFulfillmentTrackingInfoArgs = {
  first?: InputMaybe<Scalars['Int']>
}

/** Represents a single line item in a fulfillment. There is at most one fulfillment line item for each order line item. */
export interface StorefrontApiFulfillmentLineItem {
  __typename: 'FulfillmentLineItem'
  /** The associated order's line item. */
  lineItem: StorefrontApiOrderLineItem
  /** The amount fulfilled in this fulfillment. */
  quantity: Scalars['Int']
}

/**
 * An auto-generated type for paginating through multiple FulfillmentLineItems.
 *
 */
export interface StorefrontApiFulfillmentLineItemConnection {
  __typename: 'FulfillmentLineItemConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiFulfillmentLineItemEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one FulfillmentLineItem and a cursor during pagination.
 *
 */
export interface StorefrontApiFulfillmentLineItemEdge {
  __typename: 'FulfillmentLineItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of FulfillmentLineItemEdge. */
  node: StorefrontApiFulfillmentLineItem
}

/** Tracking information associated with the fulfillment. */
export interface StorefrontApiFulfillmentTrackingInfo {
  __typename: 'FulfillmentTrackingInfo'
  /** The tracking number of the fulfillment. */
  number?: Maybe<Scalars['String']>
  /** The URL to track the fulfillment. */
  url?: Maybe<Scalars['URL']>
}

/** Used to specify a geographical location. */
export type StorefrontApiGeoCoordinateInput = {
  /** The coordinate's latitude value. */
  latitude: Scalars['Float']
  /** The coordinate's longitude value. */
  longitude: Scalars['Float']
}

/** Represents information about the metafields associated to the specified resource. */
export type StorefrontApiHasMetafields = {
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<StorefrontApiMetafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: StorefrontApiMetafieldConnection
}

/** Represents information about the metafields associated to the specified resource. */
export type StorefrontApiHasMetafieldsMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** Represents information about the metafields associated to the specified resource. */
export type StorefrontApiHasMetafieldsMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** Represents an image resource. */
export interface StorefrontApiImage {
  __typename: 'Image'
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars['String']>
  /** The original height of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  height?: Maybe<Scalars['Int']>
  /** A unique identifier for the image. */
  id?: Maybe<Scalars['ID']>
  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   *
   * @deprecated Use `url` instead.
   */
  originalSrc: Scalars['URL']
  /**
   * The location of the image as a URL.
   * @deprecated Use `url` instead.
   */
  src: Scalars['URL']
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   *
   * @deprecated Use `url(transform:)` instead
   */
  transformedSrc: Scalars['URL']
  /**
   * The location of the image as a URL.
   *
   * If no transform options are specified, then the original image will be preserved including any pre-applied transforms.
   *
   * All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.
   *
   * If you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).
   *
   */
  url: Scalars['URL']
  /** The original width of the image in pixels. Returns `null` if the image is not hosted by Shopify. */
  width?: Maybe<Scalars['Int']>
}

/** Represents an image resource. */
export type StorefrontApiImageTransformedSrcArgs = {
  crop?: InputMaybe<StorefrontApiCropRegion>
  maxHeight?: InputMaybe<Scalars['Int']>
  maxWidth?: InputMaybe<Scalars['Int']>
  preferredContentType?: InputMaybe<StorefrontApiImageContentType>
  scale?: InputMaybe<Scalars['Int']>
}

/** Represents an image resource. */
export type StorefrontApiImageUrlArgs = {
  transform?: InputMaybe<StorefrontApiImageTransformInput>
}

/**
 * An auto-generated type for paginating through multiple Images.
 *
 */
export interface StorefrontApiImageConnection {
  __typename: 'ImageConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiImageEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/** List of supported image content types. */
export enum StorefrontApiImageContentType {
  /** A JPG image. */
  Jpg = 'JPG',
  /** A PNG image. */
  Png = 'PNG',
  /** A WEBP image. */
  Webp = 'WEBP',
}

/**
 * An auto-generated type which holds one Image and a cursor during pagination.
 *
 */
export interface StorefrontApiImageEdge {
  __typename: 'ImageEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ImageEdge. */
  node: StorefrontApiImage
}

/**
 * The available options for transforming an image.
 *
 * All transformation options are considered best effort. Any transformation that the original image type doesn't support will be ignored.
 *
 */
export type StorefrontApiImageTransformInput = {
  /**
   * The region of the image to remain after cropping.
   * Must be used in conjunction with the `maxWidth` and/or `maxHeight` fields, where the `maxWidth` and `maxHeight` aren't equal.
   * The `crop` argument should coincide with the smaller value. A smaller `maxWidth` indicates a `LEFT` or `RIGHT` crop, while
   * a smaller `maxHeight` indicates a `TOP` or `BOTTOM` crop. For example, `{ maxWidth: 5, maxHeight: 10, crop: LEFT }` will result
   * in an image with a width of 5 and height of 10, where the right side of the image is removed.
   *
   */
  crop?: InputMaybe<StorefrontApiCropRegion>
  /**
   * Image height in pixels between 1 and 5760.
   *
   */
  maxHeight?: InputMaybe<Scalars['Int']>
  /**
   * Image width in pixels between 1 and 5760.
   *
   */
  maxWidth?: InputMaybe<Scalars['Int']>
  /**
   * Convert the source image into the preferred content type.
   * Supported conversions: `.svg` to `.png`, any file type to `.jpg`, and any file type to `.webp`.
   *
   */
  preferredContentType?: InputMaybe<StorefrontApiImageContentType>
  /**
   * Image size multiplier for high-resolution retina displays. Must be within 1..3.
   *
   */
  scale?: InputMaybe<Scalars['Int']>
}

/** Information about the localized experiences configured for the shop. */
export interface StorefrontApiLocalization {
  __typename: 'Localization'
  /** The list of countries with enabled localized experiences. */
  availableCountries: Array<StorefrontApiCountry>
  /** The country of the active localized experience. Use the `@inContext` directive to change this value. */
  country: StorefrontApiCountry
}

/** Represents a location where product inventory is held. */
export interface StorefrontApiLocation extends StorefrontApiNode {
  __typename: 'Location'
  /** The address of the location. */
  address: StorefrontApiLocationAddress
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The name of the location. */
  name: Scalars['String']
}

/**
 * Represents the address of a location.
 *
 */
export interface StorefrontApiLocationAddress {
  __typename: 'LocationAddress'
  /** The first line of the address for the location. */
  address1?: Maybe<Scalars['String']>
  /** The second line of the address for the location. */
  address2?: Maybe<Scalars['String']>
  /** The city of the location. */
  city?: Maybe<Scalars['String']>
  /** The country of the location. */
  country?: Maybe<Scalars['String']>
  /** The country code of the location. */
  countryCode?: Maybe<Scalars['String']>
  /** A formatted version of the address for the location. */
  formatted: Array<Scalars['String']>
  /** The latitude coordinates of the location. */
  latitude?: Maybe<Scalars['Float']>
  /** The longitude coordinates of the location. */
  longitude?: Maybe<Scalars['Float']>
  /** The phone number of the location. */
  phone?: Maybe<Scalars['String']>
  /** The province of the location. */
  province?: Maybe<Scalars['String']>
  /**
   * The code for the province, state, or district of the address of the location.
   *
   */
  provinceCode?: Maybe<Scalars['String']>
  /** The ZIP code of the location. */
  zip?: Maybe<Scalars['String']>
}

/**
 * An auto-generated type for paginating through multiple Locations.
 *
 */
export interface StorefrontApiLocationConnection {
  __typename: 'LocationConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiLocationEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one Location and a cursor during pagination.
 *
 */
export interface StorefrontApiLocationEdge {
  __typename: 'LocationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of LocationEdge. */
  node: StorefrontApiLocation
}

/** The set of valid sort keys for the Location query. */
export enum StorefrontApiLocationSortKeys {
  /** Sort by the `city` value. */
  City = 'CITY',
  /** Sort by the `distance` value. */
  Distance = 'DISTANCE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `name` value. */
  Name = 'NAME',
}

/** Represents a mailing address for customers and shipping. */
export interface StorefrontApiMailingAddress extends StorefrontApiNode {
  __typename: 'MailingAddress'
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']>
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   *
   */
  address2?: Maybe<Scalars['String']>
  /**
   * The name of the city, district, village, or town.
   *
   */
  city?: Maybe<Scalars['String']>
  /**
   * The name of the customer's company or organization.
   *
   */
  company?: Maybe<Scalars['String']>
  /**
   * The name of the country.
   *
   */
  country?: Maybe<Scalars['String']>
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   * @deprecated Use `countryCodeV2` instead.
   */
  countryCode?: Maybe<Scalars['String']>
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   */
  countryCodeV2?: Maybe<StorefrontApiCountryCode>
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']>
  /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars['String']>
  /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']>
  /** The latitude coordinate of the customer address. */
  latitude?: Maybe<Scalars['Float']>
  /** The longitude coordinate of the customer address. */
  longitude?: Maybe<Scalars['Float']>
  /**
   * The full name of the customer, based on firstName and lastName.
   *
   */
  name?: Maybe<Scalars['String']>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: Maybe<Scalars['String']>
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']>
  /**
   * The two-letter code for the region.
   *
   * For example, ON.
   *
   */
  provinceCode?: Maybe<Scalars['String']>
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>
}

/** Represents a mailing address for customers and shipping. */
export type StorefrontApiMailingAddressFormattedArgs = {
  withCompany?: InputMaybe<Scalars['Boolean']>
  withName?: InputMaybe<Scalars['Boolean']>
}

/**
 * An auto-generated type for paginating through multiple MailingAddresses.
 *
 */
export interface StorefrontApiMailingAddressConnection {
  __typename: 'MailingAddressConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiMailingAddressEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one MailingAddress and a cursor during pagination.
 *
 */
export interface StorefrontApiMailingAddressEdge {
  __typename: 'MailingAddressEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MailingAddressEdge. */
  node: StorefrontApiMailingAddress
}

/** Specifies the fields accepted to create or update a mailing address. */
export type StorefrontApiMailingAddressInput = {
  /**
   * The first line of the address. Typically the street address or PO Box number.
   *
   */
  address1?: InputMaybe<Scalars['String']>
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   *
   */
  address2?: InputMaybe<Scalars['String']>
  /**
   * The name of the city, district, village, or town.
   *
   */
  city?: InputMaybe<Scalars['String']>
  /**
   * The name of the customer's company or organization.
   *
   */
  company?: InputMaybe<Scalars['String']>
  /** The name of the country. */
  country?: InputMaybe<Scalars['String']>
  /** The first name of the customer. */
  firstName?: InputMaybe<Scalars['String']>
  /** The last name of the customer. */
  lastName?: InputMaybe<Scalars['String']>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: InputMaybe<Scalars['String']>
  /** The region of the address, such as the province, state, or district. */
  province?: InputMaybe<Scalars['String']>
  /** The zip or postal code of the address. */
  zip?: InputMaybe<Scalars['String']>
}

/**
 * Manual discount applications capture the intentions of a discount that was manually created.
 *
 */
export interface StorefrontApiManualDiscountApplication
  extends StorefrontApiDiscountApplication {
  __typename: 'ManualDiscountApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: StorefrontApiDiscountApplicationAllocationMethod
  /** The description of the application. */
  description?: Maybe<Scalars['String']>
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: StorefrontApiDiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: StorefrontApiDiscountApplicationTargetType
  /** The title of the application. */
  title: Scalars['String']
  /** The value of the discount application. */
  value: StorefrontApiPricingValue
}

/** Represents a media interface. */
export type StorefrontApiMedia = {
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>
  /** The media content type. */
  mediaContentType: StorefrontApiMediaContentType
  /** The preview image for the media. */
  previewImage?: Maybe<StorefrontApiImage>
}

/**
 * An auto-generated type for paginating through multiple Media.
 *
 */
export interface StorefrontApiMediaConnection {
  __typename: 'MediaConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiMediaEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/** The possible content types for a media object. */
export enum StorefrontApiMediaContentType {
  /** An externally hosted video. */
  ExternalVideo = 'EXTERNAL_VIDEO',
  /** A Shopify hosted image. */
  Image = 'IMAGE',
  /** A 3d model. */
  Model_3D = 'MODEL_3D',
  /** A Shopify hosted video. */
  Video = 'VIDEO',
}

/**
 * An auto-generated type which holds one Media and a cursor during pagination.
 *
 */
export interface StorefrontApiMediaEdge {
  __typename: 'MediaEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MediaEdge. */
  node: StorefrontApiMedia
}

/** Host for a Media Resource. */
export enum StorefrontApiMediaHost {
  /** Host for Vimeo embedded videos. */
  Vimeo = 'VIMEO',
  /** Host for YouTube embedded videos. */
  Youtube = 'YOUTUBE',
}

/** Represents a Shopify hosted image. */
export interface StorefrontApiMediaImage
  extends StorefrontApiMedia,
    StorefrontApiNode {
  __typename: 'MediaImage'
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The image for the media. */
  image?: Maybe<StorefrontApiImage>
  /** The media content type. */
  mediaContentType: StorefrontApiMediaContentType
  /** The preview image for the media. */
  previewImage?: Maybe<StorefrontApiImage>
}

/** The merchandise to be purchased at checkout. */
export type StorefrontApiMerchandise = StorefrontApiProductVariant

/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * comprised of keys, values, and value types.
 *
 */
export interface StorefrontApiMetafield extends StorefrontApiNode {
  __typename: 'Metafield'
  /** The date and time when the storefront metafield was created. */
  createdAt: Scalars['DateTime']
  /** The description of a metafield. */
  description?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The key name for a metafield. */
  key: Scalars['String']
  /** The namespace for a metafield. */
  namespace: Scalars['String']
  /** The parent object that the metafield belongs to. */
  parentResource: StorefrontApiMetafieldParentResource
  /** Returns a reference object if the metafield definition's type is a resource reference. */
  reference?: Maybe<StorefrontApiMetafieldReference>
  /**
   * The type name of the metafield.
   * See the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).
   *
   */
  type: Scalars['String']
  /** The date and time when the storefront metafield was updated. */
  updatedAt: Scalars['DateTime']
  /** The value of a metafield. */
  value: Scalars['String']
  /**
   * Represents the metafield value type.
   * @deprecated `valueType` is deprecated and replaced by `type` in API version 2021-07.
   */
  valueType: StorefrontApiMetafieldValueType
}

/**
 * An auto-generated type for paginating through multiple Metafields.
 *
 */
export interface StorefrontApiMetafieldConnection {
  __typename: 'MetafieldConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiMetafieldEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one Metafield and a cursor during pagination.
 *
 */
export interface StorefrontApiMetafieldEdge {
  __typename: 'MetafieldEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MetafieldEdge. */
  node: StorefrontApiMetafield
}

/**
 * A filter used to view a subset of products in a collection matching a specific metafield value.
 *
 * Only the following metafield types are currently supported:
 * - `number_integer`
 * - `number_decimal`
 * - `single_line_text_field`
 * - `boolean` as of 2022-04.
 *
 */
export type StorefrontApiMetafieldFilter = {
  /** The key of the metafield to filter on. */
  key: Scalars['String']
  /** The namespace of the metafield to filter on. */
  namespace: Scalars['String']
  /** The value of the metafield. */
  value: Scalars['String']
}

/** A resource that the metafield belongs to. */
export type StorefrontApiMetafieldParentResource =
  | StorefrontApiArticle
  | StorefrontApiBlog
  | StorefrontApiCollection
  | StorefrontApiCustomer
  | StorefrontApiOrder
  | StorefrontApiPage
  | StorefrontApiProduct
  | StorefrontApiProductVariant
  | StorefrontApiShop

/**
 * Returns the resource which is being referred to by a metafield.
 *
 */
export type StorefrontApiMetafieldReference =
  | StorefrontApiMediaImage
  | StorefrontApiPage
  | StorefrontApiProduct
  | StorefrontApiProductVariant

/** Metafield value types. */
export enum StorefrontApiMetafieldValueType {
  /** A boolean metafield. */
  Boolean = 'BOOLEAN',
  /** An integer metafield. */
  Integer = 'INTEGER',
  /** A json string metafield. */
  JsonString = 'JSON_STRING',
  /** A string metafield. */
  String = 'STRING',
}

/** Represents a Shopify hosted 3D model. */
export interface StorefrontApiModel3d
  extends StorefrontApiMedia,
    StorefrontApiNode {
  __typename: 'Model3d'
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The media content type. */
  mediaContentType: StorefrontApiMediaContentType
  /** The preview image for the media. */
  previewImage?: Maybe<StorefrontApiImage>
  /** The sources for a 3d model. */
  sources: Array<StorefrontApiModel3dSource>
}

/** Represents a source for a Shopify hosted 3d model. */
export interface StorefrontApiModel3dSource {
  __typename: 'Model3dSource'
  /** The filesize of the 3d model. */
  filesize: Scalars['Int']
  /** The format of the 3d model. */
  format: Scalars['String']
  /** The MIME type of the 3d model. */
  mimeType: Scalars['String']
  /** The URL of the 3d model. */
  url: Scalars['String']
}

/** Specifies the fields for a monetary value with currency. */
export type StorefrontApiMoneyInput = {
  /** Decimal money amount. */
  amount: Scalars['Decimal']
  /** Currency of the money. */
  currencyCode: StorefrontApiCurrencyCode
}

/**
 * A monetary value with currency.
 *
 */
export interface StorefrontApiMoneyV2 {
  __typename: 'MoneyV2'
  /** Decimal money amount. */
  amount: Scalars['Decimal']
  /** Currency of the money. */
  currencyCode: StorefrontApiCurrencyCode
}

/**
 * An auto-generated type for paginating through multiple MoneyV2s.
 *
 */
export interface StorefrontApiMoneyV2Connection {
  __typename: 'MoneyV2Connection'
  /** A list of edges. */
  edges: Array<StorefrontApiMoneyV2Edge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one MoneyV2 and a cursor during pagination.
 *
 */
export interface StorefrontApiMoneyV2Edge {
  __typename: 'MoneyV2Edge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MoneyV2Edge. */
  node: StorefrontApiMoneyV2
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface StorefrontApiMutation {
  __typename: 'Mutation'
  /** Updates the attributes on a cart. */
  cartAttributesUpdate?: Maybe<StorefrontApiCartAttributesUpdatePayload>
  /**
   * Updates customer information associated with a cart.
   * Buyer identity is used to determine
   * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
   * and should match the customer's shipping address.
   *
   */
  cartBuyerIdentityUpdate?: Maybe<StorefrontApiCartBuyerIdentityUpdatePayload>
  /** Creates a new cart. */
  cartCreate?: Maybe<StorefrontApiCartCreatePayload>
  /** Updates the discount codes applied to the cart. */
  cartDiscountCodesUpdate?: Maybe<StorefrontApiCartDiscountCodesUpdatePayload>
  /** Adds a merchandise line to the cart. */
  cartLinesAdd?: Maybe<StorefrontApiCartLinesAddPayload>
  /** Removes one or more merchandise lines from the cart. */
  cartLinesRemove?: Maybe<StorefrontApiCartLinesRemovePayload>
  /** Updates one or more merchandise lines on a cart. */
  cartLinesUpdate?: Maybe<StorefrontApiCartLinesUpdatePayload>
  /** Updates the note on the cart. */
  cartNoteUpdate?: Maybe<StorefrontApiCartNoteUpdatePayload>
  /**
   * Updates the attributes of a checkout if `allowPartialAddresses` is `true`.
   * @deprecated Use `checkoutAttributesUpdateV2` instead.
   */
  checkoutAttributesUpdate?: Maybe<StorefrontApiCheckoutAttributesUpdatePayload>
  /** Updates the attributes of a checkout if `allowPartialAddresses` is `true`. */
  checkoutAttributesUpdateV2?: Maybe<StorefrontApiCheckoutAttributesUpdateV2Payload>
  /** Completes a checkout without providing payment information. You can use this mutation for free items or items whose purchase price is covered by a gift card. */
  checkoutCompleteFree?: Maybe<StorefrontApiCheckoutCompleteFreePayload>
  /**
   * Completes a checkout using a credit card token from Shopify's Vault.
   * @deprecated Use `checkoutCompleteWithCreditCardV2` instead.
   */
  checkoutCompleteWithCreditCard?: Maybe<StorefrontApiCheckoutCompleteWithCreditCardPayload>
  /** Completes a checkout using a credit card token from Shopify's card vault. Before you can complete checkouts using CheckoutCompleteWithCreditCardV2, you need to  [_request payment processing_](https://shopify.dev/apps/channels/getting-started#request-payment-processing). */
  checkoutCompleteWithCreditCardV2?: Maybe<StorefrontApiCheckoutCompleteWithCreditCardV2Payload>
  /**
   * Completes a checkout with a tokenized payment.
   * @deprecated Use `checkoutCompleteWithTokenizedPaymentV2` instead.
   */
  checkoutCompleteWithTokenizedPayment?: Maybe<StorefrontApiCheckoutCompleteWithTokenizedPaymentPayload>
  /**
   * Completes a checkout with a tokenized payment.
   * @deprecated Use `checkoutCompleteWithTokenizedPaymentV3` instead.
   */
  checkoutCompleteWithTokenizedPaymentV2?: Maybe<StorefrontApiCheckoutCompleteWithTokenizedPaymentV2Payload>
  /** Completes a checkout with a tokenized payment. */
  checkoutCompleteWithTokenizedPaymentV3?: Maybe<StorefrontApiCheckoutCompleteWithTokenizedPaymentV3Payload>
  /** Creates a new checkout. */
  checkoutCreate?: Maybe<StorefrontApiCheckoutCreatePayload>
  /**
   * Associates a customer to the checkout.
   * @deprecated Use `checkoutCustomerAssociateV2` instead.
   */
  checkoutCustomerAssociate?: Maybe<StorefrontApiCheckoutCustomerAssociatePayload>
  /** Associates a customer to the checkout. */
  checkoutCustomerAssociateV2?: Maybe<StorefrontApiCheckoutCustomerAssociateV2Payload>
  /**
   * Disassociates the current checkout customer from the checkout.
   * @deprecated Use `checkoutCustomerDisassociateV2` instead.
   */
  checkoutCustomerDisassociate?: Maybe<StorefrontApiCheckoutCustomerDisassociatePayload>
  /** Disassociates the current checkout customer from the checkout. */
  checkoutCustomerDisassociateV2?: Maybe<StorefrontApiCheckoutCustomerDisassociateV2Payload>
  /**
   * Applies a discount to an existing checkout using a discount code.
   * @deprecated Use `checkoutDiscountCodeApplyV2` instead.
   */
  checkoutDiscountCodeApply?: Maybe<StorefrontApiCheckoutDiscountCodeApplyPayload>
  /** Applies a discount to an existing checkout using a discount code. */
  checkoutDiscountCodeApplyV2?: Maybe<StorefrontApiCheckoutDiscountCodeApplyV2Payload>
  /** Removes the applied discounts from an existing checkout. */
  checkoutDiscountCodeRemove?: Maybe<StorefrontApiCheckoutDiscountCodeRemovePayload>
  /**
   * Updates the email on an existing checkout.
   * @deprecated Use `checkoutEmailUpdateV2` instead.
   */
  checkoutEmailUpdate?: Maybe<StorefrontApiCheckoutEmailUpdatePayload>
  /** Updates the email on an existing checkout. */
  checkoutEmailUpdateV2?: Maybe<StorefrontApiCheckoutEmailUpdateV2Payload>
  /**
   * Applies a gift card to an existing checkout using a gift card code. This will replace all currently applied gift cards.
   * @deprecated Use `checkoutGiftCardsAppend` instead.
   */
  checkoutGiftCardApply?: Maybe<StorefrontApiCheckoutGiftCardApplyPayload>
  /**
   * Removes an applied gift card from the checkout.
   * @deprecated Use `checkoutGiftCardRemoveV2` instead.
   */
  checkoutGiftCardRemove?: Maybe<StorefrontApiCheckoutGiftCardRemovePayload>
  /** Removes an applied gift card from the checkout. */
  checkoutGiftCardRemoveV2?: Maybe<StorefrontApiCheckoutGiftCardRemoveV2Payload>
  /** Appends gift cards to an existing checkout. */
  checkoutGiftCardsAppend?: Maybe<StorefrontApiCheckoutGiftCardsAppendPayload>
  /** Adds a list of line items to a checkout. */
  checkoutLineItemsAdd?: Maybe<StorefrontApiCheckoutLineItemsAddPayload>
  /** Removes line items from an existing checkout. */
  checkoutLineItemsRemove?: Maybe<StorefrontApiCheckoutLineItemsRemovePayload>
  /** Sets a list of line items to a checkout. */
  checkoutLineItemsReplace?: Maybe<StorefrontApiCheckoutLineItemsReplacePayload>
  /** Updates line items on a checkout. */
  checkoutLineItemsUpdate?: Maybe<StorefrontApiCheckoutLineItemsUpdatePayload>
  /**
   * Updates the shipping address of an existing checkout.
   * @deprecated Use `checkoutShippingAddressUpdateV2` instead.
   */
  checkoutShippingAddressUpdate?: Maybe<StorefrontApiCheckoutShippingAddressUpdatePayload>
  /** Updates the shipping address of an existing checkout. */
  checkoutShippingAddressUpdateV2?: Maybe<StorefrontApiCheckoutShippingAddressUpdateV2Payload>
  /** Updates the shipping lines on an existing checkout. */
  checkoutShippingLineUpdate?: Maybe<StorefrontApiCheckoutShippingLineUpdatePayload>
  /**
   * Creates a customer access token.
   * The customer access token is required to modify the customer object in any way.
   *
   */
  customerAccessTokenCreate?: Maybe<StorefrontApiCustomerAccessTokenCreatePayload>
  /**
   * Creates a customer access token using a
   * [multipass token](https://shopify.dev/api/multipass) instead of email and
   * password. A customer record is created if the customer doesn't exist. If a customer
   * record already exists but the record is disabled, then the customer record is enabled.
   *
   */
  customerAccessTokenCreateWithMultipass?: Maybe<StorefrontApiCustomerAccessTokenCreateWithMultipassPayload>
  /** Permanently destroys a customer access token. */
  customerAccessTokenDelete?: Maybe<StorefrontApiCustomerAccessTokenDeletePayload>
  /**
   * Renews a customer access token.
   *
   * Access token renewal must happen *before* a token expires.
   * If a token has already expired, a new one should be created instead via `customerAccessTokenCreate`.
   *
   */
  customerAccessTokenRenew?: Maybe<StorefrontApiCustomerAccessTokenRenewPayload>
  /** Activates a customer. */
  customerActivate?: Maybe<StorefrontApiCustomerActivatePayload>
  /** Activates a customer with the activation url received from `customerCreate`. */
  customerActivateByUrl?: Maybe<StorefrontApiCustomerActivateByUrlPayload>
  /** Creates a new address for a customer. */
  customerAddressCreate?: Maybe<StorefrontApiCustomerAddressCreatePayload>
  /** Permanently deletes the address of an existing customer. */
  customerAddressDelete?: Maybe<StorefrontApiCustomerAddressDeletePayload>
  /** Updates the address of an existing customer. */
  customerAddressUpdate?: Maybe<StorefrontApiCustomerAddressUpdatePayload>
  /** Creates a new customer. */
  customerCreate?: Maybe<StorefrontApiCustomerCreatePayload>
  /** Updates the default address of an existing customer. */
  customerDefaultAddressUpdate?: Maybe<StorefrontApiCustomerDefaultAddressUpdatePayload>
  /**
   * Sends a reset password email to the customer. The reset password
   * email contains a reset password URL and token that you can pass to
   * the [`customerResetByUrl`](https://shopify.dev/api/storefront/latest/mutations/customerResetByUrl) or
   * [`customerReset`](https://shopify.dev/api/storefront/latest/mutations/customerReset) mutation to reset the
   * customer password.
   *
   * This mutation is throttled by IP. With authenticated access,
   * you can provide a [`Shopify-Storefront-Buyer-IP`](https://shopify.dev/api/usage/authentication#optional-ip-header) instead of the request IP.
   *
   * Make sure that the value provided to `Shopify-Storefront-Buyer-IP` is trusted. Unthrottled access to this
   * mutation presents a security risk.
   *
   */
  customerRecover?: Maybe<StorefrontApiCustomerRecoverPayload>
  /**
   * "Resets a customer’s password with the token received from a reset password email. You can send a reset password email with the [`customerRecover`](https://shopify.dev/api/storefront/latest/mutations/customerRecover) mutation."
   *
   */
  customerReset?: Maybe<StorefrontApiCustomerResetPayload>
  /**
   * "Resets a customer’s password with the reset password URL received from a reset password email. You can send a reset password email with the [`customerRecover`](https://shopify.dev/api/storefront/latest/mutations/customerRecover) mutation."
   *
   */
  customerResetByUrl?: Maybe<StorefrontApiCustomerResetByUrlPayload>
  /** Updates an existing customer. */
  customerUpdate?: Maybe<StorefrontApiCustomerUpdatePayload>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCartAttributesUpdateArgs = {
  attributes: Array<StorefrontApiAttributeInput>
  cartId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCartBuyerIdentityUpdateArgs = {
  buyerIdentity: StorefrontApiCartBuyerIdentityInput
  cartId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCartCreateArgs = {
  input?: InputMaybe<StorefrontApiCartInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCartDiscountCodesUpdateArgs = {
  cartId: Scalars['ID']
  discountCodes?: InputMaybe<Array<Scalars['String']>>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCartLinesAddArgs = {
  cartId: Scalars['ID']
  lines: Array<StorefrontApiCartLineInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCartLinesRemoveArgs = {
  cartId: Scalars['ID']
  lineIds: Array<Scalars['ID']>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCartLinesUpdateArgs = {
  cartId: Scalars['ID']
  lines: Array<StorefrontApiCartLineUpdateInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCartNoteUpdateArgs = {
  cartId: Scalars['ID']
  note?: InputMaybe<Scalars['String']>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutAttributesUpdateArgs = {
  checkoutId: Scalars['ID']
  input: StorefrontApiCheckoutAttributesUpdateInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutAttributesUpdateV2Args = {
  checkoutId: Scalars['ID']
  input: StorefrontApiCheckoutAttributesUpdateV2Input
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutCompleteFreeArgs = {
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutCompleteWithCreditCardArgs = {
  checkoutId: Scalars['ID']
  payment: StorefrontApiCreditCardPaymentInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutCompleteWithCreditCardV2Args = {
  checkoutId: Scalars['ID']
  payment: StorefrontApiCreditCardPaymentInputV2
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutCompleteWithTokenizedPaymentArgs = {
  checkoutId: Scalars['ID']
  payment: StorefrontApiTokenizedPaymentInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutCompleteWithTokenizedPaymentV2Args = {
  checkoutId: Scalars['ID']
  payment: StorefrontApiTokenizedPaymentInputV2
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutCompleteWithTokenizedPaymentV3Args = {
  checkoutId: Scalars['ID']
  payment: StorefrontApiTokenizedPaymentInputV3
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutCreateArgs = {
  input: StorefrontApiCheckoutCreateInput
  queueToken?: InputMaybe<Scalars['String']>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutCustomerAssociateArgs = {
  checkoutId: Scalars['ID']
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutCustomerAssociateV2Args = {
  checkoutId: Scalars['ID']
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutCustomerDisassociateArgs = {
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutCustomerDisassociateV2Args = {
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutDiscountCodeApplyArgs = {
  checkoutId: Scalars['ID']
  discountCode: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutDiscountCodeApplyV2Args = {
  checkoutId: Scalars['ID']
  discountCode: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutDiscountCodeRemoveArgs = {
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutEmailUpdateArgs = {
  checkoutId: Scalars['ID']
  email: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutEmailUpdateV2Args = {
  checkoutId: Scalars['ID']
  email: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutGiftCardApplyArgs = {
  checkoutId: Scalars['ID']
  giftCardCode: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutGiftCardRemoveArgs = {
  appliedGiftCardId: Scalars['ID']
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutGiftCardRemoveV2Args = {
  appliedGiftCardId: Scalars['ID']
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutGiftCardsAppendArgs = {
  checkoutId: Scalars['ID']
  giftCardCodes: Array<Scalars['String']>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutLineItemsAddArgs = {
  checkoutId: Scalars['ID']
  lineItems: Array<StorefrontApiCheckoutLineItemInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutLineItemsRemoveArgs = {
  checkoutId: Scalars['ID']
  lineItemIds: Array<Scalars['ID']>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutLineItemsReplaceArgs = {
  checkoutId: Scalars['ID']
  lineItems: Array<StorefrontApiCheckoutLineItemInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutLineItemsUpdateArgs = {
  checkoutId: Scalars['ID']
  lineItems: Array<StorefrontApiCheckoutLineItemUpdateInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutShippingAddressUpdateArgs = {
  checkoutId: Scalars['ID']
  shippingAddress: StorefrontApiMailingAddressInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutShippingAddressUpdateV2Args = {
  checkoutId: Scalars['ID']
  shippingAddress: StorefrontApiMailingAddressInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutShippingLineUpdateArgs = {
  checkoutId: Scalars['ID']
  shippingRateHandle: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCustomerAccessTokenCreateArgs = {
  input: StorefrontApiCustomerAccessTokenCreateInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCustomerAccessTokenCreateWithMultipassArgs = {
  multipassToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCustomerAccessTokenDeleteArgs = {
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCustomerAccessTokenRenewArgs = {
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCustomerActivateArgs = {
  id: Scalars['ID']
  input: StorefrontApiCustomerActivateInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCustomerActivateByUrlArgs = {
  activationUrl: Scalars['URL']
  password: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCustomerAddressCreateArgs = {
  address: StorefrontApiMailingAddressInput
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCustomerAddressDeleteArgs = {
  customerAccessToken: Scalars['String']
  id: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCustomerAddressUpdateArgs = {
  address: StorefrontApiMailingAddressInput
  customerAccessToken: Scalars['String']
  id: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCustomerCreateArgs = {
  input: StorefrontApiCustomerCreateInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCustomerDefaultAddressUpdateArgs = {
  addressId: Scalars['ID']
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCustomerRecoverArgs = {
  email: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCustomerResetArgs = {
  id: Scalars['ID']
  input: StorefrontApiCustomerResetInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCustomerResetByUrlArgs = {
  password: Scalars['String']
  resetUrl: Scalars['URL']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCustomerUpdateArgs = {
  customer: StorefrontApiCustomerUpdateInput
  customerAccessToken: Scalars['String']
}

/**
 * An object with an ID field to support global identification, in accordance with the
 * [Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).
 * This interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)
 * and [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.
 *
 */
export type StorefrontApiNode = {
  /** A globally-unique identifier. */
  id: Scalars['ID']
}

/** Represents a resource that can be published to the Online Store sales channel. */
export type StorefrontApiOnlineStorePublishable = {
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export interface StorefrontApiOrder
  extends StorefrontApiHasMetafields,
    StorefrontApiNode {
  __typename: 'Order'
  /** The reason for the order's cancellation. Returns `null` if the order wasn't canceled. */
  cancelReason?: Maybe<StorefrontApiOrderCancelReason>
  /** The date and time when the order was canceled. Returns null if the order wasn't canceled. */
  canceledAt?: Maybe<Scalars['DateTime']>
  /** The code of the currency used for the payment. */
  currencyCode: StorefrontApiCurrencyCode
  /** The subtotal of line items and their discounts, excluding line items that have been removed. Does not contain order-level discounts, duties, shipping costs, or shipping discounts. Taxes are not included unless the order is a taxes-included order. */
  currentSubtotalPrice: StorefrontApiMoneyV2
  /** The total cost of duties for the order, including refunds. */
  currentTotalDuties?: Maybe<StorefrontApiMoneyV2>
  /** The total amount of the order, including duties, taxes and discounts, minus amounts for line items that have been removed. */
  currentTotalPrice: StorefrontApiMoneyV2
  /** The total of all taxes applied to the order, excluding taxes for returned line items. */
  currentTotalTax: StorefrontApiMoneyV2
  /** The locale code in which this specific order happened. */
  customerLocale?: Maybe<Scalars['String']>
  /** The unique URL that the customer can use to access the order. */
  customerUrl?: Maybe<Scalars['URL']>
  /** Discounts that have been applied on the order. */
  discountApplications: StorefrontApiDiscountApplicationConnection
  /** Whether the order has had any edits applied or not. */
  edited: Scalars['Boolean']
  /** The customer's email address. */
  email?: Maybe<Scalars['String']>
  /** The financial status of the order. */
  financialStatus?: Maybe<StorefrontApiOrderFinancialStatus>
  /** The fulfillment status for the order. */
  fulfillmentStatus: StorefrontApiOrderFulfillmentStatus
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** List of the order’s line items. */
  lineItems: StorefrontApiOrderLineItemConnection
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<StorefrontApiMetafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: StorefrontApiMetafieldConnection
  /**
   * Unique identifier for the order that appears on the order.
   * For example, _#1000_ or _Store1001.
   *
   */
  name: Scalars['String']
  /** A unique numeric identifier for the order for use by shop owner and customer. */
  orderNumber: Scalars['Int']
  /** The total cost of duties charged at checkout. */
  originalTotalDuties?: Maybe<StorefrontApiMoneyV2>
  /** The total price of the order before any applied edits. */
  originalTotalPrice: StorefrontApiMoneyV2
  /** The customer's phone number for receiving SMS notifications. */
  phone?: Maybe<Scalars['String']>
  /**
   * The date and time when the order was imported.
   * This value can be set to dates in the past when importing from other systems.
   * If no value is provided, it will be auto-generated based on current date and time.
   *
   */
  processedAt: Scalars['DateTime']
  /** The address to where the order will be shipped. */
  shippingAddress?: Maybe<StorefrontApiMailingAddress>
  /**
   * The discounts that have been allocated onto the shipping line by discount applications.
   *
   */
  shippingDiscountAllocations: Array<StorefrontApiDiscountAllocation>
  /** The unique URL for the order's status page. */
  statusUrl: Scalars['URL']
  /**
   * Price of the order before shipping and taxes.
   * @deprecated Use `subtotalPriceV2` instead.
   */
  subtotalPrice?: Maybe<Scalars['Money']>
  /** Price of the order before duties, shipping and taxes. */
  subtotalPriceV2?: Maybe<StorefrontApiMoneyV2>
  /** List of the order’s successful fulfillments. */
  successfulFulfillments?: Maybe<Array<StorefrontApiFulfillment>>
  /**
   * The sum of all the prices of all the items in the order, taxes and discounts included (must be positive).
   * @deprecated Use `totalPriceV2` instead.
   */
  totalPrice: Scalars['Money']
  /** The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive). */
  totalPriceV2: StorefrontApiMoneyV2
  /**
   * The total amount that has been refunded.
   * @deprecated Use `totalRefundedV2` instead.
   */
  totalRefunded: Scalars['Money']
  /** The total amount that has been refunded. */
  totalRefundedV2: StorefrontApiMoneyV2
  /**
   * The total cost of shipping.
   * @deprecated Use `totalShippingPriceV2` instead.
   */
  totalShippingPrice: Scalars['Money']
  /** The total cost of shipping. */
  totalShippingPriceV2: StorefrontApiMoneyV2
  /**
   * The total cost of taxes.
   * @deprecated Use `totalTaxV2` instead.
   */
  totalTax?: Maybe<Scalars['Money']>
  /** The total cost of taxes. */
  totalTaxV2?: Maybe<StorefrontApiMoneyV2>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type StorefrontApiOrderDiscountApplicationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type StorefrontApiOrderLineItemsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type StorefrontApiOrderMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type StorefrontApiOrderMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
export type StorefrontApiOrderSuccessfulFulfillmentsArgs = {
  first?: InputMaybe<Scalars['Int']>
}

/** Represents the reason for the order's cancellation. */
export enum StorefrontApiOrderCancelReason {
  /** The customer wanted to cancel the order. */
  Customer = 'CUSTOMER',
  /** Payment was declined. */
  Declined = 'DECLINED',
  /** The order was fraudulent. */
  Fraud = 'FRAUD',
  /** There was insufficient inventory. */
  Inventory = 'INVENTORY',
  /** The order was canceled for an unlisted reason. */
  Other = 'OTHER',
}

/**
 * An auto-generated type for paginating through multiple Orders.
 *
 */
export interface StorefrontApiOrderConnection {
  __typename: 'OrderConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiOrderEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one Order and a cursor during pagination.
 *
 */
export interface StorefrontApiOrderEdge {
  __typename: 'OrderEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of OrderEdge. */
  node: StorefrontApiOrder
}

/** Represents the order's current financial status. */
export enum StorefrontApiOrderFinancialStatus {
  /** Displayed as **Authorized**. */
  Authorized = 'AUTHORIZED',
  /** Displayed as **Paid**. */
  Paid = 'PAID',
  /** Displayed as **Partially paid**. */
  PartiallyPaid = 'PARTIALLY_PAID',
  /** Displayed as **Partially refunded**. */
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  /** Displayed as **Pending**. */
  Pending = 'PENDING',
  /** Displayed as **Refunded**. */
  Refunded = 'REFUNDED',
  /** Displayed as **Voided**. */
  Voided = 'VOIDED',
}

/** Represents the order's aggregated fulfillment status for display purposes. */
export enum StorefrontApiOrderFulfillmentStatus {
  /** Displayed as **Fulfilled**. All of the items in the order have been fulfilled. */
  Fulfilled = 'FULFILLED',
  /** Displayed as **In progress**. Some of the items in the order have been fulfilled, or a request for fulfillment has been sent to the fulfillment service. */
  InProgress = 'IN_PROGRESS',
  /** Displayed as **On hold**. All of the unfulfilled items in this order are on hold. */
  OnHold = 'ON_HOLD',
  /** Displayed as **Open**. None of the items in the order have been fulfilled. Replaced by "UNFULFILLED" status. */
  Open = 'OPEN',
  /** Displayed as **Partially fulfilled**. Some of the items in the order have been fulfilled. */
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  /** Displayed as **Pending fulfillment**. A request for fulfillment of some items awaits a response from the fulfillment service. Replaced by "IN_PROGRESS" status. */
  PendingFulfillment = 'PENDING_FULFILLMENT',
  /** Displayed as **Restocked**. All of the items in the order have been restocked. Replaced by "UNFULFILLED" status. */
  Restocked = 'RESTOCKED',
  /** Displayed as **Scheduled**. All of the unfulfilled items in this order are scheduled for fulfillment at later time. */
  Scheduled = 'SCHEDULED',
  /** Displayed as **Unfulfilled**. None of the items in the order have been fulfilled. */
  Unfulfilled = 'UNFULFILLED',
}

/** Represents a single line in an order. There is one line item for each distinct product variant. */
export interface StorefrontApiOrderLineItem {
  __typename: 'OrderLineItem'
  /** The number of entries associated to the line item minus the items that have been removed. */
  currentQuantity: Scalars['Int']
  /** List of custom attributes associated to the line item. */
  customAttributes: Array<StorefrontApiAttribute>
  /** The discounts that have been allocated onto the order line item by discount applications. */
  discountAllocations: Array<StorefrontApiDiscountAllocation>
  /** The total price of the line item, including discounts, and displayed in the presentment currency. */
  discountedTotalPrice: StorefrontApiMoneyV2
  /** The total price of the line item, not including any discounts. The total price is calculated using the original unit price multiplied by the quantity, and it is displayed in the presentment currency. */
  originalTotalPrice: StorefrontApiMoneyV2
  /** The number of products variants associated to the line item. */
  quantity: Scalars['Int']
  /** The title of the product combined with title of the variant. */
  title: Scalars['String']
  /** The product variant object associated to the line item. */
  variant?: Maybe<StorefrontApiProductVariant>
}

/**
 * An auto-generated type for paginating through multiple OrderLineItems.
 *
 */
export interface StorefrontApiOrderLineItemConnection {
  __typename: 'OrderLineItemConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiOrderLineItemEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one OrderLineItem and a cursor during pagination.
 *
 */
export interface StorefrontApiOrderLineItemEdge {
  __typename: 'OrderLineItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of OrderLineItemEdge. */
  node: StorefrontApiOrderLineItem
}

/** The set of valid sort keys for the Order query. */
export enum StorefrontApiOrderSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `processed_at` value. */
  ProcessedAt = 'PROCESSED_AT',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `total_price` value. */
  TotalPrice = 'TOTAL_PRICE',
}

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export interface StorefrontApiPage
  extends StorefrontApiHasMetafields,
    StorefrontApiNode,
    StorefrontApiOnlineStorePublishable {
  __typename: 'Page'
  /** The description of the page, complete with HTML formatting. */
  body: Scalars['HTML']
  /** Summary of the page body. */
  bodySummary: Scalars['String']
  /** The timestamp of the page creation. */
  createdAt: Scalars['DateTime']
  /** A human-friendly unique string for the page automatically generated from its title. */
  handle: Scalars['String']
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<StorefrontApiMetafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: StorefrontApiMetafieldConnection
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>
  /** The page's SEO information. */
  seo?: Maybe<StorefrontApiSeo>
  /** The title of the page. */
  title: Scalars['String']
  /** The timestamp of the latest page update. */
  updatedAt: Scalars['DateTime']
  /**
   * The url pointing to the page accessible from the web.
   * @deprecated Use `onlineStoreUrl` instead.
   */
  url: Scalars['URL']
}

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type StorefrontApiPageMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
export type StorefrontApiPageMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * An auto-generated type for paginating through multiple Pages.
 *
 */
export interface StorefrontApiPageConnection {
  __typename: 'PageConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiPageEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one Page and a cursor during pagination.
 *
 */
export interface StorefrontApiPageEdge {
  __typename: 'PageEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of PageEdge. */
  node: StorefrontApiPage
}

/**
 * Returns information about pagination in a connection, in accordance with the
 * [Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo).
 *
 */
export interface StorefrontApiPageInfo {
  __typename: 'PageInfo'
  /** Whether there are more pages to fetch following the current page. */
  hasNextPage: Scalars['Boolean']
  /** Whether there are any pages prior to the current page. */
  hasPreviousPage: Scalars['Boolean']
}

/** The set of valid sort keys for the Page query. */
export enum StorefrontApiPageSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
}

/** A payment applied to a checkout. */
export interface StorefrontApiPayment extends StorefrontApiNode {
  __typename: 'Payment'
  /**
   * The amount of the payment.
   * @deprecated Use `amountV2` instead.
   */
  amount: Scalars['Money']
  /** The amount of the payment. */
  amountV2: StorefrontApiMoneyV2
  /** The billing address for the payment. */
  billingAddress?: Maybe<StorefrontApiMailingAddress>
  /** The checkout to which the payment belongs. */
  checkout: StorefrontApiCheckout
  /** The credit card used for the payment in the case of direct payments. */
  creditCard?: Maybe<StorefrontApiCreditCard>
  /** A message describing a processing error during asynchronous processing. */
  errorMessage?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /**
   * A client-side generated token to identify a payment and perform idempotent operations.
   * For more information, refer to
   * [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests).
   *
   */
  idempotencyKey?: Maybe<Scalars['String']>
  /** The URL where the customer needs to be redirected so they can complete the 3D Secure payment flow. */
  nextActionUrl?: Maybe<Scalars['URL']>
  /** Whether the payment is still processing asynchronously. */
  ready: Scalars['Boolean']
  /** A flag to indicate if the payment is to be done in test mode for gateways that support it. */
  test: Scalars['Boolean']
  /** The actual transaction recorded by Shopify after having processed the payment with the gateway. */
  transaction?: Maybe<StorefrontApiTransaction>
}

/** Settings related to payments. */
export interface StorefrontApiPaymentSettings {
  __typename: 'PaymentSettings'
  /** List of the card brands which the shop accepts. */
  acceptedCardBrands: Array<StorefrontApiCardBrand>
  /** The url pointing to the endpoint to vault credit cards. */
  cardVaultUrl: Scalars['URL']
  /** The country where the shop is located. */
  countryCode: StorefrontApiCountryCode
  /** The three-letter code for the shop's primary currency. */
  currencyCode: StorefrontApiCurrencyCode
  /** A list of enabled currencies (ISO 4217 format) that the shop accepts. Merchants can enable currencies from their Shopify Payments settings in the Shopify admin. */
  enabledPresentmentCurrencies: Array<StorefrontApiCurrencyCode>
  /** The shop’s Shopify Payments account id. */
  shopifyPaymentsAccountId?: Maybe<Scalars['String']>
  /** List of the digital wallets which the shop supports. */
  supportedDigitalWallets: Array<StorefrontApiDigitalWallet>
}

/** The valid values for the types of payment token. */
export enum StorefrontApiPaymentTokenType {
  /** Apple Pay token type. */
  ApplePay = 'APPLE_PAY',
  /** Google Pay token type. */
  GooglePay = 'GOOGLE_PAY',
  /** Shopify Pay token type. */
  ShopifyPay = 'SHOPIFY_PAY',
  /** Stripe token type. */
  StripeVaultToken = 'STRIPE_VAULT_TOKEN',
  /** Vault payment token type. */
  Vault = 'VAULT',
}

/** A filter used to view a subset of products in a collection matching a specific price range. */
export type StorefrontApiPriceRangeFilter = {
  /** The maximum price in the range. Empty indicates no max price. */
  max?: InputMaybe<Scalars['Float']>
  /** The minimum price in the range. Defaults to zero. */
  min?: InputMaybe<Scalars['Float']>
}

/** The value of the percentage pricing object. */
export interface StorefrontApiPricingPercentageValue {
  __typename: 'PricingPercentageValue'
  /** The percentage value of the object. */
  percentage: Scalars['Float']
}

/** The price value (fixed or percentage) for a discount application. */
export type StorefrontApiPricingValue =
  | StorefrontApiMoneyV2
  | StorefrontApiPricingPercentageValue

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export interface StorefrontApiProduct
  extends StorefrontApiHasMetafields,
    StorefrontApiNode,
    StorefrontApiOnlineStorePublishable {
  __typename: 'Product'
  /** Indicates if at least one product variant is available for sale. */
  availableForSale: Scalars['Boolean']
  /** List of collections a product belongs to. */
  collections: StorefrontApiCollectionConnection
  /** The compare at price of the product across all variants. */
  compareAtPriceRange: StorefrontApiProductPriceRange
  /** The date and time when the product was created. */
  createdAt: Scalars['DateTime']
  /** Stripped description of the product, single line with HTML tags removed. */
  description: Scalars['String']
  /** The description of the product, complete with HTML formatting. */
  descriptionHtml: Scalars['HTML']
  /**
   * The featured image for the product.
   *
   * This field is functionally equivalent to `images(first: 1)`.
   *
   */
  featuredImage?: Maybe<StorefrontApiImage>
  /**
   * A human-friendly unique string for the Product automatically generated from its title.
   * They are used by the Liquid templating language to refer to objects.
   *
   */
  handle: Scalars['String']
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** List of images associated with the product. */
  images: StorefrontApiImageConnection
  /** The media associated with the product. */
  media: StorefrontApiMediaConnection
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<StorefrontApiMetafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: StorefrontApiMetafieldConnection
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe<Scalars['URL']>
  /** List of product options. */
  options: Array<StorefrontApiProductOption>
  /**
   * List of price ranges in the presentment currencies for this shop.
   * @deprecated Use `@inContext` instead.
   */
  presentmentPriceRanges: StorefrontApiProductPriceRangeConnection
  /** The price range. */
  priceRange: StorefrontApiProductPriceRange
  /** A categorization that a product can be tagged with, commonly used for filtering and searching. */
  productType: Scalars['String']
  /** The date and time when the product was published to the channel. */
  publishedAt: Scalars['DateTime']
  /** Whether the product can only be purchased with a selling plan. */
  requiresSellingPlan: Scalars['Boolean']
  /** A list of a product's available selling plan groups. A selling plan group represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
  sellingPlanGroups: StorefrontApiSellingPlanGroupConnection
  /** The product's SEO information. */
  seo: StorefrontApiSeo
  /**
   * A comma separated list of tags that have been added to the product.
   * Additional access scope required for private apps: unauthenticated_read_product_tags.
   *
   */
  tags: Array<Scalars['String']>
  /** The product’s title. */
  title: Scalars['String']
  /** The total quantity of inventory in stock for this Product. */
  totalInventory?: Maybe<Scalars['Int']>
  /**
   * The date and time when the product was last modified.
   * A product's `updatedAt` value can change for different reasons. For example, if an order
   * is placed for a product that has inventory tracking set up, then the inventory adjustment
   * is counted as an update.
   *
   */
  updatedAt: Scalars['DateTime']
  /**
   * Find a product’s variant based on its selected options.
   * This is useful for converting a user’s selection of product options into a single matching variant.
   * If there is not a variant for the selected options, `null` will be returned.
   *
   */
  variantBySelectedOptions?: Maybe<StorefrontApiProductVariant>
  /** List of the product’s variants. */
  variants: StorefrontApiProductVariantConnection
  /** The product’s vendor name. */
  vendor: Scalars['String']
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type StorefrontApiProductCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type StorefrontApiProductDescriptionArgs = {
  truncateAt?: InputMaybe<Scalars['Int']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type StorefrontApiProductImagesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  crop?: InputMaybe<StorefrontApiCropRegion>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  maxHeight?: InputMaybe<Scalars['Int']>
  maxWidth?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
  scale?: InputMaybe<Scalars['Int']>
  sortKey?: InputMaybe<StorefrontApiProductImageSortKeys>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type StorefrontApiProductMediaArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<StorefrontApiProductMediaSortKeys>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type StorefrontApiProductMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type StorefrontApiProductMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type StorefrontApiProductOptionsArgs = {
  first?: InputMaybe<Scalars['Int']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type StorefrontApiProductPresentmentPriceRangesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  presentmentCurrencies?: InputMaybe<Array<StorefrontApiCurrencyCode>>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type StorefrontApiProductSellingPlanGroupsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type StorefrontApiProductVariantBySelectedOptionsArgs = {
  selectedOptions: Array<StorefrontApiSelectedOptionInput>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also qualifies as a product, as do services (such as equipment rental, work for hire, customization of another product or an extended warranty).
 */
export type StorefrontApiProductVariantsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<StorefrontApiProductVariantSortKeys>
}

/** The set of valid sort keys for the ProductCollection query. */
export enum StorefrontApiProductCollectionSortKeys {
  /** Sort by the `best-selling` value. */
  BestSelling = 'BEST_SELLING',
  /** Sort by the `collection-default` value. */
  CollectionDefault = 'COLLECTION_DEFAULT',
  /** Sort by the `created` value. */
  Created = 'CREATED',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `manual` value. */
  Manual = 'MANUAL',
  /** Sort by the `price` value. */
  Price = 'PRICE',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
}

/**
 * An auto-generated type for paginating through multiple Products.
 *
 */
export interface StorefrontApiProductConnection {
  __typename: 'ProductConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiProductEdge>
  /** A list of available filters. */
  filters: Array<StorefrontApiFilter>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one Product and a cursor during pagination.
 *
 */
export interface StorefrontApiProductEdge {
  __typename: 'ProductEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductEdge. */
  node: StorefrontApiProduct
}

/** A filter used to view a subset of products in a collection. */
export type StorefrontApiProductFilter = {
  /** Filter on if the product is available for sale. */
  available?: InputMaybe<Scalars['Boolean']>
  /** A range of prices to filter with-in. */
  price?: InputMaybe<StorefrontApiPriceRangeFilter>
  /** A product metafield to filter on. */
  productMetafield?: InputMaybe<StorefrontApiMetafieldFilter>
  /** The product type to filter on. */
  productType?: InputMaybe<Scalars['String']>
  /** The product vendor to filter on. */
  productVendor?: InputMaybe<Scalars['String']>
  /** A variant metafield to filter on. */
  variantMetafield?: InputMaybe<StorefrontApiMetafieldFilter>
  /** A variant option to filter on. */
  variantOption?: InputMaybe<StorefrontApiVariantOptionFilter>
}

/** The set of valid sort keys for the ProductImage query. */
export enum StorefrontApiProductImageSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
}

/** The set of valid sort keys for the ProductMedia query. */
export enum StorefrontApiProductMediaSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
}

/**
 * Product property names like "Size", "Color", and "Material" that the customers can select.
 * Variants are selected based on permutations of these options.
 * 255 characters limit each.
 *
 */
export interface StorefrontApiProductOption extends StorefrontApiNode {
  __typename: 'ProductOption'
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The product option’s name. */
  name: Scalars['String']
  /** The corresponding value to the product option name. */
  values: Array<Scalars['String']>
}

/** The price range of the product. */
export interface StorefrontApiProductPriceRange {
  __typename: 'ProductPriceRange'
  /** The highest variant's price. */
  maxVariantPrice: StorefrontApiMoneyV2
  /** The lowest variant's price. */
  minVariantPrice: StorefrontApiMoneyV2
}

/**
 * An auto-generated type for paginating through multiple ProductPriceRanges.
 *
 */
export interface StorefrontApiProductPriceRangeConnection {
  __typename: 'ProductPriceRangeConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiProductPriceRangeEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one ProductPriceRange and a cursor during pagination.
 *
 */
export interface StorefrontApiProductPriceRangeEdge {
  __typename: 'ProductPriceRangeEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductPriceRangeEdge. */
  node: StorefrontApiProductPriceRange
}

/** The set of valid sort keys for the Product query. */
export enum StorefrontApiProductSortKeys {
  /** Sort by the `best_selling` value. */
  BestSelling = 'BEST_SELLING',
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `price` value. */
  Price = 'PRICE',
  /** Sort by the `product_type` value. */
  ProductType = 'PRODUCT_TYPE',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `vendor` value. */
  Vendor = 'VENDOR',
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export interface StorefrontApiProductVariant
  extends StorefrontApiHasMetafields,
    StorefrontApiNode {
  __typename: 'ProductVariant'
  /**
   * Indicates if the product variant is in stock.
   * @deprecated Use `availableForSale` instead.
   */
  available?: Maybe<Scalars['Boolean']>
  /** Indicates if the product variant is available for sale. */
  availableForSale: Scalars['Boolean']
  /** The barcode (for example, ISBN, UPC, or GTIN) associated with the variant. */
  barcode?: Maybe<Scalars['String']>
  /**
   * The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPrice` is higher than `price`.
   * @deprecated Use `compareAtPriceV2` instead.
   */
  compareAtPrice?: Maybe<Scalars['Money']>
  /** The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPriceV2` is higher than `priceV2`. */
  compareAtPriceV2?: Maybe<StorefrontApiMoneyV2>
  /** Whether a product is out of stock but still available for purchase (used for backorders). */
  currentlyNotInStock: Scalars['Boolean']
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /**
   * Image associated with the product variant. This field falls back to the product image if no image is available.
   *
   */
  image?: Maybe<StorefrontApiImage>
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<StorefrontApiMetafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: StorefrontApiMetafieldConnection
  /**
   * List of prices and compare-at prices in the presentment currencies for this shop.
   * @deprecated Use `@inContext` instead.
   */
  presentmentPrices: StorefrontApiProductVariantPricePairConnection
  /**
   * List of unit prices in the presentment currencies for this shop.
   * @deprecated Use `@inContext` instead.
   */
  presentmentUnitPrices: StorefrontApiMoneyV2Connection
  /**
   * The product variant’s price.
   * @deprecated Use `priceV2` instead.
   */
  price: Scalars['Money']
  /** The product variant’s price. */
  priceV2: StorefrontApiMoneyV2
  /** The product object that the product variant belongs to. */
  product: StorefrontApiProduct
  /** The total sellable quantity of the variant for online sales channels. */
  quantityAvailable?: Maybe<Scalars['Int']>
  /** Whether a customer needs to provide a shipping address when placing an order for the product variant. */
  requiresShipping: Scalars['Boolean']
  /** List of product options applied to the variant. */
  selectedOptions: Array<StorefrontApiSelectedOption>
  /** Represents an association between a variant and a selling plan. Selling plan allocations describe which selling plans are available for each variant, and what their impact is on pricing. */
  sellingPlanAllocations: StorefrontApiSellingPlanAllocationConnection
  /** The SKU (stock keeping unit) associated with the variant. */
  sku?: Maybe<Scalars['String']>
  /** The in-store pickup availability of this variant by location. */
  storeAvailability: StorefrontApiStoreAvailabilityConnection
  /** The product variant’s title. */
  title: Scalars['String']
  /** The unit price value for the variant based on the variant's measurement. */
  unitPrice?: Maybe<StorefrontApiMoneyV2>
  /** The unit price measurement for the variant. */
  unitPriceMeasurement?: Maybe<StorefrontApiUnitPriceMeasurement>
  /** The weight of the product variant in the unit system specified with `weight_unit`. */
  weight?: Maybe<Scalars['Float']>
  /** Unit of measurement for weight. */
  weightUnit: StorefrontApiWeightUnit
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type StorefrontApiProductVariantImageArgs = {
  crop?: InputMaybe<StorefrontApiCropRegion>
  maxHeight?: InputMaybe<Scalars['Int']>
  maxWidth?: InputMaybe<Scalars['Int']>
  scale?: InputMaybe<Scalars['Int']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type StorefrontApiProductVariantMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type StorefrontApiProductVariantMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type StorefrontApiProductVariantPresentmentPricesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  presentmentCurrencies?: InputMaybe<Array<StorefrontApiCurrencyCode>>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type StorefrontApiProductVariantPresentmentUnitPricesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  presentmentCurrencies?: InputMaybe<Array<StorefrontApiCurrencyCode>>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type StorefrontApiProductVariantSellingPlanAllocationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type StorefrontApiProductVariantStoreAvailabilityArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * An auto-generated type for paginating through multiple ProductVariants.
 *
 */
export interface StorefrontApiProductVariantConnection {
  __typename: 'ProductVariantConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiProductVariantEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one ProductVariant and a cursor during pagination.
 *
 */
export interface StorefrontApiProductVariantEdge {
  __typename: 'ProductVariantEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductVariantEdge. */
  node: StorefrontApiProductVariant
}

/**
 * The compare-at price and price of a variant sharing a currency.
 *
 */
export interface StorefrontApiProductVariantPricePair {
  __typename: 'ProductVariantPricePair'
  /** The compare-at price of the variant with associated currency. */
  compareAtPrice?: Maybe<StorefrontApiMoneyV2>
  /** The price of the variant with associated currency. */
  price: StorefrontApiMoneyV2
}

/**
 * An auto-generated type for paginating through multiple ProductVariantPricePairs.
 *
 */
export interface StorefrontApiProductVariantPricePairConnection {
  __typename: 'ProductVariantPricePairConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiProductVariantPricePairEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one ProductVariantPricePair and a cursor during pagination.
 *
 */
export interface StorefrontApiProductVariantPricePairEdge {
  __typename: 'ProductVariantPricePairEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductVariantPricePairEdge. */
  node: StorefrontApiProductVariantPricePair
}

/** The set of valid sort keys for the ProductVariant query. */
export enum StorefrontApiProductVariantSortKeys {
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /**
   * Sort by relevance to the search terms when the `query` parameter is specified on the connection.
   * Don't use this sort key when no search query is specified.
   *
   */
  Relevance = 'RELEVANCE',
  /** Sort by the `sku` value. */
  Sku = 'SKU',
  /** Sort by the `title` value. */
  Title = 'TITLE',
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface StorefrontApiQueryRoot {
  __typename: 'QueryRoot'
  /** List of the shop's articles. */
  articles: StorefrontApiArticleConnection
  /** Fetch a specific `Blog` by one of its unique attributes. */
  blog?: Maybe<StorefrontApiBlog>
  /**
   * Find a blog by its handle.
   * @deprecated Use `blog` instead.
   */
  blogByHandle?: Maybe<StorefrontApiBlog>
  /** List of the shop's blogs. */
  blogs: StorefrontApiBlogConnection
  /**
   * Retrieve a cart by its ID. For more information, refer to
   * [Manage a cart with the Storefront API](https://shopify.dev/custom-storefronts/cart/manage).
   *
   */
  cart?: Maybe<StorefrontApiCart>
  /** Fetch a specific `Collection` by one of its unique attributes. */
  collection?: Maybe<StorefrontApiCollection>
  /**
   * Find a collection by its handle.
   * @deprecated Use `collection` instead.
   */
  collectionByHandle?: Maybe<StorefrontApiCollection>
  /** List of the shop’s collections. */
  collections: StorefrontApiCollectionConnection
  /** Find a customer by its access token. */
  customer?: Maybe<StorefrontApiCustomer>
  /** Returns the localized experiences configured for the shop. */
  localization: StorefrontApiLocalization
  /**
   * List of the shop's locations that support in-store pickup.
   *
   * When sorting by distance, you must specify a location via the `near` argument.
   *
   */
  locations: StorefrontApiLocationConnection
  /** Returns a specific node by ID. */
  node?: Maybe<StorefrontApiNode>
  /** Returns the list of nodes with the given IDs. */
  nodes: Array<Maybe<StorefrontApiNode>>
  /** Fetch a specific `Page` by one of its unique attributes. */
  page?: Maybe<StorefrontApiPage>
  /**
   * Find a page by its handle.
   * @deprecated Use `page` instead.
   */
  pageByHandle?: Maybe<StorefrontApiPage>
  /** List of the shop's pages. */
  pages: StorefrontApiPageConnection
  /** Fetch a specific `Product` by one of its unique attributes. */
  product?: Maybe<StorefrontApiProduct>
  /**
   * Find a product by its handle.
   * @deprecated Use `product` instead.
   */
  productByHandle?: Maybe<StorefrontApiProduct>
  /**
   * Find recommended products related to a given `product_id`.
   * To learn more about how recommendations are generated, see
   * [*Showing product recommendations on product pages*](https://help.shopify.com/themes/development/recommended-products).
   *
   */
  productRecommendations?: Maybe<Array<StorefrontApiProduct>>
  /**
   * Tags added to products.
   * Additional access scope required: unauthenticated_read_product_tags.
   *
   */
  productTags: StorefrontApiStringConnection
  /** List of product types for the shop's products that are published to your app. */
  productTypes: StorefrontApiStringConnection
  /** List of the shop’s products. */
  products: StorefrontApiProductConnection
  /** The list of public Storefront API versions, including supported, release candidate and unstable versions. */
  publicApiVersions: Array<StorefrontApiApiVersion>
  /** The shop associated with the storefront access token. */
  shop: StorefrontApiShop
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootArticlesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<StorefrontApiArticleSortKeys>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootBlogArgs = {
  handle?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootBlogByHandleArgs = {
  handle: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootBlogsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<StorefrontApiBlogSortKeys>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootCartArgs = {
  id: Scalars['ID']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootCollectionArgs = {
  handle?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootCollectionByHandleArgs = {
  handle: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<StorefrontApiCollectionSortKeys>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootCustomerArgs = {
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootLocationsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  near?: InputMaybe<StorefrontApiGeoCoordinateInput>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<StorefrontApiLocationSortKeys>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootNodeArgs = {
  id: Scalars['ID']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootNodesArgs = {
  ids: Array<Scalars['ID']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootPageArgs = {
  handle?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootPageByHandleArgs = {
  handle: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootPagesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<StorefrontApiPageSortKeys>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootProductArgs = {
  handle?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootProductByHandleArgs = {
  handle: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootProductRecommendationsArgs = {
  productId: Scalars['ID']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootProductTagsArgs = {
  first: Scalars['Int']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootProductTypesArgs = {
  first: Scalars['Int']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootProductsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<StorefrontApiProductSortKeys>
}

/** SEO information. */
export interface StorefrontApiSeo {
  __typename: 'SEO'
  /** The meta description. */
  description?: Maybe<Scalars['String']>
  /** The SEO title. */
  title?: Maybe<Scalars['String']>
}

/**
 * Script discount applications capture the intentions of a discount that
 * was created by a Shopify Script.
 *
 */
export interface StorefrontApiScriptDiscountApplication
  extends StorefrontApiDiscountApplication {
  __typename: 'ScriptDiscountApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: StorefrontApiDiscountApplicationAllocationMethod
  /**
   * The description of the application as defined by the Script.
   * @deprecated Use `title` instead.
   */
  description: Scalars['String']
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: StorefrontApiDiscountApplicationTargetSelection
  /** The type of line that the discount is applicable towards. */
  targetType: StorefrontApiDiscountApplicationTargetType
  /** The title of the application as defined by the Script. */
  title: Scalars['String']
  /** The value of the discount application. */
  value: StorefrontApiPricingValue
}

/**
 * Properties used by customers to select a product variant.
 * Products can have multiple options, like different sizes or colors.
 *
 */
export interface StorefrontApiSelectedOption {
  __typename: 'SelectedOption'
  /** The product option’s name. */
  name: Scalars['String']
  /** The product option’s value. */
  value: Scalars['String']
}

/** Specifies the input fields required for a selected option. */
export type StorefrontApiSelectedOptionInput = {
  /** The product option’s name. */
  name: Scalars['String']
  /** The product option’s value. */
  value: Scalars['String']
}

/** Represents how products and variants can be sold and purchased. */
export interface StorefrontApiSellingPlan {
  __typename: 'SellingPlan'
  /** The description of the selling plan. */
  description?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'. */
  name: Scalars['String']
  /** The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing. */
  options: Array<StorefrontApiSellingPlanOption>
  /** The price adjustments that a selling plan makes when a variant is purchased with a selling plan. */
  priceAdjustments: Array<StorefrontApiSellingPlanPriceAdjustment>
  /** Whether purchasing the selling plan will result in multiple deliveries. */
  recurringDeliveries: Scalars['Boolean']
}

/** Represents an association between a variant and a selling plan. Selling plan allocations describe the options offered for each variant, and the price of the variant when purchased with a selling plan. */
export interface StorefrontApiSellingPlanAllocation {
  __typename: 'SellingPlanAllocation'
  /** A list of price adjustments, with a maximum of two. When there are two, the first price adjustment goes into effect at the time of purchase, while the second one starts after a certain number of orders. A price adjustment represents how a selling plan affects pricing when a variant is purchased with a selling plan. Prices display in the customer's currency if the shop is configured for it. */
  priceAdjustments: Array<StorefrontApiSellingPlanAllocationPriceAdjustment>
  /** A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlan: StorefrontApiSellingPlan
}

/**
 * An auto-generated type for paginating through multiple SellingPlanAllocations.
 *
 */
export interface StorefrontApiSellingPlanAllocationConnection {
  __typename: 'SellingPlanAllocationConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiSellingPlanAllocationEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one SellingPlanAllocation and a cursor during pagination.
 *
 */
export interface StorefrontApiSellingPlanAllocationEdge {
  __typename: 'SellingPlanAllocationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of SellingPlanAllocationEdge. */
  node: StorefrontApiSellingPlanAllocation
}

/** The resulting prices for variants when they're purchased with a specific selling plan. */
export interface StorefrontApiSellingPlanAllocationPriceAdjustment {
  __typename: 'SellingPlanAllocationPriceAdjustment'
  /** The price of the variant when it's purchased without a selling plan for the same number of deliveries. For example, if a customer purchases 6 deliveries of $10.00 granola separately, then the price is 6 x $10.00 = $60.00. */
  compareAtPrice: StorefrontApiMoneyV2
  /** The effective price for a single delivery. For example, for a prepaid subscription plan that includes 6 deliveries at the price of $48.00, the per delivery price is $8.00. */
  perDeliveryPrice: StorefrontApiMoneyV2
  /** The price of the variant when it's purchased with a selling plan For example, for a prepaid subscription plan that includes 6 deliveries of $10.00 granola, where the customer gets 20% off, the price is 6 x $10.00 x 0.80 = $48.00. */
  price: StorefrontApiMoneyV2
  /** The resulting price per unit for the variant associated with the selling plan. If the variant isn't sold by quantity or measurement, then this field returns `null`. */
  unitPrice?: Maybe<StorefrontApiMoneyV2>
}

/**
 * An auto-generated type for paginating through multiple SellingPlans.
 *
 */
export interface StorefrontApiSellingPlanConnection {
  __typename: 'SellingPlanConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiSellingPlanEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one SellingPlan and a cursor during pagination.
 *
 */
export interface StorefrontApiSellingPlanEdge {
  __typename: 'SellingPlanEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of SellingPlanEdge. */
  node: StorefrontApiSellingPlan
}

/** A fixed amount that's deducted from the original variant price. For example, $10.00 off. */
export interface StorefrontApiSellingPlanFixedAmountPriceAdjustment {
  __typename: 'SellingPlanFixedAmountPriceAdjustment'
  /** The money value of the price adjustment. */
  adjustmentAmount: StorefrontApiMoneyV2
}

/** A fixed price adjustment for a variant that's purchased with a selling plan. */
export interface StorefrontApiSellingPlanFixedPriceAdjustment {
  __typename: 'SellingPlanFixedPriceAdjustment'
  /** A new price of the variant when it's purchased with the selling plan. */
  price: StorefrontApiMoneyV2
}

/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
export interface StorefrontApiSellingPlanGroup {
  __typename: 'SellingPlanGroup'
  /** A display friendly name for the app that created the selling plan group. */
  appName?: Maybe<Scalars['String']>
  /** The name of the selling plan group. */
  name: Scalars['String']
  /** Represents the selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. */
  options: Array<StorefrontApiSellingPlanGroupOption>
  /** A list of selling plans in a selling plan group. A selling plan is a representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlans: StorefrontApiSellingPlanConnection
}

/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
export type StorefrontApiSellingPlanGroupSellingPlansArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/**
 * An auto-generated type for paginating through multiple SellingPlanGroups.
 *
 */
export interface StorefrontApiSellingPlanGroupConnection {
  __typename: 'SellingPlanGroupConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiSellingPlanGroupEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one SellingPlanGroup and a cursor during pagination.
 *
 */
export interface StorefrontApiSellingPlanGroupEdge {
  __typename: 'SellingPlanGroupEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of SellingPlanGroupEdge. */
  node: StorefrontApiSellingPlanGroup
}

/**
 * Represents an option on a selling plan group that's available in the drop-down list in the storefront.
 *
 * Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.
 */
export interface StorefrontApiSellingPlanGroupOption {
  __typename: 'SellingPlanGroupOption'
  /** The name of the option. For example, 'Delivery every'. */
  name: Scalars['String']
  /** The values for the options specified by the selling plans in the selling plan group. For example, '1 week', '2 weeks', '3 weeks'. */
  values: Array<Scalars['String']>
}

/** An option provided by a Selling Plan. */
export interface StorefrontApiSellingPlanOption {
  __typename: 'SellingPlanOption'
  /** The name of the option (ie "Delivery every"). */
  name?: Maybe<Scalars['String']>
  /** The value of the option (ie "Month"). */
  value?: Maybe<Scalars['String']>
}

/** A percentage amount that's deducted from the original variant price. For example, 10% off. */
export interface StorefrontApiSellingPlanPercentagePriceAdjustment {
  __typename: 'SellingPlanPercentagePriceAdjustment'
  /** The percentage value of the price adjustment. */
  adjustmentPercentage: Scalars['Int']
}

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. If a variant has multiple price adjustments, then the first price adjustment applies when the variant is initially purchased. The second price adjustment applies after a certain number of orders (specified by the `orderCount` field) are made. If a selling plan doesn't have any price adjustments, then the unadjusted price of the variant is the effective price. */
export interface StorefrontApiSellingPlanPriceAdjustment {
  __typename: 'SellingPlanPriceAdjustment'
  /** The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price. */
  adjustmentValue: StorefrontApiSellingPlanPriceAdjustmentValue
  /** The number of orders that the price adjustment applies to. If the price adjustment always applies, then this field is `null`. */
  orderCount?: Maybe<Scalars['Int']>
}

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. */
export type StorefrontApiSellingPlanPriceAdjustmentValue =
  | StorefrontApiSellingPlanFixedAmountPriceAdjustment
  | StorefrontApiSellingPlanFixedPriceAdjustment
  | StorefrontApiSellingPlanPercentagePriceAdjustment

/** A shipping rate to be applied to a checkout. */
export interface StorefrontApiShippingRate {
  __typename: 'ShippingRate'
  /** Human-readable unique identifier for this shipping rate. */
  handle: Scalars['String']
  /**
   * Price of this shipping rate.
   * @deprecated Use `priceV2` instead.
   */
  price: Scalars['Money']
  /** Price of this shipping rate. */
  priceV2: StorefrontApiMoneyV2
  /** Title of this shipping rate. */
  title: Scalars['String']
}

/** Shop represents a collection of the general settings and information about the shop. */
export interface StorefrontApiShop extends StorefrontApiHasMetafields {
  __typename: 'Shop'
  /**
   * List of the shop' articles.
   * @deprecated Use `QueryRoot.articles` instead.
   */
  articles: StorefrontApiArticleConnection
  /**
   * List of the shop' blogs.
   * @deprecated Use `QueryRoot.blogs` instead.
   */
  blogs: StorefrontApiBlogConnection
  /**
   * Find a collection by its handle.
   * @deprecated Use `QueryRoot.collectionByHandle` instead.
   */
  collectionByHandle?: Maybe<StorefrontApiCollection>
  /**
   * List of the shop’s collections.
   * @deprecated Use `QueryRoot.collections` instead.
   */
  collections: StorefrontApiCollectionConnection
  /**
   * The three-letter code for the currency that the shop accepts.
   * @deprecated Use `paymentSettings` instead.
   */
  currencyCode: StorefrontApiCurrencyCode
  /** A description of the shop. */
  description?: Maybe<Scalars['String']>
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe<StorefrontApiMetafield>
  /**
   * A paginated list of metafields associated with the resource.
   * @deprecated As of 2022-07, the paginated `metafields` field has been repurposed to require a list of metafield identifiers.
   *
   */
  metafields: StorefrontApiMetafieldConnection
  /** A string representing the way currency is formatted when the currency isn’t specified. */
  moneyFormat: Scalars['String']
  /** The shop’s name. */
  name: Scalars['String']
  /** Settings related to payments. */
  paymentSettings: StorefrontApiPaymentSettings
  /** The primary domain of the shop’s Online Store. */
  primaryDomain: StorefrontApiDomain
  /** The shop’s privacy policy. */
  privacyPolicy?: Maybe<StorefrontApiShopPolicy>
  /**
   * Find a product by its handle.
   * @deprecated Use `QueryRoot.productByHandle` instead.
   */
  productByHandle?: Maybe<StorefrontApiProduct>
  /**
   * A list of tags that have been added to products.
   * Additional access scope required: unauthenticated_read_product_tags.
   *
   * @deprecated Use `QueryRoot.productTags` instead.
   */
  productTags: StorefrontApiStringConnection
  /**
   * List of the shop’s product types.
   * @deprecated Use `QueryRoot.productTypes` instead.
   */
  productTypes: StorefrontApiStringConnection
  /**
   * List of the shop’s products.
   * @deprecated Use `QueryRoot.products` instead.
   */
  products: StorefrontApiProductConnection
  /** The shop’s refund policy. */
  refundPolicy?: Maybe<StorefrontApiShopPolicy>
  /** The shop’s shipping policy. */
  shippingPolicy?: Maybe<StorefrontApiShopPolicy>
  /** Countries that the shop ships to. */
  shipsToCountries: Array<StorefrontApiCountryCode>
  /**
   * The shop’s Shopify Payments account id.
   * @deprecated Use `paymentSettings` instead.
   */
  shopifyPaymentsAccountId?: Maybe<Scalars['String']>
  /** The shop’s subscription policy. */
  subscriptionPolicy?: Maybe<StorefrontApiShopPolicyWithDefault>
  /** The shop’s terms of service. */
  termsOfService?: Maybe<StorefrontApiShopPolicy>
}

/** Shop represents a collection of the general settings and information about the shop. */
export type StorefrontApiShopArticlesArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<StorefrontApiArticleSortKeys>
}

/** Shop represents a collection of the general settings and information about the shop. */
export type StorefrontApiShopBlogsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<StorefrontApiBlogSortKeys>
}

/** Shop represents a collection of the general settings and information about the shop. */
export type StorefrontApiShopCollectionByHandleArgs = {
  handle: Scalars['String']
}

/** Shop represents a collection of the general settings and information about the shop. */
export type StorefrontApiShopCollectionsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<StorefrontApiCollectionSortKeys>
}

/** Shop represents a collection of the general settings and information about the shop. */
export type StorefrontApiShopMetafieldArgs = {
  key: Scalars['String']
  namespace: Scalars['String']
}

/** Shop represents a collection of the general settings and information about the shop. */
export type StorefrontApiShopMetafieldsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  namespace?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
}

/** Shop represents a collection of the general settings and information about the shop. */
export type StorefrontApiShopProductByHandleArgs = {
  handle: Scalars['String']
}

/** Shop represents a collection of the general settings and information about the shop. */
export type StorefrontApiShopProductTagsArgs = {
  first: Scalars['Int']
}

/** Shop represents a collection of the general settings and information about the shop. */
export type StorefrontApiShopProductTypesArgs = {
  first: Scalars['Int']
}

/** Shop represents a collection of the general settings and information about the shop. */
export type StorefrontApiShopProductsArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  query?: InputMaybe<Scalars['String']>
  reverse?: InputMaybe<Scalars['Boolean']>
  sortKey?: InputMaybe<StorefrontApiProductSortKeys>
}

/** Policy that a merchant has configured for their store, such as their refund or privacy policy. */
export interface StorefrontApiShopPolicy extends StorefrontApiNode {
  __typename: 'ShopPolicy'
  /** Policy text, maximum size of 64kb. */
  body: Scalars['String']
  /** Policy’s handle. */
  handle: Scalars['String']
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** Policy’s title. */
  title: Scalars['String']
  /** Public URL to the policy. */
  url: Scalars['URL']
}

/**
 * A policy for the store that comes with a default value, such as a subscription policy.
 * If the merchant hasn't configured a policy for their store, then the policy will return the default value.
 * Otherwise, the policy will return the merchant-configured value.
 *
 */
export interface StorefrontApiShopPolicyWithDefault {
  __typename: 'ShopPolicyWithDefault'
  /** The text of the policy. Maximum size: 64KB. */
  body: Scalars['String']
  /** The handle of the policy. */
  handle: Scalars['String']
  /** The unique identifier of the policy. A default policy doesn't have an ID. */
  id?: Maybe<Scalars['ID']>
  /** The title of the policy. */
  title: Scalars['String']
  /** Public URL to the policy. */
  url: Scalars['URL']
}

/**
 * The availability of a product variant at a particular location.
 * Local pick-up must be enabled in the  store's shipping settings, otherwise this will return an empty result.
 *
 */
export interface StorefrontApiStoreAvailability {
  __typename: 'StoreAvailability'
  /** Whether the product variant is in-stock at this location. */
  available: Scalars['Boolean']
  /** The location where this product variant is stocked at. */
  location: StorefrontApiLocation
  /** Returns the estimated amount of time it takes for pickup to be ready (Example: Usually ready in 24 hours). */
  pickUpTime: Scalars['String']
}

/**
 * An auto-generated type for paginating through multiple StoreAvailabilities.
 *
 */
export interface StorefrontApiStoreAvailabilityConnection {
  __typename: 'StoreAvailabilityConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiStoreAvailabilityEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one StoreAvailability and a cursor during pagination.
 *
 */
export interface StorefrontApiStoreAvailabilityEdge {
  __typename: 'StoreAvailabilityEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of StoreAvailabilityEdge. */
  node: StorefrontApiStoreAvailability
}

/**
 * An auto-generated type for paginating through a list of Strings.
 *
 */
export interface StorefrontApiStringConnection {
  __typename: 'StringConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiStringEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/**
 * An auto-generated type which holds one String and a cursor during pagination.
 *
 */
export interface StorefrontApiStringEdge {
  __typename: 'StringEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of StringEdge. */
  node: Scalars['String']
}

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 *
 */
export type StorefrontApiTokenizedPaymentInput = {
  /** The amount of the payment. */
  amount: Scalars['Money']
  /** The billing address for the payment. */
  billingAddress: StorefrontApiMailingAddressInput
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String']
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: InputMaybe<Scalars['String']>
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String']
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>
  /** The type of payment token. */
  type: Scalars['String']
}

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 *
 */
export type StorefrontApiTokenizedPaymentInputV2 = {
  /** The billing address for the payment. */
  billingAddress: StorefrontApiMailingAddressInput
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String']
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: InputMaybe<Scalars['String']>
  /** The amount and currency of the payment. */
  paymentAmount: StorefrontApiMoneyInput
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String']
  /** Whether to execute the payment in test mode, if possible. Test mode is not supported in production stores. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>
  /** The type of payment token. */
  type: Scalars['String']
}

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 *
 */
export type StorefrontApiTokenizedPaymentInputV3 = {
  /** The billing address for the payment. */
  billingAddress: StorefrontApiMailingAddressInput
  /** A unique client generated key used to avoid duplicate charges. When a duplicate payment is found, the original is returned instead of creating a new one. For more information, refer to [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests). */
  idempotencyKey: Scalars['String']
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: InputMaybe<Scalars['String']>
  /** The amount and currency of the payment. */
  paymentAmount: StorefrontApiMoneyInput
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String']
  /** Whether to execute the payment in test mode, if possible. Test mode is not supported in production stores. Defaults to `false`. */
  test?: InputMaybe<Scalars['Boolean']>
  /** The type of payment token. */
  type: StorefrontApiPaymentTokenType
}

/** An object representing exchange of money for a product or service. */
export interface StorefrontApiTransaction {
  __typename: 'Transaction'
  /**
   * The amount of money that the transaction was for.
   * @deprecated Use `amountV2` instead.
   */
  amount: Scalars['Money']
  /** The amount of money that the transaction was for. */
  amountV2: StorefrontApiMoneyV2
  /** The kind of the transaction. */
  kind: StorefrontApiTransactionKind
  /**
   * The status of the transaction.
   * @deprecated Use `statusV2` instead.
   */
  status: StorefrontApiTransactionStatus
  /** The status of the transaction. */
  statusV2?: Maybe<StorefrontApiTransactionStatus>
  /** Whether the transaction was done in test mode or not. */
  test: Scalars['Boolean']
}

/** The different kinds of order transactions. */
export enum StorefrontApiTransactionKind {
  /**
   * An amount reserved against the cardholder's funding source.
   * Money does not change hands until the authorization is captured.
   *
   */
  Authorization = 'AUTHORIZATION',
  /** A transfer of the money that was reserved during the authorization stage. */
  Capture = 'CAPTURE',
  /** Money returned to the customer when they have paid too much. */
  Change = 'CHANGE',
  /** An authorization for a payment taken with an EMV credit card reader. */
  EmvAuthorization = 'EMV_AUTHORIZATION',
  /** An authorization and capture performed together in a single step. */
  Sale = 'SALE',
}

/** Transaction statuses describe the status of a transaction. */
export enum StorefrontApiTransactionStatus {
  /** There was an error while processing the transaction. */
  Error = 'ERROR',
  /** The transaction failed. */
  Failure = 'FAILURE',
  /** The transaction is pending. */
  Pending = 'PENDING',
  /** The transaction succeeded. */
  Success = 'SUCCESS',
}

/**
 * The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml).
 *
 */
export interface StorefrontApiUnitPriceMeasurement {
  __typename: 'UnitPriceMeasurement'
  /** The type of unit of measurement for the unit price measurement. */
  measuredType?: Maybe<StorefrontApiUnitPriceMeasurementMeasuredType>
  /** The quantity unit for the unit price measurement. */
  quantityUnit?: Maybe<StorefrontApiUnitPriceMeasurementMeasuredUnit>
  /** The quantity value for the unit price measurement. */
  quantityValue: Scalars['Float']
  /** The reference unit for the unit price measurement. */
  referenceUnit?: Maybe<StorefrontApiUnitPriceMeasurementMeasuredUnit>
  /** The reference value for the unit price measurement. */
  referenceValue: Scalars['Int']
}

/** The accepted types of unit of measurement. */
export enum StorefrontApiUnitPriceMeasurementMeasuredType {
  /** Unit of measurements representing areas. */
  Area = 'AREA',
  /** Unit of measurements representing lengths. */
  Length = 'LENGTH',
  /** Unit of measurements representing volumes. */
  Volume = 'VOLUME',
  /** Unit of measurements representing weights. */
  Weight = 'WEIGHT',
}

/** The valid units of measurement for a unit price measurement. */
export enum StorefrontApiUnitPriceMeasurementMeasuredUnit {
  /** 100 centiliters equals 1 liter. */
  Cl = 'CL',
  /** 100 centimeters equals 1 meter. */
  Cm = 'CM',
  /** Metric system unit of weight. */
  G = 'G',
  /** 1 kilogram equals 1000 grams. */
  Kg = 'KG',
  /** Metric system unit of volume. */
  L = 'L',
  /** Metric system unit of length. */
  M = 'M',
  /** Metric system unit of area. */
  M2 = 'M2',
  /** 1 cubic meter equals 1000 liters. */
  M3 = 'M3',
  /** 1000 milligrams equals 1 gram. */
  Mg = 'MG',
  /** 1000 milliliters equals 1 liter. */
  Ml = 'ML',
  /** 1000 millimeters equals 1 meter. */
  Mm = 'MM',
}

/** Systems of weights and measures. */
export enum StorefrontApiUnitSystem {
  /** Imperial system of weights and measures. */
  ImperialSystem = 'IMPERIAL_SYSTEM',
  /** Metric system of weights and measures. */
  MetricSystem = 'METRIC_SYSTEM',
}

/** Represents an error in the input of a mutation. */
export interface StorefrontApiUserError extends StorefrontApiDisplayableError {
  __typename: 'UserError'
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** A filter used to view a subset of products in a collection matching a specific variant option. */
export type StorefrontApiVariantOptionFilter = {
  /** The name of the variant option to filter on. */
  name: Scalars['String']
  /** The value of the variant option to filter on. */
  value: Scalars['String']
}

/** Represents a Shopify hosted video. */
export interface StorefrontApiVideo
  extends StorefrontApiMedia,
    StorefrontApiNode {
  __typename: 'Video'
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars['String']>
  /** A globally-unique identifier. */
  id: Scalars['ID']
  /** The media content type. */
  mediaContentType: StorefrontApiMediaContentType
  /** The preview image for the media. */
  previewImage?: Maybe<StorefrontApiImage>
  /** The sources for a video. */
  sources: Array<StorefrontApiVideoSource>
}

/** Represents a source for a Shopify hosted video. */
export interface StorefrontApiVideoSource {
  __typename: 'VideoSource'
  /** The format of the video source. */
  format: Scalars['String']
  /** The height of the video. */
  height: Scalars['Int']
  /** The video MIME type. */
  mimeType: Scalars['String']
  /** The URL of the video. */
  url: Scalars['String']
  /** The width of the video. */
  width: Scalars['Int']
}

/** Units of measurement for weight. */
export enum StorefrontApiWeightUnit {
  /** Metric system unit of mass. */
  Grams = 'GRAMS',
  /** 1 kilogram equals 1000 grams. */
  Kilograms = 'KILOGRAMS',
  /** Imperial system unit of mass. */
  Ounces = 'OUNCES',
  /** 1 pound equals 16 ounces. */
  Pounds = 'POUNDS',
}
