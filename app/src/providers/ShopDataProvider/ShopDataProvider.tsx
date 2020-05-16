import * as React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { SHOP_DATA_QUERY, ShopDataResponse } from './shopDataQuery'
import {
  ShopifyProduct,
  Menu,
  CollectionInfo,
  ShopifySourceProductOption,
  SiteSettings,
} from '../../types'
import {
  createGetSwatchOptions,
  createGetProductInfoBlocks,
  createGetOptionSwatches,
  DefinitelyProductInfo,
  SwatchOption,
} from './utils'

const { useContext } = React

interface ShopDataContextValue {
  ready: boolean
  menu?: Menu
  siteSettings?: SiteSettings
  collectionInfo?: CollectionInfo
  getProductInfoBlocks: (product: ShopifyProduct) => DefinitelyProductInfo[]
  getProductSwatchOptions: (product: ShopifyProduct) => SwatchOption[]
  getOptionSwatches: (option: ShopifySourceProductOption) => SwatchOption | null
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
  const ready = Boolean(response.data && !response.loading)
  const menu = ready ? response?.data?.Menu : undefined
  const siteSettings = ready ? response?.data?.SiteSettings : undefined
  const productInfo = ready ? response?.data?.ProductInfo : undefined
  const collectionInfo = ready ? response?.data?.CollectionInfo : undefined

  const getProductInfoBlocks = createGetProductInfoBlocks(productInfo)
  const getProductSwatchOptions = createGetSwatchOptions(productInfo)
  const getOptionSwatches = createGetOptionSwatches(productInfo)

  const value = {
    ready,
    menu,
    siteSettings,
    getProductInfoBlocks,
    getProductSwatchOptions,
    collectionInfo,
    getOptionSwatches,
  }

  return (
    <ShopDataContext.Provider value={value}>
      {children}
    </ShopDataContext.Provider>
  )
}
