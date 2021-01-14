import { unwindEdges } from '@good-idea/unwind-edges'
import {
  ShopifySourceProductOption,
  ShopifySourceProductVariant,
  ShopifyProductOptionValue,
  ShopifyProductVariant,
  ShopifyProduct,
  SwatchOptionValue,
} from '../types'
import { definitely } from './index'

export const getOptionValueByVariant = (
  variant: ShopifySourceProductVariant,
  option: ShopifySourceProductOption,
): string => {
  const { selectedOptions } = variant
  if (!selectedOptions) throw new Error('No selected options were provided')
  const matchingOption = selectedOptions.find(
    (o) => o && o.name === option.name,
  )
  if (!matchingOption?.value) throw new Error('No matching option was found')
  return matchingOption.value
}
export interface SelectedProductOption {
  name: string
  currentValue: string
}

/**
 * Get a variant that matches *all* selected options
 */
export const getVariantBySelectedOptions = (
  variants: ShopifySourceProductVariant[],
  currentOptions: SelectedProductOption[],
): ShopifySourceProductVariant | void => {
  return variants.find((variant) => {
    const { selectedOptions } = variant
    return definitely(selectedOptions).every((option) =>
      Boolean(
        currentOptions.find(
          (co) => co.name === option.name && co.currentValue === option.value,
        ),
      ),
    )
  })
}

/**
 * Get the first variant that matches the selected option
 */
export const getVariantBySelectedOption = (
  variants: ShopifySourceProductVariant[],
  currentOption: SelectedProductOption,
): ShopifySourceProductVariant | void =>
  variants.find((variant) => {
    const { selectedOptions } = variant
    return definitely(selectedOptions).some(
      (option) =>
        option.name === currentOption.name &&
        option.value === currentOption.currentValue,
    )
  })

export const optionMatchesVariant = (
  optionName: string,
  option: ShopifyProductOptionValue | SwatchOptionValue,
  variant: ShopifySourceProductVariant,
): boolean =>
  definitely(variant?.selectedOptions).some(
    (vso) => optionName === vso.name && option.value === vso.value,
  )

export const getSelectedOptionValues = (
  product: ShopifyProduct,
  variant: ShopifyProductVariant,
): ShopifyProductOptionValue[] => {
  const variantSelectedOptions = variant?.sourceData?.selectedOptions
  if (!product.options || !variantSelectedOptions) return []

  const selectedOptionValues = definitely(product?.options).reduce<
    ShopifyProductOptionValue[]
  >((acc, currentOption) => {
    const currentOptionValues = definitely(currentOption?.values).filter(
      (co) =>
        variant?.sourceData &&
        optionMatchesVariant(
          currentOption?.name || 'foo',
          co,
          variant.sourceData,
        ),
    )
    return [...acc, ...currentOptionValues]
  }, [])
  return definitely(selectedOptionValues)
}

export const getVariantTitle = (
  product: ShopifyProduct,
  variant: ShopifyProductVariant | ShopifySourceProductVariant,
): string | null | undefined => {
  const variantsLength =
    product?.variants?.length ||
    unwindEdges(product?.sourceData?.variants)[0].length

  if (variantsLength < 2) {
    // If there is only one variant, its name will be "Default Title",
    // so we should return the product title instead.
    return product?.title
  }

  const source =
    variant.__typename === 'ShopifyProductVariant'
      ? variant.sourceData
      : variant

  // Parse the product title by combining the selected option
  // values, omitting the "Size" option
  const titleByOptions = source?.selectedOptions?.length
    ? definitely(source.selectedOptions)
        .map((option) => {
          if (option.name === 'Size') return null
          return option.value
        })
        .filter(Boolean)
        .join(' | ')
    : undefined

  if (titleByOptions?.length) return titleByOptions

  return product?.title
}

export const productIsInquiryOnly = (product: ShopifyProduct): boolean => {
  return Boolean(
    product?.sourceData?.tags?.includes('inquiry only') ||
      product?.collections?.find((c) => c && c.handle === 'bespoke'),
  )
}
