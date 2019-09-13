import * as React from 'react'
import { Collection } from 'use-shopify'
import { useQuery } from 'urql'
import { SHOP_DATA_QUERY, ShopDataResponse } from './shopDataQuery'
import { unwindEdges } from '../../utils/graphql'
import { Menu, ProductInfo } from '../../types/generated'

const { useContext } = React

interface ShopDataContextValue {
  ready: boolean
  menu?: Menu
  productInfoBlocks?: ProductInfo
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
  const [response] = useQuery<ShopDataResponse>({ query: SHOP_DATA_QUERY })

  const ready = response.data && !response.fetching
  const menu = ready ? response.data.Menu : undefined
  const productInfoBlocks = ready ? response.data.ProductInfo : undefined

  const value = {
    ready,
    menu,
    productInfoBlocks,
  }

  return (
    <ShopDataContext.Provider value={value}>
      {children}
    </ShopDataContext.Provider>
  )
}
