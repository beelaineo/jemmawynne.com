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

interface SwatchImageWrapperProps {
  clickable: boolean
}

export const SwatchImageWrapper = styled.div`
  ${({ clickable }: SwatchImageWrapperProps) => css`
    border-radius: 15px;
    overflow: hidden;
    cursor: ${clickable ? 'pointer' : 'inherit'};
  `}
`

interface WithActive {
  active: boolean
}

export const SwatchWrapper = styled.div<WithActive>`
  ${({ active }) => css`
    position: relative;
    width: 20px;
    margin: 0 2;
    border-radius: 15px;
    padding: 2px;
    border: 1px solid;
    border-color: ${active ? 'body.6' : 'transparent'};
  `}
`
