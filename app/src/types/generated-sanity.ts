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
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { [key: string]: any }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
}

export interface RootQuery {
  __typename: 'RootQuery'
  allCollectionInfo: Array<CollectionInfo>
  allHomepage: Array<Homepage>
  allMenu: Array<Menu>
  allPage: Array<Page>
  allPressItem: Array<PressItem>
  allPressPage: Array<PressPage>
  allProductInfo: Array<ProductInfo>
  allSanityFileAsset: Array<SanityFileAsset>
  allSanityImageAsset: Array<SanityImageAsset>
  allShopifyCollection: Array<ShopifyCollection>
  allShopifyProduct: Array<ShopifyProduct>
  allSiteSettings: Array<SiteSettings>
  allStockists: Array<Stockists>
  CollectionInfo?: Maybe<CollectionInfo>
  Document?: Maybe<Document>
  Homepage?: Maybe<Homepage>
  Menu?: Maybe<Menu>
  Page?: Maybe<Page>
  PressItem?: Maybe<PressItem>
  PressPage?: Maybe<PressPage>
  ProductInfo?: Maybe<ProductInfo>
  SanityFileAsset?: Maybe<SanityFileAsset>
  SanityImageAsset?: Maybe<SanityImageAsset>
  ShopifyCollection?: Maybe<ShopifyCollection>
  ShopifyProduct?: Maybe<ShopifyProduct>
  SiteSettings?: Maybe<SiteSettings>
  Stockists?: Maybe<Stockists>
}

export type RootQueryAllCollectionInfoArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<CollectionInfoSorting>>
  where?: InputMaybe<CollectionInfoFilter>
}

export type RootQueryAllHomepageArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<HomepageSorting>>
  where?: InputMaybe<HomepageFilter>
}

export type RootQueryAllMenuArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<MenuSorting>>
  where?: InputMaybe<MenuFilter>
}

export type RootQueryAllPageArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<PageSorting>>
  where?: InputMaybe<PageFilter>
}

export type RootQueryAllPressItemArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<PressItemSorting>>
  where?: InputMaybe<PressItemFilter>
}

export type RootQueryAllPressPageArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<PressPageSorting>>
  where?: InputMaybe<PressPageFilter>
}

export type RootQueryAllProductInfoArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<ProductInfoSorting>>
  where?: InputMaybe<ProductInfoFilter>
}

export type RootQueryAllSanityFileAssetArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<SanityFileAssetSorting>>
  where?: InputMaybe<SanityFileAssetFilter>
}

export type RootQueryAllSanityImageAssetArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<SanityImageAssetSorting>>
  where?: InputMaybe<SanityImageAssetFilter>
}

export type RootQueryAllShopifyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<ShopifyCollectionSorting>>
  where?: InputMaybe<ShopifyCollectionFilter>
}

export type RootQueryAllShopifyProductArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<ShopifyProductSorting>>
  where?: InputMaybe<ShopifyProductFilter>
}

export type RootQueryAllSiteSettingsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<SiteSettingsSorting>>
  where?: InputMaybe<SiteSettingsFilter>
}

export type RootQueryAllStockistsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<Array<StockistsSorting>>
  where?: InputMaybe<StockistsFilter>
}

export type RootQueryCollectionInfoArgs = {
  id: Scalars['ID']
}

export type RootQueryDocumentArgs = {
  id: Scalars['ID']
}

export type RootQueryHomepageArgs = {
  id: Scalars['ID']
}

export type RootQueryMenuArgs = {
  id: Scalars['ID']
}

export type RootQueryPageArgs = {
  id: Scalars['ID']
}

export type RootQueryPressItemArgs = {
  id: Scalars['ID']
}

export type RootQueryPressPageArgs = {
  id: Scalars['ID']
}

export type RootQueryProductInfoArgs = {
  id: Scalars['ID']
}

export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID']
}

export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID']
}

export type RootQueryShopifyCollectionArgs = {
  id: Scalars['ID']
}

export type RootQueryShopifyProductArgs = {
  id: Scalars['ID']
}

export type RootQuerySiteSettingsArgs = {
  id: Scalars['ID']
}

export type RootQueryStockistsArgs = {
  id: Scalars['ID']
}

export type CollectionInfoSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  helpText?: InputMaybe<SortOrder>
}

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC',
}

export type CollectionInfoFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  helpText?: InputMaybe<StringFilter>
}

export type DocumentFilter = {
  /** All documents that are drafts. */
  is_draft?: InputMaybe<Scalars['Boolean']>
  /** All documents referencing the given document ID. */
  references?: InputMaybe<Scalars['ID']>
}

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['DateTime']>
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['DateTime']>
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['DateTime']>
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['DateTime']>
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['DateTime']>
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['DateTime']>
}

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['ID']>
  in?: InputMaybe<Array<Scalars['ID']>>
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['ID']>
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['ID']>
  nin?: InputMaybe<Array<Scalars['ID']>>
}

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<Scalars['String']>>
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['String']>
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['String']>
  nin?: InputMaybe<Array<Scalars['String']>>
}

export interface CollectionInfo extends Document {
  __typename: 'CollectionInfo'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  /** Add a default set of collections for a side menu here. You can add a different set to the individual collection page. If nothing is defined there, it will fall back to these links. */
  helpText?: Maybe<Scalars['String']>
  relatedCollections?: Maybe<Array<Maybe<ShopifyCollection>>>
}

/** A Sanity document */
export type Document = {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
}

export interface ShopifyCollection extends Document {
  __typename: 'ShopifyCollection'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  archived?: Maybe<Scalars['Boolean']>
  collectionBlocks?: Maybe<Array<Maybe<CollectionBlock>>>
  disableMenu?: Maybe<Scalars['Boolean']>
  handle?: Maybe<Scalars['String']>
  hero?: Maybe<Hero>
  products?: Maybe<Array<Maybe<ShopifyProduct>>>
  relatedCollections?: Maybe<Array<Maybe<ShopifyCollection>>>
  relatedCollectionsTitle?: Maybe<Scalars['String']>
  seo?: Maybe<Seo>
  shopifyId?: Maybe<Scalars['String']>
  sourceData?: Maybe<ShopifySourceCollection>
  title?: Maybe<Scalars['String']>
}

export interface CollectionBlock {
  __typename: 'CollectionBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  backgroundColor?: Maybe<Scalars['String']>
  backgroundImage?: Maybe<RichImage>
  bodyRaw?: Maybe<Scalars['JSON']>
  format?: Maybe<Scalars['String']>
  /** Use this number to insert the block before a product in the grid */
  position?: Maybe<Scalars['Float']>
  textColor?: Maybe<Scalars['String']>
  textPosition?: Maybe<Scalars['String']>
}

export interface RichImage {
  __typename: 'RichImage'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** A short description of the image. Helps with accessibility and SEO. Defaults to the caption if not defined. */
  altText?: Maybe<Scalars['String']>
  asset?: Maybe<SanityImageAsset>
  caption?: Maybe<Scalars['String']>
  crop?: Maybe<SanityImageCrop>
  hotspot?: Maybe<SanityImageHotspot>
}

