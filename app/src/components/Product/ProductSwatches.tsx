import * as React from 'react'
import { Image } from '../../components/Image'
import { SwatchOption, SwatchOptionValue } from '../../types'
import { definitely } from '../../utils'
import { SwatchesWrapper, SwatchImageWrapper, SwatchWrapper } from './styled'

interface ProductSwatchesProps {
  option: SwatchOption
  onSwatchClick?: (option: SwatchOption, value: SwatchOptionValue) => () => void
  onSwatchHover?: (option: SwatchOption, value: SwatchOptionValue) => () => void
  activeValue?: string | null
}

export const ProductSwatches = ({
  option,
  onSwatchClick,
  onSwatchHover,
  activeValue,
}: ProductSwatchesProps) => {
  return (
    <SwatchesWrapper>
      {definitely(option.values).map((value) => (
        <SwatchWrapper active={value.value === activeValue} key={value.label}>
          <SwatchImageWrapper
            onClick={onSwatchClick ? onSwatchClick(option, value) : undefined}
            onMouseEnter={
              onSwatchHover ? onSwatchHover(option, value) : undefined
            }
            clickable={Boolean(onSwatchClick)}
          >
            <Image image={value.image} ratio={1} sizes="20px" />
          </SwatchImageWrapper>
        </SwatchWrapper>
      ))}
    </SwatchesWrapper>
  )
}
