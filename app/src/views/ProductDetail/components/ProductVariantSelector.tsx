import * as React from 'react'
import { UseProductVariant, Variant } from 'use-shopify'
import { Select, Label, NormalizeDiv, QuantitySelector } from '../styled'

interface Props extends UseProductVariant {
	variants: Variant[]
	quantity: number
	increment: () => void
	decrement: () => void
}

/**
 * ProductVariantSelector
 *
 * - renders a menu, series of buttons, or other UI to select a variant
 * - highlights the current variant
 * - does not render anything if there is only one variant
 */

export const ProductVariantSelector = (props: Props) => {
	const { variants, currentVariant, selectVariant, quantity, increment, decrement } = props
	if (!variants.length) return null
	const handleSelect = (e) => {
		selectVariant(e.target.value)
	}
	return (
		<div>
			<NormalizeDiv>
				<Label>Size</Label>
				<Select onChange={handleSelect} value={currentVariant.id} id="size" name="product-size">
					{variants.map((variant) => {
						return (
							<option key={variant.id} value={variant.id}>
								{variant.title}
							</option>
						)
					})}
				</Select>
			</NormalizeDiv>
			<NormalizeDiv>
				<Label>Quantity</Label>
				<QuantitySelector>
					<button type="button" onClick={decrement}>
						<span>&#8722;</span>
					</button>
					<input type="text" name="quantity" value={quantity} />
					<button type="button" onClick={increment}>
						<span>&#43;</span>
					</button>
				</QuantitySelector>
			</NormalizeDiv>
		</div>
	)
}