export interface SanityImageAsset extends Document {
  __typename: 'SanityImageAsset'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  altText?: Maybe<Scalars['String']>
  assetId?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  extension?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  metadata?: Maybe<SanityImageMetadata>
  mimeType?: Maybe<Scalars['String']>
  originalFilename?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  sha1hash?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  source?: Maybe<SanityAssetSourceData>
  title?: Maybe<Scalars['String']>
  uploadId?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export interface SanityImageMetadata {
  __typename: 'SanityImageMetadata'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  blurHash?: Maybe<Scalars['String']>
  dimensions?: Maybe<SanityImageDimensions>
  hasAlpha?: Maybe<Scalars['Boolean']>
  isOpaque?: Maybe<Scalars['Boolean']>
  location?: Maybe<Geopoint>
  lqip?: Maybe<Scalars['String']>
  palette?: Maybe<SanityImagePalette>
}

export interface SanityImageDimensions {
  __typename: 'SanityImageDimensions'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
}

export interface Geopoint {
  __typename: 'Geopoint'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  alt?: Maybe<Scalars['Float']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
}

export interface SanityImagePalette {
  __typename: 'SanityImagePalette'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  darkMuted?: Maybe<SanityImagePaletteSwatch>
  darkVibrant?: Maybe<SanityImagePaletteSwatch>
  dominant?: Maybe<SanityImagePaletteSwatch>
  lightMuted?: Maybe<SanityImagePaletteSwatch>
  lightVibrant?: Maybe<SanityImagePaletteSwatch>
  muted?: Maybe<SanityImagePaletteSwatch>
  vibrant?: Maybe<SanityImagePaletteSwatch>
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

export interface SanityAssetSourceData {
  __typename: 'SanityAssetSourceData'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']>
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']>
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']>
}

export interface SanityImageCrop {
  __typename: 'SanityImageCrop'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  bottom?: Maybe<Scalars['Float']>
  left?: Maybe<Scalars['Float']>
  right?: Maybe<Scalars['Float']>
  top?: Maybe<Scalars['Float']>
}

export interface SanityImageHotspot {
  __typename: 'SanityImageHotspot'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  x?: Maybe<Scalars['Float']>
  y?: Maybe<Scalars['Float']>
}

export interface Hero {
  __typename: 'Hero'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  content?: Maybe<Array<Maybe<HeroContent>>>
  /** Determines the layout of multiple content blocks (desktop only) */
  contentLayout?: Maybe<Scalars['String']>
  /** Enable this to expand the hero to be full-height. (Desktop only) */
  fullHeight?: Maybe<Scalars['Boolean']>
  heroStyle?: Maybe<Scalars['String']>
  image?: Maybe<RichImage>
  image_secondary?: Maybe<RichImage>
  mobileImage?: Maybe<RichImage>
  mobileImage_secondary?: Maybe<RichImage>
}

export interface HeroContent {
  __typename: 'HeroContent'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  align?: Maybe<Scalars['String']>
  bodyRaw?: Maybe<Scalars['JSON']>
  cta?: Maybe<Cta>
  textColor?: Maybe<Scalars['String']>
  textColorMobile?: Maybe<Scalars['String']>
  textPosition?: Maybe<Scalars['String']>
  textPositionMobile?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
}

export interface Cta {
  __typename: 'Cta'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  link?: Maybe<InternalLink>
  mailToEmail?: Maybe<Scalars['String']>
  mailToSubject?: Maybe<Scalars['String']>
}

export interface InternalLink {
  __typename: 'InternalLink'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  document?: Maybe<PageOrPressPageOrShopifyCollectionOrShopifyProductOrStockists>
  /** (optional) The title of the linked page will be used by default */
  label?: Maybe<Scalars['String']>
}

export type PageOrPressPageOrShopifyCollectionOrShopifyProductOrStockists =
  | Page
  | PressPage
  | ShopifyCollection
  | ShopifyProduct
  | Stockists

export interface Page extends Document {
  __typename: 'Page'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  body?: Maybe<
    Array<
      Maybe<CarouselOrCollectionGridOrHeroOrImageTextSectionOrPageBlockOrRichTextBlock>
    >
  >
  seo?: Maybe<Seo>
  slug?: Maybe<Slug>
  title?: Maybe<Scalars['String']>
}

export type CarouselOrCollectionGridOrHeroOrImageTextSectionOrPageBlockOrRichTextBlock =

