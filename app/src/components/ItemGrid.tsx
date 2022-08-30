import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'
import {
  CollectionBlock as CollectionBlockType,
  ShopifyProduct,
  ShopifyCollection,
} from '../types'
import { ProductThumbnail } from './Product'
import { CollectionBlock, CollectionThumbnail } from './Collection'

/**
 * Styled Components
 */

const Grid = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: xxWide;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-evenly;
    grid-column-gap: ${theme.space[6]}px;
    grid-row-gap: ${theme.space[6]}px;
    grid-auto-flow: dense;
    > a {
      text-decoration: none;
    }

    ${theme.mediaQueries.tablet} {
      padding: 6;
      grid-template-columns: 1fr 1fr;
    }
    ${theme.mediaQueries.mobile} {
      padding: 4;
      padding: 3;
      grid-gap: ${theme.space[3]}px;
    }
  `}
`

interface WithFormat {
  format?: string | null
}

export const ProductGridItemPadding = styled.div<WithFormat>`
  ${({ format, theme }) => css`
    padding-bottom: ${format === 'wide'
      ? '50%'
      : format === 'tall'
      ? '200%'
      : '100%'};

    ${theme.mediaQueries.mobile} {
      padding-bottom: ${format === 'wide'
        ? '100%'
        : format === 'tall'
        ? '200%'
        : '100%'};
    }
  `}
`

export const ProductGridItem = styled.div<WithFormat>`
  ${({ theme, format }) => css`
    grid-column: ${format === 'wide' ? 'span 2' : 'auto'};
    grid-row: ${format === 'tall' ? 'span 2' : 'auto'};
    position: relative;

    ${theme.mediaQueries.tablet} {
      grid-column: ${format === 'wide' ? 'span 2' : 'auto'};
      grid-row: ${format === 'tall' ? 'span 2' : 'auto'};
    }
    ${theme.mediaQueries.mobile} {
      display: none;
      grid-column: ${format === 'wide' ? 'span 1' : 'auto'};
      grid-row: ${format === 'tall' ? 'span 2' : 'auto'};
    }
  `}
`

/**
 * ItemGrid
 */

type Item = ShopifyProduct | ShopifyCollection | CollectionBlockType

interface ItemGridProps {
  items?: Item[] | null
}

export const ItemGrid = ({ items }: ItemGridProps) => {
  if (!items) return null
  return (
    <Grid>
      {items.map((item) => {
        if (!item) return null
        if (item.__typename == 'CollectionBlock') {
          return (
            <ProductGridItem format={item.format} key={item._key || 'some-key'}>
              <ProductGridItemPadding format={item.format} />
              <CollectionBlock format={item.format} collectionBlock={item} />
            </ProductGridItem>
          )
        }

        if (item.__typename === 'ShopifyProduct')
          return (
            <ProductThumbnail
              displayTags
              key={item._id || 'some-key'}
              product={item}
            />
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
