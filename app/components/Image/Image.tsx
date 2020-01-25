import * as React from 'react'
import styled, { css, DefaultTheme } from 'styled-components'
import {
  ShopifySourceImage,
  Image as SanityImage,
  RichImage,
} from '../../types'
import { HoverImageWrapper, Wrapper, Picture, RatioImageFill } from './styled'

export const ImageWrapper = styled.img`
  display: block;
`

type ImageType = ShopifySourceImage | SanityImage | RichImage

interface ImageDetails {
  src?: string | null
  altText?: string | null
  // fileType: string
  // TODO srcSet
  // TODO srcSetWebP
  // TODO dimensions: Dimensions
  // TODO fileType: fileType
}

/* Based on the image type, return a src, srcset, altText, etc */
const getImageDetails = (image: ImageType): null | ImageDetails => {
  if (!image) return {}
  switch (image.__typename) {
    case 'ShopifySourceImage':
      return { src: image.originalSrc, altText: image.altText }
    case 'Image':
      return { src: image.asset?.url }
    case 'RichImage':
      return {
        src: image.asset?.url,
        altText: image?.altText,
      }
    default:
      console.log(image)
      // @ts-ignore
      throw new Error(`Image type "${image.__typename}" is not supported`)
  }
}

/**
 * A placeholder box to enforce image size
 */

interface RatioPaddingProps {
  ratio: number
}

const RatioPadding = ({ ratio }: RatioPaddingProps) => {
  const [src, setSrc] = React.useState<string | void>(undefined)

  React.useEffect(() => {
    const canvas = window.document.createElement('canvas')
    canvas.setAttribute('width', '1600')
    canvas.setAttribute('height', `${1600 * ratio}`)
    const ctx = canvas.getContext('2d')

    if (!ctx) return
    ctx.beginPath()
    ctx.rect(0, 0, 1600, 1600 * ratio)
    ctx.fillStyle = '#d7dae2'
    ctx.fill()
    const srcData = canvas.toDataURL('image/png')
    setSrc(srcData)
  }, [ratio])

  return src ? (
    //
    <RatioImageFill src={src} />
  ) : null
}

interface ImageElementProps {
  setLoaded?: (l: boolean) => void
  loaded?: boolean
  image?: ImageType | null | void
  // TODO implement sizes
  sizes?: string
  onLoad?: () => void
}

const ImageElement = ({
  setLoaded,
  loaded,
  image,
  onLoad,
  sizes,
}: ImageElementProps) => {
  const imageRef = React.useRef<HTMLImageElement>(null)

  React.useEffect(() => {
    if (imageRef.current === null) return
    if (setLoaded && imageRef.current.complete) {
      setLoaded(true)
    }
  }, [imageRef.current])

  React.useLayoutEffect(() => {
    if (!onLoad) return
    const timeoutId = setTimeout(onLoad, 800)
    return () => clearTimeout(timeoutId)
  }, [loaded])

  const handleOnLoad = () => {
    if (!setLoaded) return
    setLoaded(true)
  }

  if (!image) return null
  const imageDetails = React.useMemo(() => getImageDetails(image), [image])

  if (!imageDetails) return null
  const { src, altText } = imageDetails
  if (!src) return null

  return (
    <ImageWrapper
      src={src}
      alt={altText || ''}
      ref={imageRef}
      onLoad={handleOnLoad}
    />
  )
}

interface ImageProps extends Omit<ImageElementProps, 'loaded' | 'setLoaded'> {
  ratio?: number
  // TODO hoverimage
  hoverImage?: ImageType | null | void
}

export const Image = ({
  image,
  onLoad,
  sizes,
  hoverImage,
  ratio,
}: ImageProps) => {
  const [loaded, setLoaded] = React.useState(false)
  if (!image) return null

  return (
    <Wrapper>
      {ratio ? <RatioPadding ratio={ratio} /> : null}
      <Picture loaded={loaded}>
        {/* <source type="image/webp" srcSet={srcSetWebp} sizes={sizes} /> */}
        {/* <source type={imageType} srcSet={srcSet} sizes={sizes} /> */}
        <ImageElement
          image={image}
          onLoad={onLoad}
          loaded={loaded}
          sizes={sizes}
          setLoaded={setLoaded}
        />
        {hoverImage ? (
          <HoverImageWrapper>
            <ImageElement image={hoverImage} sizes={sizes} />
          </HoverImageWrapper>
        ) : null}
      </Picture>
    </Wrapper>
  )
}
