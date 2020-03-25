export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: Date
  JSON: { [key: string]: any }
  Date: any
}

export interface Banner {
  __typename: 'Banner'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  cta?: Maybe<Cta>
}

export type BannerFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  text?: Maybe<StringFilter>
  cta?: Maybe<CtaFilter>
}

export type BannerSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  text?: Maybe<SortOrder>
  cta?: Maybe<CtaSorting>
}

export interface Block {
  __typename: 'Block'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  children?: Maybe<Array<Maybe<Span>>>
  style?: Maybe<Scalars['String']>
  list?: Maybe<Scalars['String']>
}

export type BlockOrRichImage = Block | RichImage

export type BooleanFilter = {
  eq?: Maybe<Scalars['Boolean']>
  neq?: Maybe<Scalars['Boolean']>
}

export interface Carousel {
  __typename: 'Carousel'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  subtitleRaw?: Maybe<Scalars['JSON']>
  collection?: Maybe<ShopifyCollection>
  items?: Maybe<Array<Maybe<RichPageLink>>>
}

export type CarouselFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  collection?: Maybe<ShopifyCollectionFilter>
}

export type CarouselOrHeroOrImageTextSection =
  | Carousel
  | Hero
  | ImageTextSection

export type CarouselSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
}

export interface Cta {
  __typename: 'Cta'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  label?: Maybe<Scalars['String']>
  link?: Maybe<InternalLink>
}

export type CtaFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  label?: Maybe<StringFilter>
  link?: Maybe<InternalLinkFilter>
}

export type CtaOrSubMenu = Cta | SubMenu

export type CtaSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  label?: Maybe<SortOrder>
  link?: Maybe<InternalLinkSorting>
}

export type DateFilter = {
  eq?: Maybe<Scalars['Date']>
  neq?: Maybe<Scalars['Date']>
  gt?: Maybe<Scalars['Date']>
  gte?: Maybe<Scalars['Date']>
  lt?: Maybe<Scalars['Date']>
  lte?: Maybe<Scalars['Date']>
}

export type DatetimeFilter = {
  eq?: Maybe<Scalars['DateTime']>
  neq?: Maybe<Scalars['DateTime']>
  gt?: Maybe<Scalars['DateTime']>
  gte?: Maybe<Scalars['DateTime']>
  lt?: Maybe<Scalars['DateTime']>
  lte?: Maybe<Scalars['DateTime']>
}

export type Document = {
  _id: Scalars['ID']
  _type: Scalars['String']
  _createdAt: Scalars['DateTime']
  _updatedAt: Scalars['DateTime']
  _rev: Scalars['String']
}

export type DocumentFilter = {
  references?: Maybe<Scalars['ID']>
  is_draft?: Maybe<Scalars['Boolean']>
}

export interface ExternalLink {
  __typename: 'ExternalLink'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
  newTab?: Maybe<Scalars['Boolean']>
}

export type ExternalLinkFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  url?: Maybe<StringFilter>
  newTab?: Maybe<BooleanFilter>
}

export type ExternalLinkOrInternalLink = ExternalLink | InternalLink

export type ExternalLinkSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  url?: Maybe<SortOrder>
  newTab?: Maybe<SortOrder>
}

export interface File {
  __typename: 'File'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  asset?: Maybe<SanityFileAsset>
}

export type FileFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  asset?: Maybe<SanityFileAssetFilter>
}

export type FileSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
}

export type FloatFilter = {
  eq?: Maybe<Scalars['Float']>
  neq?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
}

export interface Geopoint {
  __typename: 'Geopoint'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  lat?: Maybe<Scalars['Float']>
  lng?: Maybe<Scalars['Float']>
  alt?: Maybe<Scalars['Float']>
}

export type GeopointFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  lat?: Maybe<FloatFilter>
  lng?: Maybe<FloatFilter>
  alt?: Maybe<FloatFilter>
}

export type GeopointSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  lat?: Maybe<SortOrder>
  lng?: Maybe<SortOrder>
  alt?: Maybe<SortOrder>
}

export interface Hero {
  __typename: 'Hero'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
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

export type HeroFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  textAlign?: Maybe<StringFilter>
  textPosition?: Maybe<StringFilter>
  cta?: Maybe<CtaFilter>
  textColor?: Maybe<StringFilter>
  image?: Maybe<RichImageFilter>
  mobileImage?: Maybe<RichImageFilter>
  textPositionMobile?: Maybe<StringFilter>
  textColorMobile?: Maybe<StringFilter>
}

