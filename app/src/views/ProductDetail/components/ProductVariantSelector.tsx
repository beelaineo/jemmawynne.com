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
  options.map(({ name, values }) => ({
    name,
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
    return optionsForVariant.reduce<boolean>((acc, variantOption) => {
      if (acc === false) return false
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

  const { options, variants: variantsConnection } = product.sourceData
  // @ts-ignore
  const [variants] = unwindEdges(variantsConnection)

  if (!options.length) return null

  const [selectedOptions, setSelectedOptions] = useState<
    SelectedProductOption[]
  >(getInitialOptions(options))

  const handleSelectForOption = (name: string) => (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { value } = e.target
    const newOptions = getNewOptions(selectedOptions, name, value)
    setSelectedOptions(newOptions)
    const newVariant = getVariantBySelectedOptions(variants, newOptions)
    if (newVariant) {
      selectVariant(newVariant.id)
    } else {
      // TODO report to sentry
    }
  }

  const getCurrentOptionValue = (name: string): string =>
    selectedOptions.find((o) => o.name === name).currentValue

  return (
    <div>
      <NormalizeDiv>
        {options.map(({ name, values }) => (
          <ProductOptionWrapper key={name}>
            <Label htmlFor={name} key={name}>
              {name}
            </Label>
            <Select
              onChange={handleSelectForOption(name)}
              value={getCurrentOptionValue(name)}
              id={name}
              name={name}
            >
              {values.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </Select>
          </ProductOptionWrapper>
        ))}
      </NormalizeDiv>
    </div>
  )
}