    | Carousel
    | CollectionGrid
    | Hero
    | ImageTextSection
    | PageBlock
    | RichTextBlock

export interface Carousel {
  __typename: 'Carousel'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** Create a carousel from a collection. If a collection is used, items linked to below will be ignored. */
  collection?: Maybe<ShopifyCollection>
  cta?: Maybe<Cta>
  items?: Maybe<Array<Maybe<RichPageLink>>>
  subtitleRaw?: Maybe<Scalars['JSON']>
  title?: Maybe<Scalars['String']>
}

export interface RichPageLink {
  __typename: 'RichPageLink'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  captionRaw?: Maybe<Scalars['JSON']>
  document?: Maybe<PageOrShopifyCollectionOrShopifyProduct>
  hoverImage?: Maybe<RichImage>
  image?: Maybe<RichImage>
  /** If left empty, the title of the linked page, product, or collection will be used. */
  title?: Maybe<Scalars['String']>
}

export type PageOrShopifyCollectionOrShopifyProduct =
  | Page
  | ShopifyCollection
  | ShopifyProduct

export interface ShopifyProduct extends Document {
  __typename: 'ShopifyProduct'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  archived?: Maybe<Scalars['Boolean']>
  collections?: Maybe<Array<Maybe<ShopifyCollection>>>
  handle?: Maybe<Scalars['String']>
  infoBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  maxVariantPrice?: Maybe<Scalars['Float']>
  minVariantPrice?: Maybe<Scalars['Float']>
  options?: Maybe<Array<Maybe<ShopifyProductOption>>>
  related?: Maybe<Carousel>
  seo?: Maybe<Seo>
  shopifyId?: Maybe<Scalars['String']>
  sourceData?: Maybe<ShopifySourceProduct>
  title?: Maybe<Scalars['String']>
  variants?: Maybe<Array<Maybe<ShopifyProductVariant>>>
}

export interface ProductInfoBlock {
  __typename: 'ProductInfoBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  bodyRaw?: Maybe<Scalars['JSON']>
  title?: Maybe<Scalars['String']>
}

export interface ShopifyProductOption {
  __typename: 'ShopifyProductOption'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  shopifyOptionId?: Maybe<Scalars['String']>
  values?: Maybe<Array<Maybe<ShopifyProductOptionValue>>>
}

export interface ShopifyProductOptionValue {
  __typename: 'ShopifyProductOptionValue'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export interface Seo {
  __typename: 'Seo'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** This is the description that will appear underneath the preview link when shared in Facebook. It should be less than 200 characters */
  description?: Maybe<Scalars['String']>
  image?: Maybe<Image>
  /** Comma-separated SEO keywords */
  keywords?: Maybe<Scalars['String']>
  /** title for search results */
  metaTitle?: Maybe<Scalars['String']>
  /** title for the browser window */
  title?: Maybe<Scalars['String']>
}

export interface Image {
  __typename: 'Image'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  asset?: Maybe<SanityImageAsset>
  crop?: Maybe<SanityImageCrop>
  hotspot?: Maybe<SanityImageHotspot>
}

export interface ShopifySourceProduct {
  __typename: 'ShopifySourceProduct'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  availableForSale?: Maybe<Scalars['Boolean']>
  collections?: Maybe<ShopifySourceCollectionsConnection>
  compareAtPriceRange?: Maybe<ShopifySourceProductPriceRange>
  createdAt?: Maybe<Scalars['Date']>
  description?: Maybe<Scalars['String']>
  descriptionHtml?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  images?: Maybe<ShopifySourceImages>
  options?: Maybe<Array<Maybe<ShopifySourceProductOption>>>
  presentmentPriceRanges?: Maybe<ShopifySourceProductPresentmentPriceRangeConnection>
  priceRange?: Maybe<ShopifySourceProductPriceRange>
  productType?: Maybe<Scalars['String']>
  publishedAt?: Maybe<Scalars['Date']>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Date']>
  variants?: Maybe<ShopifySourceProductVariantsConnection>
  vendor?: Maybe<Scalars['String']>
}

export interface ShopifySourceCollectionsConnection {
  __typename: 'ShopifySourceCollectionsConnection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  edges?: Maybe<Array<Maybe<ShopifySourceCollectionEdge>>>
  pageInfo?: Maybe<PageInfo>
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

export interface PageInfo {
  __typename: 'PageInfo'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  hasNextPage?: Maybe<Scalars['Boolean']>
  hasPreviousPage?: Maybe<Scalars['Boolean']>
}

export interface ShopifySourceProductPriceRange {
  __typename: 'ShopifySourceProductPriceRange'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  maxVariantPrice?: Maybe<ShopifyMoneyV2>
  minVariantPrice?: Maybe<ShopifyMoneyV2>
}

export interface ShopifyMoneyV2 {
  __typename: 'ShopifyMoneyV2'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['String']>
  currencyCode?: Maybe<Scalars['String']>
}

export interface ShopifySourceImages {
  __typename: 'ShopifySourceImages'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  edges?: Maybe<Array<Maybe<ShopifySourceImageEdge>>>
}

export interface ShopifySourceImageEdge {
  __typename: 'ShopifySourceImageEdge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  cursor?: Maybe<Scalars['String']>
  key?: Maybe<Scalars['String']>
  node?: Maybe<ShopifySourceImage>
}

export interface ShopifySourceImage {
  __typename: 'ShopifySourceImage'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  altText?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  originalSrc?: Maybe<Scalars['String']>
  w100?: Maybe<Scalars['String']>
  w1200?: Maybe<Scalars['String']>
  w1600?: Maybe<Scalars['String']>
  w300?: Maybe<Scalars['String']>
  w800?: Maybe<Scalars['String']>
}

export interface ShopifySourceProductOption {
  __typename: 'ShopifySourceProductOption'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  values?: Maybe<Array<Maybe<Scalars['String']>>>
}

export interface ShopifySourceProductPresentmentPriceRangeConnection {
  __typename: 'ShopifySourceProductPresentmentPriceRangeConnection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  edges?: Maybe<Array<Maybe<ShopifySourceProductPriceRangeEdge>>>
}

export interface ShopifySourceProductPriceRangeEdge {
  __typename: 'ShopifySourceProductPriceRangeEdge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<ShopifySourceProductPriceRange>
}

export interface ShopifySourceProductVariantsConnection {
  __typename: 'ShopifySourceProductVariantsConnection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  edges?: Maybe<Array<Maybe<ShopifySourceProductVariantEdge>>>
  pageInfo?: Maybe<PageInfo>
}

export interface ShopifySourceProductVariantEdge {
  __typename: 'ShopifySourceProductVariantEdge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<ShopifySourceProductVariant>
}

export interface ShopifySourceProductVariant {
  __typename: 'ShopifySourceProductVariant'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  availableForSale?: Maybe<Scalars['Boolean']>
  compareAtPriceV2?: Maybe<ShopifyMoneyV2>
  currentlyNotInStock?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['String']>
  image?: Maybe<ShopifySourceImage>
  priceV2?: Maybe<ShopifyMoneyV2>
  requiresShipping?: Maybe<Scalars['Boolean']>
  selectedOptions?: Maybe<Array<Maybe<ShopifySourceSelectedOption>>>
  sku?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  weight?: Maybe<Scalars['Float']>
  weightUnit?: Maybe<Scalars['String']>
}

export interface ShopifySourceSelectedOption {
  __typename: 'ShopifySourceSelectedOption'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export interface ShopifyProductVariant {
  __typename: 'ShopifyProductVariant'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  shopifyVariantID?: Maybe<Scalars['String']>
  sourceData?: Maybe<ShopifySourceProductVariant>
  title?: Maybe<Scalars['String']>
}

export interface CollectionGrid {
  __typename: 'CollectionGrid'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  collection?: Maybe<ShopifyCollection>
  /** Customize the CTA Label. Defaults to "Discover more" */
  customCTALabel?: Maybe<Scalars['String']>
  /** Defaults to the title of the collection */
  customTitle?: Maybe<Scalars['String']>
}

export interface ImageTextSection {
  __typename: 'ImageTextSection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  blocks?: Maybe<Array<Maybe<ImageTextBlock>>>
  subtitleRaw?: Maybe<Scalars['JSON']>
  title?: Maybe<Scalars['String']>
}

export interface ImageTextBlock {
  __typename: 'ImageTextBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  backgroundColor?: Maybe<Scalars['String']>
  backgroundImage?: Maybe<RichImage>
  bodyRaw?: Maybe<Scalars['JSON']>
  cta?: Maybe<Cta>
  header?: Maybe<Scalars['String']>
  headerFont?: Maybe<Scalars['String']>
  hoverImage?: Maybe<RichImage>
  textAlign?: Maybe<Scalars['String']>
  textColor?: Maybe<Scalars['String']>
}

export interface PageBlock {
  __typename: 'PageBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  alignment?: Maybe<Scalars['String']>
  backgroundColor?: Maybe<Scalars['String']>
  content?: Maybe<Array<Maybe<PageTextOrRichImage>>>
  layoutOptions?: Maybe<Scalars['String']>
  textColor?: Maybe<Scalars['String']>
}

export type PageTextOrRichImage = PageText | RichImage

export interface PageText {
  __typename: 'PageText'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  bodyRaw?: Maybe<Scalars['JSON']>
  heading?: Maybe<Scalars['String']>
}

export interface RichTextBlock {
  __typename: 'RichTextBlock'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  bodyRaw?: Maybe<Scalars['JSON']>
  textAlign?: Maybe<Scalars['String']>
}

export interface Slug {
  __typename: 'Slug'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  current?: Maybe<Scalars['String']>
}

export interface PressPage extends Document {
  __typename: 'PressPage'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  hero?: Maybe<Hero>
  seo?: Maybe<Seo>
  title?: Maybe<Scalars['String']>
}

export interface Stockists extends Document {
  __typename: 'Stockists'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  content?: Maybe<Array<Maybe<CarouselOrHeroOrImageTextSection>>>
  international?: Maybe<Array<Maybe<Stockist>>>
  online?: Maybe<Array<Maybe<Stockist>>>
  seo?: Maybe<Seo>
  showIntl?: Maybe<Scalars['Boolean']>
  showOnline?: Maybe<Scalars['Boolean']>
  showUs?: Maybe<Scalars['Boolean']>
  title?: Maybe<Scalars['String']>
  us?: Maybe<Array<Maybe<Stockist>>>
}

export type CarouselOrHeroOrImageTextSection =
  | Carousel
  | Hero
  | ImageTextSection

export interface Stockist {
  __typename: 'Stockist'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
}

export interface ShopifySourceCollection {
  __typename: 'ShopifySourceCollection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  descriptionHtml?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  image?: Maybe<ShopifySourceImage>
  products?: Maybe<ShopifySourceProductsConnection>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['Date']>
}

export interface ShopifySourceProductsConnection {
  __typename: 'ShopifySourceProductsConnection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  edges?: Maybe<Array<Maybe<ShopifySourceProductEdge>>>
  pageInfo?: Maybe<PageInfo>
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

export type HomepageSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  seo?: InputMaybe<SeoSorting>
}

export type SeoSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  image?: InputMaybe<ImageSorting>
  keywords?: InputMaybe<SortOrder>
  metaTitle?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
}

export type ImageSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  crop?: InputMaybe<SanityImageCropSorting>
  hotspot?: InputMaybe<SanityImageHotspotSorting>
}

export type SanityImageCropSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  bottom?: InputMaybe<SortOrder>
  left?: InputMaybe<SortOrder>
  right?: InputMaybe<SortOrder>
  top?: InputMaybe<SortOrder>
}

export type SanityImageHotspotSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  height?: InputMaybe<SortOrder>
  width?: InputMaybe<SortOrder>
  x?: InputMaybe<SortOrder>
  y?: InputMaybe<SortOrder>
}

export type HomepageFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  seo?: InputMaybe<SeoFilter>
}