export type HeroSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  textAlign?: Maybe<SortOrder>
  textPosition?: Maybe<SortOrder>
  cta?: Maybe<CtaSorting>
  textColor?: Maybe<SortOrder>
  image?: Maybe<RichImageSorting>
  mobileImage?: Maybe<RichImageSorting>
  textPositionMobile?: Maybe<SortOrder>
  textColorMobile?: Maybe<SortOrder>
}

export interface Homepage extends Document {
  __typename: 'Homepage'
  _id: Scalars['ID']
  _type: Scalars['String']
  _createdAt: Scalars['DateTime']
  _updatedAt: Scalars['DateTime']
  _rev: Scalars['String']
  _key?: Maybe<Scalars['String']>
  content?: Maybe<Array<Maybe<CarouselOrHeroOrImageTextSection>>>
}

export type HomepageFilter = {
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
}

export type HomepageSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
}

export type IdFilter = {
  eq?: Maybe<Scalars['ID']>
  neq?: Maybe<Scalars['ID']>
  matches?: Maybe<Scalars['ID']>
  in?: Maybe<Array<Scalars['ID']>>
  nin?: Maybe<Array<Scalars['ID']>>
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

export type ImageBlockFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  backgroundImage?: Maybe<RichImageFilter>
  link?: Maybe<InternalLinkFilter>
  hoverImage?: Maybe<RichImageFilter>
}

export type ImageBlockOrTextBlock = ImageBlock | TextBlock

export type ImageBlockSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  backgroundImage?: Maybe<RichImageSorting>
  link?: Maybe<InternalLinkSorting>
  hoverImage?: Maybe<RichImageSorting>
}

export type ImageFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  asset?: Maybe<SanityImageAssetFilter>
  hotspot?: Maybe<SanityImageHotspotFilter>
  crop?: Maybe<SanityImageCropFilter>
}

export type ImageSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  hotspot?: Maybe<SanityImageHotspotSorting>
  crop?: Maybe<SanityImageCropSorting>
}

export interface ImageTextSection {
  __typename: 'ImageTextSection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  subtitleRaw?: Maybe<Scalars['JSON']>
  blocks?: Maybe<Array<Maybe<ImageBlockOrTextBlock>>>
  backgroundImage?: Maybe<Image>
}

export type ImageTextSectionFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  backgroundImage?: Maybe<ImageFilter>
}

export type ImageTextSectionSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  backgroundImage?: Maybe<ImageSorting>
}

export interface InternalLink {
  __typename: 'InternalLink'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  document?: Maybe<PageOrShopifyCollectionOrShopifyProductOrStockists>
}

export type InternalLinkFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
}

export type InternalLinkSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
}

export type IntFilter = {
  eq?: Maybe<Scalars['Int']>
  neq?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
}

export interface LinkGroup {
  __typename: 'LinkGroup'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  links?: Maybe<Array<Maybe<InternalLink>>>
}

export type LinkGroupFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
}

export type LinkGroupOrRichPageLink = LinkGroup | RichPageLink

export type LinkGroupSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
}

export interface Menu extends Document {
  __typename: 'Menu'
  _id: Scalars['ID']
  _type: Scalars['String']
  _createdAt: Scalars['DateTime']
  _updatedAt: Scalars['DateTime']
  _rev: Scalars['String']
  _key?: Maybe<Scalars['String']>
  menuItems?: Maybe<Array<Maybe<CtaOrSubMenu>>>
}

export type MenuFilter = {
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
}

export interface MenuLink {
  __typename: 'MenuLink'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  link?: Maybe<Cta>
}

export type MenuLinkFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  link?: Maybe<CtaFilter>
}

export type MenuLinkSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  link?: Maybe<CtaSorting>
}

export type MenuSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
}

export interface Page extends Document {
  __typename: 'Page'
  _id: Scalars['ID']
  _type: Scalars['String']
  _createdAt: Scalars['DateTime']
  _updatedAt: Scalars['DateTime']
  _rev: Scalars['String']
  _key?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  slug?: Maybe<Slug>
  hero?: Maybe<Hero>
  textAlign?: Maybe<Scalars['String']>
  contentRaw?: Maybe<Scalars['JSON']>
}

export type PageFilter = {
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  slug?: Maybe<SlugFilter>
  hero?: Maybe<HeroFilter>
  textAlign?: Maybe<StringFilter>
}

