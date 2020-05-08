export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /**
   * An RFC 3986 and RFC 3987 compliant URI string.
   *
   * Example value: `"https://johns-apparel.myshopify.com"`.
   */
  URL: any
  /** A string containing HTML code. Example value: `"<p>Grey cotton knit sweater.</p>"`. */
  HTML: any
  /** An ISO-8601 encoded UTC date time string. Example value: `"2019-07-03T20:47:55Z"`. */
  DateTime: Date
  /** A monetary value string. Example value: `"100.57"`. */
  Money: any
  /** A signed decimal number, which supports arbitrary precision and is serialized as a string. Example value: `"29.99"`. */
  Decimal: any
}

/** A version of the API. */
export interface StorefrontApiApiVersion {
  __typename: 'ApiVersion'
  /** The human-readable name of the version. */
  displayName: Scalars['String']
  /** The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle. */
  handle: Scalars['String']
  /** Whether the version is supported by Shopify. */
  supported: Scalars['Boolean']
}

/** Details about the gift card used on the checkout. */
export interface StorefrontApiAppliedGiftCard extends StorefrontApiNode {
  __typename: 'AppliedGiftCard'
  /**
   * The amount that was taken from the gift card by applying it.
   * @deprecated Use `amountUsedV2` instead
   */
  amountUsed: Scalars['Money']
  /** The amount that was taken from the gift card by applying it. */
  amountUsedV2: StorefrontApiMoneyV2
  /**
   * The amount left on the gift card.
   * @deprecated Use `balanceV2` instead
   */
  balance: Scalars['Money']
  /** The amount left on the gift card. */
  balanceV2: StorefrontApiMoneyV2
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The last characters of the gift card. */
  lastCharacters: Scalars['String']
  /** The amount that was applied to the checkout in its currency. */
  presentmentAmountUsed: StorefrontApiMoneyV2
}

/** An article in an online store blog. */
export interface StorefrontApiArticle extends StorefrontApiNode {
  __typename: 'Article'
  /**
   * The article's author.
   * @deprecated Use `authorV2` instead
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
  /** A human-friendly unique string for the Article automatically generated from its title. */
  handle: Scalars['String']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The image associated with the article. */
  image?: Maybe<StorefrontApiImage>
  /** The date and time when the article was published. */
  publishedAt: Scalars['DateTime']
  /** The article’s SEO information. */
  seo?: Maybe<StorefrontApiSeo>
  /** A categorization that a article can be tagged with. */
  tags: Array<Scalars['String']>
  /** The article’s name. */
  title: Scalars['String']
  /** The url pointing to the article accessible from the web. */
  url: Scalars['URL']
}

/** An article in an online store blog. */
export type StorefrontApiArticleCommentsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** An article in an online store blog. */
export type StorefrontApiArticleContentArgs = {
  truncateAt?: Maybe<Scalars['Int']>
}

/** An article in an online store blog. */
export type StorefrontApiArticleExcerptArgs = {
  truncateAt?: Maybe<Scalars['Int']>
}

/** An article in an online store blog. */
export type StorefrontApiArticleImageArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<StorefrontApiCropRegion>
  scale?: Maybe<Scalars['Int']>
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

export interface StorefrontApiArticleConnection {
  __typename: 'ArticleConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiArticleEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

export interface StorefrontApiArticleEdge {
  __typename: 'ArticleEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ArticleEdge. */
  node: StorefrontApiArticle
}

/** The set of valid sort keys for the Article query. */
export enum StorefrontApiArticleSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `blog_title` value. */
  BlogTitle = 'BLOG_TITLE',
  /** Sort by the `author` value. */
  Author = 'AUTHOR',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `published_at` value. */
  PublishedAt = 'PUBLISHED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
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

/** Automatic discount applications capture the intentions of a discount that was automatically applied. */
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
   */
  ready: Scalars['Boolean']
  /** The fetched shipping rates. `null` until the `ready` field is `true`. */
  shippingRates?: Maybe<Array<StorefrontApiShippingRate>>
}

/** An online store blog. */
export interface StorefrontApiBlog extends StorefrontApiNode {
  __typename: 'Blog'
  /** Find an article by its handle. */
  articleByHandle?: Maybe<StorefrontApiArticle>
  /** List of the blog's articles. */
  articles: StorefrontApiArticleConnection
  /** The authors who have contributed to the blog. */
  authors: Array<StorefrontApiArticleAuthor>
  /** A human-friendly unique string for the Blog automatically generated from its title. */
  handle: Scalars['String']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The blogs’s title. */
  title: Scalars['String']
  /** The url pointing to the blog accessible from the web. */
  url: Scalars['URL']
}

/** An online store blog. */
export type StorefrontApiBlogArticleByHandleArgs = {
  handle: Scalars['String']
}

/** An online store blog. */
export type StorefrontApiBlogArticlesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<StorefrontApiArticleSortKeys>
  query?: Maybe<Scalars['String']>
}

