export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
   **/
  DateTime: Date
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { [key: string]: any }
}

export interface Block {
  __typename: 'Block'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  children?: Maybe<Array<Maybe<Span>>>
  style?: Maybe<Scalars['String']>
  list?: Maybe<Scalars['String']>
}

export interface Carousel {
  __typename: 'Carousel'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  subtitleRaw?: Maybe<Scalars['JSON']>
  /** Create a carousel from a collection. If a collection is used, items linked to below be ignored. */
  collection?: Maybe<ShopifyCollection>
  items?: Maybe<Array<Maybe<RichPageLink>>>
}

export type CarouselOrHeroOrImageTextSection =
  | Carousel
  | Hero
  | ImageTextSection

export interface Cta {
  __typename: 'Cta'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  link?: Maybe<InternalLink>
}

export type CtaOrSubMenu = Cta | SubMenu

/** A Sanity document */
export type Document = {
  /** Document ID */
  _id: Scalars['ID']
  /** Document type */
  _type: Scalars['String']
  /** Date the document was created */
  _createdAt: Scalars['DateTime']
  /** Date the document was last modified */
  _updatedAt: Scalars['DateTime']
  /** Current document revision */
  _rev: Scalars['String']
}

export interface ExternalLink {
  __typename: 'ExternalLink'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  newTab?: Maybe<Scalars['Boolean']>
}

export interface File {
  __typename: 'File'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  asset?: Maybe<SanityFileAsset>
}

export interface Geopoint {
  __typename: 'Geopoint'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  alt?: Maybe<Scalars['Float']>
}

export interface Hero {
  __typename: 'Hero'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  bodyRaw?: Maybe<Scalars['JSON']>
  textAlign?: Maybe<Scalars['String']>
  textPosition?: Maybe<Scalars['String']>
  cta?: Maybe<Cta>
  textColor?: Maybe<Scalars['String']>
  image?: Maybe<RichImage>
  mobileImage?: Maybe<RichImage>
  textPositionMobile?: Maybe<Scalars['String']>
  textColorMobile?: Maybe<Scalars['String']>
}

export interface Homepage extends Document {
  __typename: 'Homepage'
  /** Document ID */
  _id: Scalars['ID']
  /** Document type */
  _type: Scalars['String']
  /** Date the document was created */
  _createdAt: Scalars['DateTime']
  /** Date the document was last modified */
  _updatedAt: Scalars['DateTime']
  /** Current document revision */
  _rev: Scalars['String']
  _key?: Maybe<Scalars['String']>
  content?: Maybe<Array<Maybe<CarouselOrHeroOrImageTextSection>>>
}

export type HomepageFilter = {
  /** All documents that are equal to given value */
  _id?: Maybe<Scalars['ID']>
  /** All documents that are not equal to given value */
  _id_not?: Maybe<Scalars['ID']>
  /** All documents contain (match) the given word/words */
  _id_matches?: Maybe<Scalars['String']>
  _id_in?: Maybe<Array<Scalars['String']>>
  _id_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _type?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _type_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _type_matches?: Maybe<Scalars['String']>
  _type_in?: Maybe<Array<Scalars['String']>>
  _type_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** All documents that are not equal to given value */
  _createdAt_not?: Maybe<Scalars['DateTime']>
  /** All documents are less than given value */
  _createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All documents are less than or equal to given value */
  _createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All documents are greater than given value */
  _createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All documents are greater than or equal to given value */
  _createdAt_gte?: Maybe<Scalars['DateTime']>
  /** All documents that are equal to given value */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** All documents that are not equal to given value */
  _updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All documents are less than given value */
  _updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All documents are less than or equal to given value */
  _updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All documents are greater than given value */
  _updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All documents are greater than or equal to given value */
  _updatedAt_gte?: Maybe<Scalars['DateTime']>
  /** All documents that are equal to given value */
  _rev?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _rev_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _rev_matches?: Maybe<Scalars['String']>
  _rev_in?: Maybe<Array<Scalars['String']>>
  _rev_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _key?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _key_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _key_matches?: Maybe<Scalars['String']>
  _key_in?: Maybe<Array<Scalars['String']>>
  _key_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are drafts */
  is_draft?: Maybe<Scalars['Boolean']>
}

export interface Image {
  __typename: 'Image'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  asset?: Maybe<SanityImageAsset>
  hotspot?: Maybe<SanityImageHotspot>
  crop?: Maybe<SanityImageCrop>
}

export interface ImageBlock {
  __typename: 'ImageBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  backgroundImage?: Maybe<RichImage>
  link?: Maybe<InternalLink>
  captionRaw?: Maybe<Scalars['JSON']>
  hoverImage?: Maybe<RichImage>
}

export type ImageBlockOrTextBlock = ImageBlock | TextBlock

export interface ImageTextSection {
  __typename: 'ImageTextSection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  subtitleRaw?: Maybe<Scalars['JSON']>
  blocks?: Maybe<Array<Maybe<ImageBlockOrTextBlock>>>
}

export interface InternalLink {
  __typename: 'InternalLink'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  document?: Maybe<PageOrShopifyCollectionOrShopifyProduct>
}

export interface LinkGroup {
  __typename: 'LinkGroup'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  links?: Maybe<Array<Maybe<InternalLink>>>
}

export type LinkGroupOrRichPageLink = LinkGroup | RichPageLink