export interface PageInfo {
  __typename: 'PageInfo'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  hasNextPage?: Maybe<Scalars['Boolean']>
  hasPreviousPage?: Maybe<Scalars['Boolean']>
}

export type PageInfoFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  hasNextPage?: Maybe<BooleanFilter>
  hasPreviousPage?: Maybe<BooleanFilter>
}

export type PageInfoSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  hasNextPage?: Maybe<SortOrder>
  hasPreviousPage?: Maybe<SortOrder>
}

export type PageOrShopifyCollectionOrShopifyProduct =
  | Page
  | ShopifyCollection
  | ShopifyProduct

export type PageOrShopifyCollectionOrShopifyProductOrStockists =
  | Page
  | ShopifyCollection
  | ShopifyProduct
  | Stockists

export type PageSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  slug?: Maybe<SlugSorting>
  hero?: Maybe<HeroSorting>
  textAlign?: Maybe<SortOrder>
}

export interface ProductInfo extends Document {
  __typename: 'ProductInfo'
  _id: Scalars['ID']
  _type: Scalars['String']
  _createdAt: Scalars['DateTime']
  _updatedAt: Scalars['DateTime']
  _rev: Scalars['String']
  _key?: Maybe<Scalars['String']>
  helpText?: Maybe<Scalars['String']>
  globalBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  ringBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  earringBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  braceletBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
  necklaceBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
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

export type ProductInfoBlockFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
}

export interface ProductInfoBlocksByTag {
  __typename: 'ProductInfoBlocksByTag'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  tag?: Maybe<Scalars['String']>
  infoBlocks?: Maybe<Array<Maybe<ProductInfoBlock>>>
}

export type ProductInfoBlocksByTagFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  tag?: Maybe<StringFilter>
}

export type ProductInfoBlocksByTagSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  tag?: Maybe<SortOrder>
}

export type ProductInfoBlockSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
}

export type ProductInfoFilter = {
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  helpText?: Maybe<StringFilter>
  byTagHelpText?: Maybe<StringFilter>
}

export type ProductInfoSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  helpText?: Maybe<SortOrder>
  byTagHelpText?: Maybe<SortOrder>
}

export interface RichImage {
  __typename: 'RichImage'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  altText?: Maybe<Scalars['String']>
  asset?: Maybe<SanityImageAsset>
  hotspot?: Maybe<SanityImageHotspot>
  crop?: Maybe<SanityImageCrop>
}

export type RichImageFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  altText?: Maybe<StringFilter>
  asset?: Maybe<SanityImageAssetFilter>
  hotspot?: Maybe<SanityImageHotspotFilter>
  crop?: Maybe<SanityImageCropFilter>
}

export type RichImageSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  altText?: Maybe<SortOrder>
  hotspot?: Maybe<SanityImageHotspotSorting>
  crop?: Maybe<SanityImageCropSorting>
}

export interface RichPageLink {
  __typename: 'RichPageLink'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  document?: Maybe<PageOrShopifyCollectionOrShopifyProduct>
  title?: Maybe<Scalars['String']>
  captionRaw?: Maybe<Scalars['JSON']>
  image?: Maybe<RichImage>
  hoverImage?: Maybe<RichImage>
}

export type RichPageLinkFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  image?: Maybe<RichImageFilter>
  hoverImage?: Maybe<RichImageFilter>
}

export type RichPageLinkSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  image?: Maybe<RichImageSorting>
  hoverImage?: Maybe<RichImageSorting>
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
  allMenu: Array<Menu>
  allHomepage: Array<Homepage>
  allPage: Array<Page>
  allProductInfo: Array<ProductInfo>
  allSiteSettings: Array<SiteSettings>
  allStockists: Array<Stockists>
  allShopifyProduct: Array<ShopifyProduct>
  allShopifyCollection: Array<ShopifyCollection>
  allSanityImageAsset: Array<SanityImageAsset>
  allSanityFileAsset: Array<SanityFileAsset>
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

