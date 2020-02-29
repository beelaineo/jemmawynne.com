import styled, { css, DefaultTheme } from 'styled-components'

interface WrapperProps {
  theme: DefaultTheme
  active?: boolean
  marginVertical?: string
  mobileWidth?: string
  center?: boolean
  height?: string
  vertical?: boolean
  padding?: string
  width?: string
  maxwidth?: string
  text?: string
  align?: string
  margin?: string
  wrap?: string
}

export const FlexContainer = styled.div`
  ${({
    theme,
    padding,
    marginVertical,
    center,
    height,
    vertical,
    maxwidth,
    text,
    align,
    wrap,
    margin,
  }: WrapperProps) => css`
    display: flex;
    flex-wrap: ${wrap};
    margin: ${theme.layout.spacing[margin]};
		margin-top: ${theme.layout.spacing[marginVertical] || 'initial'};
		justify-content: ${center ? 'center' : 'space-between'};
		height: ${height || 'initial'}; 
		flex-direction:  ${vertical ? 'column' : 'row'};
		display:  ${vertical ? 'flex' : 'flex'};
		max-width:  ${maxwidth ? '600px' : 'initial'};
		text-align: ${text ? text : 'initial'};
		margin-left: ${align ? 'auto' : 'initial'}
		margin-right: ${align ? 'auto' : 'initial'};
		padding: ${theme.layout.spacing[padding] || 'initial'}; 
	`}
  .visible {
    opacity: 1;
    transition: 250ms ease-in;
  }
  .close-icon {
    &:hover {
      cursor: pointer;
    }
  }
  .invisible {
    opacity: 0;
    transition: 250ms ease-in;
  }
`

export const FlexHalf = styled.div`
  flex-basis: 48.5%;
  width: 48.5%;
  ${({ vertical, padding }: WrapperProps) => `
		justify-content: ${vertical ? 'center' : 'initial'};
		flex-direction:  ${vertical ? 'column' : 'row'};
		display:  ${vertical ? 'flex' : 'initial'};
		padding: ${padding ? padding : 'initial'}
	`}
`

export const FlexThree = styled.div`
  flex: 1 1 33%;
  max-width: 33.33%;
  margin: ${(props) => props.margin};
  ${(props: WrapperProps) => `
   		${props.theme.mediaQueries.tablet} {
			max-width: ${props.mobileWidth === '2' ? '49.65%' : '33.33%'};
	 	}
	`}
`

export const FlexFour = styled.div`
  flex: 5;
`

export const FlexSix = styled.div`
  flex: 6;
  margin: 10px;
  ${({ theme, marginVertical, margin }: WrapperProps) => `
		margin-top: ${theme.layout.spacing[marginVertical] || 'initial'} ;
		margin: ${theme.layout.spacing[margin]} 0;
	`}
`
