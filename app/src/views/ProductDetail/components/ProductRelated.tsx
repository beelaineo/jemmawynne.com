import * as React from 'react'
import { Product, Collection } from 'use-shopify'
import { unwindEdges } from '../../../utils/graphql'
import { ProductRelatedWrapper } from '../styled'
import { FlexContainer, FlexFour } from 'Components/Layout'
import { Header2, Header4 } from 'Components/Text'
import { Image } from 'Components/Image'

interface ProductRelatedProps {
	product: Product
}

export const ProductRelated = ({ product }: ProductRelatedProps) => {
	const [collections] = unwindEdges<Collection>(product.collections)
	if (!collections || !collections.length) return null
	const [products] = unwindEdges<Product>(collections[0].products)
	if (!products || !products.length) return null
	return (
		<ProductRelatedWrapper>
			<Header2 transform="uppercase" color="lightGrayBody">
				More in this collection
			</Header2>
			<FlexContainer>
				{products.map((product, index) => {
					let { title } = product
					const [images] = unwindEdges(product.images)
					if (index < 5) {
						return (
							<FlexFour>
								{images[0] && <Image image={images[0]} />}
								<Header4 align="center" weight="xlight">
									{title}
								</Header4>
							</FlexFour>
						)
					}
				})}
			</FlexContainer>
		</ProductRelatedWrapper>
	)
}
