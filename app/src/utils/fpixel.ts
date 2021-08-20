import { getIdFromBase64 } from './parsing'
import { ShopifyProduct } from '../types'
import { FB_PRDOUCT_CATALOG_ID } from '../config'

export const pageview = () => {
  // window.fbq('track', 'PageView')
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}) => {
  // window.fbq('track', name, options)
}

export const viewContent = (options = {}) => {
  event('ViewContent', options)
}

export const addToCart = (options = {}) => {
  event('AddToCart')
}

type FB_VIEW_CONTENT = {
  content_type: string
  product_catalog_id: string
  contents: string[]
  ['content_category']?: string
  ['content_name']?: string
  value?: number
  currency?: string
}

export const reportFBViewContent = (product: ShopifyProduct): void => {
  let content_ids: string[] = []
  let contentName
  let template: FB_VIEW_CONTENT
  const hash = getLocationSearchHash(window.location.search)
  const productId = getIdFromBase64(hash)
  if (productId) {
    content_ids.push(productId)

    template = {
      content_type: 'product',
      product_catalog_id: `${FB_PRDOUCT_CATALOG_ID}`,
      contents: content_ids,
    }

    let variants = product.variants
    let variant = variants?.find((v) => {
      return v?.shopifyVariantID === hash
    })

    if (variant && variant.sourceData) {
      contentName = `${product.title}`
      if (
        variant.sourceData.selectedOptions &&
        variant.sourceData.selectedOptions.length
      ) {
        variant.sourceData.selectedOptions.forEach((o) => {
          contentName = `${contentName} - ${o?.name}:${o?.value}`
        })
        template['content_name'] = contentName
      }

      if (variant.sourceData.priceV2) {
        if (variant.sourceData.priceV2.amount) {
          template['value'] = parseFloat(variant.sourceData.priceV2.amount)
        }
        if (variant.sourceData.priceV2.currencyCode) {
          template['currency'] = variant.sourceData.priceV2.currencyCode
        }
      }

      if (product.sourceData && product.sourceData.productType) {
        template['content_category'] = product.sourceData.productType
      }
      viewContent(template)
    }
  }
}

export const getLocationSearchHash = (search: string): string => {
  let result: string = ''
  const searchString = search.split('?v=')
  if (searchString.length === 2) {
    result = decodeURIComponent(searchString[1])
  }
  return result
}