export type RootQueryAllMenuArgs = {
  where?: Maybe<MenuFilter>
  sort?: Maybe<Array<MenuSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllHomepageArgs = {
  where?: Maybe<HomepageFilter>
  sort?: Maybe<Array<HomepageSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllPageArgs = {
  where?: Maybe<PageFilter>
  sort?: Maybe<Array<PageSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllProductInfoArgs = {
  where?: Maybe<ProductInfoFilter>
  sort?: Maybe<Array<ProductInfoSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllSiteSettingsArgs = {
  where?: Maybe<SiteSettingsFilter>
  sort?: Maybe<Array<SiteSettingsSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllStockistsArgs = {
  where?: Maybe<StockistsFilter>
  sort?: Maybe<Array<StockistsSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllShopifyProductArgs = {
  where?: Maybe<ShopifyProductFilter>
  sort?: Maybe<Array<ShopifyProductSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllShopifyCollectionArgs = {
  where?: Maybe<ShopifyCollectionFilter>
  sort?: Maybe<Array<ShopifyCollectionSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllSanityImageAssetArgs = {
  where?: Maybe<SanityImageAssetFilter>
  sort?: Maybe<Array<SanityImageAssetSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export type RootQueryAllSanityFileAssetArgs = {
  where?: Maybe<SanityFileAssetFilter>
  sort?: Maybe<Array<SanityFileAssetSorting>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
}

export interface SanityAssetSourceData {
  __typename: 'SanityAssetSourceData'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type SanityAssetSourceDataFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
  id?: Maybe<StringFilter>
  url?: Maybe<StringFilter>
}

export type SanityAssetSourceDataSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  url?: Maybe<SortOrder>
}

export interface SanityFileAsset extends Document {
  __typename: 'SanityFileAsset'
  _id: Scalars['ID']
  _type: Scalars['String']
  _createdAt: Scalars['DateTime']
  _updatedAt: Scalars['DateTime']
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
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  originalFilename?: Maybe<StringFilter>
  label?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  description?: Maybe<StringFilter>
  sha1hash?: Maybe<StringFilter>
  extension?: Maybe<StringFilter>
  mimeType?: Maybe<StringFilter>
  size?: Maybe<FloatFilter>
  assetId?: Maybe<StringFilter>
  path?: Maybe<StringFilter>
  url?: Maybe<StringFilter>
  source?: Maybe<SanityAssetSourceDataFilter>
}

export type SanityFileAssetSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  originalFilename?: Maybe<SortOrder>
  label?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  description?: Maybe<SortOrder>
  sha1hash?: Maybe<SortOrder>
  extension?: Maybe<SortOrder>
  mimeType?: Maybe<SortOrder>
  size?: Maybe<SortOrder>
  assetId?: Maybe<SortOrder>
  path?: Maybe<SortOrder>
  url?: Maybe<SortOrder>
  source?: Maybe<SanityAssetSourceDataSorting>
}

export interface SanityImageAsset extends Document {
  __typename: 'SanityImageAsset'
  _id: Scalars['ID']
  _type: Scalars['String']
  _createdAt: Scalars['DateTime']
  _updatedAt: Scalars['DateTime']
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
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  originalFilename?: Maybe<StringFilter>
  label?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  description?: Maybe<StringFilter>
  sha1hash?: Maybe<StringFilter>
  extension?: Maybe<StringFilter>
  mimeType?: Maybe<StringFilter>
  size?: Maybe<FloatFilter>
  assetId?: Maybe<StringFilter>
  path?: Maybe<StringFilter>
  url?: Maybe<StringFilter>
  metadata?: Maybe<SanityImageMetadataFilter>
  source?: Maybe<SanityAssetSourceDataFilter>
}

export type SanityImageAssetSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  originalFilename?: Maybe<SortOrder>
  label?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  description?: Maybe<SortOrder>
  sha1hash?: Maybe<SortOrder>
  extension?: Maybe<SortOrder>
  mimeType?: Maybe<SortOrder>
  size?: Maybe<SortOrder>
  assetId?: Maybe<SortOrder>
  path?: Maybe<SortOrder>
  url?: Maybe<SortOrder>
  metadata?: Maybe<SanityImageMetadataSorting>
  source?: Maybe<SanityAssetSourceDataSorting>
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

export type SanityImageCropFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  top?: Maybe<FloatFilter>
  bottom?: Maybe<FloatFilter>
  left?: Maybe<FloatFilter>
  right?: Maybe<FloatFilter>
}

export type SanityImageCropSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  top?: Maybe<SortOrder>
  bottom?: Maybe<SortOrder>
  left?: Maybe<SortOrder>
  right?: Maybe<SortOrder>
}

export interface SanityImageDimensions {
  __typename: 'SanityImageDimensions'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  height?: Maybe<Scalars['Float']>
  width?: Maybe<Scalars['Float']>
  aspectRatio?: Maybe<Scalars['Float']>
}

export type SanityImageDimensionsFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  height?: Maybe<FloatFilter>
  width?: Maybe<FloatFilter>
  aspectRatio?: Maybe<FloatFilter>
}

export type SanityImageDimensionsSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  height?: Maybe<SortOrder>
  width?: Maybe<SortOrder>
  aspectRatio?: Maybe<SortOrder>
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

export type SanityImageHotspotFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  x?: Maybe<FloatFilter>
  y?: Maybe<FloatFilter>
  height?: Maybe<FloatFilter>
  width?: Maybe<FloatFilter>
}

export type SanityImageHotspotSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  x?: Maybe<SortOrder>
  y?: Maybe<SortOrder>
  height?: Maybe<SortOrder>
  width?: Maybe<SortOrder>
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

export type SanityImageMetadataFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  location?: Maybe<GeopointFilter>
  dimensions?: Maybe<SanityImageDimensionsFilter>
  palette?: Maybe<SanityImagePaletteFilter>
  lqip?: Maybe<StringFilter>
  hasAlpha?: Maybe<BooleanFilter>
  isOpaque?: Maybe<BooleanFilter>
}

export type SanityImageMetadataSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  location?: Maybe<GeopointSorting>
  dimensions?: Maybe<SanityImageDimensionsSorting>
  palette?: Maybe<SanityImagePaletteSorting>
  lqip?: Maybe<SortOrder>
  hasAlpha?: Maybe<SortOrder>
  isOpaque?: Maybe<SortOrder>
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

export type SanityImagePaletteFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  darkMuted?: Maybe<SanityImagePaletteSwatchFilter>
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilter>
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilter>
  vibrant?: Maybe<SanityImagePaletteSwatchFilter>
  dominant?: Maybe<SanityImagePaletteSwatchFilter>
  lightMuted?: Maybe<SanityImagePaletteSwatchFilter>
  muted?: Maybe<SanityImagePaletteSwatchFilter>
}

export type SanityImagePaletteSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  darkMuted?: Maybe<SanityImagePaletteSwatchSorting>
  lightVibrant?: Maybe<SanityImagePaletteSwatchSorting>
  darkVibrant?: Maybe<SanityImagePaletteSwatchSorting>
  vibrant?: Maybe<SanityImagePaletteSwatchSorting>
  dominant?: Maybe<SanityImagePaletteSwatchSorting>
  lightMuted?: Maybe<SanityImagePaletteSwatchSorting>
  muted?: Maybe<SanityImagePaletteSwatchSorting>
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

export type SanityImagePaletteSwatchFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  background?: Maybe<StringFilter>
  foreground?: Maybe<StringFilter>
  population?: Maybe<FloatFilter>
  title?: Maybe<StringFilter>
}

export type SanityImagePaletteSwatchSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  background?: Maybe<SortOrder>
  foreground?: Maybe<SortOrder>
  population?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
}

export interface ShopifyCollection extends Document {
  __typename: 'ShopifyCollection'
  _id: Scalars['ID']
  _type: Scalars['String']
  _createdAt: Scalars['DateTime']
  _updatedAt: Scalars['DateTime']
  _rev: Scalars['String']
  _key?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  shopifyId?: Maybe<Scalars['String']>
  sourceData?: Maybe<ShopifySourceCollection>
  products?: Maybe<Array<Maybe<ShopifyProduct>>>
  hero?: Maybe<Hero>
}

export type ShopifyCollectionFilter = {
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  handle?: Maybe<StringFilter>
  shopifyId?: Maybe<StringFilter>
  sourceData?: Maybe<ShopifySourceCollectionFilter>
  hero?: Maybe<HeroFilter>
}

export type ShopifyCollectionSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  shopifyId?: Maybe<SortOrder>
  sourceData?: Maybe<ShopifySourceCollectionSorting>
  hero?: Maybe<HeroSorting>
}

export interface ShopifyMoneyV2 {
  __typename: 'ShopifyMoneyV2'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['String']>
  currencyCode?: Maybe<Scalars['String']>
}

export type ShopifyMoneyV2Filter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  amount?: Maybe<StringFilter>
  currencyCode?: Maybe<StringFilter>
}

export type ShopifyMoneyV2Sorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  amount?: Maybe<SortOrder>
  currencyCode?: Maybe<SortOrder>
}