export interface Menu extends Document {
  __typename: 'Menu'
  /** Document ID */
  _id: Scalars['ID']
  /** Document type */
  _type: Scalars['String']
  /** Date the document was created */
  _createdAt: Scalars['DateTime']
  /** Date the document was last modified */
  _updatedAt: Scalars['DateTime']
  /** Current document revision */
  _rev: Scalars['String']
  _key?: Maybe<Scalars['String']>
  menuItems?: Maybe<Array<Maybe<CtaOrSubMenu>>>
}

export type MenuFilter = {
  /** All documents that are equal to given value */
  _id?: Maybe<Scalars['ID']>
  /** All documents that are not equal to given value */
  _id_not?: Maybe<Scalars['ID']>
  /** All documents contain (match) the given word/words */
  _id_matches?: Maybe<Scalars['String']>
  _id_in?: Maybe<Array<Scalars['String']>>
  _id_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _type?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _type_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _type_matches?: Maybe<Scalars['String']>
  _type_in?: Maybe<Array<Scalars['String']>>
  _type_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** All documents that are not equal to given value */
  _createdAt_not?: Maybe<Scalars['DateTime']>
  /** All documents are less than given value */
  _createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All documents are less than or equal to given value */
  _createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All documents are greater than given value */
  _createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All documents are greater than or equal to given value */
  _createdAt_gte?: Maybe<Scalars['DateTime']>
  /** All documents that are equal to given value */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** All documents that are not equal to given value */
  _updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All documents are less than given value */
  _updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All documents are less than or equal to given value */
  _updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All documents are greater than given value */
  _updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All documents are greater than or equal to given value */
  _updatedAt_gte?: Maybe<Scalars['DateTime']>
  /** All documents that are equal to given value */
  _rev?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _rev_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _rev_matches?: Maybe<Scalars['String']>
  _rev_in?: Maybe<Array<Scalars['String']>>
  _rev_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _key?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _key_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _key_matches?: Maybe<Scalars['String']>
  _key_in?: Maybe<Array<Scalars['String']>>
  _key_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are drafts */
  is_draft?: Maybe<Scalars['Boolean']>
}

export interface MenuLink {
  __typename: 'MenuLink'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  link?: Maybe<Cta>
}

export interface Page extends Document {
  __typename: 'Page'
  /** Document ID */
  _id: Scalars['ID']
  /** Document type */
  _type: Scalars['String']
  /** Date the document was created */
  _createdAt: Scalars['DateTime']
  /** Date the document was last modified */
  _updatedAt: Scalars['DateTime']
  /** Current document revision */
  _rev: Scalars['String']
  _key?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  slug?: Maybe<Slug>
}

export type PageFilter = {
  /** All documents that are equal to given value */
  _id?: Maybe<Scalars['ID']>
  /** All documents that are not equal to given value */
  _id_not?: Maybe<Scalars['ID']>
  /** All documents contain (match) the given word/words */
  _id_matches?: Maybe<Scalars['String']>
  _id_in?: Maybe<Array<Scalars['String']>>
  _id_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _type?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _type_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _type_matches?: Maybe<Scalars['String']>
  _type_in?: Maybe<Array<Scalars['String']>>
  _type_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** All documents that are not equal to given value */
  _createdAt_not?: Maybe<Scalars['DateTime']>
  /** All documents are less than given value */
  _createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All documents are less than or equal to given value */
  _createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All documents are greater than given value */
  _createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All documents are greater than or equal to given value */
  _createdAt_gte?: Maybe<Scalars['DateTime']>
  /** All documents that are equal to given value */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** All documents that are not equal to given value */
  _updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All documents are less than given value */
  _updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All documents are less than or equal to given value */
  _updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All documents are greater than given value */
  _updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All documents are greater than or equal to given value */
  _updatedAt_gte?: Maybe<Scalars['DateTime']>
  /** All documents that are equal to given value */
  _rev?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _rev_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _rev_matches?: Maybe<Scalars['String']>
  _rev_in?: Maybe<Array<Scalars['String']>>
  _rev_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _key?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _key_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _key_matches?: Maybe<Scalars['String']>
  _key_in?: Maybe<Array<Scalars['String']>>
  _key_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  title?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  title_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  title_matches?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Scalars['String']>>
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are drafts */
  is_draft?: Maybe<Scalars['Boolean']>
}

export interface PageInfo {
  __typename: 'PageInfo'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  hasNextPage?: Maybe<Scalars['Boolean']>
  hasPreviousPage?: Maybe<Scalars['Boolean']>
}

export type PageOrShopifyCollectionOrShopifyProduct =
  | Page
  | ShopifyCollection
  | ShopifyProduct

export interface ProductInfo extends Document {
  __typename: 'ProductInfo'
  /** Document ID */
  _id: Scalars['ID']
  /** Document type */
  _type: Scalars['String']
  /** Date the document was created */
  _createdAt: Scalars['DateTime']
  /** Date the document was last modified */
  _updatedAt: Scalars['DateTime']
  /** Current document revision */
  _rev: Scalars['String']
  _key?: Maybe<Scalars['String']>
  /**
   * Use these fields to add snippets of descriptions to all or some projects. For
   * instance, you could add a 'Shipping and Returns' block on all items, and a
   * 'Ring Sizing Guide' block to all Rings. These blocks will be displayed in
   * accordion-dropdowns below the main product information. You can also add info
   * blocks to individual items on their page here in the CMS.
   **/
  helpText?: Maybe<Scalars['String']>
  globalBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  ringBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  earringBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  braceletBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  necklaceBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  /**
   * Use these fields to add blocks to items with particular tags in Shopify. For
   * instance, a "Customization" block for anything tagged with "Custom" in Shopify.
   **/
  byTagHelpText?: Maybe<Scalars['String']>
  blocksByTag?: Maybe<Array<Maybe<ProductInfoBlocksByTag>>>
}

