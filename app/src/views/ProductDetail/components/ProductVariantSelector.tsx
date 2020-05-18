import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import {
  ShopifyProduct,
  ShopifySourceProductVariant,
  ShopifySourceProductOption,
  SwatchOptionValue,
} from '../../../types'
import { useShopData } from '../../../providers/ShopDataProvider'
import {
  SwatchWrapper,
  SelectWrapper,
  SwatchLabelWrapper,
  ProductOptionWrapper,
  ProductOptionsWrapper,
} from '../styled'
import { Heading, Label } from '../../../components/Text'
import { Select } from '../../../components/Forms'
import { definitely } from '../../../utils'
import { ProductSwatches } from '../../../components/Product'

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

interface OptionSelectorProps {
  option: ShopifySourceProductOption
  changeOption: (value: string) => void
  currentValue: string
}

const OptionSelector = ({
  option,
  changeOption,
  currentValue,
}: OptionSelectorProps) => {
  if (!option.name || !option.values) return null

  const { getOptionSwatches } = useShopData()
  const validSwatchOption = getOptionSwatches(option)
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeOption(e.target.value)
  }

  const handleSwatchClick = (value: SwatchOptionValue) => () => {
    changeOption(value.value)
  }

  return (
    <ProductOptionWrapper key={option.name}>
      {validSwatchOption ? (
        <SwatchWrapper>
          <SwatchLabelWrapper>
            <Label
              fontSize={6}
              weight={3}
              mr={2}
              color="body.5"
              textTransform="uppercase"
              htmlFor={option.name}
              key={option.name}
            >
              {option.name}:
            </Label>

            <Heading
              family="sans"
              mr={2}
              level={6}
              weight={3}
              textTransform="uppercase"
            >
              {currentValue}
            </Heading>
          </SwatchLabelWrapper>
          <ProductSwatches
            option={validSwatchOption}
            onSwatchClick={handleSwatchClick}
          />
        </SwatchWrapper>
      ) : (
        <SelectWrapper>
          <Label
            fontSize={6}
            weight={3}
            mr={2}
            mb={0}
            color="body.5"
            textTransform="uppercase"
            htmlFor={option.name}
            key={option.name}
          >
            {option.name}:
          </Label>

          <Select
            onChange={handleSelectChange}
            value={currentValue}
            id={option.name}
            name={option.name}
          >
            {definitely(option.values).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </Select>
        </SelectWrapper>
      )}
    </ProductOptionWrapper>
  )
}

interface Props {
  product: ShopifyProduct
  currentVariant: ShopifySourceProductVariant
  selectVariant: (id: string) => void
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

  const changeOption = (name: string) => (value: string) => {
    const newOptions = getNewOptions(selectedOptions, name, value)
    setSelectedOptions(newOptions)
    const newVariant = getVariantBySelectedOptions(variants, newOptions)
    if (newVariant && newVariant.id) {
      selectVariant(newVariant.id)
    } else {
      throw new Error('Could not select a new variant')
    }
  }

  const getCurrentOptionValue = (name: string): string => {
    const option = selectedOptions.find((o) => o && o.name === name)
    if (!option || !option.currentValue) throw new Error('No option value')
    return option.currentValue
  }

  return (
    <ProductOptionsWrapper>
      {definitely(options).map((option) =>
        option.name ? (
          <OptionSelector
            key={option.name || 'some-key'}
            option={option}
            changeOption={changeOption(option.name)}
            currentValue={getCurrentOptionValue(option.name)}
          />
        ) : null,
      )}
    </ProductOptionsWrapper>
  )
}
