import * as React from 'react'
import { UseProductVariant, Variant } from 'use-shopify'
import { Placeholder } from '../../../components/Placeholder'
import { Select, Label, NormalizeDiv, QuantitySelector } from '../styled'

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
	// return <Placeholder label="Variant Selector" data={props} />
	return (
		<div className="product__variants">
			{/* if there are sizes */}
			{variants.length > 1 && (
				<span key={currentVariant.id}>
					<NormalizeDiv>
						<Label>Size</Label>
						<Select id="size" name="product-size">
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
						{/* How do I get the quantity? */}
						<QuantitySelector>
							<button type="button">
								<span>&#43;</span>
							</button>
							<input type="text" name="quantity" value="1" />
							<button type="button">
								<span>&#8722;</span>
							</button>
						</QuantitySelector>
					</NormalizeDiv>
				</span>
			)}
		</div>
	)
}
