import * as React from 'react'
import { ShopDataResponse } from '../../graphql'
import {
  ShopifyProduct,
  Menu,
  CollectionInfo,
  ShopifySourceProductOption,
  SiteSettings,
  SwatchOption,
} from '../../types'
import {
  createGetSwatchOptions,
  createGetProductInfoBlocks,
  createGetOptionSwatches,
  DefinitelyProductInfo,
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
  shopData: ShopDataResponse
}

export const ShopDataProvider = ({ children, shopData }: Props) => {
  const ready = true

  const menu = shopData?.Menu
  const siteSettings = shopData?.SiteSettings
  const productInfo = shopData?.ProductInfo
  const collectionInfo = shopData?.CollectionInfo

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
