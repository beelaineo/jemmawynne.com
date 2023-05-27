import * as React from 'react'
import styled, { css, x } from '@xstyled/styled-components'
import { Heading } from './Text'
import { Image } from './Image'
import { useShopData } from '../providers/ShopDataProvider'
import { definitely } from '../utils'

const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: 0 9;

    .followUsText {
      font-size: 1;
    }

    ${theme.mediaQueries.mobile} {
      padding: 3;
      .followUsText {
        font-size: 4;
        margin-bottom: 40px;
        line-height: 1.8em;
      }
    }
  `}
`

const Span = styled.spanBox`
  ${({ theme }) => css`
    ${theme.mediaQueries.mobile} {
      display: block;
      font-size: 1;
    }
  `}
`

const ImagesContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 4;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 0;
    & > *:nth-child(6) {
      display: none;
    }

    ${theme.mediaQueries.mobile} {
      grid-template-columns: repeat(2, 1fr);

      & > *:nth-child(n + 5) {
        display: none;
      }
    }
  `}
`

export const InstagramBlock = () => {
  const { siteSettings } = useShopData()
  const { handle, images } = siteSettings?.instagramSettings || {}
  const href = `https://www.instagram.com/${handle}`
  if (!images || !images.length) return null
  return (
    <Wrapper>
      <Heading
        className="followUsText"
        family="serif"
        weight={2}
        mb={4}
        level={4}
      >
        <a href={href} target="_blank" rel="noopener noreferrer">
          Follow us at{' '}
          <x.span
            // @ts-ignore
            color="body.6"
          >
            @{handle}
          </x.span>
        </a>
      </Heading>
      <ImagesContainer>
        {definitely(images).map((image) => (
          <a
            key={image._key || 'some-key'}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              ratio={1}
              image={image}
              sizes="(min-width: 650px) 50vw, 20vw"
            />
          </a>
        ))}
      </ImagesContainer>
    </Wrapper>
  )
}