export interface ShopifyProduct extends Document {
  __typename: 'ShopifyProduct'
  _id: Scalars['ID']
  _type: Scalars['String']
  _createdAt: Scalars['DateTime']
  _updatedAt: Scalars['DateTime']
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
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  handle?: Maybe<StringFilter>
  shopifyId?: Maybe<StringFilter>
  sourceData?: Maybe<ShopifySourceProductFilter>
  related?: Maybe<CarouselFilter>
}

export interface ShopifyProductOption {
  __typename: 'ShopifyProductOption'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  shopifyOptionId?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  values?: Maybe<Array<Maybe<ShopifyProductOptionValue>>>
}

export type ShopifyProductOptionFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  shopifyOptionId?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
}

export type ShopifyProductOptionSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  shopifyOptionId?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
}

export interface ShopifyProductOptionValue {
  __typename: 'ShopifyProductOptionValue'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type ShopifyProductOptionValueFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  value?: Maybe<StringFilter>
}

export type ShopifyProductOptionValueSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  value?: Maybe<SortOrder>
}

export type ShopifyProductSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  shopifyId?: Maybe<SortOrder>
  sourceData?: Maybe<ShopifySourceProductSorting>
  related?: Maybe<CarouselSorting>
}

export interface ShopifyProductVariant {
  __typename: 'ShopifyProductVariant'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  shopifyVariantID?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  sourceData?: Maybe<ShopifySourceProductVariant>
}

export type ShopifyProductVariantFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  shopifyVariantID?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  sourceData?: Maybe<ShopifySourceProductVariantFilter>
}

export type ShopifyProductVariantSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  shopifyVariantID?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  sourceData?: Maybe<ShopifySourceProductVariantSorting>
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

export type ShopifySourceCollectionEdgeFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  cursor?: Maybe<StringFilter>
  node?: Maybe<ShopifySourceCollectionNodeFilter>
}

export type ShopifySourceCollectionEdgeSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  cursor?: Maybe<SortOrder>
  node?: Maybe<ShopifySourceCollectionNodeSorting>
}

export type ShopifySourceCollectionFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  handle?: Maybe<StringFilter>
  description?: Maybe<StringFilter>
  descriptionHtml?: Maybe<StringFilter>
  id?: Maybe<StringFilter>
  image?: Maybe<ShopifySourceImageFilter>
  products?: Maybe<ShopifySourceProductsConnectionFilter>
}

export interface ShopifySourceCollectionNode {
  __typename: 'ShopifySourceCollectionNode'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ShopifySourceCollectionNodeFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  handle?: Maybe<StringFilter>
  id?: Maybe<StringFilter>
}

export type ShopifySourceCollectionNodeSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
}

export interface ShopifySourceCollectionsConnection {
  __typename: 'ShopifySourceCollectionsConnection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  pageInfo?: Maybe<PageInfo>
  edges?: Maybe<Array<Maybe<ShopifySourceCollectionEdge>>>
}

export type ShopifySourceCollectionsConnectionFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  pageInfo?: Maybe<PageInfoFilter>
}

export type ShopifySourceCollectionsConnectionSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  pageInfo?: Maybe<PageInfoSorting>
}

export type ShopifySourceCollectionSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  description?: Maybe<SortOrder>
  descriptionHtml?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  image?: Maybe<ShopifySourceImageSorting>
  products?: Maybe<ShopifySourceProductsConnectionSorting>
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

export type ShopifySourceImageEdgeFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  key?: Maybe<StringFilter>
  cursor?: Maybe<StringFilter>
  node?: Maybe<ShopifySourceImageFilter>
}

export type ShopifySourceImageEdgeSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  key?: Maybe<SortOrder>
  cursor?: Maybe<SortOrder>
  node?: Maybe<ShopifySourceImageSorting>
}

export type ShopifySourceImageFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  altText?: Maybe<StringFilter>
  id?: Maybe<StringFilter>
  originalSrc?: Maybe<StringFilter>
  w100?: Maybe<StringFilter>
  w300?: Maybe<StringFilter>
  w800?: Maybe<StringFilter>
}

export interface ShopifySourceImages {
  __typename: 'ShopifySourceImages'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  edges?: Maybe<Array<Maybe<ShopifySourceImageEdge>>>
}

export type ShopifySourceImagesFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
}

export type ShopifySourceImageSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  altText?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  originalSrc?: Maybe<SortOrder>
  w100?: Maybe<SortOrder>
  w300?: Maybe<SortOrder>
  w800?: Maybe<SortOrder>
}

