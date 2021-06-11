import * as React from 'react'
import { unwindEdges } from '@good-idea/unwind-edges'
import { ShopifyProduct, CollectionBlock, ShopifyCollection } from '../../types'
import { DocumentLink } from '../../components/DocumentLink'
import { useShopData } from '../../providers/ShopDataProvider'
import { ProductListingHeader } from './ProductListingHeader'
import { useInViewport, useSanityQuery } from '../../hooks'
import { ItemGrid } from '../../components/ItemGrid'
import { Heading } from '../../components/Text'
import { Hr, CollectionsMain, CollectionsMenu } from './styled'
import { definitely } from '../../utils'
import { moreProductsQuery } from './sanityCollectionQuery'
import { SEO } from '../../components/SEO'
import { getHeroImage } from '../../utils'

const { useRef, useState, useEffect } = React

interface ProductListingProps {
  collection: ShopifyCollection
}

type Item = ShopifyProduct | CollectionBlock | ShopifyCollection

interface PaginationArgs {
  handle: string
  productStart: number
  productEnd: number
}

const PAGE_SIZE = 12

export const ProductListing = ({ collection }: ProductListingProps) => {
  const { collectionInfo } = useShopData()
  const bottomRef = useRef<HTMLDivElement>(null)
  const [fetchMoreResults, setFetchMoreResults] = useState<ShopifyProduct[]>([])
  const { isInView } = useInViewport(bottomRef, '500px 0px')
  const { state: fetchMoreState, query: fetchMoreQuery } =
    useSanityQuery<ShopifyCollection, PaginationArgs>()

  const [fetchComplete, setFetchComplete] = useState(
    definitely(collection.products).length < PAGE_SIZE,
  )

  if (!collection || !collectionInfo) return null

  const relatedCollections = collection?.relatedCollections?.length
    ? collection.relatedCollections
    : collectionInfo.relatedCollections ?? []
  const {
    handle,
    hero,
    seo,
    collectionBlocks,
    relatedCollectionsTitle,
    disableMenu,
  } = collection

  const allProducts = [
    ...definitely(collection.products).slice(0, PAGE_SIZE),
    ...fetchMoreResults,
  ].filter((product, index, fullArray) => {
    const foundIndex = fullArray.findIndex((p) => p._id === product._id)
    if (foundIndex !== index) return false
    return true
  })
  // .reverse().filter((product, index, fullArray) => {
  //   const productIndex =
  // }).reverse()

  const fetchMore = async () => {
    if (!collection.handle) {
      throw new Error('The collection is missing a handle')
    }
    const productStart = allProducts.length
    const productEnd = allProducts.length + PAGE_SIZE
    const results = await fetchMoreQuery(moreProductsQuery, {
      handle: collection.handle,
      productStart,
      productEnd,
    })
    const newProducts = definitely(results[0].products)
    if (newProducts.length < PAGE_SIZE) setFetchComplete(true)
    setFetchMoreResults([...fetchMoreResults, ...newProducts])
  }

  useEffect(() => {
    if (fetchComplete || !isInView || fetchMoreState.loading) return
    // set a short timeout so it doesn't fetch twice
    const timeout = setTimeout(() => {
      fetchMore()
    }, 300)
    return () => clearTimeout(timeout)
  }, [isInView, fetchMoreState.loading, fetchComplete])

  // If there are collection blocks, insert them in the array
  // of products by position
  const items = collectionBlocks?.length
    ? definitely(collectionBlocks).reduce<Item[]>((acc, current) => {
        if (!current?.position) return acc
        const index = current.position - 1
        return [...acc.slice(0, index), current, ...acc.slice(index)]
      }, definitely(allProducts))
    : definitely(allProducts)

  if (!handle) throw new Error('No handle was fetched')
  const firstProduct = definitely(collection.products)[0]
  const firstProductImage = firstProduct
    ? unwindEdges(firstProduct?.sourceData?.images)[0][0]
    : undefined

  const path = ['collections', handle].join('/')
  const defaultSeo = {
    title: collection.title || '',
    description: collection.sourceData?.description,
    image:
      getHeroImage(hero) || collection?.sourceData?.image || firstProductImage,
  }

  return (
    <>
      <SEO seo={seo} defaultSeo={defaultSeo} path={path} />
      <ProductListingHeader
        menuDisabled={disableMenu}
        collection={collection}
      />
      <CollectionsMain menuDisabled={disableMenu}>
        {disableMenu !== true ? (
          <div>
            <CollectionsMenu>
              <Heading mb={4} level={7} weight={4} family="sans" color="body.8">
                {relatedCollectionsTitle || 'Collections'}
              </Heading>
              <Hr />
              {definitely(relatedCollections).map((rc) =>
                rc.archived !== true ? (
                  <Heading
                    key={rc.handle || 'some-key'}
                    mt={5}
                    level={7}
                    weight={4}
                    family="sans"
                    color="body.6"
                  >
                    <DocumentLink document={rc}>{rc.title}</DocumentLink>
                  </Heading>
                ) : null,
              )}
            </CollectionsMenu>
          </div>
        ) : null}

        <div>
          <ItemGrid items={items} />
          {!fetchComplete ? (
            <Heading
              level={4}
              my={8}
              textAlign="center"
              fontStyle="italic"
              color="body.7"
            >
              Loading more products...
            </Heading>
          ) : null}
          <div key={items.length} ref={bottomRef} />
        </div>
      </CollectionsMain>
    </>
  )
}
