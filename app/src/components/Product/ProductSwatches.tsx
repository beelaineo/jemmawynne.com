import * as React from 'react'
import { Image } from '../../components/Image'
import { SwatchOption, SwatchOptionValue } from '../../types'
import { definitely } from '../../utils'
import { SwatchesWrapper, SwatchImageWrapper, SwatchWrapper } from './styled'

interface ProductSwatchesProps {
  option: SwatchOption
  onSwatchHover?: (option: SwatchOption, value: SwatchOptionValue) => () => void
  onSwatchClick?: (option: SwatchOption, value: SwatchOptionValue) => () => void
  isSwatchActive?: (option: SwatchOption, value: SwatchOptionValue) => boolean
}

export const ProductSwatches = ({
  option,
  onSwatchClick,
  isSwatchActive,
  onSwatchHover,
}: ProductSwatchesProps) => {
  const values = definitely(option.values)
  if (values.length < 2) return null
  return (
    <SwatchesWrapper>
      {values.map((value) => (
        <SwatchWrapper
          active={isSwatchActive ? isSwatchActive(option, value) : false}
          onMouseEnter={
            onSwatchHover ? onSwatchHover(option, value) : undefined
          }
          key={value.label}
        >
          <SwatchImageWrapper
            onClick={onSwatchClick ? onSwatchClick(option, value) : undefined}
            clickable={Boolean(onSwatchClick)}
          >
            <Image image={value.image} ratio={1} sizes="20px" />
          </SwatchImageWrapper>
        </SwatchWrapper>
      ))}
    </SwatchesWrapper>
  )
}
