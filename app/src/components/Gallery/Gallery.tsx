import * as React from 'react'
import { Image as ImageType } from '../../types'
import { Image } from '../Image'
import {
  GalleryWrapper,
  MainImageWrapper,
  ZoomImageWrapper,
  ZoomInner,
  Thumbnails,
} from './styled'

const { useState, useEffect, useRef } = React

interface GalleryProps {
  images: ImageType[]
  currentImageId?: string
}

const ZOOM_AMOUNT = 2

export const Gallery = ({ images, currentImageId }: GalleryProps) => {
  /* Utils */
  const getImageById = (id: string): ImageType | undefined =>
    images.find((i) => i.id === id)

  /* State */
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [imageCoordinates, setImageCoordinates] = useState({
    top: '0%',
    left: '0%',
  })

  const [currentImage, setCurrentImage] = useState(
    getImageById(currentImageId) || images[0],
  )

  /* Update the current image if a new prop is passed in */
  useEffect(() => {
    setCurrentImage(getImageById(currentImageId))
  }, [currentImageId])

  /* Handlers */
  const changeImage = (imageId: string) => () =>
    setCurrentImage(getImageById(imageId))

  const watchZoom = (e) => {
    if (!wrapperRef.current) return
    const {
      top,
      left,
      width,
      height,
    } = wrapperRef.current.getBoundingClientRect()
    const { clientX, clientY } = e
    const xAmount = (clientX - left) / width
    const yAmount = (clientY - top) / height
    const imageLeft = `-${100 * (ZOOM_AMOUNT - 1) * xAmount}%`
    const imageTop = `-${100 * (ZOOM_AMOUNT - 1) * yAmount}%`

    setImageCoordinates({
      left: imageLeft,
      top: imageTop,
    })
  }

  return (
    <GalleryWrapper>
      <MainImageWrapper ref={wrapperRef} data-testid="current-image">
        <Image ratio={1} image={currentImage} />
        <ZoomImageWrapper onMouseMove={watchZoom}>
          <ZoomInner zoomAmount={ZOOM_AMOUNT} style={imageCoordinates}>
            <Image ratio={1} image={currentImage} />
          </ZoomInner>
        </ZoomImageWrapper>
      </MainImageWrapper>
      {images.length > 1 && (
        <Thumbnails data-testid="thumbnails">
          {images.map((image, i) => (
            <button key={image.id} onClick={changeImage(image.id)}>
              <Image ratio={1} image={image} />
            </button>
          ))}
        </Thumbnails>
      )}
    </GalleryWrapper>
  )
}