export type SeoFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  description?: InputMaybe<StringFilter>
  image?: InputMaybe<ImageFilter>
  keywords?: InputMaybe<StringFilter>
  metaTitle?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
}

export type ImageFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  asset?: InputMaybe<SanityImageAssetFilter>
  crop?: InputMaybe<SanityImageCropFilter>
  hotspot?: InputMaybe<SanityImageHotspotFilter>
}

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  altText?: InputMaybe<StringFilter>
  assetId?: InputMaybe<StringFilter>
  description?: InputMaybe<StringFilter>
  extension?: InputMaybe<StringFilter>
  label?: InputMaybe<StringFilter>
  metadata?: InputMaybe<SanityImageMetadataFilter>
  mimeType?: InputMaybe<StringFilter>
  originalFilename?: InputMaybe<StringFilter>
  path?: InputMaybe<StringFilter>
  sha1hash?: InputMaybe<StringFilter>
  size?: InputMaybe<FloatFilter>
  source?: InputMaybe<SanityAssetSourceDataFilter>
  title?: InputMaybe<StringFilter>
  uploadId?: InputMaybe<StringFilter>
  url?: InputMaybe<StringFilter>
}

export type SanityImageMetadataFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  blurHash?: InputMaybe<StringFilter>
  dimensions?: InputMaybe<SanityImageDimensionsFilter>
  hasAlpha?: InputMaybe<BooleanFilter>
  isOpaque?: InputMaybe<BooleanFilter>
  location?: InputMaybe<GeopointFilter>
  lqip?: InputMaybe<StringFilter>
  palette?: InputMaybe<SanityImagePaletteFilter>
}

export type SanityImageDimensionsFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  aspectRatio?: InputMaybe<FloatFilter>
  height?: InputMaybe<FloatFilter>
  width?: InputMaybe<FloatFilter>
}

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Float']>
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Float']>
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Float']>
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Float']>
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Float']>
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Float']>
}

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Boolean']>
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Boolean']>
}

export type GeopointFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  alt?: InputMaybe<FloatFilter>
  lat?: InputMaybe<FloatFilter>
  lng?: InputMaybe<FloatFilter>
}

export type SanityImagePaletteFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>
  dominant?: InputMaybe<SanityImagePaletteSwatchFilter>
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>
  muted?: InputMaybe<SanityImagePaletteSwatchFilter>
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>
}

export type SanityImagePaletteSwatchFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  background?: InputMaybe<StringFilter>
  foreground?: InputMaybe<StringFilter>
  population?: InputMaybe<FloatFilter>
  title?: InputMaybe<StringFilter>
}

export type SanityAssetSourceDataFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  url?: InputMaybe<StringFilter>
}

export type SanityImageCropFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  bottom?: InputMaybe<FloatFilter>
  left?: InputMaybe<FloatFilter>
  right?: InputMaybe<FloatFilter>
  top?: InputMaybe<FloatFilter>
}

export type SanityImageHotspotFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  height?: InputMaybe<FloatFilter>
  width?: InputMaybe<FloatFilter>
  x?: InputMaybe<FloatFilter>
  y?: InputMaybe<FloatFilter>
}

export interface Homepage extends Document {
  __typename: 'Homepage'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  content?: Maybe<Array<Maybe<CarouselOrHeroOrImageTextSection>>>
  seo?: Maybe<Seo>
}

export type MenuSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
}

export type MenuFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
}

export interface Menu extends Document {
  __typename: 'Menu'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  menuItems?: Maybe<Array<Maybe<CtaOrSubMenu>>>
}

export type CtaOrSubMenu = Cta | SubMenu

export interface SubMenu {
  __typename: 'SubMenu'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  columns?: Maybe<Array<Maybe<SubmenuSectionOrSubmenuSectionList>>>
  title?: Maybe<Scalars['String']>
}

export type SubmenuSectionOrSubmenuSectionList =
  | SubmenuSection
  | SubmenuSectionList

export interface SubmenuSection {
  __typename: 'SubmenuSection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  images?: Maybe<Array<Maybe<RichImage>>>
  links?: Maybe<Array<Maybe<LinkGroupOrRichPageLink>>>
  title?: Maybe<Scalars['String']>
}

export type LinkGroupOrRichPageLink = LinkGroup | RichPageLink

export interface LinkGroup {
  __typename: 'LinkGroup'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  links?: Maybe<Array<Maybe<InternalLink>>>
  /** (optional) A light gray header that appears above the list of links */
  title?: Maybe<Scalars['String']>
}

export interface SubmenuSectionList {
  __typename: 'SubmenuSectionList'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  links?: Maybe<Array<Maybe<SubmenuSectionListItem>>>
  title?: Maybe<Scalars['String']>
}

export interface SubmenuSectionListItem {
  __typename: 'SubmenuSectionListItem'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  image?: Maybe<RichImage>
  link?: Maybe<InternalLink>
}

export type PageSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  seo?: InputMaybe<SeoSorting>
  slug?: InputMaybe<SlugSorting>
  title?: InputMaybe<SortOrder>
}

export type SlugSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  current?: InputMaybe<SortOrder>
}

export type PageFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  seo?: InputMaybe<SeoFilter>
  slug?: InputMaybe<SlugFilter>
  title?: InputMaybe<StringFilter>
}

export type SlugFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  current?: InputMaybe<StringFilter>
}

export type PressItemSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  image?: InputMaybe<RichImageSorting>
  link?: InputMaybe<ExternalLinkSorting>
  publishDate?: InputMaybe<SortOrder>
  subtitle?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
  type?: InputMaybe<SortOrder>
}

export type RichImageSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  altText?: InputMaybe<SortOrder>
  caption?: InputMaybe<SortOrder>
  crop?: InputMaybe<SanityImageCropSorting>
  hotspot?: InputMaybe<SanityImageHotspotSorting>
}

export type ExternalLinkSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  newTab?: InputMaybe<SortOrder>
  url?: InputMaybe<SortOrder>
}

export type PressItemFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  image?: InputMaybe<RichImageFilter>
  link?: InputMaybe<ExternalLinkFilter>
  publishDate?: InputMaybe<DateFilter>
  subtitle?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
  type?: InputMaybe<StringFilter>
}

export type RichImageFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  altText?: InputMaybe<StringFilter>
  asset?: InputMaybe<SanityImageAssetFilter>
  caption?: InputMaybe<StringFilter>
  crop?: InputMaybe<SanityImageCropFilter>
  hotspot?: InputMaybe<SanityImageHotspotFilter>
}

export type ExternalLinkFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  newTab?: InputMaybe<BooleanFilter>
  url?: InputMaybe<StringFilter>
}

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Date']>
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Date']>
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Date']>
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Date']>
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Date']>
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Date']>
}

export interface PressItem extends Document {
  __typename: 'PressItem'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  image?: Maybe<RichImage>
  link?: Maybe<ExternalLink>
  publishDate?: Maybe<Scalars['Date']>
  subtitle?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export interface ExternalLink {
  __typename: 'ExternalLink'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  newTab?: Maybe<Scalars['Boolean']>
  url?: Maybe<Scalars['String']>
}

export type PressPageSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  hero?: InputMaybe<HeroSorting>
  seo?: InputMaybe<SeoSorting>
  title?: InputMaybe<SortOrder>
}

export type HeroSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  contentLayout?: InputMaybe<SortOrder>
  fullHeight?: InputMaybe<SortOrder>
  heroStyle?: InputMaybe<SortOrder>
  image?: InputMaybe<RichImageSorting>
  image_secondary?: InputMaybe<RichImageSorting>
  mobileImage?: InputMaybe<RichImageSorting>
  mobileImage_secondary?: InputMaybe<RichImageSorting>
}

export type PressPageFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  hero?: InputMaybe<HeroFilter>
  seo?: InputMaybe<SeoFilter>
  title?: InputMaybe<StringFilter>
}