export interface ProductInfoBlock {
  __typename: 'ProductInfoBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  bodyRaw?: Maybe<Scalars['JSON']>
}

export interface ProductInfoBlocksByTag {
  __typename: 'ProductInfoBlocksByTag'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** Tag to match from Shopify. */
  tag?: Maybe<Scalars['String']>
  infoBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
}

export type ProductInfoFilter = {
  /** All documents that are equal to given value */
  _id?: Maybe<Scalars['ID']>
  /** All documents that are not equal to given value */
  _id_not?: Maybe<Scalars['ID']>
  /** All documents contain (match) the given word/words */
  _id_matches?: Maybe<Scalars['String']>
  _id_in?: Maybe<Array<Scalars['String']>>
  _id_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _type?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _type_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _type_matches?: Maybe<Scalars['String']>
  _type_in?: Maybe<Array<Scalars['String']>>
  _type_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** All documents that are not equal to given value */
  _createdAt_not?: Maybe<Scalars['DateTime']>
  /** All documents are less than given value */
  _createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All documents are less than or equal to given value */
  _createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All documents are greater than given value */
  _createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All documents are greater than or equal to given value */
  _createdAt_gte?: Maybe<Scalars['DateTime']>
  /** All documents that are equal to given value */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** All documents that are not equal to given value */
  _updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All documents are less than given value */
  _updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All documents are less than or equal to given value */
  _updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All documents are greater than given value */
  _updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All documents are greater than or equal to given value */
  _updatedAt_gte?: Maybe<Scalars['DateTime']>
  /** All documents that are equal to given value */
  _rev?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _rev_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _rev_matches?: Maybe<Scalars['String']>
  _rev_in?: Maybe<Array<Scalars['String']>>
  _rev_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _key?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _key_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _key_matches?: Maybe<Scalars['String']>
  _key_in?: Maybe<Array<Scalars['String']>>
  _key_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  helpText?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  helpText_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  helpText_matches?: Maybe<Scalars['String']>
  helpText_in?: Maybe<Array<Scalars['String']>>
  helpText_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  byTagHelpText?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  byTagHelpText_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  byTagHelpText_matches?: Maybe<Scalars['String']>
  byTagHelpText_in?: Maybe<Array<Scalars['String']>>
  byTagHelpText_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are drafts */
  is_draft?: Maybe<Scalars['Boolean']>
}

export interface RichImage {
  __typename: 'RichImage'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** A short description of the image. Helps with accessibility and SEO */
  altText?: Maybe<Scalars['String']>
  asset?: Maybe<SanityImageAsset>
  hotspot?: Maybe<SanityImageHotspot>
  crop?: Maybe<SanityImageCrop>
}

export interface RichPageLink {
  __typename: 'RichPageLink'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  document?: Maybe<PageOrShopifyCollectionOrShopifyProduct>
  /** If left empty, the title of the linked page, product, or collection will be used. */
  title?: Maybe<Scalars['String']>
  captionRaw?: Maybe<Scalars['JSON']>
  image?: Maybe<RichImage>
  hoverImage?: Maybe<RichImage>
}

export interface RootQuery {
  __typename: 'RootQuery'
  Menu?: Maybe<Menu>
  Homepage?: Maybe<Homepage>
  Page?: Maybe<Page>
  ProductInfo?: Maybe<ProductInfo>
  SiteSettings?: Maybe<SiteSettings>
  Stockists?: Maybe<Stockists>
  ShopifyProduct?: Maybe<ShopifyProduct>
  ShopifyCollection?: Maybe<ShopifyCollection>
  SanityImageAsset?: Maybe<SanityImageAsset>
  SanityFileAsset?: Maybe<SanityFileAsset>
  allMenus: Array<Menu>
  allHomepages: Array<Homepage>
  allPages: Array<Page>
  allProductInfos: Array<ProductInfo>
  allSiteSettings: Array<SiteSettings>
  allStockists: Array<Stockists>
  allShopifyProducts: Array<ShopifyProduct>
  allShopifyCollections: Array<ShopifyCollection>
  allSanityImageAssets: Array<SanityImageAsset>
  allSanityFileAssets: Array<SanityFileAsset>
}

export type RootQueryMenuArgs = {
  id: Scalars['ID']
}

export type RootQueryHomepageArgs = {
  id: Scalars['ID']
}

export type RootQueryPageArgs = {
  id: Scalars['ID']
}

export type RootQueryProductInfoArgs = {
  id: Scalars['ID']
}

export type RootQuerySiteSettingsArgs = {
  id: Scalars['ID']
}

export type RootQueryStockistsArgs = {
  id: Scalars['ID']
}

export type RootQueryShopifyProductArgs = {
  id: Scalars['ID']
}

export type RootQueryShopifyCollectionArgs = {
  id: Scalars['ID']
}

export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID']
}

export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID']
}

