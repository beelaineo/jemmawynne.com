import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useQuery } from 'urql'
import { PRODUCT_QUERY, ProductQueryResult } from './query'
import { useProductVariant, useCheckout, Product } from 'use-shopify'
import { unwindEdges } from '../../utils/graphql'
import { NotFound } from '../NotFound'
import {
	ProductVariantSelector,
	BuyButton,
	ProductImages,
	ProductDetailHeader,
	ProductDetailFooter,
	ProductRelated,
} from './components'
import { useCounter } from 'Utils/hooks'
import { Wrapper, NormalizeDiv } from './styled'
import { FlexContainer, FlexHalf } from 'Components/Layout'

interface Props {
	product: Product
}

const ProductDetailMain = ({ product }: Props) => {
	const { count: quantity, increment, decrement } = useCounter(1, { min: 1 })
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
						<ProductVariantSelector
							quantity={quantity}
							increment={increment}
							decrement={decrement}
							variants={variants}
							currentVariant={currentVariant}
							selectVariant={selectVariant}
						/>
						<BuyButton addItemToCheckout={addItemToCheckout} currentVariant={currentVariant} quantity={quantity} />
						<ProductDetailFooter product={product} />
					</FlexHalf>
				</FlexContainer>
				<NormalizeDiv>
					<ProductRelated product={product} />
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