export type HeroFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  contentLayout?: InputMaybe<StringFilter>
  fullHeight?: InputMaybe<BooleanFilter>
  heroStyle?: InputMaybe<StringFilter>
  image?: InputMaybe<RichImageFilter>
  image_secondary?: InputMaybe<RichImageFilter>
  mobileImage?: InputMaybe<RichImageFilter>
  mobileImage_secondary?: InputMaybe<RichImageFilter>
}

export type ProductInfoSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  byCollectionHelpText?: InputMaybe<SortOrder>
  byTagHelpText?: InputMaybe<SortOrder>
  byTypeHelpText?: InputMaybe<SortOrder>
  helpText?: InputMaybe<SortOrder>
  tagBadgeHelpText?: InputMaybe<SortOrder>
}

export type ProductInfoFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  byCollectionHelpText?: InputMaybe<StringFilter>
  byTagHelpText?: InputMaybe<StringFilter>
  byTypeHelpText?: InputMaybe<StringFilter>
  helpText?: InputMaybe<StringFilter>
  tagBadgeHelpText?: InputMaybe<StringFilter>
}

export interface ProductInfo extends Document {
  __typename: 'ProductInfo'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  blocksByCollection?: Maybe<Array<Maybe<ProductInfoBlocksByCollection>>>
  blocksByTag?: Maybe<Array<Maybe<ProductInfoBlocksByTag>>>
  braceletBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  /** Use these fields to add accordions to products within certain collections */
  byCollectionHelpText?: Maybe<Scalars['String']>
  /** Use these fields to add accordions to items with particular tags in Shopify. For instance, a "Customization" block for anything tagged with "Custom" in Shopify. */
  byTagHelpText?: Maybe<Scalars['String']>
  /** Use these fields to add accordions to all products of different types */
  byTypeHelpText?: Maybe<Scalars['String']>
  earringBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  globalBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  /** Use these fields to add accordions to all or some products. For instance, you could add a 'Shipping and Returns' block on all items, and a 'Ring Sizing Guide' block to all Rings. These blocks will be displayed in accordion-dropdowns below the main product information. You can also add info blocks to individual items on their page here in the CMS. */
  helpText?: Maybe<Scalars['String']>
  necklaceBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  ringBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  swatches?: Maybe<Array<Maybe<Swatch>>>
  /** Use these fields to create badges that appear on product thumbnails */
  tagBadgeHelpText?: Maybe<Scalars['String']>
  tagBadges?: Maybe<Array<Maybe<TagBadge>>>
}

export interface ProductInfoBlocksByCollection {
  __typename: 'ProductInfoBlocksByCollection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  collections?: Maybe<Array<Maybe<ShopifyCollection>>>
  infoBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
}

export interface ProductInfoBlocksByTag {
  __typename: 'ProductInfoBlocksByTag'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  infoBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  /** Tag to match from Shopify. */
  tag?: Maybe<Scalars['String']>
}

export interface Swatch {
  __typename: 'Swatch'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** This must match the name of the option in Shopify */
  colorName?: Maybe<Scalars['String']>
  swatchImage?: Maybe<Image>
}

export interface TagBadge {
  __typename: 'TagBadge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** (optional) An alternate label to display in the badge */
  label?: Maybe<Scalars['String']>
  /** The tag to match from Shopify */
  tag?: Maybe<Scalars['String']>
}

export type SanityFileAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  altText?: InputMaybe<SortOrder>
  assetId?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  extension?: InputMaybe<SortOrder>
  label?: InputMaybe<SortOrder>
  mimeType?: InputMaybe<SortOrder>
  originalFilename?: InputMaybe<SortOrder>
  path?: InputMaybe<SortOrder>
  sha1hash?: InputMaybe<SortOrder>
  size?: InputMaybe<SortOrder>
  source?: InputMaybe<SanityAssetSourceDataSorting>
  title?: InputMaybe<SortOrder>
  url?: InputMaybe<SortOrder>
}

export type SanityAssetSourceDataSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  url?: InputMaybe<SortOrder>
}

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  altText?: InputMaybe<StringFilter>
  assetId?: InputMaybe<StringFilter>
  description?: InputMaybe<StringFilter>
  extension?: InputMaybe<StringFilter>
  label?: InputMaybe<StringFilter>
  mimeType?: InputMaybe<StringFilter>
  originalFilename?: InputMaybe<StringFilter>
  path?: InputMaybe<StringFilter>
  sha1hash?: InputMaybe<StringFilter>
  size?: InputMaybe<FloatFilter>
  source?: InputMaybe<SanityAssetSourceDataFilter>
  title?: InputMaybe<StringFilter>
  url?: InputMaybe<StringFilter>
}

export interface SanityFileAsset extends Document {
  __typename: 'SanityFileAsset'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  altText?: Maybe<Scalars['String']>
  assetId?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  extension?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  mimeType?: Maybe<Scalars['String']>
  originalFilename?: Maybe<Scalars['String']>
  path?: Maybe<Scalars['String']>
  sha1hash?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['Float']>
  source?: Maybe<SanityAssetSourceData>
  title?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type SanityImageAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  altText?: InputMaybe<SortOrder>
  assetId?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  extension?: InputMaybe<SortOrder>
  label?: InputMaybe<SortOrder>
  metadata?: InputMaybe<SanityImageMetadataSorting>
  mimeType?: InputMaybe<SortOrder>
  originalFilename?: InputMaybe<SortOrder>
  path?: InputMaybe<SortOrder>
  sha1hash?: InputMaybe<SortOrder>
  size?: InputMaybe<SortOrder>
  source?: InputMaybe<SanityAssetSourceDataSorting>
  title?: InputMaybe<SortOrder>
  uploadId?: InputMaybe<SortOrder>
  url?: InputMaybe<SortOrder>
}

export type SanityImageMetadataSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  blurHash?: InputMaybe<SortOrder>
  dimensions?: InputMaybe<SanityImageDimensionsSorting>
  hasAlpha?: InputMaybe<SortOrder>
  isOpaque?: InputMaybe<SortOrder>
  location?: InputMaybe<GeopointSorting>
  lqip?: InputMaybe<SortOrder>
  palette?: InputMaybe<SanityImagePaletteSorting>
}

export type SanityImageDimensionsSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  aspectRatio?: InputMaybe<SortOrder>
  height?: InputMaybe<SortOrder>
  width?: InputMaybe<SortOrder>
}

export type GeopointSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  alt?: InputMaybe<SortOrder>
  lat?: InputMaybe<SortOrder>
  lng?: InputMaybe<SortOrder>
}

export type SanityImagePaletteSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>
  dominant?: InputMaybe<SanityImagePaletteSwatchSorting>
  lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>
  muted?: InputMaybe<SanityImagePaletteSwatchSorting>
  vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>
}

export type SanityImagePaletteSwatchSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  background?: InputMaybe<SortOrder>
  foreground?: InputMaybe<SortOrder>
  population?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
}

export type ShopifyCollectionSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  archived?: InputMaybe<SortOrder>
  disableMenu?: InputMaybe<SortOrder>
  handle?: InputMaybe<SortOrder>
  hero?: InputMaybe<HeroSorting>
  relatedCollectionsTitle?: InputMaybe<SortOrder>
  seo?: InputMaybe<SeoSorting>
  shopifyId?: InputMaybe<SortOrder>
  sourceData?: InputMaybe<ShopifySourceCollectionSorting>
  title?: InputMaybe<SortOrder>
}

