import {
  SanityImageCrop,
  SanityImageHotspot,
  HeroContent as HeroContentType,
  Image,
  Scalars,
  Maybe,
} from './generated-sanity'
// eslint-disable-next-line import/export
import * as generatedSanity from './generated-sanity'
import * as generatedShopify from './generated-shopify'

export default { ...generatedShopify, ...generatedSanity }

/**
 * Used for images returned from a raw JSON (rich text) object
 */
export interface SanityRawImage {
  __typename: void
  _key: string
  _type: 'richImage' | 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  crop: SanityImageCrop
  hotspot: SanityImageHotspot
  altText?: string
}

export type SanityRichText = Scalars['JSON']

export type Position =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'middle-left'
  | 'middle-center'
  | 'middle-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

export type MaybeAll<T> = {
  [K in keyof T]?: null | Maybe<T[K]>
}

export interface SwatchOptionValue {
  label: string
  image: Image
  value: string
}

export interface SwatchOption {
  name: string
  values: SwatchOptionValue[]
}

export interface HeroContent extends HeroContentType {
  body?: Maybe<Scalars['JSON']>
}
