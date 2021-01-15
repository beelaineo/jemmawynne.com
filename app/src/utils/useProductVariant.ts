import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import {
  ShopifyProduct,
  ShopifySourceProductVariant as SourceVariant,
} from '../types'

const { useState } = React

interface Options {
  initialVariant?: string | 'first' | 'last'
}

interface Variant extends SourceVariant {
  __typename: any
}

export interface UseProductVariant {
  currentVariant?: Variant
  selectVariant: (variantId: string) => void
}

interface ReturnValue {
  currentVariant: SourceVariant | null
  selectVariant: (id: string) => void
}

export const useProductVariant = (
  product: ShopifyProduct,
  options: Options = {},
): ReturnValue => {
  const { initialVariant } = options
  const variants = product?.sourceData?.variants
    ? unwindEdges<SourceVariant>(product?.sourceData?.variants)[0]
    : []
  if (!variants.length) throw new Error('The supplied product has no variants')
  /**
   * Private Methods
   */

  const findVariant = (variantId: string) => {
    const variant = variants.find((v) => v.id === variantId)
    if (!variant)
      throw new Error(
        `There is no variant with the id "${variantId}" on the product ${product.title}`,
      )
    return variant
  }

  const getInitialState = () => {
    if (!initialVariant || initialVariant === 'first') return variants[0]
    if (initialVariant === 'last') return variants[variants.length - 1]
    return findVariant(initialVariant)
  }

  const [currentVariant, setCurrentVariant] = useState(getInitialState())

  /**
   * Public Methods
   */

  const selectVariant = (variantId: string) => {
    const variant = findVariant(variantId)
    setCurrentVariant(variant)
  }

  return {
    currentVariant,
    selectVariant,
  }
}
