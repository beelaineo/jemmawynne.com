import * as React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { SHOP_DATA_QUERY, ShopDataResponse } from './shopDataQuery'
import {
  ShopifyProduct,
  SanityRichText,
  Menu,
  ProductInfoBlock,
  CollectionInfo,
  SiteSettings,
} from '../../types'
import { definitely } from '../../utils'

const { useContext } = React

interface DefinitelyProductInfo {
  __typename: 'ProductInfoBlock'
  _key: string
  _type: string
  title: string
  bodyRaw?: SanityRichText
}

interface ShopDataContextValue {
  ready: boolean
  menu?: Menu
  siteSettings?: SiteSettings
  collectionInfo?: CollectionInfo
  getProductInfoBlocks: (product: ShopifyProduct) => DefinitelyProductInfo[]
}

const ShopDataContext = React.createContext<ShopDataContextValue | undefined>(
  undefined,
)

export const ShopDataConsumer = ShopDataContext.Consumer

export const useShopData = () => {
  const ctx = useContext(ShopDataContext)
  if (!ctx)
    throw new Error('useShopDataContext must be used within a ShopDataProvider')
  return ctx
}

interface Props {
  children: React.ReactNode
}

export const ShopDataProvider = ({ children }: Props) => {
  const response = useQuery<ShopDataResponse>(SHOP_DATA_QUERY)

  if (response.error) throw new Error(response.error.message)
  const ready = Boolean(response.data && !response.loading)
  const menu = ready ? response?.data?.Menu : undefined
  const siteSettings = ready ? response?.data?.SiteSettings : undefined
  const productInfoBlocks = ready ? response?.data?.ProductInfo : undefined
  const collectionInfo = ready ? response?.data?.CollectionInfo : undefined

  const getProductInfoBlocks = (
    product: ShopifyProduct,
  ): DefinitelyProductInfo[] => {
    if (!productInfoBlocks) return []
    const {
      globalBlocks: sourceGlobalBlocks,
      ringBlocks,
      earringBlocks,
      braceletBlocks,
      necklaceBlocks,
      blocksByTag,
    } = productInfoBlocks
    const globalBlocks = sourceGlobalBlocks
      ? definitely(sourceGlobalBlocks)
      : []
    const sourceTags = product?.sourceData?.tags
    const productType = product?.sourceData?.productType
    const productTags = sourceTags
      ? sourceTags.map((t) => (t ? t.toLowerCase() : ''))
      : []

    const tagBlocks =
      blocksByTag && productTags
        ? blocksByTag.reduce<ProductInfoBlock[]>((acc, current) => {
            if (!current) return acc
            if (
              current.tag &&
              productTags.includes(current.tag.toLowerCase())
            ) {
              const { infoBlocks } = current
              if (infoBlocks) {
                const infos = definitely(infoBlocks)
                return [...acc, ...infos]
              }
            }
            return acc
          }, [])
        : []

    const typeBlocks = productType
      ? productType === 'Earring'
        ? earringBlocks || []
        : productType === 'Ring'
        ? ringBlocks || []
        : productType === 'Necklace'
        ? necklaceBlocks || []
        : productType === 'Bracelet'
        ? braceletBlocks || []
        : []
      : []

    const allBlocks = [...globalBlocks, ...tagBlocks, ...typeBlocks]
    const filteredBlocks = allBlocks.reduce<DefinitelyProductInfo[]>(
      (acc, block) => {
        if (!block) return acc
        const { _key, _type, title, bodyRaw, __typename } = block
        if (_key && _type && title && bodyRaw) {
          return [...acc, { __typename, _key, _type, title, bodyRaw }]
        }
        return acc
      },
      [],
    )
    return filteredBlocks
  }

  const value = {
    ready,
    menu,
    siteSettings,
    getProductInfoBlocks,
    collectionInfo,
  }

  return (
    <ShopDataContext.Provider value={value}>
      {children}
    </ShopDataContext.Provider>
  )
}
