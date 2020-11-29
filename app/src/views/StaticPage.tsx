import * as React from 'react'
import { Page } from '../types'
import { HeroBlock, PageBodyBlock } from '../components/ContentBlock'
import { getHeroImage, definitely, isValidHero } from '../utils'
import { SEO } from '../components/SEO'

interface StaticPageProps {
  page: Page
}

export const StaticPage = ({ page }: StaticPageProps) => {
  const { seo, title, hero, body, slug } = page
  const defaultSeo = {
    title: title || '',
    image: getHeroImage(hero),
  }
  if (!slug?.current) throw new Error('No slug was fetched')
  const path = ['about', slug.current].join('/')

  return (
    <>
      <SEO seo={seo} defaultSeo={defaultSeo} path={path} />
      {isValidHero(hero) ? <HeroBlock hero={hero} /> : null}
      {definitely(body).map((b, index, blocks) => (
        <PageBodyBlock
          key={b._key || 'some-key'}
          block={b}
          previousBlock={blocks[index - 1]}
        />
      ))}
    </>
  )
}
