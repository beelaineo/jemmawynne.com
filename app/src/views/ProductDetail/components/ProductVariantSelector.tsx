import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { UseProductVariant } from 'use-shopify'
import {
  ShopifyProduct,
  ShopifySourceProductVariant,
  ShopifySourceProductOption,
} from '../../../types'
import { Select, Label, NormalizeDiv, ProductOptionWrapper } from '../styled'

const { useState } = React

/**
 * ProductVariantSelector
 *
 * - renders a menu, series of buttons, or other UI to select a variant
 * - highlights the current variant
 * - does not render anything if there is only one variant
 */

interface SelectedProductOption {
  name: string
  currentValue: string
}

const getInitialOptions = (
  options: ShopifySourceProductOption[],
): SelectedProductOption[] =>
  // @ts-ignore
  options.map(({ name, values }) => ({
    name,
    // @ts-ignore
    currentValue: values[0],
  }))

const getNewOptions = (
  options: SelectedProductOption[],
  optionName: string,
  newValue: string,
): SelectedProductOption[] =>
  options.map((option) => {
    if (option.name !== optionName) return option
    return {
      ...option,
      currentValue: newValue,
    }
  })

const getVariantBySelectedOptions = (
  variants: ShopifySourceProductVariant[],
  currentOptions: SelectedProductOption[],
): ShopifySourceProductVariant | void =>
  variants.find((variant) => {
    const { selectedOptions: optionsForVariant } = variant
    // @ts-ignore
    return optionsForVariant.reduce<boolean>((acc, variantOption) => {
      if (acc === false) return false
      if (!variantOption) return false
      const matchingOption = currentOptions.find(
        (o) => o.name === variantOption.name,
      )
      if (matchingOption)
        return matchingOption.currentValue === variantOption.value
    }, true)
  })

interface Props extends UseProductVariant {
  product: ShopifyProduct
  quantity: number
  increment: () => void
  decrement: () => void
}

export const ProductVariantSelector = (props: Props) => {
  const { product, selectVariant } = props
  const { sourceData } = product

  if (!sourceData) return null
  const { options, variants: variantsConnection } = sourceData
  // @ts-ignore
  const [variants] = unwindEdges(variantsConnection)

  if (!options || !options.length) return null

  const [selectedOptions, setSelectedOptions] = useState<
    SelectedProductOption[]
  >(
    // @ts-ignore
    getInitialOptions(options),
  )

  const handleSelectForOption = (name: string) => (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value } = e.target
    const newOptions = getNewOptions(selectedOptions, name, value)
    setSelectedOptions(newOptions)
    const newVariant = getVariantBySelectedOptions(variants, newOptions)
    if (newVariant && newVariant.id) {
      selectVariant(newVariant.id)
    } else {
      // TODO report to sentry
    }
  }

  const getCurrentOptionValue = (name: string): string =>
    // @ts-ignore
    selectedOptions.find((o) => o.name === name).currentValue

  return (
    <div>
      <NormalizeDiv>
        {options.map((option) =>
          option && option.name && option.values ? (
            <ProductOptionWrapper key={option.name}>
              <Label htmlFor={option.name} key={option.name}>
                {name}
              </Label>
              <Select
                onChange={handleSelectForOption(name)}
                value={getCurrentOptionValue(name)}
                id={name}
                name={name}
              >
                {option.values.map((value) =>
                  value ? (
                    <option key={value} value={value}>
                      {value}
                    </option>
                  ) : null,
                )}
              </Select>
            </ProductOptionWrapper>
          ) : null,
        )}
      </NormalizeDiv>
    </div>
  )
}
