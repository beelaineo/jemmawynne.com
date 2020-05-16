import * as React from 'react'
import { Image } from '../../components/Image'
import { Heading } from '../../components/Text'
import { SwatchOption, SwatchOptionValue } from '../../types'
import { definitely } from '../../utils'
import {
  SwatchesWrapper,
  SwatchLabel,
  SwatchImageWrapper,
  SwatchWrapper,
} from './styled'

interface ProductSwatchesProps {
  option: SwatchOption
  onSwatchClick?: (value: SwatchOptionValue) => () => void
}

export const ProductSwatches = ({
  option,
  onSwatchClick,
}: ProductSwatchesProps) => {
  return (
    <SwatchesWrapper>
      {definitely(option.values).map((value) => (
        <SwatchWrapper key={value.label}>
          <SwatchImageWrapper
            onClick={onSwatchClick ? onSwatchClick(value) : undefined}
            clickable={Boolean(onSwatchClick)}
          >
            <Image image={value.image} ratio={1} sizes="20px" />
          </SwatchImageWrapper>
          {!Boolean(onSwatchClick) ? (
            <SwatchLabel>
              <Heading level={5} weight={2}>
                {value.label}
              </Heading>
            </SwatchLabel>
          ) : null}
        </SwatchWrapper>
      ))}
    </SwatchesWrapper>
  )
}
