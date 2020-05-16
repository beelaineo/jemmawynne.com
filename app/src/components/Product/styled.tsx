import styled, { css } from '@xstyled/styled-components'

export const ProductThumb = styled.div``

export const ProductInfo = styled.div`
  margin-top: 3;
  text-align: center;
`

export const SwatchesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const SwatchLabel = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 50%;
  text-align: center;
  white-space: nowrap;
  transform: translate(-50%);
  transition: 0.2s;
  opacity: 0;
`

interface SwatchImageWrapperProps {
  clickable: boolean
}

export const SwatchImageWrapper = styled.div`
  ${({ clickable }: SwatchImageWrapperProps) => css`
    border-radius: 15px;
    overflow: hidden;
    cursor: ${clickable ? 'pointer' : 'auto'};
  `}
`

export const SwatchWrapper = styled.div`
  position: relative;
  width: 12px;
  margin: 0 2;

  &:hover {
    ${SwatchLabel} {
      opacity: 1;
    }
  }
`
