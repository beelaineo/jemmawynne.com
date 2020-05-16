import { Image, Scalars, Maybe } from './generated-sanity'

export * from './generated-shopify'
// @ts-ignore
export * from './generated-sanity'

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