export type ShopifySourceCollectionSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  descriptionHtml?: InputMaybe<SortOrder>
  handle?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  image?: InputMaybe<ShopifySourceImageSorting>
  products?: InputMaybe<ShopifySourceProductsConnectionSorting>
  title?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type ShopifySourceImageSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  altText?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  originalSrc?: InputMaybe<SortOrder>
  w100?: InputMaybe<SortOrder>
  w1200?: InputMaybe<SortOrder>
  w1600?: InputMaybe<SortOrder>
  w300?: InputMaybe<SortOrder>
  w800?: InputMaybe<SortOrder>
}

export type ShopifySourceProductsConnectionSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  pageInfo?: InputMaybe<PageInfoSorting>
}

export type PageInfoSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  hasNextPage?: InputMaybe<SortOrder>
  hasPreviousPage?: InputMaybe<SortOrder>
}

export type ShopifyCollectionFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  archived?: InputMaybe<BooleanFilter>
  disableMenu?: InputMaybe<BooleanFilter>
  handle?: InputMaybe<StringFilter>
  hero?: InputMaybe<HeroFilter>
  relatedCollectionsTitle?: InputMaybe<StringFilter>
  seo?: InputMaybe<SeoFilter>
  shopifyId?: InputMaybe<StringFilter>
  sourceData?: InputMaybe<ShopifySourceCollectionFilter>
  title?: InputMaybe<StringFilter>
}

export type ShopifySourceCollectionFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  description?: InputMaybe<StringFilter>
  descriptionHtml?: InputMaybe<StringFilter>
  handle?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
  image?: InputMaybe<ShopifySourceImageFilter>
  products?: InputMaybe<ShopifySourceProductsConnectionFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateFilter>
}

export type ShopifySourceImageFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  altText?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
  originalSrc?: InputMaybe<StringFilter>
  w100?: InputMaybe<StringFilter>
  w1200?: InputMaybe<StringFilter>
  w1600?: InputMaybe<StringFilter>
  w300?: InputMaybe<StringFilter>
  w800?: InputMaybe<StringFilter>
}

export type ShopifySourceProductsConnectionFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  pageInfo?: InputMaybe<PageInfoFilter>
}

export type PageInfoFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  hasNextPage?: InputMaybe<BooleanFilter>
  hasPreviousPage?: InputMaybe<BooleanFilter>
}

export type ShopifyProductSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  archived?: InputMaybe<SortOrder>
  handle?: InputMaybe<SortOrder>
  maxVariantPrice?: InputMaybe<SortOrder>
  minVariantPrice?: InputMaybe<SortOrder>
  related?: InputMaybe<CarouselSorting>
  seo?: InputMaybe<SeoSorting>
  shopifyId?: InputMaybe<SortOrder>
  sourceData?: InputMaybe<ShopifySourceProductSorting>
  title?: InputMaybe<SortOrder>
}

export type CarouselSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  cta?: InputMaybe<CtaSorting>
  title?: InputMaybe<SortOrder>
}

export type CtaSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  label?: InputMaybe<SortOrder>
  link?: InputMaybe<InternalLinkSorting>
  mailToEmail?: InputMaybe<SortOrder>
  mailToSubject?: InputMaybe<SortOrder>
}

export type InternalLinkSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  label?: InputMaybe<SortOrder>
}

export type ShopifySourceProductSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  availableForSale?: InputMaybe<SortOrder>
  collections?: InputMaybe<ShopifySourceCollectionsConnectionSorting>
  compareAtPriceRange?: InputMaybe<ShopifySourceProductPriceRangeSorting>
  createdAt?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  descriptionHtml?: InputMaybe<SortOrder>
  handle?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  images?: InputMaybe<ShopifySourceImagesSorting>
  presentmentPriceRanges?: InputMaybe<ShopifySourceProductPresentmentPriceRangeConnectionSorting>
  priceRange?: InputMaybe<ShopifySourceProductPriceRangeSorting>
  productType?: InputMaybe<SortOrder>
  publishedAt?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
  variants?: InputMaybe<ShopifySourceProductVariantsConnectionSorting>
  vendor?: InputMaybe<SortOrder>
}

export type ShopifySourceCollectionsConnectionSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  pageInfo?: InputMaybe<PageInfoSorting>
}

export type ShopifySourceProductPriceRangeSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  maxVariantPrice?: InputMaybe<ShopifyMoneyV2Sorting>
  minVariantPrice?: InputMaybe<ShopifyMoneyV2Sorting>
}

export type ShopifyMoneyV2Sorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  amount?: InputMaybe<SortOrder>
  currencyCode?: InputMaybe<SortOrder>
}

export type ShopifySourceImagesSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
}

export type ShopifySourceProductPresentmentPriceRangeConnectionSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
}

export type ShopifySourceProductVariantsConnectionSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  pageInfo?: InputMaybe<PageInfoSorting>
}

export type ShopifyProductFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  archived?: InputMaybe<BooleanFilter>
  handle?: InputMaybe<StringFilter>
  maxVariantPrice?: InputMaybe<FloatFilter>
  minVariantPrice?: InputMaybe<FloatFilter>
  related?: InputMaybe<CarouselFilter>
  seo?: InputMaybe<SeoFilter>
  shopifyId?: InputMaybe<StringFilter>
  sourceData?: InputMaybe<ShopifySourceProductFilter>
  title?: InputMaybe<StringFilter>
}

export type CarouselFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  collection?: InputMaybe<ShopifyCollectionFilter>
  cta?: InputMaybe<CtaFilter>
  title?: InputMaybe<StringFilter>
}

export type CtaFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  label?: InputMaybe<StringFilter>
  link?: InputMaybe<InternalLinkFilter>
  mailToEmail?: InputMaybe<StringFilter>
  mailToSubject?: InputMaybe<StringFilter>
}

export type InternalLinkFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  label?: InputMaybe<StringFilter>
}

export type ShopifySourceProductFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  availableForSale?: InputMaybe<BooleanFilter>
  collections?: InputMaybe<ShopifySourceCollectionsConnectionFilter>
  compareAtPriceRange?: InputMaybe<ShopifySourceProductPriceRangeFilter>
  createdAt?: InputMaybe<DateFilter>
  description?: InputMaybe<StringFilter>
  descriptionHtml?: InputMaybe<StringFilter>
  handle?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
  images?: InputMaybe<ShopifySourceImagesFilter>
  presentmentPriceRanges?: InputMaybe<ShopifySourceProductPresentmentPriceRangeConnectionFilter>
  priceRange?: InputMaybe<ShopifySourceProductPriceRangeFilter>
  productType?: InputMaybe<StringFilter>
  publishedAt?: InputMaybe<DateFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateFilter>
  variants?: InputMaybe<ShopifySourceProductVariantsConnectionFilter>
  vendor?: InputMaybe<StringFilter>
}

export type ShopifySourceCollectionsConnectionFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  pageInfo?: InputMaybe<PageInfoFilter>
}

export type ShopifySourceProductPriceRangeFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  maxVariantPrice?: InputMaybe<ShopifyMoneyV2Filter>
  minVariantPrice?: InputMaybe<ShopifyMoneyV2Filter>
}

export type ShopifyMoneyV2Filter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  amount?: InputMaybe<StringFilter>
  currencyCode?: InputMaybe<StringFilter>
}

export type ShopifySourceImagesFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
}

export type ShopifySourceProductPresentmentPriceRangeConnectionFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
}

export type ShopifySourceProductVariantsConnectionFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  pageInfo?: InputMaybe<PageInfoFilter>
}

export type SiteSettingsSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  banner?: InputMaybe<BannerSorting>
  instagramSettings?: InputMaybe<InstagramSettingsSorting>
  seo?: InputMaybe<SeoSorting>
}

export type BannerSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  dismissable?: InputMaybe<SortOrder>
}

export type InstagramSettingsSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  handle?: InputMaybe<SortOrder>
}

export type SiteSettingsFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  banner?: InputMaybe<BannerFilter>
  instagramSettings?: InputMaybe<InstagramSettingsFilter>
  seo?: InputMaybe<SeoFilter>
}

