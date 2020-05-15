import * as React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { SHOP_DATA_QUERY, ShopDataResponse } from './shopDataQuery'
import { ShopifyProduct, Menu, CollectionInfo, SiteSettings } from '../../types'
import {
  createGetSwatchOptions,
  createGetProductInfoBlocks,
  DefinitelyProductInfo,
  SwatchOption,
} from './utils'
import { useError } from '../ErrorProvider'

const { useContext } = React

interface ShopDataContextValue {
  ready: boolean
  menu?: Menu
  siteSettings?: SiteSettings
  collectionInfo?: CollectionInfo
  getProductInfoBlocks: (product: ShopifyProduct) => DefinitelyProductInfo[]
  getProductSwatchOptions: (product: ShopifyProduct) => SwatchOption[]
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

  const value = {
    ready,
    menu,
    siteSettings,
    getProductInfoBlocks,
    getProductSwatchOptions,
    collectionInfo,
  }

  return (
    <ShopDataContext.Provider value={value}>
      {children}
    </ShopDataContext.Provider>
  )
}
