import * as React from 'react'
import { Maybe } from '../../types'
import { ImageType, getImageDetails, getImageKey } from './utils'
import { Heading } from '../Text'
import {
  MainImage,
  HoverImage,
  ImageWrapper,
  Picture,
  RatioImageFill,
  PreloadWrapper,
} from './styled'
import { useInViewport } from '../../hooks'

/**
 * A placeholder box to enforce image size
 */

interface RatioPaddingProps {
  ratio: number
  canvasFill?: boolean
}

const RatioPadding = ({ ratio, canvasFill }: RatioPaddingProps) => {
  const [src, setSrc] = React.useState<string | void>(undefined)

  React.useEffect(() => {
    if (!canvasFill) return
    const canvas = window.document.createElement('canvas')
    canvas.setAttribute('width', '1600')
    canvas.setAttribute('height', `${1600 * ratio}`)
    const ctx = canvas.getContext('2d')

    if (!ctx) return
    ctx.beginPath()
    ctx.rect(0, 0, 1600, 1600 * ratio)
    ctx.fillStyle = 'rgba(220, 220, 220, 0)'
    ctx.fill()
    const srcData = canvas.toDataURL('image/png')
    setSrc(srcData)
  }, [ratio, canvasFill])

  const paddingBottom = src ? 0 : `${ratio * 100}%`
  return (
    <RatioImageFill style={{ paddingBottom }} aria-hidden>
      {src ? <img src={src} /> : null}
    </RatioImageFill>
  )
}

interface ImageProps {
  image?: Maybe<ImageType> | void
  altText?: Maybe<string>
  hoverImage?: Maybe<ImageType>
  fillContainer?: boolean
  ratio?: number
  sizes?: string
  onLoad?: () => void
  preloadImages?: ImageType[]
  canvasFill?: boolean
  objectFit?: string
  displayCaption?: boolean
}

export const Image = ({
  image,
  fillContainer,
  sizes: customSizes,
  hoverImage,
  altText: customAltText,
  onLoad,
  ratio: customRatio,
  canvasFill,
  preloadImages,
  objectFit,
  displayCaption,
}: ImageProps) => {
  const sizes = customSizes || '120vw'
  const [loaded, setLoaded] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const imageRef = React.useRef<HTMLImageElement>(null)
  const { isInViewOnce } = useInViewport(containerRef)

  const imageDetails = React.useMemo(() => getImageDetails(image), [image])
  const {
    src,
    ratio: cmsRatio,
    caption,
    altText: cmsAltText,
    srcSet,
    srcSetWebp,
    width,
    height,
  } = imageDetails || {}

  const ratio = customRatio || cmsRatio

  const altText = customAltText || cmsAltText
  const hoverDetails = React.useMemo(
    () => (hoverImage ? getImageDetails(hoverImage) : null),
    [hoverImage],
  )

  React.useEffect(() => {
    if (imageRef.current === null) return
    if (imageRef.current.complete) {
      setLoaded(true)
    }
  }, [imageRef.current])

  React.useEffect(() => {
    if (!onLoad) return
    const timeoutId = setTimeout(onLoad, 800)
    return () => clearTimeout(timeoutId)
  }, [loaded])

  const handleOnLoad = () => {
    setLoaded(true)
  }

  return (
    <div>
      <ImageWrapper fillContainer={fillContainer} ref={containerRef}>
        {ratio ? <RatioPadding canvasFill={canvasFill} ratio={ratio} /> : null}
        {src && isInViewOnce ? (
          <Picture objectFit={objectFit} loaded={loaded}>
            {srcSetWebp ? (
              <source type="image/webp" srcSet={srcSetWebp} sizes={sizes} />
            ) : null}
            {srcSet ? (
              <source type="image/jpg" srcSet={srcSet} sizes={sizes} />
            ) : null}
            <MainImage
              src={src}
              alt={altText || ''}
              ref={imageRef}
              onLoad={handleOnLoad}
              width={width}
              height={height}
            />
            {hoverDetails && hoverDetails.src ? (
              <HoverImage
                src={hoverDetails.src}
                sizes={sizes}
                srcSet={srcSetWebp || srcSet || undefined}
              />
            ) : null}
          </Picture>
        ) : null}
        {isInViewOnce && preloadImages && preloadImages.length ? (
          <PreloadWrapper>
            {preloadImages.map((p) => (
              <Image key={getImageKey(p)} image={p} />
            ))}
          </PreloadWrapper>
        ) : null}
      </ImageWrapper>
      {caption && displayCaption ? (
        <Heading level={6} mt={3} family="sans" textTransform="uppercase">
          {caption}
        </Heading>
      ) : null}
    </div>
  )
}

Image.defaultProps = {
  displayCaption: true,
}
