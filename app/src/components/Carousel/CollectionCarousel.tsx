import * as React from 'react'
import gql from 'graphql-tag'
import { ShopifyCollection } from '../../types'
import { Carousel } from './Carousel'
import { ProductThumbnail } from '../Product'
import { definitely, useViewportSize } from '../../utils'
import { useLazyRequest, saneShopifyCollectionFragment } from '../../graphql'

const { useEffect } = React

const query = gql`
  query CarouselCollectionQuery($collectionId: ID!) {
    allShopifyCollection(where: { _id: { eq: $collectionId } }) {
      ...SaneShopifyCollectionFragment
    }
  }
  ${saneShopifyCollectionFragment}
`

interface Response {
  allShopifyCollection: ShopifyCollection[]
}
interface Variables {
  collectionId: string | null | undefined
}

interface CollectionCarouselProps {
  collection: ShopifyCollection
}

export const CollectionCarousel = ({ collection }: CollectionCarouselProps) => {
  const collectionProducts = collection?.products
  const { width: viewportWidth } = useViewportSize()
  const variables = {
    collectionId: collection._id,
  }
  const [getCarousel, response] = useLazyRequest<Response, Variables>(query)
  const { data } = response

  useEffect(() => {
    if (Boolean(data)) return
    if (!variables.collectionId) return
    if (collectionProducts && collectionProducts.length) return
    getCarousel(variables)
  }, [data])

  const fetchedCollection = data?.allShopifyCollection[0]
  const products = definitely(fetchedCollection?.products)

  if (!products.length) return null

  const initialSlide = viewportWidth < 650 ? 1 : 0
  return (
    <Carousel initialSlide={initialSlide}>
      {definitely(products)
        .filter((product) => product?.archived !== true)
        .map((product) => {
          return (
            <ProductThumbnail
              key={product._key || 'some-key'}
              product={product}
              displaySwatches={false}
              displayTags={false}
              headingLevel={5}
            />
          )
        })}
    </Carousel>
  )
}