export type ShopifySourceImagesSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
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

export type ShopifySourceProductEdgeFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  cursor?: Maybe<StringFilter>
  node?: Maybe<ShopifySourceProductNodeFilter>
}

export type ShopifySourceProductEdgeSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  cursor?: Maybe<SortOrder>
  node?: Maybe<ShopifySourceProductNodeSorting>
}

export type ShopifySourceProductFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  availableForSale?: Maybe<BooleanFilter>
  priceRange?: Maybe<ShopifySourceProductPriceRangeFilter>
  productType?: Maybe<StringFilter>
  handle?: Maybe<StringFilter>
  description?: Maybe<StringFilter>
  descriptionHtml?: Maybe<StringFilter>
  vendor?: Maybe<StringFilter>
  id?: Maybe<StringFilter>
  images?: Maybe<ShopifySourceImagesFilter>
  variants?: Maybe<ShopifySourceProductVariantsConnectionFilter>
  collections?: Maybe<ShopifySourceCollectionsConnectionFilter>
}

export interface ShopifySourceProductNode {
  __typename: 'ShopifySourceProductNode'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  handle?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
}

export type ShopifySourceProductNodeFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  handle?: Maybe<StringFilter>
  id?: Maybe<StringFilter>
}

export type ShopifySourceProductNodeSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
}

export interface ShopifySourceProductOption {
  __typename: 'ShopifySourceProductOption'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  values?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type ShopifySourceProductOptionFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
}

export type ShopifySourceProductOptionSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
}

export interface ShopifySourceProductPriceRange {
  __typename: 'ShopifySourceProductPriceRange'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  minVariantPrice?: Maybe<ShopifyMoneyV2>
  maxVariantPrice?: Maybe<ShopifyMoneyV2>
}

export type ShopifySourceProductPriceRangeFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  minVariantPrice?: Maybe<ShopifyMoneyV2Filter>
  maxVariantPrice?: Maybe<ShopifyMoneyV2Filter>
}

export type ShopifySourceProductPriceRangeSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  minVariantPrice?: Maybe<ShopifyMoneyV2Sorting>
  maxVariantPrice?: Maybe<ShopifyMoneyV2Sorting>
}

export interface ShopifySourceProductsConnection {
  __typename: 'ShopifySourceProductsConnection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  pageInfo?: Maybe<PageInfo>
  edges?: Maybe<Array<Maybe<ShopifySourceProductEdge>>>
}

export type ShopifySourceProductsConnectionFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  pageInfo?: Maybe<PageInfoFilter>
}

export type ShopifySourceProductsConnectionSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  pageInfo?: Maybe<PageInfoSorting>
}

export type ShopifySourceProductSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  availableForSale?: Maybe<SortOrder>
  priceRange?: Maybe<ShopifySourceProductPriceRangeSorting>
  productType?: Maybe<SortOrder>
  handle?: Maybe<SortOrder>
  description?: Maybe<SortOrder>
  descriptionHtml?: Maybe<SortOrder>
  vendor?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  images?: Maybe<ShopifySourceImagesSorting>
  variants?: Maybe<ShopifySourceProductVariantsConnectionSorting>
  collections?: Maybe<ShopifySourceCollectionsConnectionSorting>
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

export type ShopifySourceProductVariantEdgeFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  cursor?: Maybe<StringFilter>
  node?: Maybe<ShopifySourceProductVariantFilter>
}

export type ShopifySourceProductVariantEdgeSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  cursor?: Maybe<SortOrder>
  node?: Maybe<ShopifySourceProductVariantSorting>
}

export type ShopifySourceProductVariantFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  availableForSale?: Maybe<BooleanFilter>
  id?: Maybe<StringFilter>
  image?: Maybe<ShopifySourceImageFilter>
  priceV2?: Maybe<ShopifyMoneyV2Filter>
  requiresShipping?: Maybe<BooleanFilter>
  sku?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
  weight?: Maybe<FloatFilter>
  weightUnit?: Maybe<StringFilter>
}

export interface ShopifySourceProductVariantsConnection {
  __typename: 'ShopifySourceProductVariantsConnection'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  pageInfo?: Maybe<PageInfo>
  edges?: Maybe<Array<Maybe<ShopifySourceProductVariantEdge>>>
}

export type ShopifySourceProductVariantsConnectionFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  pageInfo?: Maybe<PageInfoFilter>
}

export type ShopifySourceProductVariantsConnectionSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  pageInfo?: Maybe<PageInfoSorting>
}

export type ShopifySourceProductVariantSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  availableForSale?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  image?: Maybe<ShopifySourceImageSorting>
  priceV2?: Maybe<ShopifyMoneyV2Sorting>
  requiresShipping?: Maybe<SortOrder>
  sku?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
  weight?: Maybe<SortOrder>
  weightUnit?: Maybe<SortOrder>
}

export interface ShopifySourceSelectedOption {
  __typename: 'ShopifySourceSelectedOption'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type ShopifySourceSelectedOptionFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
  value?: Maybe<StringFilter>
}

export type ShopifySourceSelectedOptionSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  value?: Maybe<SortOrder>
}

export interface SiteSettings extends Document {
  __typename: 'SiteSettings'
  _id: Scalars['ID']
  _type: Scalars['String']
  _createdAt: Scalars['DateTime']
  _updatedAt: Scalars['DateTime']
  _rev: Scalars['String']
  _key?: Maybe<Scalars['String']>
  banner?: Maybe<Banner>
  links?: Maybe<Array<Maybe<ExternalLinkOrInternalLink>>>
  mailerTitle?: Maybe<Scalars['String']>
  mailerSubtitle?: Maybe<Scalars['String']>
}

export type SiteSettingsFilter = {
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  banner?: Maybe<BannerFilter>
  mailerTitle?: Maybe<StringFilter>
  mailerSubtitle?: Maybe<StringFilter>
}

export type SiteSettingsSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  banner?: Maybe<BannerSorting>
  mailerTitle?: Maybe<SortOrder>
  mailerSubtitle?: Maybe<SortOrder>
}

export interface Slug {
  __typename: 'Slug'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  current?: Maybe<Scalars['String']>
}

export type SlugFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  current?: Maybe<StringFilter>
}

export type SlugSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  current?: Maybe<SortOrder>
}

export enum SortOrder {
  Asc = 'ASC',
  Desc = 'DESC',
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

export type StockistFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  name?: Maybe<StringFilter>
  location?: Maybe<StringFilter>
  website?: Maybe<StringFilter>
  phone?: Maybe<StringFilter>
}

export interface Stockists extends Document {
  __typename: 'Stockists'
  _id: Scalars['ID']
  _type: Scalars['String']
  _createdAt: Scalars['DateTime']
  _updatedAt: Scalars['DateTime']
  _rev: Scalars['String']
  _key?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  us?: Maybe<Array<Maybe<Stockist>>>
  international?: Maybe<Array<Maybe<Stockist>>>
  online?: Maybe<Array<Maybe<Stockist>>>
}

export type StockistsFilter = {
  _?: Maybe<DocumentFilter>
  _id?: Maybe<IdFilter>
  _type?: Maybe<StringFilter>
  _createdAt?: Maybe<DatetimeFilter>
  _updatedAt?: Maybe<DatetimeFilter>
  _rev?: Maybe<StringFilter>
  _key?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
}

export type StockistSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  location?: Maybe<SortOrder>
  website?: Maybe<SortOrder>
  phone?: Maybe<SortOrder>
}

export type StockistsSorting = {
  _id?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  _createdAt?: Maybe<SortOrder>
  _updatedAt?: Maybe<SortOrder>
  _rev?: Maybe<SortOrder>
  _key?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
}

export type StringFilter = {
  eq?: Maybe<Scalars['String']>
  neq?: Maybe<Scalars['String']>
  matches?: Maybe<Scalars['String']>
  in?: Maybe<Array<Scalars['String']>>
  nin?: Maybe<Array<Scalars['String']>>
}

export interface SubMenu {
  __typename: 'SubMenu'
  _key?: Maybe<Scalars['String']>
  _type?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  columns?: Maybe<Array<Maybe<LinkGroupOrRichPageLink>>>
}

export type SubMenuFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  title?: Maybe<StringFilter>
}

export type SubMenuSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
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

export type TextBlockFilter = {
  _key?: Maybe<StringFilter>
  _type?: Maybe<StringFilter>
  header?: Maybe<StringFilter>
  textAlign?: Maybe<StringFilter>
  cta?: Maybe<CtaFilter>
}

export type TextBlockSorting = {
  _key?: Maybe<SortOrder>
  _type?: Maybe<SortOrder>
  header?: Maybe<SortOrder>
  textAlign?: Maybe<SortOrder>
  cta?: Maybe<CtaSorting>
}
