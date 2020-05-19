import {
  ShopifySourceProductOption,
  ShopifySourceProductVariant,
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
