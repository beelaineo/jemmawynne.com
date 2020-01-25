import * as React from 'react'
import styled, { css, DefaultTheme } from 'styled-components'
import { Product, Collection } from '../types'
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

type ProductOrCollection = Product | Collection

interface ItemGridProps {
  items: ProductOrCollection[]
}

export const ItemGrid = ({ items }: ItemGridProps) => {
  return (
    <Grid>
      {items.map((item) => {
        if (item.__typename === 'Product')
          return (
            //
            <ProductThumbnail key={item.id} product={item} />
          )
        if (item.__typename === 'Collection')
          return (
            //
            <CollectionThumbnail key={item.id} collection={item} />
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
