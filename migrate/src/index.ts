import * as Throttle from 'promise-parallel-throttle'
import { db } from './db'
import { fetchProducts } from './read/fetchProducts'
import { putProduct } from './put/product'
import { createCollection } from './put/collection'
import { increment } from './put/limit'

const init = async () => {
  const originalProducts = await fetchProducts(db)

  const productQueue = originalProducts
    // .slice(173)
    .map((p) => () => putProduct(p))
  const products = await Throttle.all(productQueue, {
    maxInProgress: 1,
    progressCallback: (status) => {
      const lastResolvedIndex = status.resolvedIndexes.slice(-1)[0]
      const lastResolved = status.taskResults[lastResolvedIndex]
      increment(true)
      if (lastResolved)
        console.log(
          `Created product ${lastResolvedIndex}: ${lastResolved.result.title}`,
        )
    },
  })

  const collectionNames = originalProducts
    .reduce((acc, p) => {
      // @ts-ignore
      return [...acc, ...p.collections]
    }, [])
    // @ts-ignore
    .reduce((acc, current) => {
      if (acc.find((i) => i === current)) return acc
      return [...acc, current]
    }, [])

  const collections = await Promise.all(
    collectionNames.map(async (name) => {
      const productIds = products
        .filter((p) => p.sourceData.collections.includes(name))
        .map((p) => p.result.id)

      return createCollection(name, productIds)
    }),
  )

  console.log(
    `Created ${products.length} products and ${collections.length} collections`,
  )
  return
}

init()
