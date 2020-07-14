import * as React from 'react'
import { Page } from '../types'
import { TextHeader } from '../components/Layout'
import { HeroBlock, PageBodyBlock } from '../components/ContentBlock'
import { Heading } from '../components/Text'
import { definitely, isValidHero } from '../utils'

interface StaticPageProps {
  page: Page
}

export const StaticPage = ({ page }: StaticPageProps) => {
  console.log(page)
  const { hero, body, title } = page
  return (
    <>
      {isValidHero(hero) ? (
        <HeroBlock hero={hero} />
      ) : title ? (
        <TextHeader>
          <Heading level={1}>{title}</Heading>
        </TextHeader>
      ) : null}
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
