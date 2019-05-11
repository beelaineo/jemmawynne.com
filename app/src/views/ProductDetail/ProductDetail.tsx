import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useQuery } from 'urql'
import { PRODUCT_QUERY, ProductQueryResult } from './query'
import { useProductVariant, useCheckout, Product } from 'use-shopify'
import { unwindEdges } from '../../utils/graphql'
import { NotFound } from '../NotFound'
import { Placeholder } from '../../components/Placeholder'
import {
	ProductVariantSelector,
	BuyButton,
	ProductImages,
	ProductDetailHeader,
	ProductDetailFooter,
	ProductRelated,
} from './components'
import { Wrapper, FlexContainer, FlexHalf, NormalizeDiv } from './styled'

interface Props {
	product: Product
}

const ProductDetailMain = ({ product }: Props) => {
	/* get product variant utils */
	const { currentVariant, selectVariant } = useProductVariant(product)

	/* get checkout utils */
	const { addItemToCheckout } = useCheckout()
	const [variants] = unwindEdges(product.variants)

	return (
		<Wrapper>
			<NormalizeDiv>
				<FlexContainer>
					<FlexHalf>
						<ProductImages currentVariant={currentVariant} product={product} />
					</FlexHalf>
					<FlexHalf>
						<ProductDetailHeader currentVariant={currentVariant} product={product} />
						<ProductVariantSelector variants={variants} currentVariant={currentVariant} selectVariant={selectVariant} />
						<BuyButton addItemToCheckout={addItemToCheckout} currentVariant={currentVariant} />
						<ProductDetailFooter currentVariant={currentVariant} product={product} />
					</FlexHalf>
				</FlexContainer>
				<NormalizeDiv>
					<ProductRelated currentVariant={currentVariant} product={product} />
				</NormalizeDiv>
			</NormalizeDiv>
		</Wrapper>
	)
}

/**
 * View Wrapper
 */

interface MatchParams {
	handle: string
}

export const ProductDetail = ({ match }: RouteComponentProps<MatchParams>) => {
	/* fetch the product data */
	const { handle } = match.params
	const variables = { handle }
	const [response] = useQuery<ProductQueryResult>({ query: PRODUCT_QUERY, variables })
	const product = (response && response.data && response.data.productByHandle) || undefined
	if (response.fetching) return <p>Loading..</p>
	if (!product) return <NotFound />
	return <ProductDetailMain product={product} />
}
