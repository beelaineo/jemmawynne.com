import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { Maybe, ShopifyProduct, ShopifyCollection } from '../types'
import { ProductThumbnail } from './Product'
import { CollectionThumbnail } from './Collection'

/**
 * Styled Components
 */

const Grid = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: wide;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-evenly;
    grid-column-gap: 6;
    grid-row-gap: 6;
    padding: 6;
    > a {
      text-decoration: none;
    }

    @media screen and (max-width: 850px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 560px) {
      padding: 6;
      grid-template-columns: 1fr;
    }
  `}
`

/**
 * ItemGrid
 */

type ProductOrCollection = Maybe<ShopifyProduct> | Maybe<ShopifyCollection>

interface ItemGridProps {
  items?: ProductOrCollection[] | null
}

export const ItemGrid = ({ items }: ItemGridProps) => {
  if (!items) return null
  return (
    <Grid>
      {items.map((item) => {
        // @ts-ignore
        if (item._type === 'shopifyProduct')
          // TODO: Restore after graphql is fixed
          // if (item.__typename === 'ShopifyProduct')
          return (
            // @ts-ignore
            <ProductThumbnail key={item._id} product={item} />
          )
        // @ts-ignore
        if (item._type === 'shopifyCollection')
          // if (item.__typename === 'ShopifyCollection')
          return (
            // @ts-ignore
            <CollectionThumbnail key={item._id} collection={item} />
          )

        console.warn(
          // @ts-ignore
          `There is no thumbnail for item of type "${item.__typename}"`,
        )
        return null
      })}
    </Grid>
  )
}
