import * as React from 'react'
import { Swipeable, EventData } from 'react-swipeable'
import {
  CarouselContainer,
  SlidesContainer,
  CarouselButton,
  CarouselMask,
} from './styled'
import { Slide, SlideInfo } from './Slide'

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
  const [hideButtons, setHideButtons] = useState(false)
  const [hasOverflow, setHasOverflow] = useState(false)
  const [attempts, setAttempts] = useState(0)
  const [slides, setSlides] = useState<SlideInfo[]>([])
  const innerRef = useRef<HTMLDivElement>(null)
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
    if (accWidth === 0) {
      if (attempts === 5) return
      const timeoutId = setTimeout(() => {
        setAttempts(attempts + 1)
      }, 100)
      return () => clearTimeout(timeoutId)
    }
    if (accWidth > outerRef.current.offsetWidth) {
      setHasOverflow(true)
    }
  }, [outerRef.current, attempts])

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

  return (
    <CarouselContainer ref={outerRef}>
      {children ? (
        <CarouselButton
          aria-label="previous slide"
          direction="previous"
          onClick={goPrevious}
          visible={!isAtFirst}
        />
      ) : null}
      {/* 
           // @ts-ignore */}
      <CarouselMask>
        <Swipeable onSwiped={handleSwipe}>
          <SlidesContainer
            ref={innerRef}
            left={currentSlide ? -slides[currentSlide].ref.offsetLeft : 0}
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
        </Swipeable>
      </CarouselMask>
      {children ? (
        <CarouselButton
          visible={!isAtLast}
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
