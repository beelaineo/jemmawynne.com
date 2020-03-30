import * as Throttle from 'promise-parallel-throttle'
import { unwindEdges } from '@good-idea/unwind-edges'
import { newStore } from './api'
import { getOriginalProduct } from './getOriginalProduct'
import { increment } from './limit'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const parsePrice = (priceString) => {
  if (priceString.indexOf('.') !== -1) return priceString
  return `${priceString}.00`
}

const parseVariant = (variant) => {
  const options = variant.selectedOptions.reduce((acc, current, index) => {
    return {
      ...acc,
      [`option${index + 1}`]: current.value,
    }
  }, {})

  return {
    price: variant.priceV2.amount,
    title: variant.title,
    image: variant.image.originalSrc,
    ...options,
  }
}

export const putProduct = async (data) => {
  /* Fetch original data */
  const original = await getOriginalProduct(data)
  const [allVariants] = unwindEdges(original.variants)
  const [allImages] = unwindEdges(original.images)

  const variants = allVariants.map(parseVariant, original.options)
  const slideshow = data.metadata.product_slideshow || []
  const images = allImages.map((image) => ({ src: image.originalSrc }))
  const options = {
    title: data.post_title,
    body_html: [
      data.metadata.details,
      data.metadata.note
        ? data.metadata.note
            .toLowerCase()
            .replace(/./, (char) => char.toUpperCase())
            .replace(/.*/, (string) => `<h5>${string}</h5>`)
        : null,
    ]
      .filter(Boolean)
      .join('<br>'),
    product_type: data.style ? data.style.name : 'None',
    published: original.availableForSale,
    images,
    variants,
    options: original.options,
  }

  const result = await newStore.product.create(options).catch((e) => {
    console.log('Error creating product')
    console.log(e.message)
    console.log(options)
  })
  const imageIds = result.images.map((image, index) => ({
    id: image.id,
    originalUrl: images[index].src,
  }))

  await Throttle.all(
    result.variants.map((v, i) => async () => {
      const originalVariantData = variants[i]
      const imageId = imageIds.find(
        (i) => i.originalUrl === originalVariantData.image,
      )
      const updated = await newStore.productVariant
        .update(v.id, {
          image_id: imageId.id,
        })
        .catch((e) => {
          console.log('Error updating variant')
          console.log(e.message)
          console.log(v, imageId)
        })
      await sleep(500)
      return updated
    }),
    {
      maxInProgress: 2,
      progressCallback: (status) => {
        const lastResolvedIndex = status.resolvedIndexes.slice(-1)[0]
        const lastResolved = status.taskResults[lastResolvedIndex]
        increment()
        if (lastResolved)
          console.log(
            // @ts-ignore
            `   Updated variant ${lastResolvedIndex}: ${lastResolved.title}`,
          )
      },
    },
  )
  await sleep(500)
  return { original, sourceData: data, result }
}