export type BannerFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  dismissable?: InputMaybe<BooleanFilter>
}

export type InstagramSettingsFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  handle?: InputMaybe<StringFilter>
}

export interface SiteSettings extends Document {
  __typename: 'SiteSettings'
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>
  /** Document ID */
  _id?: Maybe<Scalars['ID']>
  _key?: Maybe<Scalars['String']>
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>
  /** Document type */
  _type?: Maybe<Scalars['String']>
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>
  aboutRaw?: Maybe<Scalars['JSON']>
  banner?: Maybe<Banner>
  instagramSettings?: Maybe<InstagramSettings>
  linkGroups?: Maybe<Array<Maybe<LinkGroup>>>
  seo?: Maybe<Seo>
}

export interface Banner {
  __typename: 'Banner'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  announcements?: Maybe<Array<Maybe<Announcement>>>
  /** Turn this on to allow users to dismiss the notification header */
  dismissable?: Maybe<Scalars['Boolean']>
}

export interface Announcement {
  __typename: 'Announcement'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  cta?: Maybe<Cta>
  text?: Maybe<Scalars['String']>
}

export interface InstagramSettings {
  __typename: 'InstagramSettings'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  /** Don't include the @ */
  handle?: Maybe<Scalars['String']>
  images?: Maybe<Array<Maybe<RichImage>>>
}

export type StockistsSorting = {
  _createdAt?: InputMaybe<SortOrder>
  _id?: InputMaybe<SortOrder>
  _key?: InputMaybe<SortOrder>
  _rev?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  _updatedAt?: InputMaybe<SortOrder>
  seo?: InputMaybe<SeoSorting>
  showIntl?: InputMaybe<SortOrder>
  showOnline?: InputMaybe<SortOrder>
  showUs?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
}

export type StockistsFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<DocumentFilter>
  _createdAt?: InputMaybe<DatetimeFilter>
  _id?: InputMaybe<IdFilter>
  _key?: InputMaybe<StringFilter>
  _rev?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  _updatedAt?: InputMaybe<DatetimeFilter>
  seo?: InputMaybe<SeoFilter>
  showIntl?: InputMaybe<BooleanFilter>
  showOnline?: InputMaybe<BooleanFilter>
  showUs?: InputMaybe<BooleanFilter>
  title?: InputMaybe<StringFilter>
}

export type AnnouncementFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  cta?: InputMaybe<CtaFilter>
  text?: InputMaybe<StringFilter>
}

export type AnnouncementSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  cta?: InputMaybe<CtaSorting>
  text?: InputMaybe<SortOrder>
}

export interface Block {
  __typename: 'Block'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  children?: Maybe<Array<Maybe<Span>>>
  list?: Maybe<Scalars['String']>
  style?: Maybe<Scalars['String']>
}

export interface Span {
  __typename: 'Span'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  marks?: Maybe<Array<Maybe<Scalars['String']>>>
  text?: Maybe<Scalars['String']>
}

export type BlockOrRichImage = Block | RichImage

export type CollectionBlockFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  backgroundColor?: InputMaybe<StringFilter>
  backgroundImage?: InputMaybe<RichImageFilter>
  format?: InputMaybe<StringFilter>
  position?: InputMaybe<FloatFilter>
  textColor?: InputMaybe<StringFilter>
  textPosition?: InputMaybe<StringFilter>
}

export type CollectionBlockSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  backgroundColor?: InputMaybe<SortOrder>
  backgroundImage?: InputMaybe<RichImageSorting>
  format?: InputMaybe<SortOrder>
  position?: InputMaybe<SortOrder>
  textColor?: InputMaybe<SortOrder>
  textPosition?: InputMaybe<SortOrder>
}

export type CollectionGridFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  collection?: InputMaybe<ShopifyCollectionFilter>
  customCTALabel?: InputMaybe<StringFilter>
  customTitle?: InputMaybe<StringFilter>
}

export type CollectionGridSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  customCTALabel?: InputMaybe<SortOrder>
  customTitle?: InputMaybe<SortOrder>
}

export interface File {
  __typename: 'File'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  asset?: Maybe<SanityFileAsset>
}

export type FileFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  asset?: InputMaybe<SanityFileAssetFilter>
}

export type FileSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
}

export type HeroContentFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  align?: InputMaybe<StringFilter>
  cta?: InputMaybe<CtaFilter>
  textColor?: InputMaybe<StringFilter>
  textColorMobile?: InputMaybe<StringFilter>
  textPosition?: InputMaybe<StringFilter>
  textPositionMobile?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
}

export type HeroContentSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  align?: InputMaybe<SortOrder>
  cta?: InputMaybe<CtaSorting>
  textColor?: InputMaybe<SortOrder>
  textColorMobile?: InputMaybe<SortOrder>
  textPosition?: InputMaybe<SortOrder>
  textPositionMobile?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
}

export type ImageTextBlockFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  backgroundColor?: InputMaybe<StringFilter>
  backgroundImage?: InputMaybe<RichImageFilter>
  cta?: InputMaybe<CtaFilter>
  header?: InputMaybe<StringFilter>
  headerFont?: InputMaybe<StringFilter>
  hoverImage?: InputMaybe<RichImageFilter>
  textAlign?: InputMaybe<StringFilter>
  textColor?: InputMaybe<StringFilter>
}

export type ImageTextBlockSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  backgroundColor?: InputMaybe<SortOrder>
  backgroundImage?: InputMaybe<RichImageSorting>
  cta?: InputMaybe<CtaSorting>
  header?: InputMaybe<SortOrder>
  headerFont?: InputMaybe<SortOrder>
  hoverImage?: InputMaybe<RichImageSorting>
  textAlign?: InputMaybe<SortOrder>
  textColor?: InputMaybe<SortOrder>
}

export type ImageTextSectionFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
}

export type ImageTextSectionSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
}

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Int']>
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Int']>
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Int']>
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Int']>
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Int']>
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Int']>
}

export interface Link {
  __typename: 'Link'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  href?: Maybe<Scalars['String']>
}

export type LinkFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  href?: InputMaybe<StringFilter>
}

export type LinkGroupFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
}

export type LinkGroupSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
}

export type LinkSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  href?: InputMaybe<SortOrder>
}

export interface MenuLink {
  __typename: 'MenuLink'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  link?: Maybe<Cta>
}

export type MenuLinkFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  link?: InputMaybe<CtaFilter>
}

export type MenuLinkSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  link?: InputMaybe<CtaSorting>
}

export type PageBlockFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  alignment?: InputMaybe<StringFilter>
  backgroundColor?: InputMaybe<StringFilter>
  layoutOptions?: InputMaybe<StringFilter>
  textColor?: InputMaybe<StringFilter>
}

export type PageBlockSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  alignment?: InputMaybe<SortOrder>
  backgroundColor?: InputMaybe<SortOrder>
  layoutOptions?: InputMaybe<SortOrder>
  textColor?: InputMaybe<SortOrder>
}

export type PageTextFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  heading?: InputMaybe<StringFilter>
}

export type PageTextSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  heading?: InputMaybe<SortOrder>
}

export type ProductInfoBlockFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
}

export type ProductInfoBlocksByCollectionFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
}

export type ProductInfoBlocksByCollectionSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
}

export type ProductInfoBlocksByTagFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  tag?: InputMaybe<StringFilter>
}

export type ProductInfoBlocksByTagSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  tag?: InputMaybe<SortOrder>
}

export type ProductInfoBlockSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
}

export type RichPageLinkFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  hoverImage?: InputMaybe<RichImageFilter>
  image?: InputMaybe<RichImageFilter>
  title?: InputMaybe<StringFilter>
}

export type RichPageLinkSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  hoverImage?: InputMaybe<RichImageSorting>
  image?: InputMaybe<RichImageSorting>
  title?: InputMaybe<SortOrder>
}

