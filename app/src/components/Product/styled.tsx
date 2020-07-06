import styled, { css } from '@xstyled/styled-components'

export const ProductThumb = styled.div`
  position: relative;
`

export const ImageWrapper = styled.div`
  position: relative;
`

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

export const TagBadgeWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const TagBadge = styled.div`
  border-radius: 20px;
  margin: 0 1;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px 3 0;
  background-color: highlight;
  box-shadow: 0 2px 3px 0px rgba(0, 0, 0, 0.2);
`
