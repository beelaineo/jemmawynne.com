import * as React from 'react'
import { Link } from 'react-router-dom'
import { unwindEdges } from '@good-idea/unwind-edges'
import { Header3, Header6 } from 'Components/Text'
import { BackgroundImage, ProductInfo, ProductThumb } from './styled'

interface ProductThumbnail {
	product: Product
}

export const ProductThumbnail = ({ product }: ProductThumbnail) => {
	const [images] = unwindEdges(product.images)
	const imageSrc = images.length ? images[0].originalSrc : undefined
	let { minVariantPrice, maxVariantPrice } = product.priceRange
	return (
		<ProductThumb>
			<Link to={`/products/${product.handle}`}>
				<BackgroundImage key={product.id} imageSrc={imageSrc} />
				<ProductInfo>
					<Header3>{product.title}</Header3>
					{minVariantPrice !== undefined &&
					minVariantPrice.amount !== maxVariantPrice.amount ? (
						<Header6>
							${minVariantPrice.amount} - ${maxVariantPrice.amount}
						</Header6>
					) : (
						<Header6>${maxVariantPrice.amount}</Header6>
					)}
				</ProductInfo>
			</Link>
		</ProductThumb>
	)
}