export interface StorefrontApiBlogConnection {
  __typename: 'BlogConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiBlogEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

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
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** Card brand, such as Visa or Mastercard, which can be used for payments. */
export enum StorefrontApiCardBrand {
  /** Visa */
  Visa = 'VISA',
  /** Mastercard */
  Mastercard = 'MASTERCARD',
  /** Discover */
  Discover = 'DISCOVER',
  /** American Express */
  AmericanExpress = 'AMERICAN_EXPRESS',
  /** Diners Club */
  DinersClub = 'DINERS_CLUB',
  /** JCB */
  Jcb = 'JCB',
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
   */
  availableShippingRates?: Maybe<StorefrontApiAvailableShippingRates>
  /** The date and time when the checkout was completed. */
  completedAt?: Maybe<Scalars['DateTime']>
  /** The date and time when the checkout was created. */
  createdAt: Scalars['DateTime']
  /** The currency code for the Checkout. */
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
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** A list of line item objects, each one containing information about an item in the checkout. */
  lineItems: StorefrontApiCheckoutLineItemConnection
  /** The sum of all the prices of all the items in the checkout. Taxes, shipping and discounts excluded. */
  lineItemsSubtotalPrice: StorefrontApiMoneyV2
  /** The note associated with the checkout. */
  note?: Maybe<Scalars['String']>
  /** The resulting order from a paid checkout. */
  order?: Maybe<StorefrontApiOrder>
  /** The Order Status Page for this Checkout, null when checkout is not completed. */
  orderStatusUrl?: Maybe<Scalars['URL']>
  /**
   * The amount left to be paid. This is equal to the cost of the line items, taxes
   * and shipping minus discounts and gift cards.
   * @deprecated Use `paymentDueV2` instead
   */
  paymentDue: Scalars['Money']
  /**
   * The amount left to be paid. This is equal to the cost of the line items, taxes
   * and shipping minus discounts and gift cards.
   */
  paymentDueV2: StorefrontApiMoneyV2
  /**
   * Whether or not the Checkout is ready and can be completed. Checkouts may
   * have asynchronous operations that can take time to finish. If you want
   * to complete a checkout or ensure all the fields are populated and up to
   * date, polling is required until the value is true.
   */
  ready: Scalars['Boolean']
  /** States whether or not the fulfillment requires shipping. */
  requiresShipping: Scalars['Boolean']
  /** The shipping address to where the line items will be shipped. */
  shippingAddress?: Maybe<StorefrontApiMailingAddress>
  /** The discounts that have been allocated onto the shipping line by discount applications. */
  shippingDiscountAllocations: Array<StorefrontApiDiscountAllocation>
  /** Once a shipping rate is selected by the customer it is transitioned to a `shipping_line` object. */
  shippingLine?: Maybe<StorefrontApiShippingRate>
  /**
   * Price of the checkout before shipping and taxes.
   * @deprecated Use `subtotalPriceV2` instead
   */
  subtotalPrice: Scalars['Money']
  /** Price of the checkout before shipping and taxes. */
  subtotalPriceV2: StorefrontApiMoneyV2
  /** Specifies if the Checkout is tax exempt. */
  taxExempt: Scalars['Boolean']
  /** Specifies if taxes are included in the line item and shipping line prices. */
  taxesIncluded: Scalars['Boolean']
  /**
   * The sum of all the prices of all the items in the checkout, taxes and discounts included.
   * @deprecated Use `totalPriceV2` instead
   */
  totalPrice: Scalars['Money']
  /** The sum of all the prices of all the items in the checkout, taxes and discounts included. */
  totalPriceV2: StorefrontApiMoneyV2
  /**
   * The sum of all the taxes applied to the line items and shipping lines in the checkout.
   * @deprecated Use `totalTaxV2` instead
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
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** A container for all the information required to checkout items and pay. */
export type StorefrontApiCheckoutLineItemsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Specifies the fields required to update a checkout's attributes. */
export type StorefrontApiCheckoutAttributesUpdateInput = {
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: Maybe<Scalars['String']>
  /** A list of extra information that is added to the checkout. */
  customAttributes?: Maybe<Array<StorefrontApiAttributeInput>>
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of the addresses is still done at complete time.
   */
  allowPartialAddresses?: Maybe<Scalars['Boolean']>
}

/** Return type for `checkoutAttributesUpdate` mutation. */
export interface StorefrontApiCheckoutAttributesUpdatePayload {
  __typename: 'CheckoutAttributesUpdatePayload'
  /** The updated checkout object. */
  checkout: StorefrontApiCheckout
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Specifies the fields required to update a checkout's attributes. */
export type StorefrontApiCheckoutAttributesUpdateV2Input = {
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: Maybe<Scalars['String']>
  /** A list of extra information that is added to the checkout. */
  customAttributes?: Maybe<Array<StorefrontApiAttributeInput>>
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of the addresses is still done at complete time.
   */
  allowPartialAddresses?: Maybe<Scalars['Boolean']>
}

/** Return type for `checkoutAttributesUpdateV2` mutation. */
export interface StorefrontApiCheckoutAttributesUpdateV2Payload {
  __typename: 'CheckoutAttributesUpdateV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutCompleteFree` mutation. */
export interface StorefrontApiCheckoutCompleteFreePayload {
  __typename: 'CheckoutCompleteFreePayload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutCompleteWithCreditCard` mutation. */
export interface StorefrontApiCheckoutCompleteWithCreditCardPayload {
  __typename: 'CheckoutCompleteWithCreditCardPayload'
  /** The checkout on which the payment was applied. */
  checkout: StorefrontApiCheckout
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<StorefrontApiPayment>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutCompleteWithCreditCardV2` mutation. */
export interface StorefrontApiCheckoutCompleteWithCreditCardV2Payload {
  __typename: 'CheckoutCompleteWithCreditCardV2Payload'
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<StorefrontApiPayment>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutCompleteWithTokenizedPayment` mutation. */
export interface StorefrontApiCheckoutCompleteWithTokenizedPaymentPayload {
  __typename: 'CheckoutCompleteWithTokenizedPaymentPayload'
  /** The checkout on which the payment was applied. */
  checkout: StorefrontApiCheckout
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<StorefrontApiPayment>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutCompleteWithTokenizedPaymentV2` mutation. */
export interface StorefrontApiCheckoutCompleteWithTokenizedPaymentV2Payload {
  __typename: 'CheckoutCompleteWithTokenizedPaymentV2Payload'
  /** The checkout on which the payment was applied. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /** A representation of the attempted payment. */
  payment?: Maybe<StorefrontApiPayment>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Specifies the fields required to create a checkout. */
export type StorefrontApiCheckoutCreateInput = {
  /** The email with which the customer wants to checkout. */
  email?: Maybe<Scalars['String']>
  /** A list of line item objects, each one containing information about an item in the checkout. */
  lineItems?: Maybe<Array<StorefrontApiCheckoutLineItemInput>>
  /** The shipping address to where the line items will be shipped. */
  shippingAddress?: Maybe<StorefrontApiMailingAddressInput>
  /** The text of an optional note that a shop owner can attach to the checkout. */
  note?: Maybe<Scalars['String']>
  /** A list of extra information that is added to the checkout. */
  customAttributes?: Maybe<Array<StorefrontApiAttributeInput>>
  /**
   * Allows setting partial addresses on a Checkout, skipping the full validation of attributes.
   * The required attributes are city, province, and country.
   * Full validation of addresses is still done at complete time.
   */
  allowPartialAddresses?: Maybe<Scalars['Boolean']>
  /**
   * The three-letter currency code of one of the shop's enabled presentment currencies.
   * Including this field creates a checkout in the specified currency. By default, new
   * checkouts are created in the shop's primary currency.
   */
  presentmentCurrencyCode?: Maybe<StorefrontApiCurrencyCode>
}

/** Return type for `checkoutCreate` mutation. */
export interface StorefrontApiCheckoutCreatePayload {
  __typename: 'CheckoutCreatePayload'
  /** The new checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
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
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutCustomerAssociateV2` mutation. */
export interface StorefrontApiCheckoutCustomerAssociateV2Payload {
  __typename: 'CheckoutCustomerAssociateV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /** The associated customer object. */
  customer?: Maybe<StorefrontApiCustomer>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutCustomerDisassociate` mutation. */
export interface StorefrontApiCheckoutCustomerDisassociatePayload {
  __typename: 'CheckoutCustomerDisassociatePayload'
  /** The updated checkout object. */
  checkout: StorefrontApiCheckout
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutCustomerDisassociateV2` mutation. */
export interface StorefrontApiCheckoutCustomerDisassociateV2Payload {
  __typename: 'CheckoutCustomerDisassociateV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutDiscountCodeApply` mutation. */
export interface StorefrontApiCheckoutDiscountCodeApplyPayload {
  __typename: 'CheckoutDiscountCodeApplyPayload'
  /** The updated checkout object. */
  checkout: StorefrontApiCheckout
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutDiscountCodeApplyV2` mutation. */
export interface StorefrontApiCheckoutDiscountCodeApplyV2Payload {
  __typename: 'CheckoutDiscountCodeApplyV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutDiscountCodeRemove` mutation. */
export interface StorefrontApiCheckoutDiscountCodeRemovePayload {
  __typename: 'CheckoutDiscountCodeRemovePayload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutEmailUpdate` mutation. */
export interface StorefrontApiCheckoutEmailUpdatePayload {
  __typename: 'CheckoutEmailUpdatePayload'
  /** The checkout object with the updated email. */
  checkout: StorefrontApiCheckout
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutEmailUpdateV2` mutation. */
export interface StorefrontApiCheckoutEmailUpdateV2Payload {
  __typename: 'CheckoutEmailUpdateV2Payload'
  /** The checkout object with the updated email. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Possible error codes that could be returned by a checkout mutation. */
export enum StorefrontApiCheckoutErrorCode {
  /** Input value is blank. */
  Blank = 'BLANK',
  /** Input value is invalid. */
  Invalid = 'INVALID',
  /** Input value is too long. */
  TooLong = 'TOO_LONG',
  /** Input value is not present. */
  Present = 'PRESENT',
  /** Input value should be less than maximum allowed value. */
  LessThan = 'LESS_THAN',
  /** Input value should be greater than or equal to minimum allowed value. */
  GreaterThanOrEqualTo = 'GREATER_THAN_OR_EQUAL_TO',
  /** Input value should be less or equal to maximum allowed value. */
  LessThanOrEqualTo = 'LESS_THAN_OR_EQUAL_TO',
  /** Checkout is already completed. */
  AlreadyCompleted = 'ALREADY_COMPLETED',
  /** Checkout is locked. */
  Locked = 'LOCKED',
  /** Input value is not supported. */
  NotSupported = 'NOT_SUPPORTED',
  /** Input email contains an invalid domain name. */
  BadDomain = 'BAD_DOMAIN',
  /** Input Zip is invalid for country provided. */
  InvalidForCountry = 'INVALID_FOR_COUNTRY',
  /** Input Zip is invalid for country and province provided. */
  InvalidForCountryAndProvince = 'INVALID_FOR_COUNTRY_AND_PROVINCE',
  /** Invalid state in country. */
  InvalidStateInCountry = 'INVALID_STATE_IN_COUNTRY',
  /** Invalid province in country. */
  InvalidProvinceInCountry = 'INVALID_PROVINCE_IN_COUNTRY',
  /** Invalid region in country. */
  InvalidRegionInCountry = 'INVALID_REGION_IN_COUNTRY',
  /** Shipping rate expired. */
  ShippingRateExpired = 'SHIPPING_RATE_EXPIRED',
  /** Gift card cannot be applied to a checkout that contains a gift card. */
  GiftCardUnusable = 'GIFT_CARD_UNUSABLE',
  /** Gift card is disabled. */
  GiftCardDisabled = 'GIFT_CARD_DISABLED',
  /** Gift card code is invalid. */
  GiftCardCodeInvalid = 'GIFT_CARD_CODE_INVALID',
  /** Gift card has already been applied. */
  GiftCardAlreadyApplied = 'GIFT_CARD_ALREADY_APPLIED',
  /** Gift card currency does not match checkout currency. */
  GiftCardCurrencyMismatch = 'GIFT_CARD_CURRENCY_MISMATCH',
  /** Gift card is expired. */
  GiftCardExpired = 'GIFT_CARD_EXPIRED',
  /** Gift card has no funds left. */
  GiftCardDepleted = 'GIFT_CARD_DEPLETED',
  /** Gift card was not found. */
  GiftCardNotFound = 'GIFT_CARD_NOT_FOUND',
  /** Cart does not meet discount requirements notice. */
  CartDoesNotMeetDiscountRequirementsNotice = 'CART_DOES_NOT_MEET_DISCOUNT_REQUIREMENTS_NOTICE',
  /** Discount expired. */
  DiscountExpired = 'DISCOUNT_EXPIRED',
  /** Discount disabled. */
  DiscountDisabled = 'DISCOUNT_DISABLED',
  /** Discount limit reached. */
  DiscountLimitReached = 'DISCOUNT_LIMIT_REACHED',
  /** Discount not found. */
  DiscountNotFound = 'DISCOUNT_NOT_FOUND',
  /** Customer already used once per customer discount notice. */
  CustomerAlreadyUsedOncePerCustomerDiscountNotice = 'CUSTOMER_ALREADY_USED_ONCE_PER_CUSTOMER_DISCOUNT_NOTICE',
  /** Checkout is already completed. */
  Empty = 'EMPTY',
  /** Not enough in stock. */
  NotEnoughInStock = 'NOT_ENOUGH_IN_STOCK',
  /** Missing payment input. */
  MissingPaymentInput = 'MISSING_PAYMENT_INPUT',
  /** The amount of the payment does not match the value to be paid. */
  TotalPriceMismatch = 'TOTAL_PRICE_MISMATCH',
  /** Line item was not found in checkout. */
  LineItemNotFound = 'LINE_ITEM_NOT_FOUND',
}

/** Return type for `checkoutGiftCardApply` mutation. */
export interface StorefrontApiCheckoutGiftCardApplyPayload {
  __typename: 'CheckoutGiftCardApplyPayload'
  /** The updated checkout object. */
  checkout: StorefrontApiCheckout
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutGiftCardRemove` mutation. */
export interface StorefrontApiCheckoutGiftCardRemovePayload {
  __typename: 'CheckoutGiftCardRemovePayload'
  /** The updated checkout object. */
  checkout: StorefrontApiCheckout
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutGiftCardRemoveV2` mutation. */
export interface StorefrontApiCheckoutGiftCardRemoveV2Payload {
  __typename: 'CheckoutGiftCardRemoveV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutGiftCardsAppend` mutation. */
export interface StorefrontApiCheckoutGiftCardsAppendPayload {
  __typename: 'CheckoutGiftCardsAppendPayload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
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
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The quantity of the line item. */
  quantity: Scalars['Int']
  /** Title of the line item. Defaults to the product's title. */
  title: Scalars['String']
  /** Product variant of the line item. */
  variant?: Maybe<StorefrontApiProductVariant>
}

export interface StorefrontApiCheckoutLineItemConnection {
  __typename: 'CheckoutLineItemConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiCheckoutLineItemEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

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
  customAttributes?: Maybe<Array<StorefrontApiAttributeInput>>
  /** The quantity of the line item. */
  quantity: Scalars['Int']
  /** The identifier of the product variant for the line item. */
  variantId: Scalars['ID']
}

/** Return type for `checkoutLineItemsAdd` mutation. */
export interface StorefrontApiCheckoutLineItemsAddPayload {
  __typename: 'CheckoutLineItemsAddPayload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutLineItemsRemove` mutation. */
export interface StorefrontApiCheckoutLineItemsRemovePayload {
  __typename: 'CheckoutLineItemsRemovePayload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutLineItemsReplace` mutation. */
export interface StorefrontApiCheckoutLineItemsReplacePayload {
  __typename: 'CheckoutLineItemsReplacePayload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<StorefrontApiCheckoutUserError>
}

/** Return type for `checkoutLineItemsUpdate` mutation. */
export interface StorefrontApiCheckoutLineItemsUpdatePayload {
  __typename: 'CheckoutLineItemsUpdatePayload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Specifies the input fields to update a line item on the checkout. */
export type StorefrontApiCheckoutLineItemUpdateInput = {
  /** The identifier of the line item. */
  id?: Maybe<Scalars['ID']>
  /** The variant identifier of the line item. */
  variantId?: Maybe<Scalars['ID']>
  /** The quantity of the line item. */
  quantity?: Maybe<Scalars['Int']>
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes?: Maybe<Array<StorefrontApiAttributeInput>>
}

/** Return type for `checkoutShippingAddressUpdate` mutation. */
export interface StorefrontApiCheckoutShippingAddressUpdatePayload {
  __typename: 'CheckoutShippingAddressUpdatePayload'
  /** The updated checkout object. */
  checkout: StorefrontApiCheckout
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutShippingAddressUpdateV2` mutation. */
export interface StorefrontApiCheckoutShippingAddressUpdateV2Payload {
  __typename: 'CheckoutShippingAddressUpdateV2Payload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `checkoutShippingLineUpdate` mutation. */
export interface StorefrontApiCheckoutShippingLineUpdatePayload {
  __typename: 'CheckoutShippingLineUpdatePayload'
  /** The updated checkout object. */
  checkout?: Maybe<StorefrontApiCheckout>
  /** List of errors that occurred executing the mutation. */
  checkoutUserErrors: Array<StorefrontApiCheckoutUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `checkoutUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Represents an error that happens during execution of a checkout mutation. */
export interface StorefrontApiCheckoutUserError
  extends StorefrontApiDisplayableError {
  __typename: 'CheckoutUserError'
  /** Error code to uniquely identify the error. */
  code?: Maybe<StorefrontApiCheckoutErrorCode>
  /** Path to the input field which caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/**
 * A collection represents a grouping of products that a shop owner can create to
 * organize them or make their shops easier to browse.
 */
export interface StorefrontApiCollection extends StorefrontApiNode {
  __typename: 'Collection'
  /** Stripped description of the collection, single line with HTML tags removed. */
  description: Scalars['String']
  /** The description of the collection, complete with HTML formatting. */
  descriptionHtml: Scalars['HTML']
  /**
   * A human-friendly unique string for the collection automatically generated from its title.
   * Limit of 255 characters.
   */
  handle: Scalars['String']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** Image associated with the collection. */
  image?: Maybe<StorefrontApiImage>
  /** List of products in the collection. */
  products: StorefrontApiProductConnection
  /** The collection’s name. Limit of 255 characters. */
  title: Scalars['String']
  /** The date and time when the collection was last modified. */
  updatedAt: Scalars['DateTime']
}

/**
 * A collection represents a grouping of products that a shop owner can create to
 * organize them or make their shops easier to browse.
 */
export type StorefrontApiCollectionDescriptionArgs = {
  truncateAt?: Maybe<Scalars['Int']>
}

/**
 * A collection represents a grouping of products that a shop owner can create to
 * organize them or make their shops easier to browse.
 */
export type StorefrontApiCollectionImageArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<StorefrontApiCropRegion>
  scale?: Maybe<Scalars['Int']>
}

/**
 * A collection represents a grouping of products that a shop owner can create to
 * organize them or make their shops easier to browse.
 */
export type StorefrontApiCollectionProductsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<StorefrontApiProductCollectionSortKeys>
}

export interface StorefrontApiCollectionConnection {
  __typename: 'CollectionConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiCollectionEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

export interface StorefrontApiCollectionEdge {
  __typename: 'CollectionEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CollectionEdge. */
  node: StorefrontApiCollection
}

/** The set of valid sort keys for the Collection query. */
export enum StorefrontApiCollectionSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
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
  /** Globally unique identifier. */
  id: Scalars['ID']
}

/** A comment on an article. */
export type StorefrontApiCommentContentArgs = {
  truncateAt?: Maybe<Scalars['Int']>
}

/** The author of a comment. */
export interface StorefrontApiCommentAuthor {
  __typename: 'CommentAuthor'
  /** The author's email. */
  email: Scalars['String']
  /** The author’s name. */
  name: Scalars['String']
}

export interface StorefrontApiCommentConnection {
  __typename: 'CommentConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiCommentEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

export interface StorefrontApiCommentEdge {
  __typename: 'CommentEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of CommentEdge. */
  node: StorefrontApiComment
}

/** ISO 3166-1 alpha-2 country codes with some differences. */
export enum StorefrontApiCountryCode {
  /** Afghanistan. */
  Af = 'AF',
  /** Aland Islands. */
  Ax = 'AX',
  /** Albania. */
  Al = 'AL',
  /** Algeria. */
  Dz = 'DZ',
  /** Andorra. */
  Ad = 'AD',
  /** Angola. */
  Ao = 'AO',
  /** Anguilla. */
  Ai = 'AI',
  /** Antigua And Barbuda. */
  Ag = 'AG',
  /** Argentina. */
  Ar = 'AR',
  /** Armenia. */
  Am = 'AM',
  /** Aruba. */
  Aw = 'AW',
  /** Australia. */
  Au = 'AU',
  /** Austria. */
  At = 'AT',
  /** Azerbaijan. */
  Az = 'AZ',
  /** Bahamas. */
  Bs = 'BS',
  /** Bahrain. */
  Bh = 'BH',
  /** Bangladesh. */
  Bd = 'BD',
  /** Barbados. */
  Bb = 'BB',
  /** Belarus. */
  By = 'BY',
  /** Belgium. */
  Be = 'BE',
  /** Belize. */
  Bz = 'BZ',
  /** Benin. */
  Bj = 'BJ',
  /** Bermuda. */
  Bm = 'BM',
  /** Bhutan. */
  Bt = 'BT',
  /** Bolivia. */
  Bo = 'BO',
  /** Bosnia And Herzegovina. */
  Ba = 'BA',
  /** Botswana. */
  Bw = 'BW',
  /** Bouvet Island. */
  Bv = 'BV',
  /** Brazil. */
  Br = 'BR',
  /** British Indian Ocean Territory. */
  Io = 'IO',
  /** Brunei. */
  Bn = 'BN',
  /** Bulgaria. */
  Bg = 'BG',
  /** Burkina Faso. */
  Bf = 'BF',
  /** Burundi. */
  Bi = 'BI',
  /** Cambodia. */
  Kh = 'KH',
  /** Canada. */
  Ca = 'CA',
  /** Cape Verde. */
  Cv = 'CV',
  /** Caribbean Netherlands. */
  Bq = 'BQ',
  /** Cayman Islands. */
  Ky = 'KY',
  /** Central African Republic. */
  Cf = 'CF',
  /** Chad. */
  Td = 'TD',
  /** Chile. */
  Cl = 'CL',
  /** China. */
  Cn = 'CN',
  /** Christmas Island. */
  Cx = 'CX',
  /** Cocos (Keeling) Islands. */
  Cc = 'CC',
  /** Colombia. */
  Co = 'CO',
  /** Comoros. */
  Km = 'KM',
  /** Congo. */
  Cg = 'CG',
  /** Congo, The Democratic Republic Of The. */
  Cd = 'CD',
  /** Cook Islands. */
  Ck = 'CK',
  /** Costa Rica. */
  Cr = 'CR',
  /** Croatia. */
  Hr = 'HR',
  /** Cuba. */
  Cu = 'CU',
  /** Curaçao. */
  Cw = 'CW',
  /** Cyprus. */
  Cy = 'CY',
  /** Czech Republic. */
  Cz = 'CZ',
  /** Côte d'Ivoire. */
  Ci = 'CI',
  /** Denmark. */
  Dk = 'DK',
  /** Djibouti. */
  Dj = 'DJ',
  /** Dominica. */
  Dm = 'DM',
  /** Dominican Republic. */
  Do = 'DO',
  /** Ecuador. */
  Ec = 'EC',
  /** Egypt. */
  Eg = 'EG',
  /** El Salvador. */
  Sv = 'SV',
  /** Equatorial Guinea. */
  Gq = 'GQ',
  /** Eritrea. */
  Er = 'ER',
  /** Estonia. */
  Ee = 'EE',
  /** Eswatini. */
  Sz = 'SZ',
  /** Ethiopia. */
  Et = 'ET',
  /** Falkland Islands (Malvinas). */
  Fk = 'FK',
  /** Faroe Islands. */
  Fo = 'FO',
  /** Fiji. */
  Fj = 'FJ',
  /** Finland. */
  Fi = 'FI',
  /** France. */
  Fr = 'FR',
  /** French Guiana. */
  Gf = 'GF',
  /** French Polynesia. */
  Pf = 'PF',
  /** French Southern Territories. */
  Tf = 'TF',
  /** Gabon. */
  Ga = 'GA',
  /** Gambia. */
  Gm = 'GM',
  /** Georgia. */
  Ge = 'GE',
  /** Germany. */
  De = 'DE',
  /** Ghana. */
  Gh = 'GH',
  /** Gibraltar. */
  Gi = 'GI',
  /** Greece. */
  Gr = 'GR',
  /** Greenland. */
  Gl = 'GL',
  /** Grenada. */
  Gd = 'GD',
  /** Guadeloupe. */
  Gp = 'GP',
  /** Guatemala. */
  Gt = 'GT',
  /** Guernsey. */
  Gg = 'GG',
  /** Guinea. */
  Gn = 'GN',
  /** Guinea Bissau. */
  Gw = 'GW',
  /** Guyana. */
  Gy = 'GY',
  /** Haiti. */
  Ht = 'HT',
  /** Heard Island And Mcdonald Islands. */
  Hm = 'HM',
  /** Holy See (Vatican City State). */
  Va = 'VA',
  /** Honduras. */
  Hn = 'HN',
  /** Hong Kong. */
  Hk = 'HK',
  /** Hungary. */
  Hu = 'HU',
  /** Iceland. */
  Is = 'IS',
  /** India. */
  In = 'IN',
  /** Indonesia. */
  Id = 'ID',
  /** Iran, Islamic Republic Of. */
  Ir = 'IR',
  /** Iraq. */
  Iq = 'IQ',
  /** Ireland. */
  Ie = 'IE',
  /** Isle Of Man. */
  Im = 'IM',
  /** Israel. */
  Il = 'IL',
  /** Italy. */
  It = 'IT',
  /** Jamaica. */
  Jm = 'JM',
  /** Japan. */
  Jp = 'JP',
  /** Jersey. */
  Je = 'JE',
  /** Jordan. */
  Jo = 'JO',
  /** Kazakhstan. */
  Kz = 'KZ',
  /** Kenya. */
  Ke = 'KE',
  /** Kiribati. */
  Ki = 'KI',
  /** Korea, Democratic People's Republic Of. */
  Kp = 'KP',
  /** Kosovo. */
  Xk = 'XK',
  /** Kuwait. */
  Kw = 'KW',
  /** Kyrgyzstan. */
  Kg = 'KG',
  /** Lao People's Democratic Republic. */
  La = 'LA',
  /** Latvia. */
  Lv = 'LV',
  /** Lebanon. */
  Lb = 'LB',
  /** Lesotho. */
  Ls = 'LS',
  /** Liberia. */
  Lr = 'LR',
  /** Libyan Arab Jamahiriya. */
  Ly = 'LY',
  /** Liechtenstein. */
  Li = 'LI',
  /** Lithuania. */
  Lt = 'LT',
  /** Luxembourg. */
  Lu = 'LU',
  /** Macao. */
  Mo = 'MO',
  /** Madagascar. */
  Mg = 'MG',
  /** Malawi. */
  Mw = 'MW',
  /** Malaysia. */
  My = 'MY',
  /** Maldives. */
  Mv = 'MV',
  /** Mali. */
  Ml = 'ML',
  /** Malta. */
  Mt = 'MT',
  /** Martinique. */
  Mq = 'MQ',
  /** Mauritania. */
  Mr = 'MR',
  /** Mauritius. */
  Mu = 'MU',
  /** Mayotte. */
  Yt = 'YT',
  /** Mexico. */
  Mx = 'MX',
  /** Moldova, Republic of. */
  Md = 'MD',
  /** Monaco. */
  Mc = 'MC',
  /** Mongolia. */
  Mn = 'MN',
  /** Montenegro. */
  Me = 'ME',
  /** Montserrat. */
  Ms = 'MS',
  /** Morocco. */
  Ma = 'MA',
  /** Mozambique. */
  Mz = 'MZ',
  /** Myanmar. */
  Mm = 'MM',
  /** Namibia. */
  Na = 'NA',
  /** Nauru. */
  Nr = 'NR',
  /** Nepal. */
  Np = 'NP',
  /** Netherlands. */
  Nl = 'NL',
  /** Netherlands Antilles. */
  An = 'AN',
  /** New Caledonia. */
  Nc = 'NC',
  /** New Zealand. */
  Nz = 'NZ',
  /** Nicaragua. */
  Ni = 'NI',
  /** Niger. */
  Ne = 'NE',
  /** Nigeria. */
  Ng = 'NG',
  /** Niue. */
  Nu = 'NU',
  /** Norfolk Island. */
  Nf = 'NF',
  /** North Macedonia. */
  Mk = 'MK',
  /** Norway. */
  No = 'NO',
  /** Oman. */
  Om = 'OM',
  /** Pakistan. */
  Pk = 'PK',
  /** Palestinian Territory, Occupied. */
  Ps = 'PS',
  /** Panama. */
  Pa = 'PA',
  /** Papua New Guinea. */
  Pg = 'PG',
  /** Paraguay. */
  Py = 'PY',
  /** Peru. */
  Pe = 'PE',
  /** Philippines. */
  Ph = 'PH',
  /** Pitcairn. */
  Pn = 'PN',
  /** Poland. */
  Pl = 'PL',
  /** Portugal. */
  Pt = 'PT',
  /** Qatar. */
  Qa = 'QA',
  /** Republic of Cameroon. */
  Cm = 'CM',
  /** Reunion. */
  Re = 'RE',
  /** Romania. */
  Ro = 'RO',
  /** Russia. */
  Ru = 'RU',
  /** Rwanda. */
  Rw = 'RW',
  /** Saint Barthélemy. */
  Bl = 'BL',
  /** Saint Helena. */
  Sh = 'SH',
  /** Saint Kitts And Nevis. */
  Kn = 'KN',
  /** Saint Lucia. */
  Lc = 'LC',
  /** Saint Martin. */
  Mf = 'MF',
  /** Saint Pierre And Miquelon. */
  Pm = 'PM',
  /** Samoa. */
  Ws = 'WS',
  /** San Marino. */
  Sm = 'SM',
  /** Sao Tome And Principe. */
  St = 'ST',
  /** Saudi Arabia. */
  Sa = 'SA',
  /** Senegal. */
  Sn = 'SN',
  /** Serbia. */
  Rs = 'RS',
  /** Seychelles. */
  Sc = 'SC',
  /** Sierra Leone. */
  Sl = 'SL',
  /** Singapore. */
  Sg = 'SG',
  /** Sint Maarten. */
  Sx = 'SX',
  /** Slovakia. */
  Sk = 'SK',
  /** Slovenia. */
  Si = 'SI',
  /** Solomon Islands. */
  Sb = 'SB',
  /** Somalia. */
  So = 'SO',
  /** South Africa. */
  Za = 'ZA',
  /** South Georgia And The South Sandwich Islands. */
  Gs = 'GS',
  /** South Korea. */
  Kr = 'KR',
  /** South Sudan. */
  Ss = 'SS',
  /** Spain. */
  Es = 'ES',
  /** Sri Lanka. */
  Lk = 'LK',
  /** St. Vincent. */
  Vc = 'VC',
  /** Sudan. */
  Sd = 'SD',
  /** Suriname. */
  Sr = 'SR',
  /** Svalbard And Jan Mayen. */
  Sj = 'SJ',
  /** Sweden. */
  Se = 'SE',
  /** Switzerland. */
  Ch = 'CH',
  /** Syria. */
  Sy = 'SY',
  /** Taiwan. */
  Tw = 'TW',
  /** Tajikistan. */
  Tj = 'TJ',
  /** Tanzania, United Republic Of. */
  Tz = 'TZ',
  /** Thailand. */
  Th = 'TH',
  /** Timor Leste. */
  Tl = 'TL',
  /** Togo. */
  Tg = 'TG',
  /** Tokelau. */
  Tk = 'TK',
  /** Tonga. */
  To = 'TO',
  /** Trinidad and Tobago. */
  Tt = 'TT',
  /** Tunisia. */
  Tn = 'TN',
  /** Turkey. */
  Tr = 'TR',
  /** Turkmenistan. */
  Tm = 'TM',
  /** Turks and Caicos Islands. */
  Tc = 'TC',
  /** Tuvalu. */
  Tv = 'TV',
  /** Uganda. */
  Ug = 'UG',
  /** Ukraine. */
  Ua = 'UA',
  /** United Arab Emirates. */
  Ae = 'AE',
  /** United Kingdom. */
  Gb = 'GB',
  /** United States. */
  Us = 'US',
  /** United States Minor Outlying Islands. */
  Um = 'UM',
  /** Uruguay. */
  Uy = 'UY',
  /** Uzbekistan. */
  Uz = 'UZ',
  /** Vanuatu. */
  Vu = 'VU',
  /** Venezuela. */
  Ve = 'VE',
  /** Vietnam. */
  Vn = 'VN',
  /** Virgin Islands, British. */
  Vg = 'VG',
  /** Wallis And Futuna. */
  Wf = 'WF',
  /** Western Sahara. */
  Eh = 'EH',
  /** Yemen. */
  Ye = 'YE',
  /** Zambia. */
  Zm = 'ZM',
  /** Zimbabwe. */
  Zw = 'ZW',
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
 */
export type StorefrontApiCreditCardPaymentInput = {
  /** The amount of the payment. */
  amount: Scalars['Money']
  /**
   * A unique client generated key used to avoid duplicate charges. When a
   * duplicate payment is found, the original is returned instead of creating a new one.
   */
  idempotencyKey: Scalars['String']
  /** The billing address for the payment. */
  billingAddress: StorefrontApiMailingAddressInput
  /** The ID returned by Shopify's Card Vault. */
  vaultId: Scalars['String']
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: Maybe<Scalars['Boolean']>
}

/**
 * Specifies the fields required to complete a checkout with
 * a Shopify vaulted credit card payment.
 */
export type StorefrontApiCreditCardPaymentInputV2 = {
  /** The amount and currency of the payment. */
  paymentAmount: StorefrontApiMoneyInput
  /**
   * A unique client generated key used to avoid duplicate charges. When a
   * duplicate payment is found, the original is returned instead of creating a new one.
   */
  idempotencyKey: Scalars['String']
  /** The billing address for the payment. */
  billingAddress: StorefrontApiMailingAddressInput
  /** The ID returned by Shopify's Card Vault. */
  vaultId: Scalars['String']
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: Maybe<Scalars['Boolean']>
}

/** The part of the image that should remain after cropping. */
export enum StorefrontApiCropRegion {
  /** Keep the center of the image. */
  Center = 'CENTER',
  /** Keep the top of the image. */
  Top = 'TOP',
  /** Keep the bottom of the image. */
  Bottom = 'BOTTOM',
  /** Keep the left of the image. */
  Left = 'LEFT',
  /** Keep the right of the image. */
  Right = 'RIGHT',
}

/** Currency codes. */
export enum StorefrontApiCurrencyCode {
  /** United States Dollars (USD). */
  Usd = 'USD',
  /** Euro (EUR). */
  Eur = 'EUR',
  /** United Kingdom Pounds (GBP). */
  Gbp = 'GBP',
  /** Canadian Dollars (CAD). */
  Cad = 'CAD',
  /** Afghan Afghani (AFN). */
  Afn = 'AFN',
  /** Albanian Lek (ALL). */
  All = 'ALL',
  /** Algerian Dinar (DZD). */
  Dzd = 'DZD',
  /** Angolan Kwanza (AOA). */
  Aoa = 'AOA',
  /** Argentine Pesos (ARS). */
  Ars = 'ARS',
  /** Armenian Dram (AMD). */
  Amd = 'AMD',
  /** Aruban Florin (AWG). */
  Awg = 'AWG',
  /** Australian Dollars (AUD). */
  Aud = 'AUD',
  /** Barbadian Dollar (BBD). */
  Bbd = 'BBD',
  /** Azerbaijani Manat (AZN). */
  Azn = 'AZN',
  /** Bangladesh Taka (BDT). */
  Bdt = 'BDT',
  /** Bahamian Dollar (BSD). */
  Bsd = 'BSD',
  /** Bahraini Dinar (BHD). */
  Bhd = 'BHD',
  /** Burundian Franc (BIF). */
  Bif = 'BIF',
  /** Belarusian Ruble (BYR). */
  Byr = 'BYR',
  /** Belize Dollar (BZD). */
  Bzd = 'BZD',
  /** Bermudian Dollar (BMD). */
  Bmd = 'BMD',
  /** Bhutanese Ngultrum (BTN). */
  Btn = 'BTN',
  /** Bosnia and Herzegovina Convertible Mark (BAM). */
  Bam = 'BAM',
  /** Brazilian Real (BRL). */
  Brl = 'BRL',
  /** Bolivian Boliviano (BOB). */
  Bob = 'BOB',
  /** Botswana Pula (BWP). */
  Bwp = 'BWP',
  /** Brunei Dollar (BND). */
  Bnd = 'BND',
  /** Bulgarian Lev (BGN). */
  Bgn = 'BGN',
  /** Burmese Kyat (MMK). */
  Mmk = 'MMK',
  /** Cambodian Riel. */
  Khr = 'KHR',
  /** Cape Verdean escudo (CVE). */
  Cve = 'CVE',
  /** Cayman Dollars (KYD). */
  Kyd = 'KYD',
  /** Central African CFA Franc (XAF). */
  Xaf = 'XAF',
  /** Chilean Peso (CLP). */
  Clp = 'CLP',
  /** Chinese Yuan Renminbi (CNY). */
  Cny = 'CNY',
  /** Colombian Peso (COP). */
  Cop = 'COP',
  /** Comorian Franc (KMF). */
  Kmf = 'KMF',
  /** Congolese franc (CDF). */
  Cdf = 'CDF',
  /** Costa Rican Colones (CRC). */
  Crc = 'CRC',
  /** Croatian Kuna (HRK). */
  Hrk = 'HRK',
  /** Czech Koruny (CZK). */
  Czk = 'CZK',
  /** Danish Kroner (DKK). */
  Dkk = 'DKK',
  /** Dominican Peso (DOP). */
  Dop = 'DOP',
  /** East Caribbean Dollar (XCD). */
  Xcd = 'XCD',
  /** Egyptian Pound (EGP). */
  Egp = 'EGP',
  /** Ethiopian Birr (ETB). */
  Etb = 'ETB',
  /** CFP Franc (XPF). */
  Xpf = 'XPF',
  /** Fijian Dollars (FJD). */
  Fjd = 'FJD',
  /** Gambian Dalasi (GMD). */
  Gmd = 'GMD',
  /** Ghanaian Cedi (GHS). */
  Ghs = 'GHS',
  /** Guatemalan Quetzal (GTQ). */
  Gtq = 'GTQ',
  /** Guyanese Dollar (GYD). */
  Gyd = 'GYD',
  /** Georgian Lari (GEL). */
  Gel = 'GEL',
  /** Haitian Gourde (HTG). */
  Htg = 'HTG',
  /** Honduran Lempira (HNL). */
  Hnl = 'HNL',
  /** Hong Kong Dollars (HKD). */
  Hkd = 'HKD',
  /** Hungarian Forint (HUF). */
  Huf = 'HUF',
  /** Icelandic Kronur (ISK). */
  Isk = 'ISK',
  /** Indian Rupees (INR). */
  Inr = 'INR',
  /** Indonesian Rupiah (IDR). */
  Idr = 'IDR',
  /** Israeli New Shekel (NIS). */
  Ils = 'ILS',
  /** Iraqi Dinar (IQD). */
  Iqd = 'IQD',
  /** Jamaican Dollars (JMD). */
  Jmd = 'JMD',
  /** Japanese Yen (JPY). */
  Jpy = 'JPY',
  /** Jersey Pound. */
  Jep = 'JEP',
  /** Jordanian Dinar (JOD). */
  Jod = 'JOD',
  /** Kazakhstani Tenge (KZT). */
  Kzt = 'KZT',
  /** Kenyan Shilling (KES). */
  Kes = 'KES',
  /** Kuwaiti Dinar (KWD). */
  Kwd = 'KWD',
  /** Kyrgyzstani Som (KGS). */
  Kgs = 'KGS',
  /** Laotian Kip (LAK). */
  Lak = 'LAK',
  /** Latvian Lati (LVL). */
  Lvl = 'LVL',
  /** Lebanese Pounds (LBP). */
  Lbp = 'LBP',
  /** Lesotho Loti (LSL). */
  Lsl = 'LSL',
  /** Liberian Dollar (LRD). */
  Lrd = 'LRD',
  /** Lithuanian Litai (LTL). */
  Ltl = 'LTL',
  /** Malagasy Ariary (MGA). */
  Mga = 'MGA',
  /** Macedonia Denar (MKD). */
  Mkd = 'MKD',
  /** Macanese Pataca (MOP). */
  Mop = 'MOP',
  /** Malawian Kwacha (MWK). */
  Mwk = 'MWK',
  /** Maldivian Rufiyaa (MVR). */
  Mvr = 'MVR',
  /** Mexican Pesos (MXN). */
  Mxn = 'MXN',
  /** Malaysian Ringgits (MYR). */
  Myr = 'MYR',
  /** Mauritian Rupee (MUR). */
  Mur = 'MUR',
  /** Moldovan Leu (MDL). */
  Mdl = 'MDL',
  /** Moroccan Dirham. */
  Mad = 'MAD',
  /** Mongolian Tugrik. */
  Mnt = 'MNT',
  /** Mozambican Metical. */
  Mzn = 'MZN',
  /** Namibian Dollar. */
  Nad = 'NAD',
  /** Nepalese Rupee (NPR). */
  Npr = 'NPR',
  /** Netherlands Antillean Guilder. */
  Ang = 'ANG',
  /** New Zealand Dollars (NZD). */
  Nzd = 'NZD',
  /** Nicaraguan Córdoba (NIO). */
  Nio = 'NIO',
  /** Nigerian Naira (NGN). */
  Ngn = 'NGN',
  /** Norwegian Kroner (NOK). */
  Nok = 'NOK',
  /** Omani Rial (OMR). */
  Omr = 'OMR',
  /** Panamian Balboa (PAB). */
  Pab = 'PAB',
  /** Pakistani Rupee (PKR). */
  Pkr = 'PKR',
  /** Papua New Guinean Kina (PGK). */
  Pgk = 'PGK',
  /** Paraguayan Guarani (PYG). */
  Pyg = 'PYG',
  /** Peruvian Nuevo Sol (PEN). */
  Pen = 'PEN',
  /** Philippine Peso (PHP). */
  Php = 'PHP',
  /** Polish Zlotych (PLN). */
  Pln = 'PLN',
  /** Qatari Rial (QAR). */
  Qar = 'QAR',
  /** Romanian Lei (RON). */
  Ron = 'RON',
  /** Russian Rubles (RUB). */
  Rub = 'RUB',
  /** Rwandan Franc (RWF). */
  Rwf = 'RWF',
  /** Samoan Tala (WST). */
  Wst = 'WST',
  /** Saudi Riyal (SAR). */
  Sar = 'SAR',
  /** Sao Tome And Principe Dobra (STD). */
  Std = 'STD',
  /** Serbian dinar (RSD). */
  Rsd = 'RSD',
  /** Seychellois Rupee (SCR). */
  Scr = 'SCR',
  /** Singapore Dollars (SGD). */
  Sgd = 'SGD',
  /** Sudanese Pound (SDG). */
  Sdg = 'SDG',
  /** Syrian Pound (SYP). */
  Syp = 'SYP',
  /** South African Rand (ZAR). */
  Zar = 'ZAR',
  /** South Korean Won (KRW). */
  Krw = 'KRW',
  /** South Sudanese Pound (SSP). */
  Ssp = 'SSP',
  /** Solomon Islands Dollar (SBD). */
  Sbd = 'SBD',
  /** Sri Lankan Rupees (LKR). */
  Lkr = 'LKR',
  /** Surinamese Dollar (SRD). */
  Srd = 'SRD',
  /** Swazi Lilangeni (SZL). */
  Szl = 'SZL',
  /** Swedish Kronor (SEK). */
  Sek = 'SEK',
  /** Swiss Francs (CHF). */
  Chf = 'CHF',
  /** Taiwan Dollars (TWD). */
  Twd = 'TWD',
  /** Thai baht (THB). */
  Thb = 'THB',
  /** Tanzanian Shilling (TZS). */
  Tzs = 'TZS',
  /** Trinidad and Tobago Dollars (TTD). */
  Ttd = 'TTD',
  /** Tunisian Dinar (TND). */
  Tnd = 'TND',
  /** Turkish Lira (TRY). */
  Try = 'TRY',
  /** Turkmenistani Manat (TMT). */
  Tmt = 'TMT',
  /** Ugandan Shilling (UGX). */
  Ugx = 'UGX',
  /** Ukrainian Hryvnia (UAH). */
  Uah = 'UAH',
  /** United Arab Emirates Dirham (AED). */
  Aed = 'AED',
  /** Uruguayan Pesos (UYU). */
  Uyu = 'UYU',
  /** Uzbekistan som (UZS). */
  Uzs = 'UZS',
  /** Vanuatu Vatu (VUV). */
  Vuv = 'VUV',
  /** Venezuelan Bolivares (VEF). */
  Vef = 'VEF',
  /** Vietnamese đồng (VND). */
  Vnd = 'VND',
  /** West African CFA franc (XOF). */
  Xof = 'XOF',
  /** Yemeni Rial (YER). */
  Yer = 'YER',
  /** Zambian Kwacha (ZMW). */
  Zmw = 'ZMW',
}

/**
 * A customer represents a customer account with the shop. Customer accounts store
 * contact information for the customer, saving logged-in customers the trouble of
 * having to provide it at every checkout.
 */
export interface StorefrontApiCustomer {
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
  /** The orders associated with the customer. */
  orders: StorefrontApiOrderConnection
  /** The customer’s phone number. */
  phone?: Maybe<Scalars['String']>
  /**
   * A list of tags assigned to the customer.
   * Additional access scope required: unauthenticated_read_customer_tags.
   */
  tags: Array<Scalars['String']>
  /** The date and time when the customer information was updated. */
  updatedAt: Scalars['DateTime']
}

/**
 * A customer represents a customer account with the shop. Customer accounts store
 * contact information for the customer, saving logged-in customers the trouble of
 * having to provide it at every checkout.
 */
export type StorefrontApiCustomerAddressesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * A customer represents a customer account with the shop. Customer accounts store
 * contact information for the customer, saving logged-in customers the trouble of
 * having to provide it at every checkout.
 */
export type StorefrontApiCustomerOrdersArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<StorefrontApiOrderSortKeys>
  query?: Maybe<Scalars['String']>
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
  /** List of errors that occurred executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `customerAccessTokenDelete` mutation. */
export interface StorefrontApiCustomerAccessTokenDeletePayload {
  __typename: 'CustomerAccessTokenDeletePayload'
  /** The destroyed access token. */
  deletedAccessToken?: Maybe<Scalars['String']>
  /** ID of the destroyed customer access token. */
  deletedCustomerAccessTokenId?: Maybe<Scalars['String']>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `customerAccessTokenRenew` mutation. */
export interface StorefrontApiCustomerAccessTokenRenewPayload {
  __typename: 'CustomerAccessTokenRenewPayload'
  /** The renewed customer access token object. */
  customerAccessToken?: Maybe<StorefrontApiCustomerAccessToken>
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<StorefrontApiUserError>
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
  /** List of errors that occurred executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `customerAddressCreate` mutation. */
export interface StorefrontApiCustomerAddressCreatePayload {
  __typename: 'CustomerAddressCreatePayload'
  /** The new customer address object. */
  customerAddress?: Maybe<StorefrontApiMailingAddress>
  /** List of errors that occurred executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `customerAddressDelete` mutation. */
export interface StorefrontApiCustomerAddressDeletePayload {
  __typename: 'CustomerAddressDeletePayload'
  /** List of errors that occurred executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /** ID of the deleted customer address. */
  deletedCustomerAddressId?: Maybe<Scalars['String']>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `customerAddressUpdate` mutation. */
export interface StorefrontApiCustomerAddressUpdatePayload {
  __typename: 'CustomerAddressUpdatePayload'
  /** The customer’s updated mailing address. */
  customerAddress?: Maybe<StorefrontApiMailingAddress>
  /** List of errors that occurred executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Specifies the fields required to create a new customer. */
export type StorefrontApiCustomerCreateInput = {
  /** The customer’s first name. */
  firstName?: Maybe<Scalars['String']>
  /** The customer’s last name. */
  lastName?: Maybe<Scalars['String']>
  /** The customer’s email. */
  email: Scalars['String']
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: Maybe<Scalars['String']>
  /** The login password used by the customer. */
  password: Scalars['String']
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: Maybe<Scalars['Boolean']>
}

/** Return type for `customerCreate` mutation. */
export interface StorefrontApiCustomerCreatePayload {
  __typename: 'CustomerCreatePayload'
  /** The created customer object. */
  customer?: Maybe<StorefrontApiCustomer>
  /** List of errors that occurred executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Return type for `customerDefaultAddressUpdate` mutation. */
export interface StorefrontApiCustomerDefaultAddressUpdatePayload {
  __typename: 'CustomerDefaultAddressUpdatePayload'
  /** The updated customer object. */
  customer?: Maybe<StorefrontApiCustomer>
  /** List of errors that occurred executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Possible error codes that could be returned by a customer mutation. */
export enum StorefrontApiCustomerErrorCode {
  /** Input value is blank. */
  Blank = 'BLANK',
  /** Input value is invalid. */
  Invalid = 'INVALID',
  /** Input value is already taken. */
  Taken = 'TAKEN',
  /** Input value is too long. */
  TooLong = 'TOO_LONG',
  /** Input value is too short. */
  TooShort = 'TOO_SHORT',
  /** Unidentified customer. */
  UnidentifiedCustomer = 'UNIDENTIFIED_CUSTOMER',
  /** Customer is disabled. */
  CustomerDisabled = 'CUSTOMER_DISABLED',
  /** Input password starts or ends with whitespace. */
  PasswordStartsOrEndsWithWhitespace = 'PASSWORD_STARTS_OR_ENDS_WITH_WHITESPACE',
  /** Input contains HTML tags. */
  ContainsHtmlTags = 'CONTAINS_HTML_TAGS',
  /** Input contains URL. */
  ContainsUrl = 'CONTAINS_URL',
  /** Invalid activation token. */
  TokenInvalid = 'TOKEN_INVALID',
  /** Customer already enabled. */
  AlreadyEnabled = 'ALREADY_ENABLED',
  /** Address does not exist. */
  NotFound = 'NOT_FOUND',
}

/** Return type for `customerRecover` mutation. */
export interface StorefrontApiCustomerRecoverPayload {
  __typename: 'CustomerRecoverPayload'
  /** List of errors that occurred executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
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
  /** List of errors that occurred executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Specifies the fields required to reset a customer’s password. */
export type StorefrontApiCustomerResetInput = {
  /** The reset token required to reset the customer’s password. */
  resetToken: Scalars['String']
  /** New password that will be set as part of the reset password process. */
  password: Scalars['String']
}

/** Return type for `customerReset` mutation. */
export interface StorefrontApiCustomerResetPayload {
  __typename: 'CustomerResetPayload'
  /** The customer object which was reset. */
  customer?: Maybe<StorefrontApiCustomer>
  /** A newly created customer access token object for the customer. */
  customerAccessToken?: Maybe<StorefrontApiCustomerAccessToken>
  /** List of errors that occurred executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Specifies the fields required to update the Customer information. */
export type StorefrontApiCustomerUpdateInput = {
  /** The customer’s first name. */
  firstName?: Maybe<Scalars['String']>
  /** The customer’s last name. */
  lastName?: Maybe<Scalars['String']>
  /** The customer’s email. */
  email?: Maybe<Scalars['String']>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: Maybe<Scalars['String']>
  /** The login password used by the customer. */
  password?: Maybe<Scalars['String']>
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing?: Maybe<Scalars['Boolean']>
}

/** Return type for `customerUpdate` mutation. */
export interface StorefrontApiCustomerUpdatePayload {
  __typename: 'CustomerUpdatePayload'
  /** The updated customer object. */
  customer?: Maybe<StorefrontApiCustomer>
  /**
   * The newly created customer access token. If the customer's password is updated, all previous access tokens
   * (including the one used to perform this mutation) become invalid, and a new token is generated.
   */
  customerAccessToken?: Maybe<StorefrontApiCustomerAccessToken>
  /** List of errors that occurred executing the mutation. */
  customerUserErrors: Array<StorefrontApiCustomerUserError>
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use `customerUserErrors` instead
   */
  userErrors: Array<StorefrontApiUserError>
}

/** Represents an error that happens during execution of a customer mutation. */
export interface StorefrontApiCustomerUserError
  extends StorefrontApiDisplayableError {
  __typename: 'CustomerUserError'
  /** Error code to uniquely identify the error. */
  code?: Maybe<StorefrontApiCustomerErrorCode>
  /** Path to the input field which caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
export enum StorefrontApiDigitalWallet {
  /** Apple Pay. */
  ApplePay = 'APPLE_PAY',
  /** Android Pay. */
  AndroidPay = 'ANDROID_PAY',
  /** Google Pay. */
  GooglePay = 'GOOGLE_PAY',
  /** Shopify Pay. */
  ShopifyPay = 'SHOPIFY_PAY',
}

/** An amount discounting the line that has been allocated by a discount. */
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
  /** The value is specifically applied onto a particular line. */
  One = 'ONE',
}

export interface StorefrontApiDiscountApplicationConnection {
  __typename: 'DiscountApplicationConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiDiscountApplicationEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

export interface StorefrontApiDiscountApplicationEdge {
  __typename: 'DiscountApplicationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of DiscountApplicationEdge. */
  node: StorefrontApiDiscountApplication
}

/**
 * Which lines on the order that the discount is allocated over, of the type
 * defined by the Discount Application's target_type.
 */
export enum StorefrontApiDiscountApplicationTargetSelection {
  /** The discount is allocated onto all the lines. */
  All = 'ALL',
  /** The discount is allocated onto only the lines it is entitled for. */
  Entitled = 'ENTITLED',
  /** The discount is allocated onto explicitly chosen lines. */
  Explicit = 'EXPLICIT',
}

/** The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards. */
export enum StorefrontApiDiscountApplicationTargetType {
  /** The discount applies onto line items. */
  LineItem = 'LINE_ITEM',
  /** The discount applies onto shipping lines. */
  ShippingLine = 'SHIPPING_LINE',
}

/**
 * Discount code applications capture the intentions of a discount code at
 * the time that it is applied.
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
  /** Path to the input field which caused the error. */
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
   */
  trackingInfo: Array<StorefrontApiFulfillmentTrackingInfo>
}

/** Represents a single fulfillment in an order. */
export type StorefrontApiFulfillmentFulfillmentLineItemsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents a single fulfillment in an order. */
export type StorefrontApiFulfillmentTrackingInfoArgs = {
  first?: Maybe<Scalars['Int']>
}

/** Represents a single line item in a fulfillment. There is at most one fulfillment line item for each order line item. */
export interface StorefrontApiFulfillmentLineItem {
  __typename: 'FulfillmentLineItem'
  /** The associated order's line item. */
  lineItem: StorefrontApiOrderLineItem
  /** The amount fulfilled in this fulfillment. */
  quantity: Scalars['Int']
}

export interface StorefrontApiFulfillmentLineItemConnection {
  __typename: 'FulfillmentLineItemConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiFulfillmentLineItemEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

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

/** Represents information about the metafields associated to the specified resource. */
export type StorefrontApiHasMetafields = {
  /** The metafield associated with the resource. */
  metafield?: Maybe<StorefrontApiMetafield>
  /** A paginated list of metafields associated with the resource. */
  metafields: StorefrontApiMetafieldConnection
}

/** Represents information about the metafields associated to the specified resource. */
export type StorefrontApiHasMetafieldsMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** Represents information about the metafields associated to the specified resource. */
export type StorefrontApiHasMetafieldsMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** Represents an image resource. */
export interface StorefrontApiImage {
  __typename: 'Image'
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars['String']>
  /** A unique identifier for the image. */
  id?: Maybe<Scalars['ID']>
  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   */
  originalSrc: Scalars['URL']
  /**
   * The location of the image as a URL.
   * @deprecated Previously an image had a single `src` field. This could either return the original image
   * location or a URL that contained transformations such as sizing or scale.
   *
   * These transformations were specified by arguments on the parent field.
   *
   * Now an image has two distinct URL fields: `originalSrc` and `transformedSrc`.
   *
   * * `originalSrc` - the original unmodified image URL
   * * `transformedSrc` - the image URL with the specified transformations included
   *
   * To migrate to the new fields, image transformations should be moved from the parent field to `transformedSrc`.
   *
   * Before:
   * ```graphql
   * {
   *   shop {
   *     productImages(maxWidth: 200, scale: 2) {
   *       edges {
   *         node {
   *           src
   *         }
   *       }
   *     }
   *   }
   * }
   * ```
   *
   * After:
   * ```graphql
   * {
   *   shop {
   *     productImages {
   *       edges {
   *         node {
   *           transformedSrc(maxWidth: 200, scale: 2)
   *         }
   *       }
   *     }
   *   }
   * }
   * ```
   *
   */
  src: Scalars['URL']
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   */
  transformedSrc: Scalars['URL']
}

/** Represents an image resource. */
export type StorefrontApiImageTransformedSrcArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<StorefrontApiCropRegion>
  scale?: Maybe<Scalars['Int']>
  preferredContentType?: Maybe<StorefrontApiImageContentType>
}

export interface StorefrontApiImageConnection {
  __typename: 'ImageConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiImageEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

/** List of supported image content types. */
export enum StorefrontApiImageContentType {
  /** A PNG image. */
  Png = 'PNG',
  /** A JPG image. */
  Jpg = 'JPG',
  /** A WEBP image. */
  Webp = 'WEBP',
}

export interface StorefrontApiImageEdge {
  __typename: 'ImageEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ImageEdge. */
  node: StorefrontApiImage
}

/** Represents a mailing address for customers and shipping. */
export interface StorefrontApiMailingAddress extends StorefrontApiNode {
  __typename: 'MailingAddress'
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']>
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']>
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']>
  /** The name of the customer's company or organization. */
  company?: Maybe<Scalars['String']>
  /** The name of the country. */
  country?: Maybe<Scalars['String']>
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   * @deprecated Use `countryCodeV2` instead
   */
  countryCode?: Maybe<Scalars['String']>
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   */
  countryCodeV2?: Maybe<StorefrontApiCountryCode>
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']>
  /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars['String']>
  /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars['String']>
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']>
  /** The latitude coordinate of the customer address. */
  latitude?: Maybe<Scalars['Float']>
  /** The longitude coordinate of the customer address. */
  longitude?: Maybe<Scalars['Float']>
  /** The full name of the customer, based on firstName and lastName. */
  name?: Maybe<Scalars['String']>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: Maybe<Scalars['String']>
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']>
  /**
   * The two-letter code for the region.
   *
   * For example, ON.
   */
  provinceCode?: Maybe<Scalars['String']>
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>
}

/** Represents a mailing address for customers and shipping. */
export type StorefrontApiMailingAddressFormattedArgs = {
  withName?: Maybe<Scalars['Boolean']>
  withCompany?: Maybe<Scalars['Boolean']>
}

export interface StorefrontApiMailingAddressConnection {
  __typename: 'MailingAddressConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiMailingAddressEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

export interface StorefrontApiMailingAddressEdge {
  __typename: 'MailingAddressEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MailingAddressEdge. */
  node: StorefrontApiMailingAddress
}

/** Specifies the fields accepted to create or update a mailing address. */
export type StorefrontApiMailingAddressInput = {
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']>
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']>
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']>
  /** The name of the customer's company or organization. */
  company?: Maybe<Scalars['String']>
  /** The name of the country. */
  country?: Maybe<Scalars['String']>
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']>
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   */
  phone?: Maybe<Scalars['String']>
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']>
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>
}

/** Manual discount applications capture the intentions of a discount that was manually created. */
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

/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * comprised of keys, values, and value types.
 */
export interface StorefrontApiMetafield extends StorefrontApiNode {
  __typename: 'Metafield'
  /** The description of a metafield. */
  description?: Maybe<Scalars['String']>
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The key name for a metafield. */
  key: Scalars['String']
  /** The namespace for a metafield. */
  namespace: Scalars['String']
  /** The parent object that the metafield belongs to. */
  parentResource: StorefrontApiMetafieldParentResource
  /** The value of a metafield. */
  value: Scalars['String']
  /** Represents the metafield value type. */
  valueType: StorefrontApiMetafieldValueType
}

export interface StorefrontApiMetafieldConnection {
  __typename: 'MetafieldConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiMetafieldEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

export interface StorefrontApiMetafieldEdge {
  __typename: 'MetafieldEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of MetafieldEdge. */
  node: StorefrontApiMetafield
}

/** A resource that the metafield belongs to. */
export type StorefrontApiMetafieldParentResource =
  | StorefrontApiProduct
  | StorefrontApiProductVariant

/** Metafield value types. */
export enum StorefrontApiMetafieldValueType {
  /** A string metafield. */
  String = 'STRING',
  /** An integer metafield. */
  Integer = 'INTEGER',
  /** A json string metafield. */
  JsonString = 'JSON_STRING',
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
 * To format currencies, combine this type's amount and currencyCode fields with your client's locale.
 *
 * For example, in JavaScript you could use Intl.NumberFormat:
 *
 * ```js
 * new Intl.NumberFormat(locale, {
 *   style: 'currency',
 *   currency: currencyCode
 * }).format(amount);
 * ```
 *
 * Other formatting libraries include:
 *
 * * iOS - [NumberFormatter](https://developer.apple.com/documentation/foundation/numberformatter)
 * * Android - [NumberFormat](https://developer.android.com/reference/java/text/NumberFormat.html)
 * * PHP - [NumberFormatter](http://php.net/manual/en/class.numberformatter.php)
 *
 * For a more general solution, the [Unicode CLDR number formatting database] is available with many implementations
 * (such as [TwitterCldr](https://github.com/twitter/twitter-cldr-rb)).
 */
export interface StorefrontApiMoneyV2 {
  __typename: 'MoneyV2'
  /** Decimal money amount. */
  amount: Scalars['Decimal']
  /** Currency of the money. */
  currencyCode: StorefrontApiCurrencyCode
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export interface StorefrontApiMutation {
  __typename: 'Mutation'
  /**
   * Updates the attributes of a checkout.
   * @deprecated Use `checkoutAttributesUpdateV2` instead
   */
  checkoutAttributesUpdate?: Maybe<StorefrontApiCheckoutAttributesUpdatePayload>
  /** Updates the attributes of a checkout. */
  checkoutAttributesUpdateV2?: Maybe<
    StorefrontApiCheckoutAttributesUpdateV2Payload
  >
  /**
   * Completes a checkout without providing payment information. You can use this
   * mutation for free items or items whose purchase price is covered by a gift card.
   */
  checkoutCompleteFree?: Maybe<StorefrontApiCheckoutCompleteFreePayload>
  /**
   * Completes a checkout using a credit card token from Shopify's Vault.
   * @deprecated Use `checkoutCompleteWithCreditCardV2` instead
   */
  checkoutCompleteWithCreditCard?: Maybe<
    StorefrontApiCheckoutCompleteWithCreditCardPayload
  >
  /**
   * Completes a checkout using a credit card token from Shopify's card vault.
   * Before you can complete checkouts using CheckoutCompleteWithCreditCardV2, you
   * need to  [_request payment processing_](https://help.shopify.com/api/guides/sales-channel-sdk/getting-started#request-payment-processing).
   */
  checkoutCompleteWithCreditCardV2?: Maybe<
    StorefrontApiCheckoutCompleteWithCreditCardV2Payload
  >
  /**
   * Completes a checkout with a tokenized payment.
   * @deprecated Use `checkoutCompleteWithTokenizedPaymentV2` instead
   */
  checkoutCompleteWithTokenizedPayment?: Maybe<
    StorefrontApiCheckoutCompleteWithTokenizedPaymentPayload
  >
  /**
   * Completes a checkout with a tokenized payment.
   * @deprecated Use `checkoutCompleteWithTokenizedPaymentV3` instead
   */
  checkoutCompleteWithTokenizedPaymentV2?: Maybe<
    StorefrontApiCheckoutCompleteWithTokenizedPaymentV2Payload
  >
  /** Creates a new checkout. */
  checkoutCreate?: Maybe<StorefrontApiCheckoutCreatePayload>
  /**
   * Associates a customer to the checkout.
   * @deprecated Use `checkoutCustomerAssociateV2` instead
   */
  checkoutCustomerAssociate?: Maybe<
    StorefrontApiCheckoutCustomerAssociatePayload
  >
  /** Associates a customer to the checkout. */
  checkoutCustomerAssociateV2?: Maybe<
    StorefrontApiCheckoutCustomerAssociateV2Payload
  >
  /**
   * Disassociates the current checkout customer from the checkout.
   * @deprecated Use `checkoutCustomerDisassociateV2` instead
   */
  checkoutCustomerDisassociate?: Maybe<
    StorefrontApiCheckoutCustomerDisassociatePayload
  >
  /** Disassociates the current checkout customer from the checkout. */
  checkoutCustomerDisassociateV2?: Maybe<
    StorefrontApiCheckoutCustomerDisassociateV2Payload
  >
  /**
   * Applies a discount to an existing checkout using a discount code.
   * @deprecated Use `checkoutDiscountCodeApplyV2` instead
   */
  checkoutDiscountCodeApply?: Maybe<
    StorefrontApiCheckoutDiscountCodeApplyPayload
  >
  /** Applies a discount to an existing checkout using a discount code. */
  checkoutDiscountCodeApplyV2?: Maybe<
    StorefrontApiCheckoutDiscountCodeApplyV2Payload
  >
  /** Removes the applied discount from an existing checkout. */
  checkoutDiscountCodeRemove?: Maybe<
    StorefrontApiCheckoutDiscountCodeRemovePayload
  >
  /**
   * Updates the email on an existing checkout.
   * @deprecated Use `checkoutEmailUpdateV2` instead
   */
  checkoutEmailUpdate?: Maybe<StorefrontApiCheckoutEmailUpdatePayload>
  /** Updates the email on an existing checkout. */
  checkoutEmailUpdateV2?: Maybe<StorefrontApiCheckoutEmailUpdateV2Payload>
  /**
   * Applies a gift card to an existing checkout using a gift card code. This will replace all currently applied gift cards.
   * @deprecated Use `checkoutGiftCardsAppend` instead
   */
  checkoutGiftCardApply?: Maybe<StorefrontApiCheckoutGiftCardApplyPayload>
  /**
   * Removes an applied gift card from the checkout.
   * @deprecated Use `checkoutGiftCardRemoveV2` instead
   */
  checkoutGiftCardRemove?: Maybe<StorefrontApiCheckoutGiftCardRemovePayload>
  /** Removes an applied gift card from the checkout. */
  checkoutGiftCardRemoveV2?: Maybe<StorefrontApiCheckoutGiftCardRemoveV2Payload>
  /** Appends gift cards to an existing checkout. */
  checkoutGiftCardsAppend?: Maybe<StorefrontApiCheckoutGiftCardsAppendPayload>
  /**
   * Adds a list of line items to a checkout.
   * @deprecated Use `checkoutLineItemsReplace` instead
   */
  checkoutLineItemsAdd?: Maybe<StorefrontApiCheckoutLineItemsAddPayload>
  /**
   * Removes line items from an existing checkout.
   * @deprecated Use `checkoutLineItemsReplace` instead
   */
  checkoutLineItemsRemove?: Maybe<StorefrontApiCheckoutLineItemsRemovePayload>
  /** Sets a list of line items to a checkout. */
  checkoutLineItemsReplace?: Maybe<StorefrontApiCheckoutLineItemsReplacePayload>
  /**
   * Updates line items on a checkout.
   * @deprecated Use `checkoutLineItemsReplace` instead
   */
  checkoutLineItemsUpdate?: Maybe<StorefrontApiCheckoutLineItemsUpdatePayload>
  /**
   * Updates the shipping address of an existing checkout.
   * @deprecated Use `checkoutShippingAddressUpdateV2` instead
   */
  checkoutShippingAddressUpdate?: Maybe<
    StorefrontApiCheckoutShippingAddressUpdatePayload
  >
  /** Updates the shipping address of an existing checkout. */
  checkoutShippingAddressUpdateV2?: Maybe<
    StorefrontApiCheckoutShippingAddressUpdateV2Payload
  >
  /** Updates the shipping lines on an existing checkout. */
  checkoutShippingLineUpdate?: Maybe<
    StorefrontApiCheckoutShippingLineUpdatePayload
  >
  /**
   * Creates a customer access token.
   * The customer access token is required to modify the customer object in any way.
   */
  customerAccessTokenCreate?: Maybe<
    StorefrontApiCustomerAccessTokenCreatePayload
  >
  /** Permanently destroys a customer access token. */
  customerAccessTokenDelete?: Maybe<
    StorefrontApiCustomerAccessTokenDeletePayload
  >
  /**
   * Renews a customer access token.
   *
   * Access token renewal must happen *before* a token expires.
   * If a token has already expired, a new one should be created instead via `customerAccessTokenCreate`.
   */
  customerAccessTokenRenew?: Maybe<StorefrontApiCustomerAccessTokenRenewPayload>
  /** Activates a customer. */
  customerActivate?: Maybe<StorefrontApiCustomerActivatePayload>
  /** Creates a new address for a customer. */
  customerAddressCreate?: Maybe<StorefrontApiCustomerAddressCreatePayload>
  /** Permanently deletes the address of an existing customer. */
  customerAddressDelete?: Maybe<StorefrontApiCustomerAddressDeletePayload>
  /** Updates the address of an existing customer. */
  customerAddressUpdate?: Maybe<StorefrontApiCustomerAddressUpdatePayload>
  /** Creates a new customer. */
  customerCreate?: Maybe<StorefrontApiCustomerCreatePayload>
  /** Updates the default address of an existing customer. */
  customerDefaultAddressUpdate?: Maybe<
    StorefrontApiCustomerDefaultAddressUpdatePayload
  >
  /** Sends a reset password email to the customer, as the first step in the reset password process. */
  customerRecover?: Maybe<StorefrontApiCustomerRecoverPayload>
  /** Resets a customer’s password with a token received from `CustomerRecover`. */
  customerReset?: Maybe<StorefrontApiCustomerResetPayload>
  /** Resets a customer’s password with the reset password url received from `CustomerRecover`. */
  customerResetByUrl?: Maybe<StorefrontApiCustomerResetByUrlPayload>
  /** Updates an existing customer. */
  customerUpdate?: Maybe<StorefrontApiCustomerUpdatePayload>
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
export type StorefrontApiMutationCheckoutCreateArgs = {
  input: StorefrontApiCheckoutCreateInput
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
  discountCode: Scalars['String']
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutDiscountCodeApplyV2Args = {
  discountCode: Scalars['String']
  checkoutId: Scalars['ID']
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
  giftCardCode: Scalars['String']
  checkoutId: Scalars['ID']
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
  giftCardCodes: Array<Scalars['String']>
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutLineItemsAddArgs = {
  lineItems: Array<StorefrontApiCheckoutLineItemInput>
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutLineItemsRemoveArgs = {
  checkoutId: Scalars['ID']
  lineItemIds: Array<Scalars['ID']>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutLineItemsReplaceArgs = {
  lineItems: Array<StorefrontApiCheckoutLineItemInput>
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutLineItemsUpdateArgs = {
  checkoutId: Scalars['ID']
  lineItems: Array<StorefrontApiCheckoutLineItemUpdateInput>
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutShippingAddressUpdateArgs = {
  shippingAddress: StorefrontApiMailingAddressInput
  checkoutId: Scalars['ID']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCheckoutShippingAddressUpdateV2Args = {
  shippingAddress: StorefrontApiMailingAddressInput
  checkoutId: Scalars['ID']
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
export type StorefrontApiMutationCustomerAddressCreateArgs = {
  customerAccessToken: Scalars['String']
  address: StorefrontApiMailingAddressInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCustomerAddressDeleteArgs = {
  id: Scalars['ID']
  customerAccessToken: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCustomerAddressUpdateArgs = {
  customerAccessToken: Scalars['String']
  id: Scalars['ID']
  address: StorefrontApiMailingAddressInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCustomerCreateArgs = {
  input: StorefrontApiCustomerCreateInput
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCustomerDefaultAddressUpdateArgs = {
  customerAccessToken: Scalars['String']
  addressId: Scalars['ID']
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
  resetUrl: Scalars['URL']
  password: Scalars['String']
}

/** The schema’s entry-point for mutations. This acts as the public, top-level API from which all mutation queries must start. */
export type StorefrontApiMutationCustomerUpdateArgs = {
  customerAccessToken: Scalars['String']
  customer: StorefrontApiCustomerUpdateInput
}

/** An object with an ID to support global identification. */
export type StorefrontApiNode = {
  /** Globally unique identifier. */
  id: Scalars['ID']
}

/**
 * An order is a customer’s completed request to purchase one or more products from
 * a shop. An order is created when a customer completes the checkout process,
 * during which time they provides an email address, billing address and payment information.
 */
export interface StorefrontApiOrder extends StorefrontApiNode {
  __typename: 'Order'
  /** The code of the currency used for the payment. */
  currencyCode: StorefrontApiCurrencyCode
  /** The locale code in which this specific order happened. */
  customerLocale?: Maybe<Scalars['String']>
  /** The unique URL that the customer can use to access the order. */
  customerUrl?: Maybe<Scalars['URL']>
  /** Discounts that have been applied on the order. */
  discountApplications: StorefrontApiDiscountApplicationConnection
  /** The customer's email address. */
  email?: Maybe<Scalars['String']>
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** List of the order’s line items. */
  lineItems: StorefrontApiOrderLineItemConnection
  /**
   * Unique identifier for the order that appears on the order.
   * For example, _#1000_ or _Store1001.
   */
  name: Scalars['String']
  /** A unique numeric identifier for the order for use by shop owner and customer. */
  orderNumber: Scalars['Int']
  /** The customer's phone number for receiving SMS notifications. */
  phone?: Maybe<Scalars['String']>
  /**
   * The date and time when the order was imported.
   * This value can be set to dates in the past when importing from other systems.
   * If no value is provided, it will be auto-generated based on current date and time.
   */
  processedAt: Scalars['DateTime']
  /** The address to where the order will be shipped. */
  shippingAddress?: Maybe<StorefrontApiMailingAddress>
  /** The discounts that have been allocated onto the shipping line by discount applications. */
  shippingDiscountAllocations: Array<StorefrontApiDiscountAllocation>
  /** The unique URL for the order's status page. */
  statusUrl: Scalars['URL']
  /**
   * Price of the order before shipping and taxes.
   * @deprecated Use `subtotalPriceV2` instead
   */
  subtotalPrice?: Maybe<Scalars['Money']>
  /** Price of the order before shipping and taxes. */
  subtotalPriceV2?: Maybe<StorefrontApiMoneyV2>
  /** List of the order’s successful fulfillments. */
  successfulFulfillments?: Maybe<Array<StorefrontApiFulfillment>>
  /**
   * The sum of all the prices of all the items in the order, taxes and discounts included (must be positive).
   * @deprecated Use `totalPriceV2` instead
   */
  totalPrice: Scalars['Money']
  /** The sum of all the prices of all the items in the order, taxes and discounts included (must be positive). */
  totalPriceV2: StorefrontApiMoneyV2
  /**
   * The total amount that has been refunded.
   * @deprecated Use `totalRefundedV2` instead
   */
  totalRefunded: Scalars['Money']
  /** The total amount that has been refunded. */
  totalRefundedV2: StorefrontApiMoneyV2
  /**
   * The total cost of shipping.
   * @deprecated Use `totalShippingPriceV2` instead
   */
  totalShippingPrice: Scalars['Money']
  /** The total cost of shipping. */
  totalShippingPriceV2: StorefrontApiMoneyV2
  /**
   * The total cost of taxes.
   * @deprecated Use `totalTaxV2` instead
   */
  totalTax?: Maybe<Scalars['Money']>
  /** The total cost of taxes. */
  totalTaxV2?: Maybe<StorefrontApiMoneyV2>
}

/**
 * An order is a customer’s completed request to purchase one or more products from
 * a shop. An order is created when a customer completes the checkout process,
 * during which time they provides an email address, billing address and payment information.
 */
export type StorefrontApiOrderDiscountApplicationsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * An order is a customer’s completed request to purchase one or more products from
 * a shop. An order is created when a customer completes the checkout process,
 * during which time they provides an email address, billing address and payment information.
 */
export type StorefrontApiOrderLineItemsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * An order is a customer’s completed request to purchase one or more products from
 * a shop. An order is created when a customer completes the checkout process,
 * during which time they provides an email address, billing address and payment information.
 */
export type StorefrontApiOrderSuccessfulFulfillmentsArgs = {
  first?: Maybe<Scalars['Int']>
}

export interface StorefrontApiOrderConnection {
  __typename: 'OrderConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiOrderEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

export interface StorefrontApiOrderEdge {
  __typename: 'OrderEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of OrderEdge. */
  node: StorefrontApiOrder
}

/** Represents a single line in an order. There is one line item for each distinct product variant. */
export interface StorefrontApiOrderLineItem {
  __typename: 'OrderLineItem'
  /** List of custom attributes associated to the line item. */
  customAttributes: Array<StorefrontApiAttribute>
  /** The discounts that have been allocated onto the order line item by discount applications. */
  discountAllocations: Array<StorefrontApiDiscountAllocation>
  /** The number of products variants associated to the line item. */
  quantity: Scalars['Int']
  /** The title of the product combined with title of the variant. */
  title: Scalars['String']
  /** The product variant object associated to the line item. */
  variant?: Maybe<StorefrontApiProductVariant>
}

export interface StorefrontApiOrderLineItemConnection {
  __typename: 'OrderLineItemConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiOrderLineItemEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

export interface StorefrontApiOrderLineItemEdge {
  __typename: 'OrderLineItemEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of OrderLineItemEdge. */
  node: StorefrontApiOrderLineItem
}

/** The set of valid sort keys for the Order query. */
export enum StorefrontApiOrderSortKeys {
  /** Sort by the `processed_at` value. */
  ProcessedAt = 'PROCESSED_AT',
  /** Sort by the `total_price` value. */
  TotalPrice = 'TOTAL_PRICE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/**
 * Shopify merchants can create pages to hold static HTML content. Each Page object
 * represents a custom page on the online store.
 */
export interface StorefrontApiPage extends StorefrontApiNode {
  __typename: 'Page'
  /** The description of the page, complete with HTML formatting. */
  body: Scalars['HTML']
  /** Summary of the page body. */
  bodySummary: Scalars['String']
  /** The timestamp of the page creation. */
  createdAt: Scalars['DateTime']
  /** A human-friendly unique string for the page automatically generated from its title. */
  handle: Scalars['String']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** The title of the page. */
  title: Scalars['String']
  /** The timestamp of the latest page update. */
  updatedAt: Scalars['DateTime']
  /** The url pointing to the page accessible from the web. */
  url: Scalars['URL']
}

export interface StorefrontApiPageConnection {
  __typename: 'PageConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiPageEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

export interface StorefrontApiPageEdge {
  __typename: 'PageEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of PageEdge. */
  node: StorefrontApiPage
}

/** Information about pagination in a connection. */
export interface StorefrontApiPageInfo {
  __typename: 'PageInfo'
  /** Indicates if there are more pages to fetch. */
  hasNextPage: Scalars['Boolean']
  /** Indicates if there are any pages prior to the current page. */
  hasPreviousPage: Scalars['Boolean']
}

/** The set of valid sort keys for the Page query. */
export enum StorefrontApiPageSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** A payment applied to a checkout. */
export interface StorefrontApiPayment extends StorefrontApiNode {
  __typename: 'Payment'
  /**
   * The amount of the payment.
   * @deprecated Use `amountV2` instead
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
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** A client-side generated token to identify a payment and perform idempotent operations. */
  idempotencyKey?: Maybe<Scalars['String']>
  /** Whether or not the payment is still processing asynchronously. */
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
  /**
   * A list of enabled currencies (ISO 4217 format) that the shop accepts.
   * Merchants can enable currencies from their Shopify Payments settings in the Shopify admin.
   */
  enabledPresentmentCurrencies: Array<StorefrontApiCurrencyCode>
  /** The shop’s Shopify Payments account id. */
  shopifyPaymentsAccountId?: Maybe<Scalars['String']>
  /** List of the digital wallets which the shop supports. */
  supportedDigitalWallets: Array<StorefrontApiDigitalWallet>
}

/** The value of the percentage pricing object. */
export interface StorefrontApiPricingPercentageValue {
  __typename: 'PricingPercentageValue'
  /** The percentage value of the object. */
  percentage: Scalars['Float']
}

/** The price value (fixed or percentage) for a discount application. */
export type StorefrontApiPricingValue =
  | StorefrontApiPricingPercentageValue
  | StorefrontApiMoneyV2

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 */
export interface StorefrontApiProduct
  extends StorefrontApiNode,
    StorefrontApiHasMetafields {
  __typename: 'Product'
  /** Indicates if at least one product variant is available for sale. */
  availableForSale: Scalars['Boolean']
  /** List of collections a product belongs to. */
  collections: StorefrontApiCollectionConnection
  /** The date and time when the product was created. */
  createdAt: Scalars['DateTime']
  /** Stripped description of the product, single line with HTML tags removed. */
  description: Scalars['String']
  /** The description of the product, complete with HTML formatting. */
  descriptionHtml: Scalars['HTML']
  /**
   * A human-friendly unique string for the Product automatically generated from its title.
   * They are used by the Liquid templating language to refer to objects.
   */
  handle: Scalars['String']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** List of images associated with the product. */
  images: StorefrontApiImageConnection
  /** The metafield associated with the resource. */
  metafield?: Maybe<StorefrontApiMetafield>
  /** A paginated list of metafields associated with the resource. */
  metafields: StorefrontApiMetafieldConnection
  /**
   * The online store URL for the product.
   * A value of `null` indicates that the product is not published to the Online Store sales channel.
   */
  onlineStoreUrl?: Maybe<Scalars['URL']>
  /** List of custom product options (maximum of 3 per product). */
  options: Array<StorefrontApiProductOption>
  /** List of price ranges in the presentment currencies for this shop. */
  presentmentPriceRanges: StorefrontApiProductPriceRangeConnection
  /** The price range. */
  priceRange: StorefrontApiProductPriceRange
  /** A categorization that a product can be tagged with, commonly used for filtering and searching. */
  productType: Scalars['String']
  /** The date and time when the product was published to the channel. */
  publishedAt: Scalars['DateTime']
  /**
   * A categorization that a product can be tagged with, commonly used for filtering and searching.
   * Additional access scope required for private apps: unauthenticated_read_product_tags.
   */
  tags: Array<Scalars['String']>
  /** The product’s title. */
  title: Scalars['String']
  /** The date and time when the product was last modified. */
  updatedAt: Scalars['DateTime']
  /**
   * Find a product’s variant based on its selected options.
   * This is useful for converting a user’s selection of product options into a single matching variant.
   * If there is not a variant for the selected options, `null` will be returned.
   */
  variantBySelectedOptions?: Maybe<StorefrontApiProductVariant>
  /** List of the product’s variants. */
  variants: StorefrontApiProductVariantConnection
  /** The product’s vendor name. */
  vendor: Scalars['String']
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 */
export type StorefrontApiProductCollectionsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 */
export type StorefrontApiProductDescriptionArgs = {
  truncateAt?: Maybe<Scalars['Int']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 */
export type StorefrontApiProductImagesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<StorefrontApiProductImageSortKeys>
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<StorefrontApiCropRegion>
  scale?: Maybe<Scalars['Int']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 */
export type StorefrontApiProductMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 */
export type StorefrontApiProductMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 */
export type StorefrontApiProductOptionsArgs = {
  first?: Maybe<Scalars['Int']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 */
export type StorefrontApiProductPresentmentPriceRangesArgs = {
  presentmentCurrencies?: Maybe<Array<StorefrontApiCurrencyCode>>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 */
export type StorefrontApiProductVariantBySelectedOptionsArgs = {
  selectedOptions: Array<StorefrontApiSelectedOptionInput>
}

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 */
export type StorefrontApiProductVariantsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<StorefrontApiProductVariantSortKeys>
}

/** The set of valid sort keys for the ProductCollection query. */
export enum StorefrontApiProductCollectionSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `price` value. */
  Price = 'PRICE',
  /** Sort by the `best-selling` value. */
  BestSelling = 'BEST_SELLING',
  /** Sort by the `created` value. */
  Created = 'CREATED',
  /** Sort by the `id` value. */
  Id = 'ID',
  /** Sort by the `manual` value. */
  Manual = 'MANUAL',
  /** Sort by the `collection-default` value. */
  CollectionDefault = 'COLLECTION_DEFAULT',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

export interface StorefrontApiProductConnection {
  __typename: 'ProductConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiProductEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

export interface StorefrontApiProductEdge {
  __typename: 'ProductEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductEdge. */
  node: StorefrontApiProduct
}

/** The set of valid sort keys for the ProductImage query. */
export enum StorefrontApiProductImageSortKeys {
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/**
 * Custom product property names like "Size", "Color", and "Material".
 * Products are based on permutations of these options.
 * A product may have a maximum of 3 options.
 * 255 characters limit each.
 */
export interface StorefrontApiProductOption extends StorefrontApiNode {
  __typename: 'ProductOption'
  /** Globally unique identifier. */
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

export interface StorefrontApiProductPriceRangeConnection {
  __typename: 'ProductPriceRangeConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiProductPriceRangeEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

export interface StorefrontApiProductPriceRangeEdge {
  __typename: 'ProductPriceRangeEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductPriceRangeEdge. */
  node: StorefrontApiProductPriceRange
}

/** The set of valid sort keys for the Product query. */
export enum StorefrontApiProductSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `product_type` value. */
  ProductType = 'PRODUCT_TYPE',
  /** Sort by the `vendor` value. */
  Vendor = 'VENDOR',
  /** Sort by the `updated_at` value. */
  UpdatedAt = 'UPDATED_AT',
  /** Sort by the `created_at` value. */
  CreatedAt = 'CREATED_AT',
  /** Sort by the `best_selling` value. */
  BestSelling = 'BEST_SELLING',
  /** Sort by the `price` value. */
  Price = 'PRICE',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export interface StorefrontApiProductVariant
  extends StorefrontApiNode,
    StorefrontApiHasMetafields {
  __typename: 'ProductVariant'
  /**
   * Indicates if the product variant is in stock.
   * @deprecated Use `availableForSale` instead
   */
  available?: Maybe<Scalars['Boolean']>
  /** Indicates if the product variant is available for sale. */
  availableForSale: Scalars['Boolean']
  /**
   * The compare at price of the variant. This can be used to mark a variant as on
   * sale, when `compareAtPrice` is higher than `price`.
   * @deprecated Use `compareAtPriceV2` instead
   */
  compareAtPrice?: Maybe<Scalars['Money']>
  /**
   * The compare at price of the variant. This can be used to mark a variant as on
   * sale, when `compareAtPriceV2` is higher than `priceV2`.
   */
  compareAtPriceV2?: Maybe<StorefrontApiMoneyV2>
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** Image associated with the product variant. This field falls back to the product image if no image is available. */
  image?: Maybe<StorefrontApiImage>
  /** The metafield associated with the resource. */
  metafield?: Maybe<StorefrontApiMetafield>
  /** A paginated list of metafields associated with the resource. */
  metafields: StorefrontApiMetafieldConnection
  /** List of prices and compare-at prices in the presentment currencies for this shop. */
  presentmentPrices: StorefrontApiProductVariantPricePairConnection
  /**
   * The product variant’s price.
   * @deprecated Use `priceV2` instead
   */
  price: Scalars['Money']
  /** The product variant’s price. */
  priceV2: StorefrontApiMoneyV2
  /** The product object that the product variant belongs to. */
  product: StorefrontApiProduct
  /** Whether a customer needs to provide a shipping address when placing an order for the product variant. */
  requiresShipping: Scalars['Boolean']
  /** List of product options applied to the variant. */
  selectedOptions: Array<StorefrontApiSelectedOption>
  /** The SKU (stock keeping unit) associated with the variant. */
  sku?: Maybe<Scalars['String']>
  /** The product variant’s title. */
  title: Scalars['String']
  /** The weight of the product variant in the unit system specified with `weight_unit`. */
  weight?: Maybe<Scalars['Float']>
  /** Unit of measurement for weight. */
  weightUnit: StorefrontApiWeightUnit
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type StorefrontApiProductVariantImageArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  crop?: Maybe<StorefrontApiCropRegion>
  scale?: Maybe<Scalars['Int']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type StorefrontApiProductVariantMetafieldArgs = {
  namespace: Scalars['String']
  key: Scalars['String']
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type StorefrontApiProductVariantMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

/** A product variant represents a different version of a product, such as differing sizes or differing colors. */
export type StorefrontApiProductVariantPresentmentPricesArgs = {
  presentmentCurrencies?: Maybe<Array<StorefrontApiCurrencyCode>>
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
}

export interface StorefrontApiProductVariantConnection {
  __typename: 'ProductVariantConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiProductVariantEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

export interface StorefrontApiProductVariantEdge {
  __typename: 'ProductVariantEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductVariantEdge. */
  node: StorefrontApiProductVariant
}

/** The compare-at price and price of a variant sharing a currency. */
export interface StorefrontApiProductVariantPricePair {
  __typename: 'ProductVariantPricePair'
  /** The compare-at price of the variant with associated currency. */
  compareAtPrice?: Maybe<StorefrontApiMoneyV2>
  /** The price of the variant with associated currency. */
  price: StorefrontApiMoneyV2
}

export interface StorefrontApiProductVariantPricePairConnection {
  __typename: 'ProductVariantPricePairConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiProductVariantPricePairEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

export interface StorefrontApiProductVariantPricePairEdge {
  __typename: 'ProductVariantPricePairEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
  /** The item at the end of ProductVariantPricePairEdge. */
  node: StorefrontApiProductVariantPricePair
}

/** The set of valid sort keys for the ProductVariant query. */
export enum StorefrontApiProductVariantSortKeys {
  /** Sort by the `title` value. */
  Title = 'TITLE',
  /** Sort by the `sku` value. */
  Sku = 'SKU',
  /** Sort by the `position` value. */
  Position = 'POSITION',
  /** Sort by the `id` value. */
  Id = 'ID',
  /**
   * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
   */
  Relevance = 'RELEVANCE',
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export interface StorefrontApiQueryRoot {
  __typename: 'QueryRoot'
  /** List of the shop's articles. */
  articles: StorefrontApiArticleConnection
  /** Find a blog by its handle. */
  blogByHandle?: Maybe<StorefrontApiBlog>
  /** List of the shop's blogs. */
  blogs: StorefrontApiBlogConnection
  /** Find a collection by its handle. */
  collectionByHandle?: Maybe<StorefrontApiCollection>
  /** List of the shop’s collections. */
  collections: StorefrontApiCollectionConnection
  /** Find a customer by its access token. */
  customer?: Maybe<StorefrontApiCustomer>
  node?: Maybe<StorefrontApiNode>
  nodes: Array<Maybe<StorefrontApiNode>>
  /** Find a page by its handle. */
  pageByHandle?: Maybe<StorefrontApiPage>
  /** List of the shop's pages. */
  pages: StorefrontApiPageConnection
  /** Find a product by its handle. */
  productByHandle?: Maybe<StorefrontApiProduct>
  /**
   * Find recommended products related to a given `product_id`.
   * To learn more about how recommendations are generated, see
   * [*Showing product recommendations on product pages*](https://help.shopify.com/themes/development/recommended-products).
   */
  productRecommendations?: Maybe<Array<StorefrontApiProduct>>
  /**
   * Tags added to products.
   * Additional access scope required: unauthenticated_read_product_tags.
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
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<StorefrontApiArticleSortKeys>
  query?: Maybe<Scalars['String']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootBlogByHandleArgs = {
  handle: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootBlogsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<StorefrontApiBlogSortKeys>
  query?: Maybe<Scalars['String']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootCollectionByHandleArgs = {
  handle: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootCollectionsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<StorefrontApiCollectionSortKeys>
  query?: Maybe<Scalars['String']>
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootCustomerArgs = {
  customerAccessToken: Scalars['String']
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
export type StorefrontApiQueryRootPageByHandleArgs = {
  handle: Scalars['String']
}

/** The schema’s entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type StorefrontApiQueryRootPagesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<StorefrontApiPageSortKeys>
  query?: Maybe<Scalars['String']>
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
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<StorefrontApiProductSortKeys>
  query?: Maybe<Scalars['String']>
}

/**
 * Script discount applications capture the intentions of a discount that
 * was created by a Shopify Script.
 */
export interface StorefrontApiScriptDiscountApplication
  extends StorefrontApiDiscountApplication {
  __typename: 'ScriptDiscountApplication'
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: StorefrontApiDiscountApplicationAllocationMethod
  /**
   * The description of the application as defined by the Script.
   * @deprecated Use `title` instead
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
 * Custom properties that a shop owner can use to define product variants.
 * Multiple options can exist. Options are represented as: option1, option2, option3, etc.
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

/** SEO information. */
export interface StorefrontApiSeo {
  __typename: 'SEO'
  /** The meta description. */
  description?: Maybe<Scalars['String']>
  /** The SEO title. */
  title?: Maybe<Scalars['String']>
}

/** A shipping rate to be applied to a checkout. */
export interface StorefrontApiShippingRate {
  __typename: 'ShippingRate'
  /** Human-readable unique identifier for this shipping rate. */
  handle: Scalars['String']
  /**
   * Price of this shipping rate.
   * @deprecated Use `priceV2` instead
   */
  price: Scalars['Money']
  /** Price of this shipping rate. */
  priceV2: StorefrontApiMoneyV2
  /** Title of this shipping rate. */
  title: Scalars['String']
}

/** Shop represents a collection of the general settings and information about the shop. */
export interface StorefrontApiShop {
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
   * @deprecated Use `paymentSettings` instead
   */
  currencyCode: StorefrontApiCurrencyCode
  /** A description of the shop. */
  description?: Maybe<Scalars['String']>
  /** A string representing the way currency is formatted when the currency isn’t specified. */
  moneyFormat: Scalars['String']
  /** The shop’s name. */
  name: Scalars['String']
  /** Settings related to payments. */
  paymentSettings: StorefrontApiPaymentSettings
  /** The shop’s primary domain. */
  primaryDomain: StorefrontApiDomain
  /** The shop’s privacy policy. */
  privacyPolicy?: Maybe<StorefrontApiShopPolicy>
  /**
   * Find a product by its handle.
   * @deprecated Use `QueryRoot.productByHandle` instead.
   */
  productByHandle?: Maybe<StorefrontApiProduct>
  /**
   * Tags added to products.
   * Additional access scope required: unauthenticated_read_product_tags.
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
  /** Countries that the shop ships to. */
  shipsToCountries: Array<StorefrontApiCountryCode>
  /**
   * The shop’s Shopify Payments account id.
   * @deprecated Use `paymentSettings` instead
   */
  shopifyPaymentsAccountId?: Maybe<Scalars['String']>
  /** The shop’s terms of service. */
  termsOfService?: Maybe<StorefrontApiShopPolicy>
}

/** Shop represents a collection of the general settings and information about the shop. */
export type StorefrontApiShopArticlesArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<StorefrontApiArticleSortKeys>
  query?: Maybe<Scalars['String']>
}

/** Shop represents a collection of the general settings and information about the shop. */
export type StorefrontApiShopBlogsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<StorefrontApiBlogSortKeys>
  query?: Maybe<Scalars['String']>
}

/** Shop represents a collection of the general settings and information about the shop. */
export type StorefrontApiShopCollectionByHandleArgs = {
  handle: Scalars['String']
}

/** Shop represents a collection of the general settings and information about the shop. */
export type StorefrontApiShopCollectionsArgs = {
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<StorefrontApiCollectionSortKeys>
  query?: Maybe<Scalars['String']>
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
  first?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  last?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  reverse?: Maybe<Scalars['Boolean']>
  sortKey?: Maybe<StorefrontApiProductSortKeys>
  query?: Maybe<Scalars['String']>
}

/** Policy that a merchant has configured for their store, such as their refund or privacy policy. */
export interface StorefrontApiShopPolicy extends StorefrontApiNode {
  __typename: 'ShopPolicy'
  /** Policy text, maximum size of 64kb. */
  body: Scalars['String']
  /** Policy’s handle. */
  handle: Scalars['String']
  /** Globally unique identifier. */
  id: Scalars['ID']
  /** Policy’s title. */
  title: Scalars['String']
  /** Public URL to the policy. */
  url: Scalars['URL']
}

export interface StorefrontApiStringConnection {
  __typename: 'StringConnection'
  /** A list of edges. */
  edges: Array<StorefrontApiStringEdge>
  /** Information to aid in pagination. */
  pageInfo: StorefrontApiPageInfo
}

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
 */
export type StorefrontApiTokenizedPaymentInput = {
  /** The amount of the payment. */
  amount: Scalars['Money']
  /**
   * A unique client generated key used to avoid duplicate charges. When a
   * duplicate payment is found, the original is returned instead of creating a new one.
   */
  idempotencyKey: Scalars['String']
  /** The billing address for the payment. */
  billingAddress: StorefrontApiMailingAddressInput
  /** The type of payment token. */
  type: Scalars['String']
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String']
  /** Executes the payment in test mode if possible. Defaults to `false`. */
  test?: Maybe<Scalars['Boolean']>
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: Maybe<Scalars['String']>
}

/**
 * Specifies the fields required to complete a checkout with
 * a tokenized payment.
 */
export type StorefrontApiTokenizedPaymentInputV2 = {
  /** The amount and currency of the payment. */
  paymentAmount: StorefrontApiMoneyInput
  /**
   * A unique client generated key used to avoid duplicate charges. When a
   * duplicate payment is found, the original is returned instead of creating a new one.
   */
  idempotencyKey: Scalars['String']
  /** The billing address for the payment. */
  billingAddress: StorefrontApiMailingAddressInput
  /** A simple string or JSON containing the required payment data for the tokenized payment. */
  paymentData: Scalars['String']
  /**
   * Whether to execute the payment in test mode, if possible. Test mode is not
   * supported in production stores. Defaults to `false`.
   */
  test?: Maybe<Scalars['Boolean']>
  /** Public Hash Key used for AndroidPay payments only. */
  identifier?: Maybe<Scalars['String']>
  /** The type of payment token. */
  type: Scalars['String']
}

/** An object representing exchange of money for a product or service. */
export interface StorefrontApiTransaction {
  __typename: 'Transaction'
  /**
   * The amount of money that the transaction was for.
   * @deprecated Use `amountV2` instead
   */
  amount: Scalars['Money']
  /** The amount of money that the transaction was for. */
  amountV2: StorefrontApiMoneyV2
  /** The kind of the transaction. */
  kind: StorefrontApiTransactionKind
  /**
   * The status of the transaction.
   * @deprecated Use `statusV2` instead
   */
  status: StorefrontApiTransactionStatus
  /** The status of the transaction. */
  statusV2?: Maybe<StorefrontApiTransactionStatus>
  /** Whether the transaction was done in test mode or not. */
  test: Scalars['Boolean']
}

export enum StorefrontApiTransactionKind {
  Sale = 'SALE',
  Capture = 'CAPTURE',
  Authorization = 'AUTHORIZATION',
  EmvAuthorization = 'EMV_AUTHORIZATION',
  Change = 'CHANGE',
}

export enum StorefrontApiTransactionStatus {
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Failure = 'FAILURE',
  Error = 'ERROR',
}

/** Represents an error in the input of a mutation. */
export interface StorefrontApiUserError extends StorefrontApiDisplayableError {
  __typename: 'UserError'
  /** Path to the input field which caused the error. */
  field?: Maybe<Array<Scalars['String']>>
  /** The error message. */
  message: Scalars['String']
}

/** Units of measurement for weight. */
export enum StorefrontApiWeightUnit {
  /** 1 kilogram equals 1000 grams. */
  Kilograms = 'KILOGRAMS',
  /** Metric system unit of mass. */
  Grams = 'GRAMS',
  /** 1 pound equals 16 ounces. */
  Pounds = 'POUNDS',
  /** Imperial system unit of mass. */
  Ounces = 'OUNCES',
}