export type RichTextBlockFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  textAlign?: InputMaybe<StringFilter>
}

export type RichTextBlockSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  textAlign?: InputMaybe<SortOrder>
}

export type ShopifyProductOptionFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  shopifyOptionId?: InputMaybe<StringFilter>
}

export type ShopifyProductOptionSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  shopifyOptionId?: InputMaybe<SortOrder>
}

export type ShopifyProductOptionValueFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  value?: InputMaybe<StringFilter>
}

export type ShopifyProductOptionValueSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  value?: InputMaybe<SortOrder>
}

export type ShopifyProductVariantFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  shopifyVariantID?: InputMaybe<StringFilter>
  sourceData?: InputMaybe<ShopifySourceProductVariantFilter>
  title?: InputMaybe<StringFilter>
}

export type ShopifySourceProductVariantFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  availableForSale?: InputMaybe<BooleanFilter>
  compareAtPriceV2?: InputMaybe<ShopifyMoneyV2Filter>
  currentlyNotInStock?: InputMaybe<BooleanFilter>
  id?: InputMaybe<StringFilter>
  image?: InputMaybe<ShopifySourceImageFilter>
  priceV2?: InputMaybe<ShopifyMoneyV2Filter>
  requiresShipping?: InputMaybe<BooleanFilter>
  sku?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
  weight?: InputMaybe<FloatFilter>
  weightUnit?: InputMaybe<StringFilter>
}

export type ShopifyProductVariantSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  shopifyVariantID?: InputMaybe<SortOrder>
  sourceData?: InputMaybe<ShopifySourceProductVariantSorting>
  title?: InputMaybe<SortOrder>
}

export type ShopifySourceProductVariantSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  availableForSale?: InputMaybe<SortOrder>
  compareAtPriceV2?: InputMaybe<ShopifyMoneyV2Sorting>
  currentlyNotInStock?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  image?: InputMaybe<ShopifySourceImageSorting>
  priceV2?: InputMaybe<ShopifyMoneyV2Sorting>
  requiresShipping?: InputMaybe<SortOrder>
  sku?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
  weight?: InputMaybe<SortOrder>
  weightUnit?: InputMaybe<SortOrder>
}

export type ShopifySourceCollectionEdgeFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  cursor?: InputMaybe<StringFilter>
  node?: InputMaybe<ShopifySourceCollectionNodeFilter>
}

export type ShopifySourceCollectionNodeFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  handle?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
}

export type ShopifySourceCollectionEdgeSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  cursor?: InputMaybe<SortOrder>
  node?: InputMaybe<ShopifySourceCollectionNodeSorting>
}

export type ShopifySourceCollectionNodeSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  handle?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
}

export type ShopifySourceImageEdgeFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  cursor?: InputMaybe<StringFilter>
  key?: InputMaybe<StringFilter>
  node?: InputMaybe<ShopifySourceImageFilter>
}

export type ShopifySourceImageEdgeSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  cursor?: InputMaybe<SortOrder>
  key?: InputMaybe<SortOrder>
  node?: InputMaybe<ShopifySourceImageSorting>
}

export type ShopifySourceProductEdgeFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  cursor?: InputMaybe<StringFilter>
  node?: InputMaybe<ShopifySourceProductNodeFilter>
}

export type ShopifySourceProductNodeFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  handle?: InputMaybe<StringFilter>
  id?: InputMaybe<StringFilter>
}

export type ShopifySourceProductEdgeSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  cursor?: InputMaybe<SortOrder>
  node?: InputMaybe<ShopifySourceProductNodeSorting>
}

export type ShopifySourceProductNodeSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  handle?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
}

export type ShopifySourceProductOptionFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
}

export type ShopifySourceProductOptionSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
}

export interface ShopifySourceProductPricePresentmentEdge {
  __typename: 'ShopifySourceProductPricePresentmentEdge'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  cursor?: Maybe<Scalars['String']>
  node?: Maybe<ShopifySourceProductVariantPricePair>
}

export interface ShopifySourceProductVariantPricePair {
  __typename: 'ShopifySourceProductVariantPricePair'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  compareAtPrice?: Maybe<ShopifyMoneyV2>
  price?: Maybe<ShopifyMoneyV2>
}

export type ShopifySourceProductPricePresentmentEdgeFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  cursor?: InputMaybe<StringFilter>
  node?: InputMaybe<ShopifySourceProductVariantPricePairFilter>
}

export type ShopifySourceProductVariantPricePairFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  compareAtPrice?: InputMaybe<ShopifyMoneyV2Filter>
  price?: InputMaybe<ShopifyMoneyV2Filter>
}

export type ShopifySourceProductPricePresentmentEdgeSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  cursor?: InputMaybe<SortOrder>
  node?: InputMaybe<ShopifySourceProductVariantPricePairSorting>
}

export type ShopifySourceProductVariantPricePairSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  compareAtPrice?: InputMaybe<ShopifyMoneyV2Sorting>
  price?: InputMaybe<ShopifyMoneyV2Sorting>
}

export type ShopifySourceProductPriceRangeEdgeFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  cursor?: InputMaybe<StringFilter>
  node?: InputMaybe<ShopifySourceProductPriceRangeFilter>
}

export type ShopifySourceProductPriceRangeEdgeSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  cursor?: InputMaybe<SortOrder>
  node?: InputMaybe<ShopifySourceProductPriceRangeSorting>
}

export type ShopifySourceProductVariantEdgeFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  cursor?: InputMaybe<StringFilter>
  node?: InputMaybe<ShopifySourceProductVariantFilter>
}

export type ShopifySourceProductVariantEdgeSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  cursor?: InputMaybe<SortOrder>
  node?: InputMaybe<ShopifySourceProductVariantSorting>
}

export interface ShopifySourceProductVariantPricePresenentmentConnection {
  __typename: 'ShopifySourceProductVariantPricePresenentmentConnection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  edges?: Maybe<Array<Maybe<ShopifySourceProductPricePresentmentEdge>>>
}

export type ShopifySourceProductVariantPricePresenentmentConnectionFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
}

export type ShopifySourceProductVariantPricePresenentmentConnectionSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
}

export type ShopifySourceSelectedOptionFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  value?: InputMaybe<StringFilter>
}

export type ShopifySourceSelectedOptionSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  value?: InputMaybe<SortOrder>
}

export type StockistFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  location?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  phone?: InputMaybe<StringFilter>
  website?: InputMaybe<StringFilter>
}

export type StockistSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  location?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  phone?: InputMaybe<SortOrder>
  website?: InputMaybe<SortOrder>
}

export type SubMenuFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
}

export type SubmenuSectionFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
}

export type SubmenuSectionListFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  title?: InputMaybe<StringFilter>
}

export type SubmenuSectionListItemFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  image?: InputMaybe<RichImageFilter>
  link?: InputMaybe<InternalLinkFilter>
}

export type SubmenuSectionListItemSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  image?: InputMaybe<RichImageSorting>
  link?: InputMaybe<InternalLinkSorting>
}

export type SubmenuSectionListSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
}

export type SubmenuSectionSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
}

export type SubMenuSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
}

export type SwatchFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  colorName?: InputMaybe<StringFilter>
  swatchImage?: InputMaybe<ImageFilter>
}

export type SwatchSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  colorName?: InputMaybe<SortOrder>
  swatchImage?: InputMaybe<ImageSorting>
}

export type TagBadgeFilter = {
  _key?: InputMaybe<StringFilter>
  _type?: InputMaybe<StringFilter>
  label?: InputMaybe<StringFilter>
  tag?: InputMaybe<StringFilter>
}

export type TagBadgeSorting = {
  _key?: InputMaybe<SortOrder>
  _type?: InputMaybe<SortOrder>
  label?: InputMaybe<SortOrder>
  tag?: InputMaybe<SortOrder>
}
