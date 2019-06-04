import styled from 'styled-components'

interface CartSidebarProps {
	theme: DefaultTheme
	open: boolean
}

export const CartSidebar = styled.div`
	${(props: CartSidebarProps) => `
        position: absolute;
        right:  ${props.open === 'open' ? '0px' : '-360px'};
        top: 0;
        max-width: 340px;
        max-height: 100vh;
        padding: ${props.theme.layout.spacing.small};
        overflow: scroll;
        background-color: ${props.theme.color.white};
        box-shadow: -5px 0 5px rgba(0, 0, 0, .1);
        transition:  250ms linear;
        ::-webkit-scrollbar {
            width: 0px; 
            background: transparent; 
        }
        ::-webkit-scrollbar-thumb {
            background: transparent;
        }
    `}
`

export const CloseButton = styled.button`
	position: absolute;
	right: 30px;
	padding: ${(props) => props.theme.layout.spacing.small};
`