export type RootQueryAllMenusArgs = {
  where?: Maybe<MenuFilter>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllHomepagesArgs = {
  where?: Maybe<HomepageFilter>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllPagesArgs = {
  where?: Maybe<PageFilter>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllProductInfosArgs = {
  where?: Maybe<ProductInfoFilter>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllSiteSettingsArgs = {
  where?: Maybe<SiteSettingsFilter>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllStockistsArgs = {
  where?: Maybe<StockistsFilter>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllShopifyProductsArgs = {
  where?: Maybe<ShopifyProductFilter>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllShopifyCollectionsArgs = {
  where?: Maybe<ShopifyCollectionFilter>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllSanityImageAssetsArgs = {
  where?: Maybe<SanityImageAssetFilter>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllSanityFileAssetsArgs = {
  where?: Maybe<SanityFileAssetFilter>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export interface SanityAssetSourceData {
  __typename: 'SanityAssetSourceData'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']>
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']>
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']>
}

export interface SanityFileAsset extends Document {
  __typename: 'SanityFileAsset'
  /** Document ID */
  _id: Scalars['ID']
  /** Document type */
  _type: Scalars['String']
  /** Date the document was created */
  _createdAt: Scalars['DateTime']
  /** Date the document was last modified */
  _updatedAt: Scalars['DateTime']
  /** Current document revision */
  _rev: Scalars['String']
  _key?: Maybe<Scalars['String']>
  originalFilename?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  sha1hash?: Maybe<Scalars['String']>
  extension?: Maybe<Scalars['String']>
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  assetId?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  source?: Maybe<SanityAssetSourceData>
}

export type SanityFileAssetFilter = {
  /** All documents that are equal to given value */
  _id?: Maybe<Scalars['ID']>
  /** All documents that are not equal to given value */
  _id_not?: Maybe<Scalars['ID']>
  /** All documents contain (match) the given word/words */
  _id_matches?: Maybe<Scalars['String']>
  _id_in?: Maybe<Array<Scalars['String']>>
  _id_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _type?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _type_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _type_matches?: Maybe<Scalars['String']>
  _type_in?: Maybe<Array<Scalars['String']>>
  _type_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** All documents that are not equal to given value */
  _createdAt_not?: Maybe<Scalars['DateTime']>
  /** All documents are less than given value */
  _createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All documents are less than or equal to given value */
  _createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All documents are greater than given value */
  _createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All documents are greater than or equal to given value */
  _createdAt_gte?: Maybe<Scalars['DateTime']>
  /** All documents that are equal to given value */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** All documents that are not equal to given value */
  _updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All documents are less than given value */
  _updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All documents are less than or equal to given value */
  _updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All documents are greater than given value */
  _updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All documents are greater than or equal to given value */
  _updatedAt_gte?: Maybe<Scalars['DateTime']>
  /** All documents that are equal to given value */
  _rev?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _rev_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _rev_matches?: Maybe<Scalars['String']>
  _rev_in?: Maybe<Array<Scalars['String']>>
  _rev_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _key?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _key_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _key_matches?: Maybe<Scalars['String']>
  _key_in?: Maybe<Array<Scalars['String']>>
  _key_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  originalFilename?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  originalFilename_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  originalFilename_matches?: Maybe<Scalars['String']>
  originalFilename_in?: Maybe<Array<Scalars['String']>>
  originalFilename_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  label?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  label_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  label_matches?: Maybe<Scalars['String']>
  label_in?: Maybe<Array<Scalars['String']>>
  label_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  title?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  title_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  title_matches?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Scalars['String']>>
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  description?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  description_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  description_matches?: Maybe<Scalars['String']>
  description_in?: Maybe<Array<Scalars['String']>>
  description_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  sha1hash?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  sha1hash_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  sha1hash_matches?: Maybe<Scalars['String']>
  sha1hash_in?: Maybe<Array<Scalars['String']>>
  sha1hash_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  extension?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  extension_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  extension_matches?: Maybe<Scalars['String']>
  extension_in?: Maybe<Array<Scalars['String']>>
  extension_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  mimeType?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  mimeType_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  mimeType_matches?: Maybe<Scalars['String']>
  mimeType_in?: Maybe<Array<Scalars['String']>>
  mimeType_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  size?: Maybe<Scalars['Float']>
  /** All documents that are not equal to given value */
  size_not?: Maybe<Scalars['Float']>
  /** All documents are less than given value */
  size_lt?: Maybe<Scalars['Float']>
  /** All documents are less than or equal to given value */
  size_lte?: Maybe<Scalars['Float']>
  /** All documents are greater than given value */
  size_gt?: Maybe<Scalars['Float']>
  /** All documents are greater than or equal to given value */
  size_gte?: Maybe<Scalars['Float']>
  /** All documents that are equal to given value */
  assetId?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  assetId_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  assetId_matches?: Maybe<Scalars['String']>
  assetId_in?: Maybe<Array<Scalars['String']>>
  assetId_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  path?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  path_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  path_matches?: Maybe<Scalars['String']>
  path_in?: Maybe<Array<Scalars['String']>>
  path_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  url?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  url_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  url_matches?: Maybe<Scalars['String']>
  url_in?: Maybe<Array<Scalars['String']>>
  url_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are drafts */
  is_draft?: Maybe<Scalars['Boolean']>
}

export interface SanityImageAsset extends Document {
  __typename: 'SanityImageAsset'
  /** Document ID */
  _id: Scalars['ID']
  /** Document type */
  _type: Scalars['String']
  /** Date the document was created */
  _createdAt: Scalars['DateTime']
  /** Date the document was last modified */
  _updatedAt: Scalars['DateTime']
  /** Current document revision */
  _rev: Scalars['String']
  _key?: Maybe<Scalars['String']>
  originalFilename?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  sha1hash?: Maybe<Scalars['String']>
  extension?: Maybe<Scalars['String']>
  mimeType?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  assetId?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  metadata?: Maybe<SanityImageMetadata>
  source?: Maybe<SanityAssetSourceData>
}

export type SanityImageAssetFilter = {
  /** All documents that are equal to given value */
  _id?: Maybe<Scalars['ID']>
  /** All documents that are not equal to given value */
  _id_not?: Maybe<Scalars['ID']>
  /** All documents contain (match) the given word/words */
  _id_matches?: Maybe<Scalars['String']>
  _id_in?: Maybe<Array<Scalars['String']>>
  _id_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _type?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _type_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _type_matches?: Maybe<Scalars['String']>
  _type_in?: Maybe<Array<Scalars['String']>>
  _type_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** All documents that are not equal to given value */
  _createdAt_not?: Maybe<Scalars['DateTime']>
  /** All documents are less than given value */
  _createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All documents are less than or equal to given value */
  _createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All documents are greater than given value */
  _createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All documents are greater than or equal to given value */
  _createdAt_gte?: Maybe<Scalars['DateTime']>
  /** All documents that are equal to given value */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** All documents that are not equal to given value */
  _updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All documents are less than given value */
  _updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All documents are less than or equal to given value */
  _updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All documents are greater than given value */
  _updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All documents are greater than or equal to given value */
  _updatedAt_gte?: Maybe<Scalars['DateTime']>
  /** All documents that are equal to given value */
  _rev?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _rev_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _rev_matches?: Maybe<Scalars['String']>
  _rev_in?: Maybe<Array<Scalars['String']>>
  _rev_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _key?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _key_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _key_matches?: Maybe<Scalars['String']>
  _key_in?: Maybe<Array<Scalars['String']>>
  _key_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  originalFilename?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  originalFilename_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  originalFilename_matches?: Maybe<Scalars['String']>
  originalFilename_in?: Maybe<Array<Scalars['String']>>
  originalFilename_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  label?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  label_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  label_matches?: Maybe<Scalars['String']>
  label_in?: Maybe<Array<Scalars['String']>>
  label_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  title?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  title_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  title_matches?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Scalars['String']>>
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  description?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  description_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  description_matches?: Maybe<Scalars['String']>
  description_in?: Maybe<Array<Scalars['String']>>
  description_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  sha1hash?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  sha1hash_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  sha1hash_matches?: Maybe<Scalars['String']>
  sha1hash_in?: Maybe<Array<Scalars['String']>>
  sha1hash_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  extension?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  extension_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  extension_matches?: Maybe<Scalars['String']>
  extension_in?: Maybe<Array<Scalars['String']>>
  extension_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  mimeType?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  mimeType_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  mimeType_matches?: Maybe<Scalars['String']>
  mimeType_in?: Maybe<Array<Scalars['String']>>
  mimeType_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  size?: Maybe<Scalars['Float']>
  /** All documents that are not equal to given value */
  size_not?: Maybe<Scalars['Float']>
  /** All documents are less than given value */
  size_lt?: Maybe<Scalars['Float']>
  /** All documents are less than or equal to given value */
  size_lte?: Maybe<Scalars['Float']>
  /** All documents are greater than given value */
  size_gt?: Maybe<Scalars['Float']>
  /** All documents are greater than or equal to given value */
  size_gte?: Maybe<Scalars['Float']>
  /** All documents that are equal to given value */
  assetId?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  assetId_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  assetId_matches?: Maybe<Scalars['String']>
  assetId_in?: Maybe<Array<Scalars['String']>>
  assetId_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  path?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  path_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  path_matches?: Maybe<Scalars['String']>
  path_in?: Maybe<Array<Scalars['String']>>
  path_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  url?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  url_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  url_matches?: Maybe<Scalars['String']>
  url_in?: Maybe<Array<Scalars['String']>>
  url_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are drafts */
  is_draft?: Maybe<Scalars['Boolean']>
}

export interface SanityImageCrop {
  __typename: 'SanityImageCrop'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  top?: Maybe<Scalars['Float']>
  bottom?: Maybe<Scalars['Float']>
  left?: Maybe<Scalars['Float']>
  right?: Maybe<Scalars['Float']>
}

export interface SanityImageDimensions {
  __typename: 'SanityImageDimensions'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  aspectRatio?: Maybe<Scalars['Float']>
}

export interface SanityImageHotspot {
  __typename: 'SanityImageHotspot'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  x?: Maybe<Scalars['Float']>
  y?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export interface SanityImageMetadata {
  __typename: 'SanityImageMetadata'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  location?: Maybe<Geopoint>
  dimensions?: Maybe<SanityImageDimensions>
  palette?: Maybe<SanityImagePalette>
  lqip?: Maybe<Scalars['String']>
  hasAlpha?: Maybe<Scalars['Boolean']>
  isOpaque?: Maybe<Scalars['Boolean']>
}

export interface SanityImagePalette {
  __typename: 'SanityImagePalette'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  darkMuted?: Maybe<SanityImagePaletteSwatch>
  lightVibrant?: Maybe<SanityImagePaletteSwatch>
  darkVibrant?: Maybe<SanityImagePaletteSwatch>
  vibrant?: Maybe<SanityImagePaletteSwatch>
  dominant?: Maybe<SanityImagePaletteSwatch>
  lightMuted?: Maybe<SanityImagePaletteSwatch>
  muted?: Maybe<SanityImagePaletteSwatch>
}

export interface SanityImagePaletteSwatch {
  __typename: 'SanityImagePaletteSwatch'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  background?: Maybe<Scalars['String']>
  foreground?: Maybe<Scalars['String']>
  population?: Maybe<Scalars['Float']>
  title?: Maybe<Scalars['String']>
}

export interface ShopifyCollection extends Document {
  __typename: 'ShopifyCollection'
  /** Document ID */
  _id: Scalars['ID']
  /** Document type */
  _type: Scalars['String']
  /** Date the document was created */
  _createdAt: Scalars['DateTime']
  /** Date the document was last modified */
  _updatedAt: Scalars['DateTime']
  /** Current document revision */
  _rev: Scalars['String']
  _key?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  shopifyId?: Maybe<Scalars['String']>
  products?: Maybe<Array<Maybe<ShopifyProduct>>>
  sourceData?: Maybe<ShopifySourceCollection>
}

export type ShopifyCollectionFilter = {
  /** All documents that are equal to given value */
  _id?: Maybe<Scalars['ID']>
  /** All documents that are not equal to given value */
  _id_not?: Maybe<Scalars['ID']>
  /** All documents contain (match) the given word/words */
  _id_matches?: Maybe<Scalars['String']>
  _id_in?: Maybe<Array<Scalars['String']>>
  _id_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _type?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _type_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _type_matches?: Maybe<Scalars['String']>
  _type_in?: Maybe<Array<Scalars['String']>>
  _type_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** All documents that are not equal to given value */
  _createdAt_not?: Maybe<Scalars['DateTime']>
  /** All documents are less than given value */
  _createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All documents are less than or equal to given value */
  _createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All documents are greater than given value */
  _createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All documents are greater than or equal to given value */
  _createdAt_gte?: Maybe<Scalars['DateTime']>
  /** All documents that are equal to given value */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** All documents that are not equal to given value */
  _updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All documents are less than given value */
  _updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All documents are less than or equal to given value */
  _updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All documents are greater than given value */
  _updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All documents are greater than or equal to given value */
  _updatedAt_gte?: Maybe<Scalars['DateTime']>
  /** All documents that are equal to given value */
  _rev?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _rev_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _rev_matches?: Maybe<Scalars['String']>
  _rev_in?: Maybe<Array<Scalars['String']>>
  _rev_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _key?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _key_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _key_matches?: Maybe<Scalars['String']>
  _key_in?: Maybe<Array<Scalars['String']>>
  _key_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  title?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  title_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  title_matches?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Scalars['String']>>
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  handle?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  handle_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  handle_matches?: Maybe<Scalars['String']>
  handle_in?: Maybe<Array<Scalars['String']>>
  handle_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  shopifyId?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  shopifyId_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  shopifyId_matches?: Maybe<Scalars['String']>
  shopifyId_in?: Maybe<Array<Scalars['String']>>
  shopifyId_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are drafts */
  is_draft?: Maybe<Scalars['Boolean']>
}

export interface ShopifyMoneyV2 {
  __typename: 'ShopifyMoneyV2'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['String']>
  currencyCode?: Maybe<Scalars['String']>
}

export interface ShopifyProduct extends Document {
  __typename: 'ShopifyProduct'
  /** Document ID */
  _id: Scalars['ID']
  /** Document type */
  _type: Scalars['String']
  /** Date the document was created */
  _createdAt: Scalars['DateTime']
  /** Date the document was last modified */
  _updatedAt: Scalars['DateTime']
  /** Current document revision */
  _rev: Scalars['String']
  _key?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  shopifyId?: Maybe<Scalars['String']>
  sourceData?: Maybe<ShopifySourceProduct>
  collections?: Maybe<Array<Maybe<ShopifyCollection>>>
  options?: Maybe<Array<Maybe<ShopifyProductOption>>>
  variants?: Maybe<Array<Maybe<ShopifyProductVariant>>>
  infoBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  related?: Maybe<Carousel>
}

export type ShopifyProductFilter = {
  /** All documents that are equal to given value */
  _id?: Maybe<Scalars['ID']>
  /** All documents that are not equal to given value */
  _id_not?: Maybe<Scalars['ID']>
  /** All documents contain (match) the given word/words */
  _id_matches?: Maybe<Scalars['String']>
  _id_in?: Maybe<Array<Scalars['String']>>
  _id_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _type?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _type_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _type_matches?: Maybe<Scalars['String']>
  _type_in?: Maybe<Array<Scalars['String']>>
  _type_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** All documents that are not equal to given value */
  _createdAt_not?: Maybe<Scalars['DateTime']>
  /** All documents are less than given value */
  _createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All documents are less than or equal to given value */
  _createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All documents are greater than given value */
  _createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All documents are greater than or equal to given value */
  _createdAt_gte?: Maybe<Scalars['DateTime']>
  /** All documents that are equal to given value */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** All documents that are not equal to given value */
  _updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All documents are less than given value */
  _updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All documents are less than or equal to given value */
  _updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All documents are greater than given value */
  _updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All documents are greater than or equal to given value */
  _updatedAt_gte?: Maybe<Scalars['DateTime']>
  /** All documents that are equal to given value */
  _rev?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _rev_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _rev_matches?: Maybe<Scalars['String']>
  _rev_in?: Maybe<Array<Scalars['String']>>
  _rev_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _key?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _key_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _key_matches?: Maybe<Scalars['String']>
  _key_in?: Maybe<Array<Scalars['String']>>
  _key_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  title?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  title_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  title_matches?: Maybe<Scalars['String']>
  title_in?: Maybe<Array<Scalars['String']>>
  title_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  handle?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  handle_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  handle_matches?: Maybe<Scalars['String']>
  handle_in?: Maybe<Array<Scalars['String']>>
  handle_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  shopifyId?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  shopifyId_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  shopifyId_matches?: Maybe<Scalars['String']>
  shopifyId_in?: Maybe<Array<Scalars['String']>>
  shopifyId_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are drafts */
  is_draft?: Maybe<Scalars['Boolean']>
}

export interface ShopifyProductOption {
  __typename: 'ShopifyProductOption'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  shopifyOptionId?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  values?: Maybe<Array<Maybe<ShopifyProductOptionValue>>>
}

export interface ShopifyProductOptionValue {
  __typename: 'ShopifyProductOptionValue'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export interface ShopifyProductVariant {
  __typename: 'ShopifyProductVariant'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  shopifyVariantID?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  sourceData?: Maybe<ShopifySourceProductVariant>
}

export interface ShopifySourceCollection {
  __typename: 'ShopifySourceCollection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  descriptionHtml?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  image?: Maybe<ShopifySourceImage>
  products?: Maybe<ShopifySourceProductsConnection>
}

export interface ShopifySourceCollectionEdge {
  __typename: 'ShopifySourceCollectionEdge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<ShopifySourceCollectionNode>
}

export interface ShopifySourceCollectionNode {
  __typename: 'ShopifySourceCollectionNode'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export interface ShopifySourceCollectionsConnection {
  __typename: 'ShopifySourceCollectionsConnection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  pageInfo?: Maybe<PageInfo>
  edges?: Maybe<Array<Maybe<ShopifySourceCollectionEdge>>>
}

export interface ShopifySourceImage {
  __typename: 'ShopifySourceImage'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  altText?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  originalSrc?: Maybe<Scalars['String']>
  w100?: Maybe<Scalars['String']>
  w300?: Maybe<Scalars['String']>
  w800?: Maybe<Scalars['String']>
}

export interface ShopifySourceImageEdge {
  __typename: 'ShopifySourceImageEdge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  key?: Maybe<Scalars['String']>
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<ShopifySourceImage>
}

export interface ShopifySourceImages {
  __typename: 'ShopifySourceImages'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  edges?: Maybe<Array<Maybe<ShopifySourceImageEdge>>>
}

export interface ShopifySourceProduct {
  __typename: 'ShopifySourceProduct'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  availableForSale?: Maybe<Scalars['Boolean']>
  priceRange?: Maybe<ShopifySourceProductPriceRange>
  productType?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  handle?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  descriptionHtml?: Maybe<Scalars['String']>
  vendor?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  images?: Maybe<ShopifySourceImages>
  options?: Maybe<Array<Maybe<ShopifySourceProductOption>>>
  variants?: Maybe<ShopifySourceProductVariantsConnection>
  collections?: Maybe<ShopifySourceCollectionsConnection>
}

export interface ShopifySourceProductEdge {
  __typename: 'ShopifySourceProductEdge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<ShopifySourceProductNode>
}

export interface ShopifySourceProductNode {
  __typename: 'ShopifySourceProductNode'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export interface ShopifySourceProductOption {
  __typename: 'ShopifySourceProductOption'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  values?: Maybe<Array<Maybe<Scalars['String']>>>
}

export interface ShopifySourceProductPriceRange {
  __typename: 'ShopifySourceProductPriceRange'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  minVariantPrice?: Maybe<ShopifyMoneyV2>
  maxVariantPrice?: Maybe<ShopifyMoneyV2>
}

export interface ShopifySourceProductsConnection {
  __typename: 'ShopifySourceProductsConnection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  pageInfo?: Maybe<PageInfo>
  edges?: Maybe<Array<Maybe<ShopifySourceProductEdge>>>
}

export interface ShopifySourceProductVariant {
  __typename: 'ShopifySourceProductVariant'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  availableForSale?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['String']>
  image?: Maybe<ShopifySourceImage>
  priceV2?: Maybe<ShopifyMoneyV2>
  selectedOptions?: Maybe<Array<Maybe<ShopifySourceSelectedOption>>>
  requiresShipping?: Maybe<Scalars['Boolean']>
  sku?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  weight?: Maybe<Scalars['Float']>
  weightUnit?: Maybe<Scalars['String']>
}

export interface ShopifySourceProductVariantEdge {
  __typename: 'ShopifySourceProductVariantEdge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<ShopifySourceProductVariant>
}

export interface ShopifySourceProductVariantsConnection {
  __typename: 'ShopifySourceProductVariantsConnection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  pageInfo?: Maybe<PageInfo>
  edges?: Maybe<Array<Maybe<ShopifySourceProductVariantEdge>>>
}

export interface ShopifySourceSelectedOption {
  __typename: 'ShopifySourceSelectedOption'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export interface SiteSettings extends Document {
  __typename: 'SiteSettings'
  /** Document ID */
  _id: Scalars['ID']
  /** Document type */
  _type: Scalars['String']
  /** Date the document was created */
  _createdAt: Scalars['DateTime']
  /** Date the document was last modified */
  _updatedAt: Scalars['DateTime']
  /** Current document revision */
  _rev: Scalars['String']
  _key?: Maybe<Scalars['String']>
  footerLinks?: Maybe<Array<Maybe<Cta>>>
}

export type SiteSettingsFilter = {
  /** All documents that are equal to given value */
  _id?: Maybe<Scalars['ID']>
  /** All documents that are not equal to given value */
  _id_not?: Maybe<Scalars['ID']>
  /** All documents contain (match) the given word/words */
  _id_matches?: Maybe<Scalars['String']>
  _id_in?: Maybe<Array<Scalars['String']>>
  _id_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _type?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _type_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _type_matches?: Maybe<Scalars['String']>
  _type_in?: Maybe<Array<Scalars['String']>>
  _type_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** All documents that are not equal to given value */
  _createdAt_not?: Maybe<Scalars['DateTime']>
  /** All documents are less than given value */
  _createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All documents are less than or equal to given value */
  _createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All documents are greater than given value */
  _createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All documents are greater than or equal to given value */
  _createdAt_gte?: Maybe<Scalars['DateTime']>
  /** All documents that are equal to given value */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** All documents that are not equal to given value */
  _updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All documents are less than given value */
  _updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All documents are less than or equal to given value */
  _updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All documents are greater than given value */
  _updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All documents are greater than or equal to given value */
  _updatedAt_gte?: Maybe<Scalars['DateTime']>
  /** All documents that are equal to given value */
  _rev?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _rev_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _rev_matches?: Maybe<Scalars['String']>
  _rev_in?: Maybe<Array<Scalars['String']>>
  _rev_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _key?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _key_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _key_matches?: Maybe<Scalars['String']>
  _key_in?: Maybe<Array<Scalars['String']>>
  _key_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are drafts */
  is_draft?: Maybe<Scalars['Boolean']>
}

export interface Slug {
  __typename: 'Slug'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  current?: Maybe<Scalars['String']>
}

export interface Span {
  __typename: 'Span'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  marks?: Maybe<Array<Maybe<Scalars['String']>>>
  text?: Maybe<Scalars['String']>
}

export interface Stockist {
  __typename: 'Stockist'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
}

export interface Stockists extends Document {
  __typename: 'Stockists'
  /** Document ID */
  _id: Scalars['ID']
  /** Document type */
  _type: Scalars['String']
  /** Date the document was created */
  _createdAt: Scalars['DateTime']
  /** Date the document was last modified */
  _updatedAt: Scalars['DateTime']
  /** Current document revision */
  _rev: Scalars['String']
  _key?: Maybe<Scalars['String']>
  us?: Maybe<Array<Maybe<Stockist>>>
  international?: Maybe<Array<Maybe<Stockist>>>
  online?: Maybe<Array<Maybe<Stockist>>>
}

export type StockistsFilter = {
  /** All documents that are equal to given value */
  _id?: Maybe<Scalars['ID']>
  /** All documents that are not equal to given value */
  _id_not?: Maybe<Scalars['ID']>
  /** All documents contain (match) the given word/words */
  _id_matches?: Maybe<Scalars['String']>
  _id_in?: Maybe<Array<Scalars['String']>>
  _id_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _type?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _type_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _type_matches?: Maybe<Scalars['String']>
  _type_in?: Maybe<Array<Scalars['String']>>
  _type_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** All documents that are not equal to given value */
  _createdAt_not?: Maybe<Scalars['DateTime']>
  /** All documents are less than given value */
  _createdAt_lt?: Maybe<Scalars['DateTime']>
  /** All documents are less than or equal to given value */
  _createdAt_lte?: Maybe<Scalars['DateTime']>
  /** All documents are greater than given value */
  _createdAt_gt?: Maybe<Scalars['DateTime']>
  /** All documents are greater than or equal to given value */
  _createdAt_gte?: Maybe<Scalars['DateTime']>
  /** All documents that are equal to given value */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** All documents that are not equal to given value */
  _updatedAt_not?: Maybe<Scalars['DateTime']>
  /** All documents are less than given value */
  _updatedAt_lt?: Maybe<Scalars['DateTime']>
  /** All documents are less than or equal to given value */
  _updatedAt_lte?: Maybe<Scalars['DateTime']>
  /** All documents are greater than given value */
  _updatedAt_gt?: Maybe<Scalars['DateTime']>
  /** All documents are greater than or equal to given value */
  _updatedAt_gte?: Maybe<Scalars['DateTime']>
  /** All documents that are equal to given value */
  _rev?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _rev_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _rev_matches?: Maybe<Scalars['String']>
  _rev_in?: Maybe<Array<Scalars['String']>>
  _rev_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are equal to given value */
  _key?: Maybe<Scalars['String']>
  /** All documents that are not equal to given value */
  _key_not?: Maybe<Scalars['String']>
  /** All documents contain (match) the given word/words */
  _key_matches?: Maybe<Scalars['String']>
  _key_in?: Maybe<Array<Scalars['String']>>
  _key_not_in?: Maybe<Array<Scalars['String']>>
  /** All documents that are drafts */
  is_draft?: Maybe<Scalars['Boolean']>
}

export interface SubMenu {
  __typename: 'SubMenu'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  columns?: Maybe<Array<Maybe<LinkGroupOrRichPageLink>>>
}

export interface TextBlock {
  __typename: 'TextBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  header?: Maybe<Scalars['String']>
  bodyRaw?: Maybe<Scalars['JSON']>
  textAlign?: Maybe<Scalars['String']>
  cta?: Maybe<Cta>
}
