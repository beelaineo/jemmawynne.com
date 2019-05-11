import * as React from 'react'
import { Product, Variant } from 'use-shopify'
import { unwindEdges } from '../../../utils/graphql'
import { Gallery } from '../../../components/Gallery'
import { NormalizeDiv, LightHeadingH2Center, FlexContainer, ProductRelatedWrapper, FlexFour } from '../styled'

interface ProductRelated {
	product: Product
	currentVariant: Variant
}

export const ProductRelated = ({ product, currentVariant }: ProductRelated) => {
	let edges = product.collections.edges[0].node.products.edges
	return (
		<ProductRelatedWrapper>
			<LightHeadingH2Center>More in this collection</LightHeadingH2Center>
			<FlexContainer>
				{edges &&
					edges.map((product, index) => {
						let { title, id, images } = product.node
						let { originalSrc, altText } = images.edges[0].node
						if (index < 5) {
							return (
								<FlexFour className="product__related__item">
									<img src={originalSrc} alt={altText} />
									<h4>{title}</h4>
								</FlexFour>
							)
						}
					})}
			</FlexContainer>
		</ProductRelatedWrapper>
	)
}
