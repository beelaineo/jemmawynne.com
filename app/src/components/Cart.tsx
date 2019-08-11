import styled, { css, DefaultTheme } from 'styled-components'

interface CartSidebarProps {
	theme: DefaultTheme
	open: boolean
}

export const CartSidebar = styled.div`
	${(props: CartSidebarProps) => css`
		position: fixed;
		right: ${props.open ? '0px' : '-500px'};
		top: 0;
		max-width: 500px;
		max-height: 100vh;
		min-height: 100vh;
		overflow: scroll;
		background-color: ${props.theme.color.white};
		box-shadow: -5px 0 5px rgba(0, 0, 0, 0.1);
		transition: 350ms ease-in-out;
		width: 500px;
		::-webkit-scrollbar {
			width: 0px;
			background: transparent;
		}
		::-webkit-scrollbar-thumb {
			background: transparent;
		}
		> * {
			padding: ${props.theme.layout.spacing.small};
			margin: 0;
		}
		h3 {
			margin: ${props.theme.layout.spacing.small};
			margin-top: ${props.theme.layout.spacing.small} !important;
		}
		${props.theme.mediaQueries.mobile} {
			max-width: 340px;
		}
	`}
`

export const CloseButton = styled.button`
	color: white;
	position: absolute;
	right: 10px;
	bottom: 0;
	background-color: black;
	padding: 2rem;
	padding: ${(props) => props.theme.layout.spacing.small};
`

export const CartBottom = styled.div`
	border-top: 1px solid black;
	position: absolute;
	bottom: 0px;
	left: 0;
	padding: ${(props) => props.theme.layout.spacing.small};
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	height: 15vh;

	> div,
	> h6 {
		margin: ${(props) => props.theme.layout.spacing.small};
	}
`

export const CartNav = styled.div`
	position: fixed;
	top: 45vh;
	right: 0;
	> button {
		min-width: 30px;
		border-radius: 3px;
		font-size: ${(props) => props.theme.font.size.h3};
	}
`
