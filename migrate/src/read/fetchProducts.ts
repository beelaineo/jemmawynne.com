const mysql = require('mysql')
const PHPUnserialize = require('php-unserialize')
import { markdown } from 'markdown'
import { format } from '../db'

const fixListItem = (line: string): string => line.replace(/^-(\w)/, '- $1')
const parseText = (text: string): string => {
  const lines = text
    .split('\n')
    .map(fixListItem)
    .join('\n')
  return markdown.toHTML(lines)
}

export const fetchProducts = async (db) => {
  const fetchImage = async (id) => {
    const image = await db.query(
      'SELECT guid FROM wp_posts WHERE post_type = "attachment" AND ID = ?',
      [id],
    )
    return image[0] ? image[0].guid : undefined
  }

  const parseSlideshow = async (value) => {
    try {
      if (!value || !value.length) return []
      const imageIds = PHPUnserialize.unserialize(value)
      return Promise.all(Object.values(imageIds).map(fetchImage))
    } catch (e) {
      console.warn(`Failed parse value: ${value}`)
    }
  }

  const getKeyValue = async (key, value) => {
    switch (key) {
      case 'image':
        return fetchImage(value)
      case 'product_slideshow':
        return parseSlideshow(value)
      case 'details':
        return parseText(value)
      case 'note':
      case 'price':
      default:
        return value
    }
  }

  const fetchMetaData = async (product) => {
    const metadata = await db
      .query('SELECT meta_key, meta_value FROM wp_postmeta WHERE post_id = ?', [
        product.id,
      ])
      .then(async (results) => {
        const parsed = await Promise.all(
          results.map(async ({ meta_key, meta_value }) => {
            // filter out meta-meta keys
            if (/^_/.test(meta_key)) return null
            const value = await getKeyValue(meta_key, meta_value)
            return {
              [meta_key]: value,
            }
          }),
        )
        return (
          parsed
            .filter(Boolean)
            // @ts-ignore
            .reduce((acc, meta) => ({ ...acc, ...meta }), {})
        )
      })

    return metadata
  }

  const fetchTerms = async (product) => {
    const query = format`
SELECT taxonomy, name, slug
  FROM wp_term_relationships
    INNER JOIN wp_term_taxonomy
      ON wp_term_relationships.term_taxonomy_id = wp_term_taxonomy.term_taxonomy_id
    INNER JOIN wp_terms
      ON wp_term_taxonomy.term_id = wp_terms.term_id
    WHERE wp_term_relationships.object_id = ?`
    const termIds = await db.query(query, [product.id])

    const parsed = termIds.reduce(
      (acc, { taxonomy, name, slug }) => {
        if (taxonomy === 'style') {
          if (acc.style && slug !== 'pendants') {
            throw new Error(`${product.handle} has multiple styles`)
          }
          return {
            ...acc,
            style: { name, slug },
          }
        }
        return {
          ...acc,
          collections: [...acc.collections, name],
        }
      },
      {
        collections: [],
      },
    )
    return parsed
  }

  const productData = await db.query(
    'SELECT id, post_title, post_content, post_name, post_status, post_type FROM wp_posts WHERE post_type = "jewelry"',
  )

  const products = await Promise.all(
    productData.map(async (product) => {
      const [metadata, terms] = await Promise.all([
        fetchMetaData(product),
        fetchTerms(product),
      ])
      return {
        ...product,
        ...terms,
        metadata,
      }
    }),
  )

  const filteredProducts = products.filter(({ metadata }) => {
    // @ts-ignore
    return Boolean(metadata.migrate && metadata.migrate === '1')
  })

  return filteredProducts
}
