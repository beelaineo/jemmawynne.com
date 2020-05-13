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
    max-width: xWide;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-evenly;
    grid-column-gap: 6;
    grid-row-gap: 6;
    > a {
      text-decoration: none;
    }

    ${theme.mediaQueries.tablet} {
      grid-template-columns: 1fr 1fr;
    }
    ${theme.mediaQueries.mobile} {
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
        if (!item) return null
        if (item.__typename === 'ShopifyProduct')
          return (
            <ProductThumbnail key={item._id || 'some-key'} product={item} />
          )
        if (item.__typename === 'ShopifyCollection')
          return (
            <CollectionThumbnail
              key={item._id || 'some-key'}
              collection={item}
            />
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
