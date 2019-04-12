import * as React from 'react'
import { Variant } from '../../types'
import { UseProductVariant } from '../../providers/shopify'
import { Placeholder } from '../Placeholder'

interface Props extends UseProductVariant {
	variants: Variant[]
}

/**
 * ProductVariantSelector
 *
 * - renders a menu, series of buttons, or other UI to select a variant
 * - highlights the current variant
 * - does not render anything if there is only one variant
 */

export const ProductVariantSelector = (props: Props) => {
	const { variants, currentVariant, selectVariant } = props
	return <Placeholder>Product Variant Selector</Placeholder>
}
