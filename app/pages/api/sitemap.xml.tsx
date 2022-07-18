import { NextApiRequest, NextApiResponse } from 'next'
import { SitemapStream, streamToPromise, EnumChangefreq } from 'sitemap'
import { createGzip } from 'zlib'
// import { Sentry } from '../../src/services/sentry'
import { definitely } from '../../src/utils'

import * as aboutPages from '../[pageSlug]'
// import * as journalPages from '../journal/[entrySlug]'
import * as collectionPages from '../collections/[collectionSlug]'
import * as productPages from '../products/[productSlug]'

const moduleMap = new Map<string, any>([
  ['pageSlug', aboutPages],
  // ['entrySlug', journalPages],
  ['collectionSlug', collectionPages],
  ['productSlug', productPages],
])

const paths = [
  '/',
  '/[pageSlug]',
  '/press',
  '/stockists',
  '/collections/[collectionSlug]',
  '/products/[productSlug]',
]

interface PageInfo {
  url: string
  lastmod?: string
}

const ROOT = 'https://www.jemmawynne.com'

const getPageInfo = async (
  dir: string,
): Promise<PageInfo | PageInfo[] | void> => {
  if (/\[.*\]$/.test(dir)) {
    const pathMatch = dir.match(/(.*)\/\[(.*)\]/)
    if (!pathMatch) return
    const [_, uri, paramName] = pathMatch
    const myModule = moduleMap.get(paramName)
    if (!myModule || !myModule.getStaticPaths) return
    const { paths } = await myModule.getStaticPaths()
    const pages = paths.map((path) => ({
      url: [uri, path.params[paramName]].join('/'),
      lastmod: path.params.updatedAt,
    }))
    return pages
  } else {
    return {
      url: dir,
    }
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!res) return {}

  try {
    // Set response header
    res.setHeader('content-type', 'application/xml')
    res.setHeader('Content-Encoding', 'gzip')
    // const dirs = await walk()

    const dirPromises = await Promise.all(paths.map(getPageInfo))
    const dirs = definitely(dirPromises.flat())
    // A Transform for turning a Readable stream of either SitemapItemOptions or url strings into a Sitemap.
    // The readable stream it transforms must be in object mode.
    const smStream = new SitemapStream({
      hostname: 'https://www.jemmawynne.com',
    })

    const pipeline = smStream.pipe(createGzip())
    // Add any static entries here
    smStream.write({
      url: '/',
      lastmod: process.env.siteUpdatedAt,
      changefreq: EnumChangefreq.WEEKLY,
    })
    definitely(dirs).forEach((dir) => {
      if (dir) {
        smStream.write({
          url: ROOT.concat(dir.url),
          lastmod: dir.lastmod,
          changefreq: EnumChangefreq.WEEKLY,
        })
      }
    })
    smStream.end()

    // cache the response
    // streamToPromise.then(sm => sitemap = sm)
    streamToPromise(pipeline)
    // stream the response
    pipeline.pipe(res).on('error', (e) => {
      throw e
    })
  } catch (e) {
    console.error(e)
    // Sentry.captureException(e)
    res.status(500).end()
  }
}

export default handler
