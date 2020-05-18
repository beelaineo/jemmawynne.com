import * as React from 'react'
import { useSwipeable, EventData } from 'react-swipeable'
import {
  CarouselContainer,
  SlidesContainer,
  CarouselButton,
  CarouselMask,
} from './styled'
import { Slide, SlideInfo } from './Slide'
import { useViewportSize } from '../../utils'

const { useState, useEffect, useMemo, useRef } = React

interface CarouselContextProps {
  currentSlide: number | null
  setCurrentSlide: (num: number) => void
}

const CarouselContext = React.createContext<CarouselContextProps | void>(
  undefined,
)

export const useCarousel = () => {
  const ctx = React.useContext(CarouselContext)
  if (!ctx)
    throw new Error('useCarouselContext must be used within a CarouselProvider')
  return ctx
}

interface CarouselProps {
  children: React.ReactNode
  columnCount?: number
}

export const CarouselInner = ({
  children,
  columnCount: customColumnCount,
}: CarouselProps) => {
  const columnCount = customColumnCount || 4
  const { currentSlide, setCurrentSlide } = useCarousel()
  const { width: viewportWidth } = useViewportSize()
  const [hasOverflow, setHasOverflow] = useState(false)
  const [slides, setSlides] = useState<SlideInfo[]>([])
  const outerRef = useRef<HTMLDivElement>(null)

  const goNext = () => {
    if (currentSlide === null || currentSlide === slides.length - 1) return
    setCurrentSlide(currentSlide + 1)
  }

  const goPrevious = () => {
    if (currentSlide === null || currentSlide === 0) return
    setCurrentSlide(currentSlide - 1)
  }

  const isAtFirst = currentSlide === 0
  const isAtLast = Boolean(
    currentSlide && currentSlide + columnCount >= slides.length,
  )

  useEffect(() => {
    setCurrentSlide(0)
  }, [Boolean(slides.length)])

  /* Only show the next button if there is carousel overflow */
  useEffect(() => {
    if (!outerRef.current) return
    const accWidth = slides.reduce(
      (acc, slide) => acc + slide.ref.offsetWidth,
      0,
    )
    /* Give it 5 attempts to load images & get a width greater than 0 */
    if (accWidth > outerRef.current.offsetWidth) {
      setHasOverflow(true)
    }
  }, [outerRef.current, viewportWidth])

  // useEffect(() => {
  //   setCurrentSlide(currentSlide || 0)
  // }, [viewportWidth])
  //
  const addSlide = useMemo(
    () => (newSlide: SlideInfo) => {
      setSlides((prevSlides) => [...prevSlides, newSlide])
    },
    [],
  )

  const handleSwipe = (e: EventData) => {
    const { dir } = e
    if (dir === 'Right') {
      goPrevious()
    } else if (dir === 'Left') {
      goNext()
    }
  }

  const handlers = useSwipeable({ onSwiped: handleSwipe })

  return (
    <CarouselContainer ref={outerRef}>
      {children ? (
        <CarouselButton
          visible={hasOverflow && !isAtFirst}
          aria-label="previous slide"
          direction="previous"
          onClick={goPrevious}
        />
      ) : null}
      <CarouselMask>
        <SlidesContainer
          left={currentSlide ? -slides[currentSlide].ref.offsetLeft : 0}
          {...handlers}
        >
          {React.Children.map(children, (child, index) => (
            <Slide
              addSlide={addSlide}
              columnCount={columnCount}
              index={index}
              key={index}
            >
              {child}
            </Slide>
          ))}
        </SlidesContainer>
      </CarouselMask>
      {children ? (
        <CarouselButton
          visible={hasOverflow && !isAtLast}
          direction="next"
          aria-label="next slide"
          onClick={goNext}
        />
      ) : null}
    </CarouselContainer>
  )
}

interface CarouselProviderProps {
  children: React.ReactNode
  onSlideChange?: (slideNumber: number | null) => void
  currentSlide?: number
}

export const CarouselProvider = ({
  children,
  onSlideChange,
}: CarouselProviderProps) => {
  const [currentSlide, setCurrentSlideState] = useState<number | null>(null)

  const setCurrentSlide = (num: number) => {
    setCurrentSlideState(num)
  }

  useEffect(() => {
    if (onSlideChange) onSlideChange(currentSlide)
  }, [currentSlide])

  const value = {
    setCurrentSlide,
    currentSlide,
  }

  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  )
}

export const Carousel = ({ children, columnCount }: CarouselProps) => {
  return (
    <CarouselProvider>
      <CarouselInner columnCount={columnCount}>{children}</CarouselInner>
    </CarouselProvider>
  )
}

Carousel.Slide = Slide
