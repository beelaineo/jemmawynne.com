import * as React from 'react'
import styled, { css } from 'styled-components'
import { ShopifyProduct, ShopifyCollection } from '../types'
import { ProductThumbnail } from './Product'
import { CollectionThumbnail } from './Collection'

/**
 * Styled Components
 */

const Grid = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: ${theme.layout.columns.wide};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-evenly;
    grid-column-gap: ${theme.layout.spacing.triple};
    grid-row-gap: ${theme.layout.spacing.triple};
    padding: ${theme.layout.spacing.triple};
    > a {
      text-decoration: none;
    }

    @media screen and (max-width: 850px) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 560px) {
      padding: ${theme.layout.spacing.double};
      grid-template-columns: 1fr;
    }
  `}
`

/**
 * ItemGrid
 */

type ProductOrCollection = ShopifyProduct | ShopifyCollection

interface ItemGridProps {
  items: ProductOrCollection[]
}

export const ItemGrid = ({ items }: ItemGridProps) => {
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
        if (item.__type === 'shopifyCollection')
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
