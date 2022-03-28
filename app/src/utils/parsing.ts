import { definitely } from '../utils'
import {
  RichImage,
  Hero,
  Maybe,
  CarouselOrCollectionGridOrHeroOrImageTextSectionOrPageBlockOrRichTextBlock,
} from '../types'

export const isValidHero = (hero?: Hero | null): boolean => {
  if (!hero) return false
  return Boolean(hero?.image)
}

export const getHeroImage = (hero?: Hero | null): RichImage | undefined => {
  if (!hero) return
  return hero.image ?? undefined
}

export const getFirstHeroImage = (
  content?:
    | Maybe<CarouselOrCollectionGridOrHeroOrImageTextSectionOrPageBlockOrRichTextBlock>[]
    | null,
): RichImage | undefined => {
  if (!content) return undefined
  const firstHero = definitely(content).filter(
    (c) => c.__typename === 'Hero',
  )[0]
  if (firstHero && firstHero.__typename === 'Hero') {
    return getHeroImage(firstHero)
  }
  return undefined
}

export function getUrlParameter(name: string, path: string) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
  const results = regex.exec(path)
  return results === null
    ? ''
    : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

export function arrayify<T>(i: T | T[]): T[] {
  return Array.isArray(i) ? i : [i]
}

export const getIdFromBase64 = (data: string): string => {
  let id
  const indentifier = 'gid://'
  const buffer = Buffer.from(decodeURIComponent(data), 'base64')
  const frag = buffer.toString('utf-8').split(indentifier)
  if (frag.length >= 2) {
    const last = frag[1].split('/').pop()

    if (last) {
      id = last
    }
  }

  return id
}
