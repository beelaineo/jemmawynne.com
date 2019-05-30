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
import { Wrapper, NormalizeDiv, SmallText, ArrowDown } from './styled'
import { FlexContainer, FlexSix, FlexFour } from 'Components/Layout'
import { Link } from 'react-router-dom'

interface Props {
	product: Product
}

const ProductDetailMain = ({ product }: Props) => {
	const { count: quantity, increment, decrement, setCount: setQuantity } = useCounter(1, { min: 1 })
	/* get product variant utils */
	const { currentVariant, selectVariant } = useProductVariant(product)

	/* get checkout utils */
	const { addItemToCheckout } = useCheckout()
	const [variants] = unwindEdges(product.variants)

	return (
		<Wrapper height="full">
			<FlexContainer height="full" wrap="nowrap" wrapmobile="wrap">
				<FlexSix>
					<ProductImages currentVariant={currentVariant} product={product} />
				</FlexSix>
				<FlexFour container="true" mobilealign="center">
					<ProductDetailHeader currentVariant={currentVariant} product={product} />
					<ProductDetailFooter product={product} />
					<ProductVariantSelector
						setQuantity={setQuantity}
						quantity={quantity}
						increment={increment}
						decrement={decrement}
						variants={variants}
						currentVariant={currentVariant}
						selectVariant={selectVariant}
					/>
					<BuyButton addItemToCheckout={addItemToCheckout} currentVariant={currentVariant} quantity={quantity} />
					<NormalizeDiv margin="small">
						<SmallText>
							<Link to="#">Shipping & returns</Link>
							<button>FAQ</button>
						</SmallText>
					</NormalizeDiv>
					<ArrowDown>&darr;</ArrowDown>
				</FlexFour>
			</FlexContainer>
			<ProductRelated product={product} />
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
